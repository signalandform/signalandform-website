"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          subject: formData.get("subject"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  const inputClass =
    "w-full px-5 py-4 rounded-xl border border-base-midtone bg-base-midtone/50 text-contrast placeholder:text-contrast-midtone/70 focus:outline-none focus:ring-2 focus:ring-accent-2 focus:border-transparent focus:bg-base-midtone/70 transition-all duration-300";

  if (status === "success") {
    return (
      <div className="p-10 rounded-xl border border-accent-3/30 bg-accent-3/10 text-center">
        <h3 className="font-display font-semibold text-xl text-contrast mb-2">
          Thank you for your response.
        </h3>
        <p className="text-contrast-midtone mb-6">
          We&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-accent-2 font-medium hover:text-accent-1 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-contrast mb-2"
          >
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-contrast mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={inputClass}
            placeholder="Project or inquiry subject"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-contrast mb-2"
        >
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClass}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-contrast mb-2"
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${inputClass} resize-y min-h-[160px]`}
          placeholder="Tell us about your project..."
        />
      </div>

      <p className="text-sm text-contrast-midtone">
        By submitting your information, you&apos;re giving us permission to email you.
        You may unsubscribe at any time.
      </p>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 px-6 bg-accent-1 text-base font-medium rounded-xl hover:bg-accent-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
