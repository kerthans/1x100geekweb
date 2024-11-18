'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Terminal, Code2, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      // 处理导航栏背景
      setIsScrolled(window.scrollY > 50)
      
      // 计算滚动进度
      const winScroll = document.documentElement.scrollTop
      const height = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* 滚动进度条 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{
          scaleX: scrollProgress / 100,
          transformOrigin: '0%',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />
      
      <motion.header
        className={cn(
          'fixed w-full z-40 transition-all duration-300',
          isScrolled 
            ? 'backdrop-blur-xl bg-background/70 border-b shadow-sm rounded-b-2xl' 
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.3,
          ease: 'easeOut'
        }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold relative group">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                GeekClub
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>学习</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid grid-cols-1 gap-3 p-6 md:w-[400px] lg:w-[500px]">
                        {learningItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            icon={item.icon}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/community" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        社区
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <ThemeToggle />

              <Button 
                variant="default" 
                className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity"
              >
                加入我们
              </Button>
            </div>

            <button 
              className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="md:hidden"
              >
                <div className="rounded-xl bg-background/95 backdrop-blur-xl mt-4 p-4 border shadow-lg">
                  <div className="flex flex-col space-y-4">
                    <Link
                      href="/learn"
                      className="text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md hover:bg-accent"
                    >
                      学习
                    </Link>
                    <Link
                      href="/community"
                      className="text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md hover:bg-accent"
                    >
                      社区
                    </Link>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <ThemeToggle />
                      <Button 
                        variant="default" 
                        className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity"
                      >
                        加入我们
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  )
}

const learningItems = [
  {
    title: '教程',
    href: '/tutorials',
    description: '从基础到高级的编程教程',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: '实战项目',
    href: '/projects',
    description: '真实世界的项目实践',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: '开发者工具',
    href: '/tools',
    description: '提高效率的开发工具',
    icon: <Terminal className="w-6 h-6" />,
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    icon?: React.ReactNode
    title: string
  }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'