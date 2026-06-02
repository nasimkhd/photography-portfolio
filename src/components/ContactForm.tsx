"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Subject: ${formData.get("subject")}`,
      "",
      "Message:",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:hello@anthonysaleh.ca?subject=${encodeURIComponent(
      "Project Inquiry",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5 text-left">
      <label className="block">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
          Name
        </span>
        <input
          required
          name="name"
          type="text"
          className="mt-2 w-full rounded-2xl border border-stone-900/10 bg-stone-50 px-4 py-3 text-stone-950 outline-none transition focus:border-clay"
        />
      </label>

      <label className="block">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
          Email Address
        </span>
        <input
          required
          name="email"
          type="email"
          className="mt-2 w-full rounded-2xl border border-stone-900/10 bg-stone-50 px-4 py-3 text-stone-950 outline-none transition focus:border-clay"
        />
      </label>

      <label className="block">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
          Subject
        </span>
        <input
          required
          name="subject"
          type="text"
          className="mt-2 w-full rounded-2xl border border-stone-900/10 bg-stone-50 px-4 py-3 text-stone-950 outline-none transition focus:border-clay"
        />
      </label>

      <label className="block">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
          Message
        </span>
        <textarea
          required
          name="message"
          rows={7}
          className="mt-2 w-full resize-y rounded-2xl border border-stone-900/10 bg-stone-50 px-4 py-3 text-stone-950 outline-none transition focus:border-clay"
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-stone-950 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-stone-50 transition hover:bg-clay"
      >
        Send Inquiry
      </button>
    </form>
  );
}
