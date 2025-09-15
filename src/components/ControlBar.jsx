import React from "react";

export default function ControlBar({ onFetch, onClear, history = [], onPasteFromHistory }) {
  return (
    <section className="mt-2">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button onClick={onFetch} className="px-3 py-1.5 border rounded text-sm">Fetch</button>
          <button onClick={onClear} className="px-3 py-1.5 border rounded text-sm">Clear</button>
        </div>
        <div className="text-xs text-gray-400">Local only · no cloud</div>
      </div>

      {history && history.length > 0 && (
        <div className="mt-3">
          <div className="text-xs text-gray-500 mb-1">Recent</div>
          <div className="flex gap-2 flex-wrap">
            {history.slice(0, 6).map((h, idx) => (
              <button
                key={idx}
                onClick={() => onPasteFromHistory(h)}
                title="Paste this into display"
                className="px-2 py-1 border rounded text-xs truncate max-w-[10rem] block"
              >
                {h.length > 30 ? h.slice(0, 30) + "…" : h}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
