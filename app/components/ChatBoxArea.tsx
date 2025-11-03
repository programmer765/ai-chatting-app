"use client"

import InputArea from "./InputArea";

export default function ChatBoxArea() {
  return (
    <div className="fixed left-11/20 -translate-x-1/2 w-[700px] ">
      <InputArea />
      <div className="mt-2 text-center text-gray-400 text-sm">
        Press <kbd className="rounded-md border border-gray-700 bg-[#1e1e1e] px-1">Enter</kbd> to send and <kbd className="rounded-md border border-gray-700 bg-[#1e1e1e] px-1">Shift + Enter</kbd> for a new line.
      </div>
    </div>
  );
}
