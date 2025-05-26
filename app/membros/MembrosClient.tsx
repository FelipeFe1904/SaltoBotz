"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Github, Linkedin, Code, Wrench, Zap, PenTool, BarChart4 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useSearchParams, useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

// Tipos para as áreas
type AreaId = "mecanica" | "eletrica" | "computacao" | "marketing" | "administrativo"

interface Area {
  id: AreaId
  nome: string
  nomeEn: string
  cor: string
  icone: React.ReactNode
  badgeClass: string
}

// Definição das áreas
const areaDefinitions: Record<AreaId, Area> = {
  mecanica: {
    id: "mecanica",
    nome: "Mecânica",
    nomeEn: "Mechanical",
    cor: "bg-salto-red",
    icone: <Wrench className="h-4 w-4" />,
    badgeClass: "area-badge-mecanica",
  },
  eletrica: {
    id: "eletrica",
    nome: "Elétrica",
    nomeEn: "Electrical",
    cor: "bg-yellow-500",
    icone: <Zap className="h-4 w-4" />,
    badgeClass: "area-badge-eletrica",
  },
  computacao: {
    id: "computacao",
    nome: "Computação",
    nomeEn: "Computing",
    cor: "bg-blue-500",
    icone: <Code className="h-4 w-4" />,
    badgeClass: "area-badge-computacao",
  },
  marketing: {
    id: "marketing",
    nome: "Marketing",
    nomeEn: "Marketing",
    cor: "bg-purple-500",
    icone: <PenTool className="h-4 w-4" />,
    badgeClass: "area-badge-marketing",
  },
  administrativo: {
    id: "administrativo",
    nome: "Administrativo",
    nomeEn: "Administrative",
    cor: "bg-orange-500",
    icone: <BarChart4 className="h-4 w-4" />,
    badgeClass: "area-badge-administrativo",
  },
}

