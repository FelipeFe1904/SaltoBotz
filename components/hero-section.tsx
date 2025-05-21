"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="w-full min-h-screen flex items-center bg-zinc-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900/70 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-salto-green/20 via-transparent to-transparent z-0"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-full border border-salto-green/30 bg-salto-green/10 px-3 py-1 text-sm text-salto-green">
              <span>Equipe de Robótica de Combate</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              {t("home.hero.title")}
            </h1>
            <p className="max-w-[600px] text-zinc-400 md:text-xl">{t("home.hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg" className="bg-salto-green hover:bg-salto-green/90 text-white">
                <Link href="/robos">
                  {t("home.hero.button1")}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-salto-green text-salto-green hover:bg-salto-green/10"
              >
                <Link href="#patrocinar">{t("home.hero.button2")}</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] animate-float">
            <Image src="/images/salto-botz-logo.png" alt="Salto Botz" fill className="object-contain" priority />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#sobre" className="text-zinc-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            <span className="sr-only">Rolar para baixo</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
