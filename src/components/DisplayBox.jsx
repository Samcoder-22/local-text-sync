import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { useState } from "react";

export default function DisplayBox({ text = "" }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      // fallback: select + execCommand (old browsers)
      console.error("Copy failed", err);
      alert("Copy failed: " + (err?.message || "unknown"));
    }
  }

  return (
    <section className="mb-4">
      <div className="p-4 border rounded bg-white">
        <div className="flex items-start justify-between">
          <h2 className="text-sm font-medium text-gray-700">Latest Synced Text</h2>
          <div className="text-xs text-gray-400">{text ? "Received" : "Empty"}</div>
        </div>

        <div className="mt-3">
          {text ? (
            <pre className="whitespace-pre-wrap text-sm leading-relaxed">{text}</pre>
          ) : (
            <div className="text-sm text-gray-500">No text synced yet. Type something and press Send.</div>
          )}
        </div>

        <div className="mt-3 flex gap-2">
          <button
            onClick={handleCopy}
            disabled={!text}
            className="inline-flex items-center gap-2 px-3 py-1.5 border rounded text-sm disabled:opacity-50"
            aria-disabled={!text}
          >
            {copied ? (
              <>
                <ClipboardCheck className="w-4 h-4 text-green-600" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Clipboard className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
