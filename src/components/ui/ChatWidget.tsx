"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/constants";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSend() {
    const text = inputValue.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputValue("");

    // Auto-reply after short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks for reaching out! Leave your name and email below and one of our team will get back to you shortly.",
        },
      ]);
      setShowLeadForm(true);
    }, 800);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormSubmitted(true);
    setShowLeadForm(false);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks! We'll be in touch soon." },
      ]);
    }, 500);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-[420px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-navy px-4 py-4 flex items-center justify-between shrink-0">
            <div>
              <h3 className="text-white font-heading text-sm font-bold uppercase tracking-wide">
                {COMPANY.name}
              </h3>
              <p className="text-gray-300 text-xs flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                We&apos;ll reply as soon as we can
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Minimize Chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 bg-yellow overflow-y-auto p-4 flex flex-col gap-3">
            {messages.length === 0 && (
              <p className="text-navy/40 text-sm text-center mt-8">
                Send a message to get started
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${
                  msg.sender === "user"
                    ? "bg-navy text-white self-end"
                    : "bg-white text-gray-900 self-start shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Lead capture form */}
            {showLeadForm && !formSubmitted && (
              <form
                onSubmit={handleFormSubmit}
                className="bg-white rounded-lg p-3 shadow-sm self-start space-y-2 w-full max-w-[85%]"
              >
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-700 focus:border-navy focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-700 focus:border-navy focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-navy text-white text-sm font-semibold py-1.5 rounded hover:bg-navy-light transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* Input area */}
          <div className="border-t border-gray-200 px-3 py-3 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
            {/* Emoji button */}
            <button type="button" aria-label="Emojis" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </button>
            {/* Attach file button */}
            <button type="button" aria-label="Attach a file" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-yellow rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-hover transition-colors duration-200"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1B2A4A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
    </div>
  );
}
