'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { MessageSquare, Send } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            联系
            <span className="text-gradient"> 我们 </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            有任何问题或建议？我们随时欢迎你的反馈
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism p-6 h-full">
              <h3 className="text-xl font-semibold mb-4">快来添加小助手微信进入社群交流吧！</h3>
              <div className="space-y-4">
                {/* <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">contact@geekclub.com</p>
                </div> */}
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">小助手微信：yink12138</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-2">工作时间</h4>
                <p className="text-muted-foreground">
                  周一至周五: 9:00 - 18:00
                  <br />
                  周末: 10:00 - 16:00
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">姓名</label>
                    <Input placeholder="你的姓名" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">邮箱</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">主题</label>
                  <Input placeholder="消息主题" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">消息内容</label>
                  <Textarea placeholder="请输入你想告诉我们的内容..." className="min-h-[120px]" />
                </div>
                <Button className="w-full">
                  发送消息
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
