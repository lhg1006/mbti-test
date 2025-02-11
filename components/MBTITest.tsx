"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { questionsA, questionsB } from "../data/questions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProgressBar from "@/app/components/ProgressBar"

type Answer = {
  [key: number]: string
}

interface MBTITestProps {
  onComplete: (result: string) => void
  onBack: () => void
  type: "A" | "B"
}

export default function MBTITest({ onComplete, onBack, type }: MBTITestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answer>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const questions = type === "A" ? questionsA : questionsB

  const handleAnswer = (answer: string) => {
    const selectedType = question.options[parseInt(answer)].type
    setAnswers({ ...answers, [currentQuestion]: selectedType })
    setSelectedOption(null)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const result = calculateResult()
      onComplete(result)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(answers[currentQuestion - 1] || null)
    } else {
      onBack()
    }
  }

  const calculateResult = () => {
    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
    Object.values(answers).forEach((answer) => {
      counts[answer as keyof typeof counts]++
    })

    const result =
      (counts.E > counts.I ? "E" : "I") +
      (counts.S > counts.N ? "S" : "N") +
      (counts.T > counts.F ? "T" : "F") +
      (counts.J > counts.P ? "J" : "P")

    return result
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-mobile">
        <ProgressBar progress={progress} />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-bold text-center text-purple-800">
                  질문 {currentQuestion + 1} / {questions.length}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="text-lg md:text-xl mb-6 text-center text-gray-800 font-bold">{question.question}</h2>
                <RadioGroup className="space-y-4" value={selectedOption || ""} onValueChange={setSelectedOption}>
                  {question.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={`${index}`}
                        id={`option-${index}`}
                        className="border-2 border-purple-300 text-purple-600"
                      />
                      <Label
                        htmlFor={`option-${index}`}
                        className={`text-sm md:text-base flex-1 p-3 rounded-lg transition-all duration-300 ease-in-out cursor-pointer
                          ${
                            selectedOption === `${index}`
                              ? "bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800"
                              : "hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100"
                          }`}
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="flex justify-between mt-6 gap-4">
                  <Button onClick={handleBack} className="flex-1 bg-gray-200 text-purple-600 hover:bg-gray-300">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    {currentQuestion === 0 ? "메인으로" : "이전"}
                  </Button>
                  <Button
                    onClick={() => selectedOption && handleAnswer(selectedOption)}
                    disabled={!selectedOption}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    {currentQuestion === questions.length - 1 ? "결과 보기" : "다음"}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

