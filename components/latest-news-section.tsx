"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LatestNewsSection() {
  const { language } = useLanguage()

  const latestNews = [
    {
      id: 1,
      title: "Competição Winter Challenge 2025",
      titleEn: "Winter Challenge 2025 Competition",
      summary: "Estamos nos preparando para a competição Winter Challenge 2025, que acontecerá em julho em São Paulo.",
      summaryEn:
        "We are preparing for the Winter Challenge 2025 competition, which will take place in July in São Paulo.",
      date: "15/04/2025",
      image: "/images/news/competition-announcement.jpeg",
      link: "/noticias/competicao-winter-challenge-2025",
    },
    {
      id: 2,
      title: "Novo robô Mini Joker em desenvolvimento",
      titleEn: "New Mini Joker robot in development",
      summary: "Nossa equipe está finalizando o desenvolvimento do novo robô Mini Joker para a categoria Antweight.",
      summaryEn: "Our team is finalizing the development of the new Mini Joker robot for the Antweight category.",
      date: "02/04/2025",
      image: "/images/mini-joker/mini-joker-cover.jpeg",
      link: "/robos/mini-joker",
    },
    {
      id: 3,
      title: "Workshop de robótica no IFSP",
      titleEn: "Robotics workshop at IFSP",
      summary: "Realizamos um workshop de introdução à robótica de combate no IFSP Campus Salto.",
      summaryEn: "We conducted an introductory workshop on combat robotics at IFSP Campus Salto.",
      date: "25/03/2025",
      image: "/placeholder.svg?height=300&width=500",
      link: "/noticias/workshop-robotica-ifsp",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-zinc-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="section-heading">{language === "pt-BR" ? "Últimas Notícias" : "Latest News"}</h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
            {language === "pt-BR"
              ? "Fique por dentro das novidades da equipe Salto Botz"
              : "Stay up to date with the latest news from the Salto Botz team"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={language === "pt-BR" ? news.title : news.titleEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-salto-red text-white text-xs font-bold px-2 py-1 rounded-full">
                  {news.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{language === "pt-BR" ? news.title : news.titleEn}</h3>
                <p className="text-zinc-600 mb-4">{language === "pt-BR" ? news.summary : news.summaryEn}</p>
                <Button asChild variant="outline" className="w-full group">
                  <Link href={news.link} className="flex items-center justify-center gap-2">
                    {language === "pt-BR" ? "Ler mais" : "Read more"}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="group">
            <Link href="/noticias" className="flex items-center gap-2">
              {language === "pt-BR" ? "Ver todas as notícias" : "View all news"}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
