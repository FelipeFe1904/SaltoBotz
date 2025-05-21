"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/contexts/language-context"

// Dados fictícios dos produtos
const produtos = {
  camisetas: [
    {
      id: 1,
      nome: "Camiseta Salto Botz Preta",
      nomeEn: "Salto Botz Black T-shirt",
      descricao: "Camiseta oficial da equipe, 100% algodão",
      descricaoEn: "Official team t-shirt, 100% cotton",
      preco: 49.9,
      imagem: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      nome: "Camiseta Salto Botz Branca",
      nomeEn: "Salto Botz White T-shirt",
      descricao: "Camiseta oficial da equipe, 100% algodão",
      descricaoEn: "Official team t-shirt, 100% cotton",
      preco: 49.9,
      imagem: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      nome: "Camiseta Salto Botz Verde",
      nomeEn: "Salto Botz Green T-shirt",
      descricao: "Camiseta oficial da equipe, 100% algodão",
      descricaoEn: "Official team t-shirt, 100% cotton",
      preco: 49.9,
      imagem: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      nome: "Camiseta Salto Botz Vermelha",
      nomeEn: "Salto Botz Red T-shirt",
      descricao: "Camiseta oficial da equipe, 100% algodão",
      descricaoEn: "Official team t-shirt, 100% cotton",
      preco: 49.9,
      imagem: "/placeholder.svg?height=200&width=200",
    },
  ],
  acessorios: [
    {
      id: 5,
      nome: "Boné Salto Botz",
      nomeEn: "Salto Botz Cap",
      descricao: "Boné ajustável com logo bordado",
      descricaoEn: "Adjustable cap with embroidered logo",
      preco: 39.9,
      imagem: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      nome: "Kit de Adesivos",
      nomeEn: "Sticker Kit",
      descricao: "Conjunto com 5 adesivos da equipe",
      descricaoEn: "Set with 5 team stickers",
      preco: 15.9,
      imagem: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 7,
      nome: "Caneca Salto Botz",
      nomeEn: "Salto Botz Mug",
      descricao: "Caneca de cerâmica com logo da equipe",
      descricaoEn: "Ceramic mug with team logo",
      preco: 29.9,
      imagem: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 8,
      nome: "Chaveiro Salto Botz",
      nomeEn: "Salto Botz Keychain",
      descricao: "Chaveiro em metal com logo da equipe",
      descricaoEn: "Metal keychain with team logo",
      preco: 19.9,
      imagem: "/placeholder.svg?height=200&width=200",
    },
  ],
  kits: [
    {
      id: 9,
      nome: "Kit Iniciante Robótica",
      nomeEn: "Robotics Starter Kit",
      descricao: "Kit educacional para montagem de robô simples",
      descricaoEn: "Educational kit for building a simple robot",
      preco: 149.9,
      imagem: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 10,
      nome: "Kit Intermediário Robótica",
      nomeEn: "Intermediate Robotics Kit",
      descricao: "Kit com componentes para projetos mais avançados",
      descricaoEn: "Kit with components for more advanced projects",
      preco: 299.9,
      imagem: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 11,
      nome: "Miniatura de Robô",
      nomeEn: "Robot Miniature",
      descricao: "Réplica em escala do robô Destruidor",
      descricaoEn: "Scale replica of the Destroyer robot",
      preco: 89.9,
      imagem: "/placeholder.svg?height=200&width=200",
    },
  ],
}

export default function ProdutosPageClient() {
  const { language, t } = useLanguage()

  const handleWhatsAppClick = (produto: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de comprar o produto: ${produto}`)
    window.open(`https://wa.me/5519990017745?text=${message}`, "_blank")
  }

  return (
    <div>
      {/* Header */}
      <div className="w-full h-[300px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900/70 z-10"></div>
        <Image src="/placeholder.svg?height=600&width=1200" alt="Produtos Salto Botz" fill className="object-cover" />
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("products.title")}</h1>
          <p className="max-w-2xl text-zinc-300">{t("products.description")}</p>
        </div>
      </div>

      {/* Produtos */}
      <div className="container py-16">
        <Tabs defaultValue="camisetas" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="camisetas">{t("products.filter.tshirts")}</TabsTrigger>
              <TabsTrigger value="acessorios">{t("products.filter.accessories")}</TabsTrigger>
              <TabsTrigger value="kits">{t("products.filter.kits")}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="camisetas" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {produtos.camisetas.map((produto) => (
                <Card
                  key={produto.id}
                  className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={produto.imagem || "/placeholder.svg"}
                      fill
                      alt={language === "pt-BR" ? produto.nome : produto.nomeEn}
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 border-t">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold">{language === "pt-BR" ? produto.nome : produto.nomeEn}</h3>
                      <p className="text-zinc-500 text-sm">
                        {language === "pt-BR" ? produto.descricao : produto.descricaoEn}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-salto-red">R$ {produto.preco.toFixed(2)}</span>
                        <Button
                          size="sm"
                          className="bg-salto-green hover:bg-salto-green/90 text-white"
                          onClick={() => handleWhatsAppClick(language === "pt-BR" ? produto.nome : produto.nomeEn)}
                        >
                          {t("button.buy")}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="acessorios" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {produtos.acessorios.map((produto) => (
                <Card
                  key={produto.id}
                  className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={produto.imagem || "/placeholder.svg"}
                      fill
                      alt={language === "pt-BR" ? produto.nome : produto.nomeEn}
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 border-t">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold">{language === "pt-BR" ? produto.nome : produto.nomeEn}</h3>
                      <p className="text-zinc-500 text-sm">
                        {language === "pt-BR" ? produto.descricao : produto.descricaoEn}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-salto-red">R$ {produto.preco.toFixed(2)}</span>
                        <Button
                          size="sm"
                          className="bg-salto-green hover:bg-salto-green/90 text-white"
                          onClick={() => handleWhatsAppClick(language === "pt-BR" ? produto.nome : produto.nomeEn)}
                        >
                          {t("button.buy")}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="kits" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {produtos.kits.map((produto) => (
                <Card
                  key={produto.id}
                  className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={produto.imagem || "/placeholder.svg"}
                      fill
                      alt={language === "pt-BR" ? produto.nome : produto.nomeEn}
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 border-t">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold">{language === "pt-BR" ? produto.nome : produto.nomeEn}</h3>
                      <p className="text-zinc-500 text-sm">
                        {language === "pt-BR" ? produto.descricao : produto.descricaoEn}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-salto-red">R$ {produto.preco.toFixed(2)}</span>
                        <Button
                          size="sm"
                          className="bg-salto-green hover:bg-salto-green/90 text-white"
                          onClick={() => handleWhatsAppClick(language === "pt-BR" ? produto.nome : produto.nomeEn)}
                        >
                          {t("button.buy")}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Como Comprar */}
      <div className="bg-zinc-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("products.howToBuy")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-salto-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">{t("products.howToBuy.step1")}</h3>
              <p className="text-zinc-500">{t("products.howToBuy.step1.description")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-salto-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">{t("products.howToBuy.step2")}</h3>
              <p className="text-zinc-500">{t("products.howToBuy.step2.description")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-salto-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">{t("products.howToBuy.step3")}</h3>
              <p className="text-zinc-500">{t("products.howToBuy.step3.description")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-zinc-900 text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">{t("products.questions.title")}</h2>
          <p className="max-w-2xl mx-auto mb-8 text-zinc-300">{t("products.questions.description")}</p>
          <Button asChild size="lg" className="bg-salto-green hover:bg-salto-green/90 text-white">
            <Link href="/#redes">{t("products.questions.button")}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
