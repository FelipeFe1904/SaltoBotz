"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function RobosClientPage() {
  const { language, t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("todos")

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  // Filter robots based on active category
  const getFilteredRobots = () => {
    switch (activeCategory) {
      case "sumo500g":
        return [
          {
            id: 2,
            name: "Pitoco",
            weight: "500g",
            podiums: 2,
            competitions: 3,
            specialty: language === "pt-BR" ? "Robô de sumo autônomo" : "Autonomous sumo robot",
            image: "",
            slug: "pitoco",
          },
        ]
      case "antweight":
        return [
          {
            id: 1,
            name: "Mini Joker",
            weight: "244g",
            podiums: 0,
            competitions: 0,
            specialty: language === "pt-BR" ? "Arma vertical giratória" : "Vertical spinning weapon",
            image: "/images/mini-joker/mini-joke-new1.jpeg",
            slug: "mini-joker",
          },
        ]
      case "beetleweight":
        return [
          {
            id: 3,
            name: "Beetle Spinner",
            weight: "1,36kg",
            podiums: 2,
            competitions: 3,
            specialty: language === "pt-BR" ? "Arma horizontal giratória" : "Horizontal spinning weapon",
            image: "/placeholder.svg?height=200&width=200",
            slug: "beetle-spinner",
          },
        ]
      default:
        return [
          {
            id: 1,
            name: "Mini Joker",
            weight: "244g",
            podiums: 0,
            competitions: 0,
            specialty: language === "pt-BR" ? "Arma vertical giratória" : "Vertical spinning weapon",
            image: "/images/mini-joker/mini-joke-new1.jpeg",
            slug: "mini-joker",
          },
          {
            id: 2,
            name: "Pitoco",
            weight: "500g",
            podiums: 2,
            competitions: 3,
            specialty: language === "pt-BR" ? "Robô de sumo autônomo" : "Autonomous sumo robot",
            image: "",
            slug: "pitoco",
          },
          {
            id: 3,
            name: "Beetle Spinner",
            weight: "1,36kg",
            podiums: 2,
            competitions: 3,
            specialty: language === "pt-BR" ? "Arma horizontal giratória" : "Horizontal spinning weapon",
            image: "/placeholder.svg?height=200&width=200",
            slug: "beetle-spinner",
          },
        ]
    }
  }

  const robots = getFilteredRobots()

  return (
    <div>
      {/* Header */}
      <div className="w-full h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900/70 z-10"></div>
        <Image src="/images/mini-joker/mini-joker-cover.jpeg" alt="Robôs Salto Botz" fill className="object-cover" />
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("robots.title")}</h1>
          <p className="max-w-2xl text-zinc-300">{t("robots.description")}</p>
        </div>
      </div>

      {/* Categorias - Styled like the members page */}
      <div className="bg-zinc-900 text-white py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              className={cn(
                "text-white",
                activeCategory === "todos" ? "bg-salto-green" : "bg-zinc-800 hover:bg-zinc-700",
              )}
              onClick={() => handleCategoryChange("todos")}
            >
              {t("robots.filter.all")}
            </Button>
            <Button
              className={cn(
                "text-white",
                activeCategory === "sumo500g" ? "bg-salto-red" : "bg-zinc-800 hover:bg-zinc-700",
              )}
              onClick={() => handleCategoryChange("sumo500g")}
            >
              Sumo 500g
            </Button>
            <Button
              className={cn(
                "text-white",
                activeCategory === "antweight" ? "bg-yellow-500" : "bg-zinc-800 hover:bg-zinc-700",
              )}
              onClick={() => handleCategoryChange("antweight")}
            >
              Antweight
            </Button>
            <Button
              className={cn(
                "text-white",
                activeCategory === "Seguidor de Linha" ? "bg-blue-500" : "bg-zinc-800 hover:bg-zinc-700",
              )}
              onClick={() => handleCategoryChange("Seguidor de Linha")}
            >
              Seguidor de Linha
            </Button>
          </div>
        </div>
      </div>

      {/* Lista de Robôs */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {robots.map((robot) => (
            <Card key={robot.id} className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={robot.image || "/placeholder.svg"}
                  fill
                  alt={`Robô ${robot.name}`}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-zinc-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {robot.weight}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{robot.name}</h3>
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4 text-salto-green" />
                    <span className="text-xs text-zinc-500">
                      {robot.podiums} {t("robots.podiums")}
                    </span>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm mb-4">
                  {t("robots.specialty")}: {robot.specialty}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <Award className="h-3 w-3 text-salto-red" />
                      {robot.competitions} {t("robots.competitions")}
                    </span>
                  </div>
                  <Button asChild size="sm" className="bg-salto-red hover:bg-salto-red/90 text-white">
                    <Link href={`/robos/${robot.slug}`}>{t("button.details")}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Categorias de Peso */}
      <div className="container py-16 bg-zinc-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {language === "pt-BR" ? "Categorias" : "Weight Categories"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <span className="w-4 h-4 rounded-full bg-zinc-900 mr-2"></span>
              Sumo 500g
            </h3>
            <p className="text-zinc-500 mb-2">{language === "pt-BR" ? "Peso máximo: 500g" : "Maximum weight: 500g"}</p>
            <p className="text-zinc-600">
              {language === "pt-BR"
                ? "Categoria de robôs de sumo autônomos, que devem empurrar o oponente para fora do ringue."
                : "Category of autonomous sumo robots, which must push the opponent out of the ring."}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <span className="w-4 h-4 rounded-full bg-zinc-900 mr-2"></span>
              Antweight
            </h3>
            <p className="text-zinc-500 mb-2">
              {language === "pt-BR" ? "Peso máximo: 454g (1lb)" : "Maximum weight: 454g (1lb)"}
            </p>
            <p className="text-zinc-600">
              {language === "pt-BR"
                ? "Categoria popular para robôs pequenos e acessíveis."
                : "Popular category for small and affordable robots."}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <span className="w-4 h-4 rounded-full bg-zinc-900 mr-2"></span>
              Seguidor de Linha
            </h3>
            <p className="text-zinc-500 mb-2">
              {language === "pt-BR" ? "Peso máximo: 1,360kg (3lb)" : "Maximum weight: 1.360kg (3lb)"}
            </p>
            <p className="text-zinc-600">
              {language === "pt-BR"
                ? "Categoria intermediária com bom equilíbrio entre tamanho e potência."
                : "Intermediate category with a good balance between size and power."}
            </p>
          </div>
        </div>
      </div>

      {/* Competições */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("robots.competitions.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { nome: "Winter Challenge", data: "Julho 2025", local: "São Paulo, SP" },
            { nome: "RoboGames", data: "Outubro 2025", local: "Rio de Janeiro, RJ" },
            { nome: "Robótica Brasil", data: "Março 2026", local: "Belo Horizonte, MG" },
          ].map((comp, i) => (
            <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">{comp.nome}</h3>
              <p className="text-zinc-500 mb-4">
                {comp.data} • {comp.local}
              </p>
              <Button asChild className="bg-salto-red hover:bg-salto-red/90 text-white">
                <Link href="/competicoes">{t("robots.competitions.button")}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
