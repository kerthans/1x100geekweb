// components/AdvancedCursor.tsx
'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdvancedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorText, setCursorText] = useState('')

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }, [])

  const handleMouseDown = useCallback(() => {
    setIsClicking(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsClicking(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHidden(false)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHidden(true)
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // 检测可交互元素
    const handleElementDetection = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer'

      setIsPointer(isInteractive)
      
      // 设置自定义提示文本
      if (isInteractive) {
        const text = target.getAttribute('data-cursor-text') || ''
        setCursorText(text)
      } else {
        setCursorText('')
      }
    }

    document.addEventListener('mouseover', handleElementDetection)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleElementDetection)
    }
  }, [])

  return (
    <AnimatePresence>
      {!isHidden && (
        <>
          {/* 主光标 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isClicking ? 0.9 : 1,
              opacity: 1,
              x: position.x,
              y: position.y,
            }}
            exit={{ scale: 0, opacity: 0 }}
            className="pointer-events-none fixed top-0 left-0 z-50"
            style={{
              translateX: '-50%',
              translateY: '-50%',
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 28,
            }}
          >
            <div className={`
              relative
              rounded-full
              mix-blend-difference
              ${isPointer ? 'w-12 h-12' : 'w-6 h-6'}
              transition-all duration-200
              bg-white
              flex items-center justify-center
              ${isClicking ? 'scale-90' : 'scale-100'}
            `}>
              {cursorText && (
                <span className="text-black text-xs whitespace-nowrap">
                  {cursorText}
                </span>
              )}
            </div>
          </motion.div>

          {/* 跟随效果 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: isPointer ? 0.2 : 0.1,
              x: position.x,
              y: position.y,
            }}
            exit={{ scale: 0, opacity: 0 }}
            className="pointer-events-none fixed top-0 left-0 z-40"
            style={{
              translateX: '-50%',
              translateY: '-50%',
            }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 24,
              mass: 0.8,
            }}
          >
            <div className={`
              rounded-full
              bg-white
              mix-blend-difference
              ${isPointer ? 'w-24 h-24' : 'w-12 h-12'}
              transition-all duration-300
              ${isClicking ? 'scale-75' : 'scale-100'}
            `} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}