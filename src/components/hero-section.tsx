'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Terminal, Code2, Laptop, ArrowRight, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Badge variant="secondary" className="mb-8 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              欢迎来到极客俱乐部
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            打造属于
            <span className="text-gradient"> 极客 </span>
            的
            <br />
            开发者社区
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            在这里，我们共同学习、分享、成长。 加入极客俱乐部，开启你的技术之旅。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" className="group">
              开始探索
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              了解更多
            </Button>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="glass-morphism rounded-xl p-6 hover-card-animation">
              <Terminal className="h-8 w-8 mb-4 text-indigo-500" />
              <h3 className="text-lg font-semibold mb-2">项目围观</h3>
              <p className="text-muted-foreground">从零到一观摩，手把手带你详拆技术细节</p>
            </div>
            <div className="glass-morphism rounded-xl p-6 hover-card-animation">
              <Code2 className="h-8 w-8 mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-2">技术驱动</h3>
              <p className="text-muted-foreground">紧跟技术前沿，深度技术分享</p>
            </div>
            <div className="glass-morphism rounded-xl p-6 hover-card-animation">
              <Laptop className="h-8 w-8 mb-4 text-purple-500" />
              <h3 className="text-lg font-semibold mb-2">实践导向</h3>
              <p className="text-muted-foreground">注重实战项目，提供最佳实践</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
