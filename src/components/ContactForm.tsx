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
        <span className="text-[10px] text-neutral-500">
          Name
        </span>
        <input
          required
          name="name"
          type="text"
          className="mt-1 w-full border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-[12px] text-neutral-800 outline-none transition focus:border-[#d7a61f] focus:bg-white"
        />
      </label>

      <label className="block">
        <span className="text-[10px] text-neutral-500">
          Email
        </span>
        <input
          required
          name="email"
          type="email"
          className="mt-1 w-full border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-[12px] text-neutral-800 outline-none transition focus:border-[#d7a61f] focus:bg-white"
        />
      </label>

      <label className="block">
        <span className="text-[10px] text-neutral-500">
          Phone
        </span>
        <input
          name="phone"
          type="tel"
          className="mt-1 w-full border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-[12px] text-neutral-800 outline-none transition focus:border-[#d7a61f] focus:bg-white"
        />
      </label>

      <label className="block">
        <span className="text-[10px] text-neutral-500">
          Comments
        </span>
        <textarea
          required
          name="comments"
          rows={6}
          className="mt-1 w-full resize-y border border-neutral-300 bg-neutral-100 px-3 py-2 text-[12px] text-neutral-800 outline-none transition focus:border-[#d7a61f] focus:bg-white"
        />
      </label>

      <button
        type="submit"
        className="mt-1 bg-neutral-800 px-4 py-1.5 text-[11px] text-white transition hover:bg-[#d7a61f] focus:outline-none focus:ring-2 focus:ring-[#d7a61f]/30"
      >
        Submit
      </button>
    </form>
  );
}
