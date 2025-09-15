import React, { useState } from "react";

export default function InputBox({ onSend }) {
  const [value, setValue] = useState("");

  function handleSend() {
    const trimmed = value.trim();
    if (!trimmed) return; // avoid sending empty
    onSend(trimmed);
    setValue("");
  }

  function handleKeyDown(e) {
    // Ctrl/Cmd + Enter to send quickly
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <section className="mb-4">
      <label htmlFor="text-input" className="sr-only">Text to sync</label>
      <textarea
        id="text-input"
        rows={4}
        className="w-full p-3 border rounded resize-y focus:outline-none focus:ring-2 focus:ring-sky-300"
        placeholder="Type text here (Ctrl/Cmd+Enter to send)..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="flex gap-2 mt-2">
        <button
          onClick={handleSend}
          disabled={!value.trim()}
          className="px-4 py-2 rounded bg-sky-600 text-white disabled:opacity-50"
          aria-disabled={!value.trim()}
        >
          Send
        </button>
        <button
          onClick={() => setValue("")}
          className="px-4 py-2 rounded border text-sm"
        >
          Clear
        </button>
      </div>
    </section>
  );
}
