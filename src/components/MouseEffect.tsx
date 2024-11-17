// components/MouseEffect.tsx
'use client'

import { useEffect, useState } from 'react'

export default function MouseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // 检查鼠标是否在可点击元素上
      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a'
      )
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className={`
          rounded-full
          transition-all duration-300 ease-out
          ${isPointer ? 'w-12 h-12 bg-aurora-500/30' : 'w-8 h-8 bg-cosmic-500/20'}
        `} />
      </div>
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className={`
          rounded-full
          transition-all duration-150 ease-out
          ${isPointer ? 'w-4 h-4 bg-aurora-400' : 'w-2 h-2 bg-cosmic-400'}
        `} />
      </div>
    </>
  )
}