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
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 bg-accent-2/20 rounded-lg text-center">
        <h3 className="text-xl font-medium text-contrast mb-2">Thank you for your response.</h3>
        <p className="text-contrast-midtone">We&apos;ll get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-accent-2 hover:underline"
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
          <label htmlFor="name" className="block text-sm font-medium text-contrast mb-2">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-base-midtone bg-base text-contrast focus:ring-2 focus:ring-accent-2 focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-contrast mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 rounded-lg border border-base-midtone bg-base text-contrast focus:ring-2 focus:ring-accent-2 focus:border-transparent"
            placeholder="Project or inquiry subject"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-contrast mb-2">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-base-midtone bg-base text-contrast focus:ring-2 focus:ring-accent-2 focus:border-transparent"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-contrast mb-2">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-base-midtone bg-base text-contrast focus:ring-2 focus:ring-accent-2 focus:border-transparent resize-y"
          placeholder="Tell us about your project..."
        />
      </div>

      <p className="text-sm text-contrast-midtone">
        By submitting your information, you&apos;re giving us permission to email you. You may
        unsubscribe at any time.
      </p>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 px-6 bg-accent-1 text-base rounded-lg font-medium hover:bg-accent-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
