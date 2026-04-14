"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Imagem do Floquinho */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-accent/30 shadow-lg shadow-accent/20">
            <Image
              src="/floq-cat.jpg"
              alt="Floquinho - O gato siames"
              width={96}
              height={96}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* Brilho animado */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent/50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Logo com rabo de gato */}
        <div className="flex items-center gap-1">
          <motion.span
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Floquinho
          </motion.span>
          <motion.span
            className="text-4xl md:text-5xl font-bold text-accent tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Mind
          </motion.span>
          
          {/* Rabo de gato animado */}
          <motion.div
            className="relative ml-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <svg
              width="40"
              height="50"
              viewBox="0 0 40 50"
              className="overflow-visible"
            >
              <motion.path
                d="M5 45 Q 10 30, 8 20 Q 6 10, 15 5 Q 20 2, 25 5"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                className="text-foreground"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1,
                }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.path
                d="M5 45 Q 10 30, 8 20 Q 6 10, 15 5 Q 20 2, 25 5"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                className="text-foreground"
                animate={{ 
                  d: [
                    "M5 45 Q 10 30, 8 20 Q 6 10, 15 5 Q 20 2, 25 5",
                    "M5 45 Q 15 32, 12 22 Q 10 12, 20 8 Q 28 5, 32 10",
                    "M5 45 Q 8 28, 6 18 Q 4 8, 12 3 Q 16 0, 20 2",
                    "M5 45 Q 10 30, 8 20 Q 6 10, 15 5 Q 20 2, 25 5",
                  ]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.2
                }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Subtítulo */}
        <motion.p
          className="text-muted-foreground text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Preparando sua experiência...
        </motion.p>

        {/* Indicador de carregamento */}
        <motion.div
          className="flex gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-accent"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