// Dados fictícios dos membros com múltiplas áreas
const membros = [
  
  {
    id: 2,
    nome: "José Neto",
    apelido: "Zé Neto",
    cargo: "Capitão",
    areas: ["mecanica"] as AreaId[],
    anoIngresso: "2023",
    foto: "/images/membros/jose-neto.png",
    email: "bonsaver.j@aluno.ifsp.edu.br",
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-neto-bonsaver-233062274/",
  },
  {
    id: 3,
    nome: "Daniel Oliveira",
    apelido: "Daniel",
    cargo: "Vice-Capitão",
    areas: ["mecanica"] as AreaId[],
    anoIngresso: "2023",
    foto: "/images/membros/daniel-oliveira.jpeg",
    email: "daniel.oliveira.miranda10@gmail.com",
    linkedin: "https://www.linkedin.com/in/daniel-oliveiramiranda/",
  },
  {
    id: 1,
    nome: "Gabriel Sirtori",
    apelido: "Sirtori",
    cargo: "Engenheiro",
    areas: ["mecanica", "administrativo"] as AreaId[],
    anoIngresso: "2023",
    foto: "/images/membros/gabriel-sirtori.png",
    email: "gabrielsirtori.correa@gmail.com",
    github: "https://github.com/gabrielsirtori",
    linkedin: "https://linkedin.com/in/gabrielsirtori",
  },  
  {
    id: 4,
    nome: "Felipe Ferreira",
    apelido: "Felipe",
    cargo: "Desenvolvedor Web",
    areas: ["computacao", "marketing"] as AreaId[],
    anoIngresso: "2023",
    foto: "/images/felipe-ferreira.jpeg",
    email: "felipeferreirareis1904@gmail.com",
    github: "https://github.com/felipefe1904",
    linkedin: "https://www.linkedin.com/in/felipefe1904/",
  },
  {
    id: 12,
    nome: "Brian Wealth",
    apelido: "Wealth",
    cargo: "Engenheiro",
    areas: ["eletrica"] as AreaId[],
    anoIngresso: "2023",
    foto: "/images/membros/brian.png",
    email: "brianbrahmswealth@gmail.com",
    github: "https://github.com/mr-wealth",
    linkedin: "www.linkedin.com/in/brian-wealth",
  },
  {
    id: 5,
    nome: "Cauã Carvalho",
    apelido: "Cauã",
    cargo: "Lider da Eletrica",
    areas: ["eletrica"] as AreaId[],
    anoIngresso: "2024",
    foto: "/images/membros/caua-carvalho.jpeg",
    email: "Ccauacarvalhocvc@gmail.com",
    linkedin: "https://www.linkedin.com/in/cauã-vieira-97abb0239",
  },
  {
    id: 6,
    nome: "Caio Maiante",
    apelido: "Caio",
    cargo: "Engenheiro",
    areas: ["eletrica"] as AreaId[],
    anoIngresso: "2024",
    foto: "/images/membros/caio-maiante.jpeg",
    email: "caioks190@gmail.com",
    github: "https://github.com/CaioM-Kyle",
  },
  {
    id: 17,
    nome: "Eduardo Zambotti",
    apelido: "Eduardo",
    cargo: "Engenheiro",
    areas: ["eletrica"] as AreaId[],
    anoIngresso: "2024",
    foto: "/images/membros/eduardo.png",
    email: "caioks190@gmail.com",
    linkedin: "www.linkedin.com/in/eduardo-zambotti-marzochi-004472221",
  },
  {
    id: 8,
    nome: "Rafael Pazianoto",
    apelido: "Rafael",
    cargo: "Engenheiro",
    areas: ["mecanica", "eletrica"] as AreaId[],
    anoIngresso: "2024",
    foto: "/images/membros/rafael-pazianoto.jpeg",
    email: "",
    github: "https://github.com/lucasferreira",
    linkedin: "https://www.linkedin.com/in/rafael-pazianoto-114100314/",
  },
  {
    id: 14,
    nome: "João Ravache",
    apelido: "João",
    cargo: "Engenheiro",
    areas: ["eletrica", "administrativo"] as AreaId[],
    anoIngresso: "2024",
    foto: "/images/membros/joao-ravache.png",
    email: " jotapravache@gmail.com",
    github: " https://github.com/MrNutsu",
    linkedin: "https://www.linkedin.com/in/joaoravache/",
  }, 
   {
    id: 11,
    nome: "Felipe Cardoso",
    apelido: "Cardoso",
    cargo: "Engenheiro",
    areas: ["eletrica"] as AreaId[],
    anoIngresso: "2024",
    foto: "/images/membros/felipe-cardoso.jpg",
    email: "feliperodriguescardoso983@gmail.com",
    github: "https://github.com/feliperodriguescardoso",
    linkedin: "https://www.linkedin.com/in/felipe-rodrigues-cardoso/",
  },
    {
    id: 18,
    nome: "Giovanna Menezes",
    apelido: "Giovanna",
    cargo: "Técnico",
    areas: ["eletrica"] as AreaId[],
    anoIngresso: "2025",
    foto: "/images/membros/giovanna.png",
    email: "giovannabm2006@gmail.com",
    github: "https://github.com/GiovannaMenezes306",
  },  
   {
    id: 7,
    nome: "Matheus Wolk",
    apelido: "Matheus",
    cargo: "Técnico",
    areas: ["eletrica"] as AreaId[],
    anoIngresso: "2025",
    foto: "/images/membros/matheus-gimenes.jpeg",
    email: "matheuswgimenes@gmail.com",
    github: "https://github.com/MatheusGimenes1",
    linkedin: "https://www.linkedin.com/in/matheus-gimenes-0a7995353/",
  },
  {
    id: 10,
    nome: "Hector Merces",
    apelido: "Hector",
    cargo: "Técnico",
    areas: ["eletrica"] as AreaId[],
    anoIngresso: "2024",
    foto: "/images/membros/hector.png",
    email: "hectormerces.delima956@gmail.com",
    linkedin: "https://www.linkedin.com/in/hectormerces",
  },
  {
    id: 13,
    nome: "Luciano Scardueli",
    apelido: "Luciano",
    cargo: "Técnico",
    areas: ["mecanica", "administrativo"] as AreaId[],
    anoIngresso: "2025",
    foto: "/images/membros/luciano-s.png",
    email: "luciano.scardueli@gmail.com",
    github: "https://github.com/gabrielsirtori",
    linkedin: "https://linkedin.com/in/gabrielsirtori",
  },
  {
    id: 16,
    nome: "Arthur Saturnino",
    apelido: "Arthur",
    cargo: "Técnico",
    areas: ["computacao"] as AreaId[],
    anoIngresso: "2025",
    foto: "/images/membros/arthur-saturnino.jpeg",
    email: "arthuraaguiari@gmail.com",
    github: "https://github.com/Truleizer",
  },     
  {
    id: 15,
    nome: "Eduardo Melo",
    apelido: "Eduardo",
    cargo: "Técnico",
    areas: ["mecanica"] as AreaId[],
    anoIngresso: "2025",
    foto: "/images/membros/eduardo-melo.png",
    email: "emelo0989@gmail.com",
    github: "https://github.com/dudumeloo",
    linkedin: "https://www.linkedin.com/in/eduardo-melo-de-oliveira-845a5535a?trk=contact-info",
  },  
  
]

