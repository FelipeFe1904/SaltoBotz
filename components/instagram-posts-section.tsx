"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function InstagramPostsSection() {
  const { language } = useLanguage()

  const instagramPosts = [
    {
      id: 1,
      caption:
        "Estamos muito felizes em anunciar que a Salto Botz está de volta! 🤖 Após um período de reestruturação, estamos prontos para voltar com tudo! Fiquem ligados nas novidades que estão por vir! 💪🔥 #SaltoBotz #Robotica #CombateDeRobos",
      captionEn:
        "We are very happy to announce that Salto Botz is back! 🤖 After a period of restructuring, we are ready to come back with everything! Stay tuned for the news to come! 💪🔥 #SaltoBotz #Robotics #RobotCombat",
      date: "07/04/2025",
      image: "/images/instagram/latest-post.jpeg",
      link: "https://www.instagram.com/p/DC5Q3eOtmpd/",
    },
    {
      id: 2,
      caption:
        "Nosso robô Mini Joker está quase pronto para sua primeira competição! 🤖 #SaltoBotz #Robotica #MiniJoker #AntWeight",
      captionEn:
        "Our Mini Joker robot is almost ready for its first competition! 🤖 #SaltoBotz #Robotics #MiniJoker #AntWeight",
      date: "10/04/2025",
      image: "/images/mini-joker/mini-joker-cover.jpeg",
      link: "https://www.instagram.com/saltobotz/",
    },
    {
      id: 3,
      caption:
        "Equipe Salto Botz reunida no IFSP Campus Salto para mais um dia de trabalho nos nossos robôs! 💪 #Equipe #SaltoBotz #Robotica #IFSP",
      captionEn:
        "Salto Botz team gathered at IFSP Campus Salto for another day of work on our robots! 💪 #Team #SaltoBotz #Robotics #IFSP",
      date: "15/04/2025",
      image: "/placeholder.svg?height=300&width=300",
      link: "https://www.instagram.com/saltobotz/",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="flex items-center gap-2">
            <Instagram className="h-6 w-6 text-salto-red" />
            <h2 className="section-heading">{language === "pt-BR" ? "Instagram" : "Instagram"}</h2>
          </div>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
            {language === "pt-BR" ? "Acompanhe nossas atualizações no Instagram" : "Follow our updates on Instagram"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instagramPosts.map((post) => (
            <Link key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={language === "pt-BR" ? post.caption : post.captionEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex items-center gap-2 text-white">
                      <Instagram className="h-4 w-4" />
                      <span className="text-sm font-medium">{post.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-zinc-600 line-clamp-3">
                    {language === "pt-BR" ? post.caption : post.captionEn}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white"
          >
            <Link
              href="https://www.instagram.com/saltobotz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="h-4 w-4" />
              {language === "pt-BR" ? "Seguir no Instagram" : "Follow on Instagram"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
