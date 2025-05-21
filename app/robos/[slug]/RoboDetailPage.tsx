"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Trophy,
  Award,
  Calendar,
  Weight,
  Zap,
  PenToolIcon as Tool,
  Shield,
  Code,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"
import type { Robot } from "@/lib/robots-data"
import { useState } from "react"
import ImageModal from "@/components/image-modal"

export default function RoboDetailPage({ robot }: { robot: Robot }) {
  const { language, t } = useLanguage()

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")
  const [selectedAlt, setSelectedAlt] = useState("")
  const [isGif, setIsGif] = useState(false)

  const openModal = (src: string, alt: string, gif = false) => {
    setSelectedImage(src)
    setSelectedAlt(alt)
    setIsGif(gif)
    setModalOpen(true)
  }

  return (
    <div>
      {/* Hero Section with Robot Image */}
      <div className="relative w-full h-[50vh] min-h-[400px] bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900/90 z-10"></div>
        <Image
          src={robot.imagemPrincipal || "/placeholder.svg?height=600&width=1200"}
          alt={language === "pt-BR" ? robot.nome : robot.nomeEn}
          fill
          className="object-cover opacity-60"
          priority
        />

        <div className="container relative z-20 h-full flex flex-col justify-end pb-12">
          <div className="flex items-center gap-2 mb-2">
            <Button asChild variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <Link href="/robos" className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" />
                {t("robots.back")}
              </Link>
            </Button>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            {language === "pt-BR" ? robot.nome : robot.nomeEn}
          </h1>

          <div className="flex flex-wrap gap-2 mb-4">
            {/* Category Badge */}
            <div
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium 
              bg-zinc-800/80 text-white border border-zinc-700"
            >
              <Shield className="h-3 w-3" />
              {robot.categoria}
            </div>

            {/* Weight Badge */}
            <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-800/80 text-white text-xs font-medium border border-zinc-700">
              <Weight className="h-3 w-3" />
              {robot.peso}
            </div>

            {/* Year Badge */}
            <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-800/80 text-white text-xs font-medium border border-zinc-700">
              <Calendar className="h-3 w-3" />
              {robot.anoEstreia}
            </div>

            {/* Achievements Badge */}
            <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-800/80 text-white text-xs font-medium border border-zinc-700">
              <Trophy className="h-3 w-3 text-yellow-500" />
              {robot.podios} {t("robots.podiums")}
            </div>
          </div>

          <p className="max-w-2xl text-white/80 text-lg">
            {language === "pt-BR" ? robot.especialidade : robot.especialidadeEn}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Tech Specs */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Database className="h-5 w-5 text-salto-green" />
                {t("robots.techSpecs")}
              </h2>

              <div className="space-y-4">
                {/* Tech Specs List */}
                <div>
                  <h3 className="text-sm font-medium text-zinc-500">{t("robots.specs.dimensions")}</h3>
                  <p className="font-medium">{robot.especificacoes.dimensoes}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-500">{t("robots.specs.weight")}</h3>
                  <p className="font-medium">{robot.especificacoes.peso}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-500">{t("robots.specs.weapon")}</h3>
                  <p className="font-medium">
                    {language === "pt-BR" ? robot.especificacoes.arma : robot.especificacoes.armaEn}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-500">{t("robots.specs.motor")}</h3>
                  <p className="font-medium">{robot.especificacoes.motor}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-500">{t("robots.specs.battery")}</h3>
                  <p className="font-medium">{robot.especificacoes.bateria}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-500">{t("robots.specs.controller")}</h3>
                  <p className="font-medium">{robot.especificacoes.controlador}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-500">{t("robots.specs.materials")}</h3>
                  <p className="font-medium">
                    {language === "pt-BR" ? robot.especificacoes.materiais : robot.especificacoes.materiaisEn}
                  </p>
                </div>
              </div>

              {/* Team */}
              <h2 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2">
                <Tool className="h-5 w-5 text-salto-red" />
                {t("robots.team")}
              </h2>

              <div className="space-y-2">
                {robot.equipe.map((membro, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-zinc-500">{membro.funcao}</span>
                    <span className="font-medium">{membro.nome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                {t("robots.achievements")}
              </h2>

              <div className="space-y-4">
                {robot.conquistas.map((conquista, index) => (
                  <div key={index} className="flex items-start gap-3 pb-3 border-b border-zinc-100 last:border-0">
                    <div
                      className={`mt-0.5 shrink-0 rounded-full p-1 text-white
                      ${
                        conquista.medalha === "gold"
                          ? "bg-yellow-500"
                          : conquista.medalha === "silver"
                            ? "bg-zinc-400"
                            : conquista.medalha === "bronze"
                              ? "bg-amber-700"
                              : "bg-salto-green"
                      }
                    `}
                    >
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">{language === "pt-BR" ? conquista.nome : conquista.nomeEn}</p>
                      <p className="text-sm text-zinc-500">
                        {conquista.ano} • {language === "pt-BR" ? conquista.local : conquista.localEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Description, Tabs, etc. */}
          <div className="col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">{t("robots.about")}</h2>
              <div className="prose max-w-none">
                <p>{language === "pt-BR" ? robot.descricao : robot.descricaoEn}</p>
              </div>

              {robot.descricaoLonga && (
                <div className="mt-6">
                  <p className="whitespace-pre-line text-zinc-600">
                    {language === "pt-BR" ? robot.descricaoLonga : robot.descricaoLongaEn}
                  </p>
                </div>
              )}

              {/* Technology Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-salto-red" />
                  {t("robots.technology")}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {robot.tecnologias.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg border border-zinc-200 hover:border-salto-green/30 hover:bg-salto-green/5 transition-colors"
                    >
                      <div className="shrink-0 mt-1">
                        <Code className="h-5 w-5 text-salto-green" />
                      </div>
                      <div>
                        <h4 className="font-bold">{language === "pt-BR" ? tech.nome : tech.nomeEn}</h4>
                        <p className="text-sm text-zinc-600">
                          {language === "pt-BR" ? tech.descricao : tech.descricaoEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Tabs */}
            <div className="mt-6">
              <Tabs defaultValue="fotos" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
                  <TabsTrigger value="fotos">{t("robots.gallery.photos")}</TabsTrigger>
                  <TabsTrigger value="construcao">{t("robots.gallery.building")}</TabsTrigger>
                  <TabsTrigger value="competicoes">{t("robots.gallery.competitions")}</TabsTrigger>
                </TabsList>

                <TabsContent value="fotos" className="bg-white rounded-lg shadow-md p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {robot.fotos.map((foto, index) => {
                      const isGif = foto.url.toLowerCase().endsWith(".gif")
                      return (
                        <div
                          key={index}
                          className="aspect-square relative rounded-lg overflow-hidden border border-zinc-200 group cursor-pointer"
                          onClick={() => openModal(foto.url, foto.legenda, isGif)}
                        >
                          {isGif ? (
                            // Use img tag for GIFs to ensure animation
                            <div className="w-full h-full">
                              <img
                                src={foto.url || "/placeholder.svg"}
                                alt={foto.legenda || robot.nome}
                                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                              />
                            </div>
                          ) : (
                            // Use Next.js Image for static images
                            <Image
                              src={foto.url || "/placeholder.svg?height=300&width=300"}
                              alt={foto.legenda || robot.nome}
                              fill
                              className="object-cover transition-transform group-hover:scale-110"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white text-sm">{language === "pt-BR" ? foto.legenda : foto.legendaEn}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="construcao" className="bg-white rounded-lg shadow-md p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {robot.fotosProcesso.map((foto, index) => {
                      const isGif = foto.url.toLowerCase().endsWith(".gif")
                      return (
                        <div
                          key={index}
                          className="aspect-video relative rounded-lg overflow-hidden border border-zinc-200 group cursor-pointer"
                          onClick={() => openModal(foto.url, foto.legenda, isGif)}
                        >
                          {isGif ? (
                            // Use img tag for GIFs to ensure animation
                            <div className="w-full h-full">
                              <img
                                src={foto.url || "/placeholder.svg"}
                                alt={foto.legenda || `${robot.nome} - Processo de construção`}
                                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                              />
                            </div>
                          ) : (
                            // Use Next.js Image for static images
                            <Image
                              src={foto.url || "/placeholder.svg?height=300&width=500"}
                              alt={foto.legenda || `${robot.nome} - Processo de construção`}
                              fill
                              className="object-cover transition-transform group-hover:scale-110"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white text-sm">{language === "pt-BR" ? foto.legenda : foto.legendaEn}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>

                <TabsContent value="competicoes" className="bg-white rounded-lg shadow-md p-6">
                  {robot.fotosCompeticao.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {robot.fotosCompeticao.map((foto, index) => {
                        const isGif = foto.url.toLowerCase().endsWith(".gif")
                        return (
                          <div
                            key={index}
                            className="aspect-video relative rounded-lg overflow-hidden border border-zinc-200 group cursor-pointer"
                            onClick={() => openModal(foto.url, foto.legenda, isGif)}
                          >
                            {isGif ? (
                              // Use img tag for GIFs to ensure animation
                              <div className="w-full h-full">
                                <img
                                  src={foto.url || "/placeholder.svg"}
                                  alt={foto.legenda || `${robot.nome} - Competição`}
                                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                />
                              </div>
                            ) : (
                              // Use Next.js Image for static images
                              <Image
                                src={foto.url || "/placeholder.svg?height=300&width=500"}
                                alt={foto.legenda || `${robot.nome} - Competição`}
                                fill
                                className="object-cover transition-transform group-hover:scale-110"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                              <p className="text-white text-sm">
                                {language === "pt-BR" ? foto.legenda : foto.legendaEn}
                                {foto.competicao && ` - ${foto.competicao}, ${foto.ano}`}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12">
                      <p className="text-zinc-500 text-lg mb-4">Ainda não temos fotos de competições.</p>
                      <p className="text-zinc-500">Em breve!</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Related Robots */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">{t("robots.related")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {robot.relacionados.map((related, index) => (
              <Link
                key={index}
                href={`/robos/${related.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-[160px]">
                  <Image
                    src={related.imagem || "/placeholder.svg?height=160&width=320"}
                    alt={language === "pt-BR" ? related.nome : related.nomeEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-zinc-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {related.peso}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{language === "pt-BR" ? related.nome : related.nomeEn}</h3>
                  <p className="text-sm text-zinc-500">
                    {language === "pt-BR" ? related.especialidade : related.especialidadeEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedImage}
        alt={selectedAlt}
        isGif={isGif}
      />
    </div>
  )
}
