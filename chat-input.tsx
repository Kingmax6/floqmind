'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowUp, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ChatInputProps {
  onSend: (message: string) => void
  isLoading: boolean
  onBookClick?: () => void
}

export function ChatInput({ onSend, isLoading, onBookClick }: ChatInputProps) {
  const [input, setInput] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }, [input])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    onSend(input)
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex items-end gap-3">
        {/* Botao do Livro de Historias */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={onBookClick}
          className="h-14 w-14 shrink-0 rounded-2xl border-border bg-card hover:bg-secondary hover:border-accent transition-all group"
          title="Historias"
        >
          <BookOpen className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
          <span className="sr-only">Abrir historias</span>
        </Button>

        {/* Campo de entrada */}
        <div className="relative flex flex-1 items-end rounded-2xl border border-border bg-card shadow-lg">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Pergunte qualquer coisa..."
            disabled={isLoading}
            rows={1}
            className={cn(
              'flex-1 resize-none bg-transparent px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none',
              'min-h-[56px] max-h-[200px]'
            )}
          />
          <div className="p-2">
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="h-10 w-10 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Enviar mensagem</span>
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
