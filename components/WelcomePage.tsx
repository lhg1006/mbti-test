"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
}

export default function WelcomePage({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-mobile">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-white shadow-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          알록달록 MBTI 테스트
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-center text-white shadow-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          재미있는 질문으로 알아보는 나의 성격 유형!
        </motion.p>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {["🤔", "🎨", "🧠", "❤️", "🌟", "🔍", "🗣️", "🤝"].map((emoji, index) => (
            <motion.div
              key={index}
              className="text-4xl md:text-5xl text-center"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        <Button
          onClick={onStart}
          size="lg"
          className="w-full text-xl py-6 text-white shadow-md
                     bg-gradient-to-r from-purple-500 to-pink-500
                     hover:from-purple-600 hover:to-pink-600
                     transition-all duration-300 ease-in-out
                     transform hover:scale-105"
        >
          테스트 시작하기
        </Button>
      </div>
    </div>
  )
}