export default function MembrosClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { language, t } = useLanguage()

  // Obter o parâmetro de área da URL
  const areaParam = searchParams?.get("area")
  const [areaAtiva, setAreaAtiva] = useState<string>("todas")

  // Atualizar o estado quando o parâmetro de URL mudar
  useEffect(() => {
    if (areaParam) {
      setAreaAtiva(areaParam)
    } else {
      setAreaAtiva("todas")
    }
  }, [areaParam])

  // Atualizar URL quando a área mudar
  const handleAreaChange = (area: string) => {
    setAreaAtiva(area)
    if (area === "todas") {
      router.push("/membros")
    } else {
      router.push(`/membros?area=${area}`)
    }
  }

  // Filtrar membros pela área selecionada
  const membrosFiltrados =
    areaAtiva === "todas" ? membros : membros.filter((membro) => membro.areas.includes(areaAtiva as AreaId))

  return (
    <div>
      {/* Header */}
      <div className="w-full h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900/70 z-10"></div>
        <Image src="/images/fototodos7.jpg" alt="Equipe Salto Botz" fill className="object-cover" />
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("members.title")}</h1>
          <p className="max-w-2xl text-zinc-300">{t("members.description")}</p>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-zinc-900 text-white py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              key="todas"
              className={cn("text-white", areaAtiva === "todas" ? "bg-salto-green" : "bg-zinc-800 hover:bg-zinc-700")}
              onClick={() => handleAreaChange("todas")}
            >
              {t("members.filter.all")}
            </Button>
            <Button
              key="mecanica"
              className={cn("text-white", areaAtiva === "mecanica" ? "bg-salto-red" : "bg-zinc-800 hover:bg-zinc-700")}
              onClick={() => handleAreaChange("mecanica")}
            >
              {t("members.filter.mechanical")}
            </Button>
            <Button
              key="eletrica"
              className={cn("text-white", areaAtiva === "eletrica" ? "bg-yellow-500" : "bg-zinc-800 hover:bg-zinc-700")}
              onClick={() => handleAreaChange("eletrica")}
            >
              {t("members.filter.electrical")}
            </Button>
            <Button
              key="computacao"
              className={cn("text-white", areaAtiva === "computacao" ? "bg-blue-500" : "bg-zinc-800 hover:bg-zinc-700")}
              onClick={() => handleAreaChange("computacao")}
            >
              {t("members.filter.computing")}
            </Button>
            <Button
              key="marketing"
              className={cn(
                "text-white",
                areaAtiva === "marketing" ? "bg-purple-500" : "bg-zinc-800 hover:bg-zinc-700",
              )}
              onClick={() => handleAreaChange("marketing")}
            >
              {t("members.filter.marketing")}
            </Button>
            <Button
              key="administrativo"
              className={cn(
                "text-white",
                areaAtiva === "administrativo" ? "bg-orange-500" : "bg-zinc-800 hover:bg-zinc-700",
              )}
              onClick={() => handleAreaChange("administrativo")}
            >
              {t("members.filter.administrative")}
            </Button>
          </div>
        </div>
      </div>

      {/* Lista de Membros */}
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {membrosFiltrados.map((membro) => (
            <div key={membro.id} className="member-card rounded-lg overflow-hidden bg-white shadow-md">
              <div className="relative">
                <div className="relative h-[300px]">
                  <Image src={membro.foto || "/placeholder.svg"} alt={membro.nome} fill className="object-cover" />
                </div>

                {/* Ícones das áreas do membro */}
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                  {membro.areas.map((areaId) => (
                    <div key={areaId} className={`${areaDefinitions[areaId].cor} text-white rounded-full p-1.5`}>
                      {areaDefinitions[areaId].icone}
                    </div>
                  ))}
                </div>

                <div className="member-overlay">
                  <div className="flex justify-center space-x-4">
                    {membro.email && (
                      <Link
                        href={`mailto:${membro.email}`}
                        className="text-white hover:text-salto-green transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Link>
                    )}
                    {membro.github && (
                      <Link
                        href={membro.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-salto-green transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    )}
                    {membro.linkedin && (
                      <Link
                        href={membro.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-salto-green transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{membro.nome}</h3>
                <p className="text-sm text-zinc-500">{membro.cargo}</p>
                <div className="mt-2">
                  {/* Mostrar todas as áreas do membro como badges */}
                  <div className="flex flex-wrap gap-1">
                    {membro.areas.map((areaId) => (
                      <span key={areaId} className={`area-badge ${areaDefinitions[areaId].badgeClass}`}>
                        {language === "pt-BR" ? areaDefinitions[areaId].nome : areaDefinitions[areaId].nomeEn}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-xs text-zinc-400">
                      {t("members.since")} {membro.anoIngresso}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Junte-se a Nós */}
      <div className="bg-zinc-900 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">{t("members.join.title")}</h2>
          <p className="max-w-2xl mx-auto mb-8 text-zinc-300">{t("members.join.description")}</p>
          <Button asChild size="lg" className="bg-salto-green hover:bg-salto-green/90">
            <Link href="/#redes">{t("members.join.button")}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
