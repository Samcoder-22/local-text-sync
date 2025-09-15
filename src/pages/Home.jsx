import React, { useState } from "react";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import DisplayBox from "../components/DisplayBox";
import ControlBar from "../components/ControlBar";

export default function Home() {
  const [syncedText, setSyncedText] = useState("");
  const [history, setHistory] = useState([]); // optional: keep recent sends

  // called by InputBox
  function handleSend(text) {
    // basic validation / trimming
    const trimmed = text.trim();
    if (!trimmed) return;
    setSyncedText(trimmed);
    setHistory((h) => [trimmed, ...h].slice(0, 20)); // keep up to 20 entries
  }

  // simulate fetch (when backend comes, replace with GET)
  function handleFetch() {
    // For now, just re-set the same text (placeholder)
    // when backend is added, call API to fetch latest
    // e.g. fetch('/fetch').then(...)
    // we keep it to make the ControlBar button meaningful
    setSyncedText((s) => s);
  }

  function handleClear() {
    setSyncedText("");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-sm rounded-lg">
        <Header />
        <main className="p-4">
          <InputBox onSend={handleSend} />
          <DisplayBox text={syncedText} />
          <ControlBar
            onFetch={handleFetch}
            onClear={handleClear}
            history={history}
            onPasteFromHistory={(t) => setSyncedText(t)}
          />
        </main>
      </div>
    </div>
  );
}
