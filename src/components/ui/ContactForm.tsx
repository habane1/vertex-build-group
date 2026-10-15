"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <p className="text-lg font-semibold text-gray-900">Thank you for your message!</p>
        <p className="mt-2 text-text-body">We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-form-text mb-1">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full bg-transparent border-b border-form-border py-2 text-form-text focus:border-navy focus:outline-none transition-colors duration-200"
        />
      </div>
      <div>
        <label className="block text-sm text-form-text mb-1">
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full bg-transparent border-b border-form-border py-2 text-form-text focus:border-navy focus:outline-none transition-colors duration-200"
        />
      </div>
      <div>
        <label className="block text-sm text-form-text mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          className="w-full bg-transparent border-b border-form-border py-2 text-form-text focus:border-navy focus:outline-none transition-colors duration-200"
        />
      </div>
      <div>
        <label className="block text-sm text-form-text mb-1">Subject</label>
        <input
          type="text"
          className="w-full bg-transparent border-b border-form-border py-2 text-form-text focus:border-navy focus:outline-none transition-colors duration-200"
        />
      </div>
      <div>
        <label className="block text-sm text-form-text mb-1">Message</label>
        <textarea
          rows={4}
          className="w-full bg-gray-100 border-b border-form-border py-2 px-2 text-form-text focus:border-navy focus:outline-none resize-none transition-colors duration-200"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-submit-bg text-submit-text font-semibold uppercase tracking-wider hover:bg-navy transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  );
}
