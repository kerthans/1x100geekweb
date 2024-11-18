'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Code2, Users, Rocket, Layout, Lightbulb, Share2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const features = [
  {
    icon: <Code2 className="w-10 h-10 text-indigo-500" />,
    title: '技术学习',
    description: '提供全面的技术学习资源，从入门到精通。',
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: '社区交流',
    description: '连接全球开发者，分享经验与见解。',
  },
  {
    icon: <Rocket className="w-10 h-10 text-purple-500" />,
    title: '项目实战',
    description: '真实项目经验，快速提升开发能力。',
  },
  {
    icon: <Layout className="w-10 h-10 text-pink-500" />,
    title: '资源分享',
    description: '优质的开发资源，助力技术成长。',
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
    title: '创新思维',
    description: '激发创新思维，开拓技术视野。',
  },
  {
    icon: <Share2 className="w-10 h-10 text-emerald-500" />,
    title: '经验交流',
    description: '分享成功经验，共同进步成长。',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            为什么选择
            <span className="text-gradient"> GeekClub </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            在这里，你可以获得全方位的技术提升和职业发展
          </p>
        </motion.div>

        <Tabs defaultValue="features" className="mb-16">
          <TabsList className="grid w-full max-w-[400px] mx-auto grid-cols-2">
            <TabsTrigger value="features">特性</TabsTrigger>
            <TabsTrigger value="benefits">权益</TabsTrigger>
          </TabsList>
          <TabsContent value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-morphism p-6 hover-card-animation">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="benefits">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: '专属内容', description: '获取独家技术文章和教程' },
                { title: '技术咨询', description: '一对一技术问题解答' },
                { title: '社区活动', description: '参与线上线下技术沙龙' },
                { title: '职业发展', description: '获取优质职业发展机会' },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-morphism p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: '活跃用户' },
              { number: '1000+', label: '技术文章' },
              { number: '100+', label: '开源项目' },
              { number: '50+', label: '技术专家' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism rounded-xl p-6"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
