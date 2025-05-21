"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

// This is a simplified version since we can't directly access Instagram's API in this context
// In a real implementation, you would use Instagram's Graph API or a service like Instagram Basic Display API

interface InstagramPost {
  id: string
  permalink: string
  caption: string
  media_url: string
  timestamp: string
}

export default function InstagramFeed() {
  const { language } = useLanguage()
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // In a real implementation, this would fetch from Instagram's API
  // For now, we'll use hardcoded data to simulate the API response
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      try {
        // Hardcoded data to simulate Instagram API response
        const mockPosts: InstagramPost[] = [
          {
            id: "post1",
            permalink: "https://www.instagram.com/p/DC5Q3eOtmpd/",
            caption:
              "Estamos muito felizes em anunciar que a Salto Botz está de volta! 🤖 Após um período de reestruturação, estamos prontos para voltar com tudo! Fiquem ligados nas novidades que estão por vir! 💪🔥 #SaltoBotz #Robotica #CombateDeRobos",
            media_url: "/images/instagram/latest-post.jpeg",
            timestamp: "2025-04-07T12:52:43+0000",
          },
          {
            id: "post2",
            permalink: "https://www.instagram.com/saltobotz/",
            caption:
              "Nosso robô Mini Joker está quase pronto para sua primeira competição! 🤖 #SaltoBotz #Robotica #MiniJoker #AntWeight",
            media_url: "/images/mini-joker/mini-joker-cover.jpeg",
            timestamp: "2025-04-10T15:30:00+0000",
          },
          {
            id: "post3",
            permalink: "https://www.instagram.com/saltobotz/",
            caption:
              "Equipe Salto Botz reunida no IFSP Campus Salto para mais um dia de trabalho nos nossos robôs! 💪 #Equipe #SaltoBotz #Robotica #IFSP",
            media_url: "/placeholder.svg?height=300&width=300",
            timestamp: "2025-04-15T09:45:00+0000",
          },
        ]

        setPosts(mockPosts)
        setLoading(false)
      } catch (err) {
        setError("Erro ao carregar posts do Instagram")
        setLoading(false)
      }
    }, 1000)
  }, [])

  // Format date to display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date)
  }

  if (loading) {
    return (
      <div className="container py-16 text-center">
        <Instagram className="h-8 w-8 text-salto-red mx-auto animate-pulse" />
        <p className="mt-4">Carregando posts do Instagram...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-16 text-center">
        <p className="text-salto-red">{error}</p>
      </div>
    )
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="flex items-center gap-2">
            <Instagram className="h-6 w-6 text-salto-red" />
            <h2 className="section-heading">Instagram</h2>
          </div>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
            {language === "pt-BR" ? "Acompanhe nossas atualizações no Instagram" : "Follow our updates on Instagram"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={post.media_url || "/placeholder.svg"}
                  alt={post.caption.substring(0, 60) + "..."}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex items-center gap-2 text-white">
                    <Instagram className="h-4 w-4" />
                    <span className="text-sm font-medium">{formatDate(post.timestamp)}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-zinc-600 line-clamp-3">{post.caption}</p>
                <Link
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-salto-green text-sm font-medium hover:underline"
                >
                  Ver no Instagram
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
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
