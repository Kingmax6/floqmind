'use client'

import { Sparkles, Code, BookOpen, Lightbulb } from 'lucide-react'

const suggestions = [
  {
    icon: Code,
    title: 'Me ajude a programar',
    description: 'Resolver bugs, explicar conceitos ou escrever codigo',
  },
  {
    icon: BookOpen,
    title: 'Explique um conceito',
    description: 'Aprenda sobre qualquer assunto de forma simples',
  },
  {
    icon: Lightbulb,
    title: 'Gere ideias',
    description: 'Brainstorm criativo para seus projetos',
  },
]

interface EmptyStateProps {
  onSuggestionClick: (suggestion: string) => void
}

export function EmptyState({ onSuggestionClick }: EmptyStateProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 mb-6">
        <Sparkles className="h-8 w-8 text-accent" />
      </div>
      <h1 className="text-balance text-center text-3xl font-semibold tracking-tight text-foreground mb-2">
        Ola! Eu sou o <span className="text-accent">FloqMind</span>.
      </h1>
      <p className="text-pretty text-center text-muted-foreground mb-8 max-w-md">
        Seu assistente de inteligencia artificial felino. Pergunte qualquer coisa e eu farei o meu melhor para ajudar!
      </p>
      <div className="grid w-full max-w-2xl gap-3 sm:grid-cols-3">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.title}
            onClick={() => onSuggestionClick(suggestion.title)}
            className="group flex flex-col items-start gap-2 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-accent/50 hover:bg-card/80"
          >
            <suggestion.icon className="h-5 w-5 text-accent" />
            <div>
              <p className="font-medium text-foreground text-sm">{suggestion.title}</p>
              <p className="text-xs text-muted-foreground">{suggestion.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
