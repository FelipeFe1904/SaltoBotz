"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context" // Adicionar importação

// Criar um componente cliente para usar o contexto de idioma
export default function PatrocinadoresClient() {
  const { language } = useLanguage()

  // Dados fictícios dos patrocinadores
  const patrocinadores = [
    {
      id: 1,
      nome: "IFSP Campus Salto",
      logo: "/images/ifsp-logo.png",
      categoria: "Diamante",
      website: "https://slt.ifsp.edu.br/",
      descricao:
        language === "pt-BR"
          ? "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - Campus Salto."
          : "Federal Institute of Education, Science and Technology of São Paulo - Salto Campus.",
    },
    {
      id: 2,
      nome: "RoboSystems",
      logo: "/placeholder.svg?height=200&width=400",
      categoria: "Ouro",
      website: "https://robosystems.com",
      descricao:
        language === "pt-BR"
          ? "Especializada em sistemas robóticos avançados."
          : "Specialized in advanced robotic systems.",
    },
    {
      id: 3,
      nome: "MechParts",
      logo: "/placeholder.svg?height=200&width=400",
      categoria: "Ouro",
      website: "https://mechparts.com",
      descricao:
        language === "pt-BR"
          ? "Fornecedora de peças mecânicas de alta precisão."
          : "Supplier of high-precision mechanical parts.",
    },
    {
      id: 4,
      nome: "ElectroTech",
      logo: "/placeholder.svg?height=200&width=400",
      categoria: "Prata",
      website: "https://electrotech.com",
      descricao:
        language === "pt-BR"
          ? "Componentes eletrônicos para projetos inovadores."
          : "Electronic components for innovative projects.",
    },
    {
      id: 5,
      nome: "MetalWorks",
      logo: "/placeholder.svg?height=200&width=400",
      categoria: "Prata",
      website: "https://metalworks.com",
      descricao:
        language === "pt-BR"
          ? "Especializada em usinagem e corte de metais."
          : "Specialized in machining and metal cutting.",
    },
    {
      id: 6,
      nome: "PowerSystems",
      logo: "/placeholder.svg?height=200&width=400",
      categoria: "Prata",
      website: "https://powersystems.com",
      descricao:
        language === "pt-BR"
          ? "Soluções em energia e baterias para robótica."
          : "Energy and battery solutions for robotics.",
    },
    {
      id: 7,
      nome: "SoftTech",
      logo: "/placeholder.svg?height=200&width=400",
      categoria: "Bronze",
      website: "https://softtech.com",
      descricao:
        language === "pt-BR"
          ? "Desenvolvimento de software para controle de robôs."
          : "Software development for robot control.",
    },
    {
      id: 8,
      nome: "ToolMaster",
      logo: "/placeholder.svg?height=200&width=400",
      categoria: "Bronze",
      website: "https://toolmaster.com",
      descricao:
        language === "pt-BR"
          ? "Ferramentas profissionais para projetos de engenharia."
          : "Professional tools for engineering projects.",
    },
  ]

  // Categorias de patrocínio
  const categorias = [
    {
      id: "diamante",
      nome: language === "pt-BR" ? "Diamante" : "Diamond",
      cor: "bg-blue-500",
      descricao:
        language === "pt-BR"
          ? "Patrocinadores principais que fornecem suporte financeiro e técnico substancial para a equipe."
          : "Main sponsors that provide substantial financial and technical support to the team.",
    },
    {
      id: "ouro",
      nome: language === "pt-BR" ? "Ouro" : "Gold",
      cor: "bg-yellow-500",
      descricao:
        language === "pt-BR"
          ? "Patrocinadores que contribuem significativamente para o desenvolvimento dos projetos da equipe."
          : "Sponsors who contribute significantly to the development of team projects.",
    },
    {
      id: "prata",
      nome: language === "pt-BR" ? "Prata" : "Silver",
      cor: "bg-gray-400",
      descricao:
        language === "pt-BR"
          ? "Patrocinadores que fornecem recursos importantes para a construção e manutenção dos robôs."
          : "Sponsors who provide important resources for the construction and maintenance of robots.",
    },
    {
      id: "bronze",
      nome: language === "pt-BR" ? "Bronze" : "Bronze",
      cor: "bg-amber-700",
      descricao:
        language === "pt-BR"
          ? "Patrocinadores que apoiam a equipe com recursos específicos e serviços."
          : "Sponsors who support the team with specific resources and services.",
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="w-full h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900/70 z-10"></div>
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt={language === "pt-BR" ? "Patrocinadores Salto Botz" : "Salto Botz Sponsors"}
          fill
          className="object-cover"
        />
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "pt-BR" ? "Patrocinadores" : "Sponsors"}
          </h1>
          <p className="max-w-2xl text-zinc-300">
            {language === "pt-BR"
              ? "Conheça as empresas e instituições que acreditam e apoiam nosso trabalho. Sem eles, nossos projetos não seriam possíveis."
              : "Meet the companies and institutions that believe in and support our work. Without them, our projects would not be possible."}
          </p>
        </div>
      </div>

      {/* Categorias de Patrocínio */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {language === "pt-BR" ? "Categorias de Patrocínio" : "Sponsorship Categories"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div
                className={`w-12 h-12 rounded-full ${categoria.cor} mb-4 flex items-center justify-center text-white font-bold`}
              >
                {categoria.nome.charAt(0)}
              </div>
              <h3 className="text-xl font-bold mb-2">{categoria.nome}</h3>
              <p className="text-sm text-zinc-500">{categoria.descricao}</p>
            </div>
          ))}
        </div>

        {/* Lista de Patrocinadores */}
        <h2 className="text-3xl font-bold mb-8 text-center">
          {language === "pt-BR" ? "Nossos Patrocinadores" : "Our Sponsors"}
        </h2>

        {/* Diamante */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
            {language === "pt-BR" ? "Patrocinadores Diamante" : "Diamond Sponsors"}
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {patrocinadores
              .filter((p) => p.categoria === "Diamante")
              .map((patrocinador) => (
                <Card
                  key={patrocinador.id}
                  className="p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full md:w-1/4 h-[150px]">
                    <Image
                      src={patrocinador.logo || "/placeholder.svg"}
                      alt={patrocinador.nome}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-xl font-bold mb-2">{patrocinador.nome}</h4>
                    <p className="text-zinc-500 mb-4">{patrocinador.descricao}</p>
                    <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                      <Link href={patrocinador.website} target="_blank" rel="noopener noreferrer">
                        {language === "pt-BR" ? "Visitar Website" : "Visit Website"}
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* Ouro */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></span>
            {language === "pt-BR" ? "Patrocinadores Ouro" : "Gold Sponsors"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patrocinadores
              .filter((p) => p.categoria === "Ouro")
              .map((patrocinador) => (
                <Card
                  key={patrocinador.id}
                  className="p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full h-[120px]">
                    <Image
                      src={patrocinador.logo || "/placeholder.svg"}
                      alt={patrocinador.nome}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-2">{patrocinador.nome}</h4>
                    <p className="text-zinc-500 text-sm mb-4">{patrocinador.descricao}</p>
                    <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white">
                      <Link href={patrocinador.website} target="_blank" rel="noopener noreferrer">
                        {language === "pt-BR" ? "Visitar Website" : "Visit Website"}
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* Prata */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-4 h-4 rounded-full bg-gray-400 mr-2"></span>
            {language === "pt-BR" ? "Patrocinadores Prata" : "Silver Sponsors"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patrocinadores
              .filter((p) => p.categoria === "Prata")
              .map((patrocinador) => (
                <Card
                  key={patrocinador.id}
                  className="p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full h-[100px]">
                    <Image
                      src={patrocinador.logo || "/placeholder.svg"}
                      alt={patrocinador.nome}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-2">{patrocinador.nome}</h4>
                    <p className="text-zinc-500 text-sm mb-4">{patrocinador.descricao}</p>
                    <Button asChild className="bg-gray-500 hover:bg-gray-600 text-white">
                      <Link href={patrocinador.website} target="_blank" rel="noopener noreferrer">
                        {language === "pt-BR" ? "Visitar Website" : "Visit Website"}
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* Bronze */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-4 h-4 rounded-full bg-amber-700 mr-2"></span>
            {language === "pt-BR" ? "Patrocinadores Bronze" : "Bronze Sponsors"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {patrocinadores
              .filter((p) => p.categoria === "Bronze")
              .map((patrocinador) => (
                <Card
                  key={patrocinador.id}
                  className="p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full h-[80px]">
                    <Image
                      src={patrocinador.logo || "/placeholder.svg"}
                      alt={patrocinador.nome}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-2">{patrocinador.nome}</h4>
                    <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{patrocinador.descricao}</p>
                    <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white">
                      <Link href={patrocinador.website} target="_blank" rel="noopener noreferrer">
                        {language === "pt-BR" ? "Visitar Website" : "Visit Website"}
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* Seja um Patrocinador */}
        <div className="mt-24 bg-zinc-900 text-white rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {language === "pt-BR" ? "Torne-se um Patrocinador" : "Become a Sponsor"}
              </h2>
              <p className="text-zinc-300 mb-6">
                {language === "pt-BR"
                  ? "Sua empresa pode fazer parte desta jornada de inovação e tecnologia. Patrocinar a Salto Botz traz visibilidade para sua marca e contribui para o desenvolvimento tecnológico e educacional."
                  : "Your company can be part of this journey of innovation and technology. Sponsoring Salto Botz brings visibility to your brand and contributes to technological and educational development."}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-salto-green p-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    {language === "pt-BR"
                      ? "Exposição da marca em competições nacionais e internacionais"
                      : "Brand exposure in national and international competitions"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-salto-green p-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    {language === "pt-BR"
                      ? "Associação com inovação e tecnologia de ponta"
                      : "Association with innovation and cutting-edge technology"}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-salto-green p-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    {language === "pt-BR"
                      ? "Responsabilidade social e apoio à educação tecnológica"
                      : "Social responsibility and support for technological education"}
                  </span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-salto-green hover:bg-salto-green/90 text-white">
                <Link href="/#redes">{language === "pt-BR" ? "Entre em Contato" : "Contact Us"}</Link>
              </Button>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt={language === "pt-BR" ? "Seja um patrocinador" : "Become a sponsor"}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
