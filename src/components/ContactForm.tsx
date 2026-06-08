"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          comments: formData.get("comments"),
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "The message could not be sent.");
      }

      form.reset();
      setStatus("success");
      setMessage(result.message || "Thanks, your message has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "The message could not be sent. Please try again.",
      );
    }
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
        disabled={status === "sending"}
        className="mt-2 border border-neutral-950 bg-neutral-950 px-5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white transition hover:bg-white hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-950/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-neutral-950 disabled:hover:text-white"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>

      {message ? (
        <p
          aria-live="polite"
          className={`text-sm leading-6 ${
            status === "success" ? "text-green-700" : "text-red-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
