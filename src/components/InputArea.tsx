"use client"


import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ArrowUp, Mic } from "lucide-react";
import { useRef, useState } from "react";

export default function InputArea() {
  const [prompt, setPrompt] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const placeholder = "Ask me anything...";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" && !e.shiftKey && prompt.trim()) {
      e.preventDefault();
      // Handle submit action here
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className={cn(
          "relative rounded-xl border bg-[#292929] shadow-sm transition-all duration-200 border-[#444444]",
          isFocused && "border-ring shadow-md ring-2 ring-gray-900"
        )}>
          <Textarea
            ref={textAreaRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={prompt}
            onChange={(e : React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
            spellCheck={false}
            className="resize-none border-0 bg-transparent p-4 focus-visible:ring-0 pr-24 min-h-[120px] max-h-[200px] overflow-y-auto text-gray-300 placeholder:text-gray-300 custom-scroll"
            placeholder={placeholder}
          />
        {/* Submit and voice input button */}
        <div className="absolute bottom-2 right-2 flex space-x-2">
          <Button type="button" variant="ghost" size="icon" className="text-muted-foreground hover:text-gray-300 hover:bg-[#1e1e1e] cursor-pointer">
            <Mic size={24} />
          </Button>
          <Button 
            type="button" 
            size="icon" 
            disabled={!prompt.trim()}
            onKeyDown={handleKeyDown}
            className={cn("rounded-lg bg-[#1b1b1b] transition-all duration-200", prompt.trim() ? "hover:bg-[#1e1e1e] cursor-pointer text-gray-200" : "opacity-50 cursor-not-allowed text-gray-500")}
            >
            <ArrowUp />
          </Button>
        </div>
      </div>
    </div>
  );
}