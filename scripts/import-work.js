#!/usr/bin/env node
/**
 * Import client work from a zip file into the Work page.
 * Zip should have a Clients/ folder with project subfolders (e.g. Clients/Baja Quesadilla/).
 * Copies JPG, PNG, WEBP, GIF images to public/brand/work/projects/{project}/
 * Writes lib/workData.json for the Work page.
 *
 * Usage: node scripts/import-work.js <path-to-zip>
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const IMAGE_EXT = /\.(jpg|jpeg|png|webp|gif)$/i;
const SKIP_PATTERNS = [
  /^__MACOSX/,
  /\/\._/,
  /\.DS_Store$/,
];

function shouldSkip(filePath) {
  return SKIP_PATTERNS.some((p) => p.test(filePath));
}

function sanitizeProjectName(name) {
  return name.replace(/[^a-zA-Z0-9-_]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "project";
}

function getExt(f) {
  return path.extname(f).toLowerCase();
}

function extractZip(zipPath, outDir) {
  if (!fs.existsSync(zipPath)) {
    throw new Error(`Zip not found: ${zipPath}`);
  }
  fs.mkdirSync(outDir, { recursive: true });
  execSync(`unzip -o "${zipPath}" -d "${outDir}"`, { stdio: "inherit" });
}

function collectProjectImages(clientsDir) {
  const projects = {};
  const clientsPath = path.join(clientsDir, "Clients");
  if (!fs.existsSync(clientsPath)) {
    throw new Error("Zip must contain a Clients/ folder at root");
  }

  function walk(dir, projectName) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      const rel = path.relative(clientsPath, full);
      if (shouldSkip(rel)) continue;
      if (e.isDirectory()) {
        walk(full, projectName);
      } else if (e.isFile() && IMAGE_EXT.test(e.name)) {
        if (!projects[projectName]) projects[projectName] = [];
        projects[projectName].push({ name: e.name, fullPath: full });
      }
    }
  }

  const topDirs = fs.readdirSync(clientsPath, { withFileTypes: true });
  for (const d of topDirs) {
    if (!d.isDirectory() || shouldSkip(d.name)) continue;
    const dirPath = path.join(clientsPath, d.name);
    walk(dirPath, d.name);
  }

  return projects;
}

function main() {
  const zipPath = process.argv[2];
  if (!zipPath) {
    console.error("Usage: node scripts/import-work.js <path-to-zip>");
    process.exit(1);
  }

  const projectRoot = path.resolve(__dirname, "..");
  const workDir = path.join(projectRoot, "public", "brand", "work");
  const projectsDir = path.join(workDir, "projects");
  const tempDir = path.join(projectRoot, ".import-work-temp");
  const workDataPath = path.join(projectRoot, "lib", "workData.json");

  console.log("Extracting zip...");
  extractZip(path.resolve(zipPath), tempDir);

  console.log("Collecting project images...");
  const rawProjects = collectProjectImages(tempDir);

  // Keep existing ads from current workData or default
  let ads = [
    "IMG_0293.PNG",
    "IMG_0294.PNG",
    "IMG_0295.PNG",
    "IMG_0296.PNG",
    "IMG_0297.PNG",
    "IMG_0298.PNG",
    "IMG_0300.PNG",
    "IMG_0301.PNG",
    "IMG_0303.PNG",
    "ad 02 Artboard 2.png",
  ];
  if (fs.existsSync(workDataPath)) {
    try {
      const existing = JSON.parse(fs.readFileSync(workDataPath, "utf8"));
      if (Array.isArray(existing.ads) && existing.ads.length > 0) {
        ads = existing.ads;
      }
    } catch (_) {}
  }

  const projects = [];
  fs.mkdirSync(projectsDir, { recursive: true });

  for (const [projectName, files] of Object.entries(rawProjects)) {
    if (files.length === 0) continue;
    const slug = sanitizeProjectName(projectName);
    const destDir = path.join(projectsDir, slug);
    fs.mkdirSync(destDir, { recursive: true });

    const imageNames = [];
    for (const f of files) {
      const destPath = path.join(destDir, path.basename(f.name));
      fs.copyFileSync(f.fullPath, destPath);
      imageNames.push(path.basename(f.name));
    }

    projects.push({
      name: projectName,
      slug,
      images: imageNames,
    });
    console.log(`  ${projectName}: ${imageNames.length} images`);
  }

  const workData = {
    ads,
    projects: projects.sort((a, b) => a.name.localeCompare(b.name)),
  };

  fs.writeFileSync(workDataPath, JSON.stringify(workData, null, 2), "utf8");
  console.log(`Wrote ${workDataPath}`);

  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log("Done.");
}

main();
