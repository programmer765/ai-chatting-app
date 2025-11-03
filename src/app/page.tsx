"use client";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex bg-[#171717] text-white">
      <Sidebar />
      <Main />
    </div>
  );
}
