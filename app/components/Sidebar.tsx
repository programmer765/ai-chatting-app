"use client"

import { Button } from "@/components/ui/button";
import { Plus, UserRound } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-25 hover:w-64 h-full bg-[#1e1e1e] flex flex-col justify-between border-r border-gray-800 transform transition-all duration-300">
      <div className="p-4 flex justify-center">
        <Button className="group bg-[#2a2a2a] hover:bg-[#3a3a3a] hover:scale-105 transform transition-all duration-200 hover:cursor-pointer">
          <Plus className="transition-transform duration-200 transform group-hover:rotate-180" />
        </Button>
      </div>
      <div className="p-4 text-center truncate text-sm text-gray-500">
        Previous chats
      </div>
      <div className="flex flex-col items-center">
        <div className="justify-center">
          <Button className="group bg-[#2a2a2a] hover:bg-[#3a3a3a] hover:scale-105 transform transition-all duration-200 rounded-full hover:cursor-pointer flex flex-col justify-center items-center py-6 px-7!">
            <UserRound className="mb-1" />
          </Button>
        </div>
        <div className="p-4 text-center text-sm text-gray-500">
          Chat with AI
        </div>
      </div>
    </div>
  );
}
