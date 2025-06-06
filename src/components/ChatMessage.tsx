
import React from 'react';
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex w-full gap-3 px-4 py-3",
      isBot ? "justify-start" : "justify-end"
    )}>
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary-foreground" />
        </div>
      )}
      
      <div className={cn(
        "max-w-[70%] rounded-2xl px-4 py-2 shadow-sm",
        isBot 
          ? "bg-muted text-foreground rounded-tl-sm" 
          : "bg-primary text-primary-foreground rounded-tr-sm ml-auto"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
        <p className={cn(
          "text-xs mt-1 opacity-70",
          isBot ? "text-muted-foreground" : "text-primary-foreground/70"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      
      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <User className="w-4 h-4 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
