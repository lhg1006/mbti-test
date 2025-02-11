"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"

type ResultProps = {
  result: string
  onRestart: () => void
}

const descriptions: { [key: string]: string } = {
  ISTJ: "신중하고 철저한 관리자",
  ISFJ: "헌신적이고 따뜻한 수호자",
  INFJ: "통찰력 있는 이상주의자",
  INTJ: "혁신적인 전략가",
  ISTP: "만능 재주꾼",
  ISFP: "호기심 많은 예술가",
  INFP: "열정적인 중재자",
  INTP: "논리적인 사색가",
  ESTP: "모험을 즐기는 사업가",
  ESFP: "자유로운 영혼의 연예인",
  ENFP: "재기발랄한 활동가",
  ENTP: "논쟁을 즐기는 변론가",
  ESTJ: "엄격한 관리자",
  ESFJ: "사교적인 외교관",
  ENFJ: "정의로운 사회운동가",
  ENTJ: "대담한 통솔자",
}

export default function MBTIResult({ result, onRestart }: ResultProps) {
  React.useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-mobile"
      >
        <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-center text-purple-800">
              당신의 MBTI 결과
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {result}
            </motion.h2>
            <motion.p
              className="text-xl mb-6 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {descriptions[result] || "결과를 분석 중입니다..."}
            </motion.p>
            <Button
              onClick={onRestart}
              className="w-full py-6 text-xl font-semibold text-white shadow-lg
                         bg-gradient-to-r from-purple-500 to-pink-500
                         hover:from-purple-600 hover:to-pink-600
                         transition-all duration-300 ease-in-out
                         transform hover:scale-105"
            >
              다시 테스트하기
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

