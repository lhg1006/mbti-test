"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface TypeSelectionPageProps {
  onSelectType: (type: "A" | "B") => void
  onBack: () => void
}

export default function TypeSelectionPage({ onSelectType, onBack }: TypeSelectionPageProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-mobile">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-white shadow-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          테스트 유형 선택
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-center text-white shadow-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          원하는 테스트 유형을 선택해주세요!
        </motion.p>

        <div className="space-y-4">
          <Button
            onClick={() => onSelectType("A")}
            size="lg"
            className="w-full text-xl py-6 text-white shadow-md
                       bg-gradient-to-r from-purple-500 to-pink-500
                       hover:from-purple-600 hover:to-pink-600
                       transition-all duration-300 ease-in-out
                       transform hover:scale-105"
          >
            타입 A 테스트
          </Button>
          <Button
            onClick={() => onSelectType("B")}
            size="lg"
            className="w-full text-xl py-6 text-white shadow-md
                       bg-gradient-to-r from-blue-500 to-green-500
                       hover:from-blue-600 hover:to-green-600
                       transition-all duration-300 ease-in-out
                       transform hover:scale-105"
          >
            타입 B 테스트
          </Button>
          <Button
            onClick={onBack}
            size="lg"
            className="w-full text-xl py-6 text-white shadow-md
                       bg-gradient-to-r from-gray-400 to-gray-500
                       hover:from-gray-500 hover:to-gray-600
                       transition-all duration-300 ease-in-out
                       transform hover:scale-105"
          >
            메인으로
          </Button>
        </div>
      </div>
    </div>
  )
}

