'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal, Code2, BookOpen } from 'lucide-react'
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

// 可配置项
const CONFIG = {
  brand: {
    name: 'GeekClub',
    href: '/',
    gradientFrom: 'from-primary',
    gradientTo: 'to-blue-600',
  },
  sections: {
    hero: '#hero',
    features: '#features',
    blog: '#blog',
    testimonials: '#testimonials',
    cta: '#cta',
    contact: '#contact',
  },
  styles: {
    glassEffect: 'backdrop-blur-xl bg-white/30 dark:bg-gray-950/30',
    hoverEffect: 'hover:bg-white/40 dark:hover:bg-gray-950/40',
    spacing: 'mx-4 my-2',
    shadow: 'shadow-lg',
    rounded: 'rounded-2xl',
    border: 'border border-white/20 dark:border-gray-800/20',
  },
  animation: {
    duration: 0.2,
    headerMotion: {
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.3 },
    },
    menuMotion: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: 0.2 },
    },
  },
}

const navigationItems = [
  {
    title: '学习中心',
    type: 'dropdown',
    items: [
      {
        title: '教程资源',
        href: '/tutorials',
        description: '全面的编程学习指南',
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        title: '实战项目',
        href: '/projects',
        description: '真实项目开发经验',
        icon: <Code2 className="h-6 w-6" />,
      },
      {
        title: '开发工具',
        href: '/tools',
        description: '提升开发效率的工具集',
        icon: <Terminal className="h-6 w-6" />,
      },
    ],
  },
  {
    title: '社区',
    type: 'link',
    href: '/community',
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string
    icon?: React.ReactNode
  }
>(({ className, title, children, icon, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors',
          CONFIG.styles.glassEffect,
          CONFIG.styles.hoverEffect,
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium">{title}</span>
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
))
ListItem.displayName = 'ListItem'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const winHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      setIsScrolled(scrollY > 20)
      setScrollProgress((scrollY / winHeight) * 100)
    }

    const handleScrollThrottle = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', handleScrollThrottle, { passive: true })
    return () => window.removeEventListener('scroll', handleScrollThrottle)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ transformOrigin: '0%' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all',
          CONFIG.styles.spacing,
          isScrolled && [
            CONFIG.styles.glassEffect,
            CONFIG.styles.shadow,
            CONFIG.styles.rounded,
            CONFIG.styles.border
          ]
        )}
        {...CONFIG.animation.headerMotion}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href={CONFIG.brand.href} className="text-2xl font-bold relative group">
              <span
                className={cn(
                  'bg-gradient-to-r bg-clip-text text-transparent',
                  CONFIG.brand.gradientFrom,
                  CONFIG.brand.gradientTo
                )}
              >
                {CONFIG.brand.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationItems.map((item) => (
                    item.type === 'dropdown' ? (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4">
                            {item.items?.map((subItem) => (
                              <ListItem
                                key={subItem.title}
                                title={subItem.title}
                                href={subItem.href}
                                icon={subItem.icon}>
                                {subItem.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={item.title}>
                        <Link href={item.href || '#'} legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {item.title}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    )
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <ThemeToggle />

              <Button
                className={cn(
                  'bg-gradient-to-r hover:opacity-90 transition-opacity',
                  CONFIG.brand.gradientFrom,
                  CONFIG.brand.gradientTo
                )}
                onClick={() => scrollToSection(CONFIG.sections.contact)}
              >
                加入我们
              </Button>
            </div>

            <button
              className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
              <motion.div className="md:hidden mt-4" {...CONFIG.animation.menuMotion}>
                <div
                  className={cn(
                    'p-4',
                    CONFIG.styles.glassEffect,
                    CONFIG.styles.rounded,
                    CONFIG.styles.border,
                    CONFIG.styles.shadow
                  )}
                >
                  <div className="flex flex-col space-y-3">
                    {Object.entries(CONFIG.sections).map(([key, value]) => (
                      <button
                        key={key}
                        onClick={() => scrollToSection(value)}
                        className="text-sm font-medium text-left px-3 py-2 rounded-lg transition-colors hover:bg-accent">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </button>
                    ))}
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <ThemeToggle />
                      <Button
                        className={cn(
                          'bg-gradient-to-r hover:opacity-90 transition-opacity',
                          CONFIG.brand.gradientFrom,
                          CONFIG.brand.gradientTo
                        )}
                        onClick={() => scrollToSection(CONFIG.sections.contact)}>
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
