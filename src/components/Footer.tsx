'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

// 动态加载图标
const Github = dynamic(() => import('lucide-react').then((mod) => mod.Github), { ssr: false });
const Twitter = dynamic(() => import('lucide-react').then((mod) => mod.Twitter), { ssr: false });

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        {/* 其他静态内容 */}
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
