'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    title: '深入理解 React 18 新特性',
    excerpt: '探索React 18带来的新功能和改进，包括并发渲染、自动批处理等特性的详细解析...',
    author: {
      name: 'Alex Chen',
      image: '/authors/alex.jpg',
      initial: 'AC'
    },
    category: '前端开发',
    date: '2024-02-20',
    readTime: '8 min',
    tags: ['React', 'JavaScript', 'Web开发']
  },
  {
    title: 'TypeScript 5.0 完全指南',
    excerpt: '详细介绍TypeScript 5.0版本的新特性，以及如何在实际项目中运用这些功能...',
    author: {
      name: 'Sarah Zhang',
      image: '/authors/sarah.jpg',
      initial: 'SZ'
    },
    category: '编程语言',
    date: '2024-02-18',
    readTime: '12 min',
    tags: ['TypeScript', '编程语言']
  },
  {
    title: '微服务架构实战指南',
    excerpt: '从实际项目出发，讲解微服务架构的设计原则、实现方法和最佳实践...',
    author: {
      name: 'Mike Wang',
      image: '/authors/mike.jpg',
      initial: 'MW'
    },
    category: '后端开发',
    date: '2024-02-15',
    readTime: '15 min',
    tags: ['微服务', '架构设计']
  }
];

export function BlogPreviewSection() {
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
            最新
            <span className="text-gradient"> 技术博客 </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            探索最新的技术趋势和深度技术文章，提升你的专业技能
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism hover-card-animation h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={post.author.image} />
                        <AvatarFallback>{post.author.initial}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <Link 
                      href="#" 
                      className="text-sm font-medium flex items-center hover:text-primary transition-colors"
                    >
                      阅读更多
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center text-lg font-medium hover:text-primary transition-colors"
          >
            查看所有文章
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}