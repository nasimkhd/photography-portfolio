"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      "",
      "Comments:",
      formData.get("comments"),
    ].join("\n");

    window.location.href = `mailto:hello@anthonysaleh.ca?subject=${encodeURIComponent(
      "Website Inquiry",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-3 text-left">
      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.28em] text-neutral-500">
          Name
        </span>
        <input
          required
          name="name"
          type="text"
          className="mt-2 w-full border border-neutral-950/15 bg-stone-50 px-3 py-2 text-sm text-neutral-950 outline-none transition focus:border-neutral-950 focus:bg-white"
        />
      </label>

      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.28em] text-neutral-500">
          Email
        </span>
        <input
          required
          name="email"
          type="email"
          className="mt-2 w-full border border-neutral-950/15 bg-stone-50 px-3 py-2 text-sm text-neutral-950 outline-none transition focus:border-neutral-950 focus:bg-white"
        />
      </label>

      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.28em] text-neutral-500">
          Phone
        </span>
        <input
          name="phone"
          type="tel"
          className="mt-2 w-full border border-neutral-950/15 bg-stone-50 px-3 py-2 text-sm text-neutral-950 outline-none transition focus:border-neutral-950 focus:bg-white"
        />
      </label>

      <label className="block">
        <span className="text-[0.65rem] uppercase tracking-[0.28em] text-neutral-500">
          Comments
        </span>
        <textarea
          required
          name="comments"
          rows={6}
          className="mt-2 w-full resize-y border border-neutral-950/15 bg-stone-50 px-3 py-2 text-sm text-neutral-950 outline-none transition focus:border-neutral-950 focus:bg-white"
        />
      </label>

      <button
        type="submit"
        className="mt-2 border border-neutral-950 bg-neutral-950 px-5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white transition hover:bg-white hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950/20"
      >
        Submit
      </button>
    </form>
  );
}
