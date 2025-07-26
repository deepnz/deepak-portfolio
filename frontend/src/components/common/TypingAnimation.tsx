import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  texts: string[]
  speed?: number
  delay?: number
  className?: string
}

const TypingAnimation = ({ texts, speed = 150, delay = 2000, className = '' }: TypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1))
        
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), delay)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, speed, delay])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={className}>
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  )
}

export default TypingAnimation