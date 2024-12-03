'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    content:
      'GeekClub不仅提供了优质的学习资源，更重要的是这里有一群热爱技术的伙伴。我们经常组队线下Hackthon！真的太难忘了。',
    author: {
      name: 'Clint',
      role: '全栈开发工程师',
      image: '/testimonials/user1.jpg',
      initial: 'Cl',
    },
  },
  {
    content:
      '作为一名UI美术的同学，在GeekClub找到了很多实用的技术分享和最佳实践，这里有前沿的AI和分享，即便是非技术的同学也能学到特别多。这里的学习氛围很棒，社区成员都很友善。',
    author: {
      name: '豫淮',
      role: 'UI美术',
      image: '/testimonials/user2.jpg',
      initial: 'YH',
    },
  },
  {
    content:
      '加入GeekClub是我学习生涯中最正确的决定之一。这里的同学和社区成员都非常专业，帮助我快速成长。我们一起参与了很多次社区办的活动，我落地和制作了我属于我自己的网页，大家都很耐心的解答我遇到的报错，太暖啦！',
    author: {
      name: '苏琪Joy',
      role: '金融投资领域从业者',
      image: '/testimonials/user3.jpg',
      initial: 'SQ',
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
