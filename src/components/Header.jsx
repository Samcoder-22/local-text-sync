import React from "react";

export default function Header() {
  return (
    <header className="px-6 py-4 border-b">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Text Local Sync</h1>
          <p className="text-sm text-gray-500">Simple local text sync — minimal UI, maximum function.</p>
        </div>
        <div className="text-xs text-gray-400">Local MVP</div>
      </div>
    </header>
  );
}
