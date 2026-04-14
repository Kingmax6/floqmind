'use client'

import { UIMessage } from 'ai'
import { User } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ChatMessageProps {
  message: UIMessage
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div
      className={cn(
        'flex gap-4 px-4 py-6 md:px-6',
        isUser ? 'bg-transparent' : 'bg-card/50'
      )}
    >
      {isUser ? (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <User className="h-4 w-4" />
        </div>
      ) : (
        <div className="h-8 w-8 min-h-8 min-w-8 shrink-0 rounded-full overflow-hidden border border-accent/30">
          <Image
            src="/floq-cat.jpg"
            alt="FloqMind"
            width={32}
            height={32}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      )}
      <div className="flex-1 space-y-2 overflow-hidden">
        <p className="text-sm font-medium text-muted-foreground">
          {isUser ? 'Voce' : 'FloqMind'}
        </p>
        <div className="prose prose-invert max-w-none text-foreground">
          {message.parts.map((part, index) => {
            if (part.type === 'text') {
              return (
                <p key={index} className="whitespace-pre-wrap leading-relaxed">
                  {part.text}
                </p>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}
