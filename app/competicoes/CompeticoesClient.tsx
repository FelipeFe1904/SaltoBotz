"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Calendar, MapPin, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function CompeticoesClient() {
  const { language } = useLanguage()

  // Dados fictícios das competições
  const competicoes = [
    {
      id: 1,
      nome: "RSM - Robocore Summer Marathon",
      nomeEn: "RSM - Robocore Summer Marathon",
      data: "Agosto 2025",
      dataEn: "August 2025",
      local: "São Paulo, SP",
      localEn: "São Paulo, SP, Brazil",
      descricao:
        "A Robocore Summer Marathon (RSM) é uma das maiores competições de robótica da América Latina, reunindo equipes de todo o Brasil e países vizinhos. O evento conta com diversas categorias de combate, sumô, seguidor de linha e muito mais.",
      descricaoEn:
        "The Robocore Summer Marathon (RSM) is one of the largest robotics competitions in Latin America, bringing together teams from all over Brazil and neighboring countries. The event features various categories including combat, sumo, line follower, and much more.",
      imagem: "/images/RSM-Challenge.jpg",
      website:
        "https://events.robocore.net/rsm-2025/?gad_source=1&gad_campaignid=16509321328&gbraid=0AAAAADzrkI5wKpvSMEPxO_aWM9jhJwyU4&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBMU_ZrxSQ2_xqPxkVbHc9t5nlzk2xS_Chl-3Yp-V3oum6BmvHtNfVYaAimmEALw_wcB",
      resultados: [
        {
          robo: "Mini Joker",
          categoria: "Antweight",
          posicao: 1,
          posicaoEn: "1st place",
        },
        {
          robo: "Pitoco",
          categoria: "Sumo 500g",
          posicao: 2,
          posicaoEn: "2nd place",
        },
      ],
    },
    {
      id: 2,
      nome: "Winter Challenge",
      nomeEn: "Winter Challenge",
      data: "Julho 2025",
      dataEn: "July 2025",
      local: "São Paulo, SP",
      localEn: "São Paulo, SP, Brazil",
      descricao:
        "Uma das maiores competições de robótica do Brasil, com diversas categorias de combate e desafios técnicos.",
      descricaoEn:
        "One of the largest robotics competitions in Brazil, with various combat categories and technical challenges.",
      imagem: "/placeholder.svg?height=300&width=500",
      resultados: [
        {
          robo: "Mini Joker",
          categoria: "Antweight",
          posicao: 3,
          posicaoEn: "3rd place",
        },
        {
          robo: "Pitoco",
          categoria: "Sumo 500g",
          posicao: 2,
          posicaoEn: "2nd place",
        },
      ],
    },
    {
      id: 3,
      nome: "RoboGames Brasil",
      nomeEn: "RoboGames Brazil",
      data: "Outubro 2025",
      dataEn: "October 2025",
      local: "Rio de Janeiro, RJ",
      localEn: "Rio de Janeiro, RJ, Brazil",
      descricao: "Versão brasileira do famoso evento internacional, reunindo as melhores equipes de robótica do país.",
      descricaoEn:
        "Brazilian version of the famous international event, bringing together the best robotics teams in the country.",
      imagem: "/placeholder.svg?height=300&width=500",
      resultados: [
        {
          robo: "Beetle Spinner",
          categoria: "Beetleweight",
          posicao: 1,
          posicaoEn: "1st place",
        },
      ],
    },
    {
      id: 4,
      nome: "Robótica Brasil",
      nomeEn: "Robotics Brazil",
      data: "Março 2026",
      dataEn: "March 2026",
      local: "Belo Horizonte, MG",
      localEn: "Belo Horizonte, MG, Brazil",
      descricao:
        "Competição que reúne universidades e escolas técnicas de todo o Brasil em diversas categorias de robótica.",
      descricaoEn:
        "Competition that brings together universities and technical schools from all over Brazil in various robotics categories.",
      imagem: "/placeholder.svg?height=300&width=500",
      resultados: [
        {
          robo: "Mini Joker",
          categoria: "Antweight",
          posicao: 1,
          posicaoEn: "1st place",
        },
        {
          robo: "Pitoco",
          categoria: "Sumo 500g",
          posicao: 1,
          posicaoEn: "1st place",
        },
      ],
    },
  ]

  // Dados de competições passadas
  const competicoesPassadas = [
    {
      id: 5,
      nome: "Winter Challenge 2024",
      nomeEn: "Winter Challenge 2024",
      data: "Julho 2024",
      dataEn: "July 2024",
      local: "São Paulo, SP",
      localEn: "São Paulo, SP, Brazil",
      imagem: "/placeholder.svg?height=200&width=400",
      resultados: [
        {
          robo: "Beetle Spinner",
          categoria: "Beetleweight",
          posicao: 2,
          posicaoEn: "2nd place",
        },
      ],
    },
    {
      id: 6,
      nome: "Robo Cup 2024",
      nomeEn: "Robo Cup 2024",
      data: "Abril 2024",
      dataEn: "April 2024",
      local: "Campinas, SP",
      localEn: "Campinas, SP, Brazil",
      imagem: "/placeholder.svg?height=200&width=400",
      resultados: [
        {
          robo: "Pitoco",
          categoria: "Sumo 500g",
          posicao: 3,
          posicaoEn: "3rd place",
        },
      ],
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="w-full h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900/70 z-10"></div>
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt={language === "pt-BR" ? "Competições Salto Botz" : "Salto Botz Competitions"}
          fill
          className="object-cover"
        />
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "pt-BR" ? "Nossas Competições" : "Our Competitions"}
          </h1>
          <p className="max-w-2xl text-zinc-300">
            {language === "pt-BR"
              ? "Acompanhe nossa participação em competições nacionais e internacionais de robótica."
              : "Follow our participation in national and international robotics competitions."}
          </p>
        </div>
      </div>

      {/* Próximas Competições */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {language === "pt-BR" ? "Próximas Competições" : "Upcoming Competitions"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competicoes.map((competicao) => (
            <Card key={competicao.id} className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={competicao.imagem || "/placeholder.svg"}
                  fill
                  alt={language === "pt-BR" ? competicao.nome : competicao.nomeEn}
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{language === "pt-BR" ? competicao.nome : competicao.nomeEn}</h3>
                <div className="flex items-center gap-2 text-zinc-500 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span>{language === "pt-BR" ? competicao.data : competicao.dataEn}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{language === "pt-BR" ? competicao.local : competicao.localEn}</span>
                </div>
                <p className="text-zinc-600 text-sm mb-4">
                  {language === "pt-BR" ? competicao.descricao : competicao.descricaoEn}
                </p>
                <div className="mt-4">
                  <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-salto-green" />
                    {language === "pt-BR" ? "Nossos Resultados" : "Our Results"}
                  </h4>
                  <ul className="space-y-1">
                    {competicao.resultados.map((resultado, index) => (
                      <li key={index} className="text-sm text-zinc-500 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-salto-red"></span>
                        {resultado.robo} - {resultado.categoria}:{" "}
                        <span className="font-medium">
                          {language === "pt-BR" ? `${resultado.posicao}º lugar` : resultado.posicaoEn}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {competicao.website && (
                  <div className="mt-4">
                    <Button asChild className="w-full bg-salto-green hover:bg-salto-green/90 text-white">
                      <Link
                        href={competicao.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        {language === "pt-BR" ? "Visitar Site da Competição" : "Visit Competition Website"}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Competições Passadas */}
      <div className="bg-zinc-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {language === "pt-BR" ? "Competições Passadas" : "Past Competitions"}
          </h2>
          <Tabs defaultValue="2024" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="2024">2024</TabsTrigger>
                <TabsTrigger value="2023">2023</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="2024">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {competicoesPassadas.map((competicao) => (
                  <Card
                    key={competicao.id}
                    className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row"
                  >
                    <div className="relative w-full md:w-1/3 h-[200px] md:h-auto">
                      <Image
                        src={competicao.imagem || "/placeholder.svg"}
                        fill
                        alt={language === "pt-BR" ? competicao.nome : competicao.nomeEn}
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 flex-1">
                      <h3 className="text-lg font-bold mb-2">
                        {language === "pt-BR" ? competicao.nome : competicao.nomeEn}
                      </h3>
                      <div className="flex items-center gap-2 text-zinc-500 mb-1 text-sm">
                        <Calendar className="h-3 w-3" />
                        <span>{language === "pt-BR" ? competicao.data : competicao.dataEn}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500 mb-4 text-sm">
                        <MapPin className="h-3 w-3" />
                        <span>{language === "pt-BR" ? competicao.local : competicao.localEn}</span>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-salto-green" />
                          {language === "pt-BR" ? "Nossos Resultados" : "Our Results"}
                        </h4>
                        <ul className="space-y-1">
                          {competicao.resultados.map((resultado, index) => (
                            <li key={index} className="text-sm text-zinc-500 flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-salto-red"></span>
                              {resultado.robo} - {resultado.categoria}:{" "}
                              <span className="font-medium">
                                {language === "pt-BR" ? `${resultado.posicao}º lugar` : resultado.posicaoEn}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="2023">
              <div className="text-center py-12">
                <p className="text-zinc-500">
                  {language === "pt-BR"
                    ? "Não participamos de competições em 2023 devido à reestruturação da equipe."
                    : "We did not participate in competitions in 2023 due to team restructuring."}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {language === "pt-BR" ? "Nossas Estatísticas" : "Our Statistics"}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-salto-green mb-2">15+</div>
            <div className="text-zinc-500">{language === "pt-BR" ? "Competições" : "Competitions"}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-salto-red mb-2">8</div>
            <div className="text-zinc-500">{language === "pt-BR" ? "Medalhas de Ouro" : "Gold Medals"}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-zinc-400 mb-2">5</div>
            <div className="text-zinc-500">{language === "pt-BR" ? "Medalhas de Prata" : "Silver Medals"}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-amber-700 mb-2">3</div>
            <div className="text-zinc-500">{language === "pt-BR" ? "Medalhas de Bronze" : "Bronze Medals"}</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-zinc-900 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === "pt-BR" ? "Quer nos ver competindo?" : "Want to see us competing?"}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-zinc-300">
            {language === "pt-BR"
              ? "Acompanhe nossas redes sociais para saber das próximas competições e eventos que participaremos."
              : "Follow our social media to know about the next competitions and events we will participate in."}
          </p>
          <Button asChild size="lg" className="bg-salto-green hover:bg-salto-green/90 text-white">
            <Link href="/#redes">{language === "pt-BR" ? "Seguir nas Redes" : "Follow on Social Media"}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
