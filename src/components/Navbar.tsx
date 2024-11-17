// components/Navbar.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                GeekWeb
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/posts" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                文章
              </Link>
              <Link href="/members" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                成员
              </Link>
              <Link href="/events" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                活动
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="default" className="mr-2">
              登录
            </Button>
            <Button variant="outline">
              注册
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}