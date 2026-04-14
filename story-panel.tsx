'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Crown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface StoryPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function StoryPanel({ isOpen, onClose }: StoryPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Painel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-x-4 top-[10%] bottom-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-lg z-50 flex flex-col"
          >
            <div className="bg-card border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full">
              {/* Header */}
              <div className="relative bg-secondary/50 px-6 py-5 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">Sobre FloqMind</h2>
                      <p className="text-sm text-muted-foreground">Nossa historia</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="rounded-full hover:bg-secondary"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Conteudo */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Introducao */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-3 border-accent/30 shadow-lg">
                    <Image
                      src="/floq-cat.jpg"
                      alt="Floquinho"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Bem-vindo ao <span className="text-accent font-semibold">FloqMind</span>! 
                    Este site foi criado com muito carinho em homenagem ao Floquinho, 
                    um lindo gato siames branco com orelhas e rabo pretos.
                  </p>
                </div>

                {/* Divisor */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-border" />
                  <Heart className="w-4 h-4 text-accent" />
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Equipe */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground text-center">Nossa Equipe</h3>
                  
                  {/* PHSmall - Dono */}
                  <div className="bg-secondary/50 rounded-2xl p-4 border border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Crown className="w-7 h-7 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-foreground text-lg">PHSmall</h4>
                          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">Dono</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Criador e desenvolvedor do FloqMind. A mente por tras de tudo!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rosinha - Administracao */}
                  <div className="bg-secondary/50 rounded-2xl p-4 border border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                        <Heart className="w-7 h-7 text-pink-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-foreground text-lg">Rosinha</h4>
                          <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded-full">Administracao</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ajudou na criacao do site com muito carinho e dedicacao!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mensagem final */}
                <div className="bg-accent/10 rounded-2xl p-4 border border-accent/20 text-center">
                  <p className="text-sm text-foreground">
                    Obrigado por usar o <span className="font-semibold text-accent">FloqMind</span>! 
                    Feito com muito amor pela nossa equipe.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
