// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-6xl font-bold">
            <span className="matrix-text">GeekWeb</span>
          </h1>
          <p className="text-xl text-dark-100">
            探索科技的无限可能
          </p>
          <div className="space-x-4">
            <Button variant="default" glow="blue">
              开始探索
            </Button>
            <Button variant="neon">
              了解更多
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "技术分享",
              description: "探索前沿技术动态",
              variant: "neon" as const,
            },
            {
              title: "社区交流",
              description: "连接全球极客社群",
              variant: "gradient" as const,
            },
            {
              title: "项目展示",
              description: "分享你的创新成果",
              variant: "default" as const,
            },
          ].map((feature, index) => (
            <Card
              key={index}
              variant={feature.variant}
              hover="lift"
              className="p-6 space-y-4"
            >
              <h3 className="text-xl font-bold matrix-text">
                {feature.title}
              </h3>
              <p className="text-dark-100">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}