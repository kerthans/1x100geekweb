'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-morphism rounded-2xl p-12 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">立即加入极客社区</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            准备好开启你的
            <span className="text-gradient"> 技术之旅 </span>
            了吗？
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            加入我们的开发者社区，与志同道合的极客们一起学习、分享、成长。
            现在注册即可获得独家学习资源！
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              免费加入
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              了解会员权益
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}