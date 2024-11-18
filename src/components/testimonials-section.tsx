'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    content:
      'GeekClub不仅提供了优质的学习资源，更重要的是这里有一群热爱技术的伙伴。通过社区交流，我的技术水平得到了显著提升。',
    author: {
      name: '张明',
      role: '全栈开发工程师',
      image: '/testimonials/user1.jpg',
      initial: 'ZM',
    },
  },
  {
    content:
      '作为一名前端开发者，在GeekClub找到了很多实用的技术分享和最佳实践。这里的学习氛围很棒，社区成员都很友善。',
    author: {
      name: '李华',
      role: '前端开发工程师',
      image: '/testimonials/user2.jpg',
      initial: 'LH',
    },
  },
  {
    content:
      '加入GeekClub是我职业生涯中最正确的决定之一。这里的导师和社区成员都非常专业，帮助我快速成长。',
    author: {
      name: '王芳',
      role: '后端开发工程师',
      image: '/testimonials/user3.jpg',
      initial: 'WF',
    },
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            来自
            <span className="text-gradient"> 社区成员 </span>
            的声音
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            听听他们在GeekClub的学习和成长故事
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism p-6 h-full flex flex-col hover-card-animation">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 flex-grow">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.author.image} />
                    <AvatarFallback>{testimonial.author.initial}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
