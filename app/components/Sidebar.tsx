"use client"

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-25 hover:w-64 h-full bg-[#1e1e1e] flex flex-col justify-between  border-r border-gray-800 transform transition-all duration-300">
      <div className="p-4 flex justify-center">
        <Button className="group bg-[#2a2a2a] hover:bg-[#3a3a3a] hover:scale-105 transform transition-all duration-200 hover:cursor-pointer">
          <Plus className="transition-transform duration-200 transform group-hover:rotate-180" />
        </Button>
      </div>
    </div>
  );
}
