'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, Twitter, Linkedin, Send, Mail, Phone  } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.div className="space-y-4" variants={fadeInUpVariants}>
            <Link href="/" className="text-2xl font-bold text-gradient group relative inline-block">
              GeekClub
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <p className="text-muted-foreground">
              打造极客们的专属社区，连接开发者，分享技术，共同成长。
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpVariants}>
            <h3 className="font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUpVariants}>
            <h3 className="font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2">
              {/* <li className="flex items-center text-muted-foreground group hover:text-primary transition-colors">
                <Map className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                北京市海淀区中关村
              </li> */}
              <li className="flex items-center text-muted-foreground group hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                contact@geekclub.com
              </li>
              <li className="flex items-center text-muted-foreground group hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                400-123-4567
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUpVariants}>
            <h3 className="font-semibold mb-4">订阅更新</h3>
            <p className="text-muted-foreground mb-4">订阅我们的周刊，获取最新技术资讯</p>
            <div className="flex gap-2">
              <Input 
                placeholder="输入你的邮箱" 
                className="focus-visible:ring-primary"
              />
              <Button 
                size="icon"
                className="bg-primary hover:bg-primary/90 transition-colors"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <Separator className="my-8" />

        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2024 GeekClub. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              服务条款
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

const quickLinks = [
  { href: '/about', text: '关于我们' },
  { href: '/blog', text: '技术博客' },
  { href: '/projects', text: '开源项目' },
  { href: '/events', text: '社区活动' },
]
