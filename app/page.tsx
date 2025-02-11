"use client"

import { useState } from "react"
import WelcomePage from "../components/WelcomePage"
import TypeSelectionPage from "../components/TypeSelectionPage"
import MBTITest from "../components/MBTITest"
import MBTIResult from "../components/MBTIResult"

export default function Home() {
  const [stage, setStage] = useState<"welcome" | "typeSelection" | "test" | "result">("welcome")
  const [result, setResult] = useState<string | null>(null)
  const [testType, setTestType] = useState<"A" | "B" | null>(null)

  const handleStart = () => {
    setStage("typeSelection")
  }

  const handleSelectType = (type: "A" | "B") => {
    setTestType(type)
    setStage("test")
  }

  const handleComplete = (mbtiResult: string) => {
    setResult(mbtiResult)
    setStage("result")
  }

  const handleRestart = () => {
    setStage("welcome")
    setResult(null)
    setTestType(null)
  }

  const handleBack = () => {
    if (stage === "typeSelection") {
      setStage("welcome")
    } else if (stage === "test") {
      setStage("typeSelection")
      setTestType(null)
    }
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {stage === "welcome" && <WelcomePage onStart={handleStart} />}
      {stage === "typeSelection" && <TypeSelectionPage onSelectType={handleSelectType} onBack={handleBack} />}
      {stage === "test" && testType && <MBTITest onComplete={handleComplete} onBack={handleBack} type={testType} />}
      {stage === "result" && result && <MBTIResult result={result} onRestart={handleRestart} />}
    </main>
  )
}

