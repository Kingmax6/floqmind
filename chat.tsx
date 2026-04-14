'use client'

import { useRef, useEffect, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { ChatMessage } from '@/components/chat-message'
import { ChatInput } from '@/components/chat-input'
import { EmptyState } from '@/components/empty-state'
import { StoryPanel } from '@/components/story-panel'
import { Sparkles } from 'lucide-react'

export function Chat() {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isStoryPanelOpen, setIsStoryPanelOpen] = useState(false)
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (message: string) => {
    sendMessage({ text: message })
  }

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage({ text: suggestion })
  }

  const handleBookClick = () => {
    setIsStoryPanelOpen(true)
  }

  return (
    <>
      <StoryPanel isOpen={isStoryPanelOpen} onClose={() => setIsStoryPanelOpen(false)} />
      <div className="flex h-screen flex-col bg-background">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-border px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/20">
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">FloqMind</h1>
              <p className="text-xs text-muted-foreground">Assistente Felino de IA</p>
            </div>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <EmptyState onSuggestionClick={handleSuggestionClick} />
          ) : (
            <div className="mx-auto max-w-3xl">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex gap-4 px-4 py-6 md:px-6 bg-card/50">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Sparkles className="h-4 w-4 animate-pulse" />
                  </div>
                  <div className="flex items-center">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-border bg-background px-4 py-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <ChatInput onSend={handleSend} isLoading={isLoading} onBookClick={handleBookClick} />
            <p className="mt-2 text-center text-xs text-muted-foreground">
              FloqMind pode cometer erros. Verifique informacoes importantes.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
