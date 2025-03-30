"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Download, Send } from "lucide-react"

export default function AIGameMockup() {
  const [userPrompt, setUserPrompt] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "sparky",
      content:
        "Hey there! 👋 Welcome to your AI adventure! I'm Sparky, your AI Guide. Today we're going to learn how to create images using AI!",
      type: "text",
    },
    {
      sender: "sparky",
      content:
        'Let\'s start by creating our hero character! Try using this prompt: "chibi hero with green tunic, smiling"',
      type: "text",
    },
  ])
  const [isGenerating, setIsGenerating] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!userPrompt.trim()) return

    // Add user message to chat
    setChatHistory([
      ...chatHistory,
      {
        sender: "user",
        content: userPrompt,
        type: "text",
      },
    ])

    // Show generating message
    setIsGenerating(true)

    // Simulate AI generation delay
    setTimeout(() => {
      setIsGenerating(false)
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "sparky",
          content: "Generating...",
          type: "text",
        },
        {
          sender: "sparky",
          content: {
            text: "Ta-da! 🎉 You did it! Meet our hero! Isn't this awesome? You've just created your first AI-generated character! Awesome job!",
            imageUrl: "/placeholder.svg?height=200&width=200",
          },
          type: "image",
        },
      ])
      setShowResult(true)
      setUserPrompt("")
    }, 1500)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-slate-50">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold text-primary">Level 1: Create Your Hero</h1>
        </div>

        <Card className="w-full overflow-hidden">
          {/* Chat Header */}
          <div className="bg-primary p-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center overflow-hidden">
              <img src="/sparky-avatar.png" alt="Sparky" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-medium text-primary-foreground">Sparky - Your AI Guide</h2>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-[400px] overflow-y-auto flex flex-col gap-3 bg-background">
            {chatHistory.map((message, index) => (
              <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {message.sender === "sparky" && message.type === "text" && (
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary-foreground flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden">
                        <img src="/sparky-avatar.png" alt="Sparky" className="w-full h-full object-cover" />
                      </div>
                      <div>{message.content}</div>
                    </div>
                  )}

                  {message.sender === "user" && message.type === "text" && <div>{message.content}</div>}

                  {message.sender === "sparky" && message.type === "image" && (
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary-foreground flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden">
                        <img src="/sparky-avatar.png" alt="Sparky" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="mb-2">{message.content.text}</p>
                        <div className="relative">
                          <img
                            src={message.content.imageUrl || "/placeholder.svg"}
                            alt="AI Generated Hero"
                            className="rounded-md w-full max-w-[200px] mb-2"
                          />
                          <Button size="sm" className="flex items-center gap-1" variant="secondary">
                            <Download className="w-4 h-4" />
                            Save for later
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isGenerating && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary-foreground flex items-center justify-center overflow-hidden">
                      <img src="/sparky-avatar.png" alt="Sparky" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex gap-1">
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce delay-100">.</span>
                      <span className="animate-bounce delay-200">.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t">
            <p className="text-xs text-muted-foreground mb-2">Tip: Use the suggestion, or type your own idea!</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Type your prompt here..."
                className="flex-1"
              />
              <Button type="submit">
                <Send className="w-4 h-4 mr-1" />
                Generate
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </main>
  )
}

