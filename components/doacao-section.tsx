"use client"

import { useState } from "react"
import Image from "next/image"
import { Copy, Check, Heart, Award, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Adicionar importação do contexto de idioma
import { useLanguage } from "@/contexts/language-context"

export default function DoacaoSection() {
  const [copied, setCopied] = useState(false)
  const pixKey = "saltobotz@gmail.com"
  const { language } = useLanguage()

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const beneficios = [
    {
      icon: <Heart className="h-8 w-8 text-salto-red" />,
      title: language === "pt-BR" ? "Apoie o Futuro" : "Support the Future",
      description:
        language === "pt-BR"
          ? "Sua doação ajuda a formar novos talentos em robótica e tecnologia"
          : "Your donation helps to train new talents in robotics and technology",
    },
    {
      icon: <Award className="h-8 w-8 text-salto-green" />,
      title: language === "pt-BR" ? "Competições" : "Competitions",
      description:
        language === "pt-BR"
          ? "Contribua para que possamos participar de competições nacionais e internacionais"
          : "Contribute so we can participate in national and international competitions",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: language === "pt-BR" ? "Inovação" : "Innovation",
      description:
        language === "pt-BR"
          ? "Financie o desenvolvimento de novas tecnologias e soluções em robótica"
          : "Finance the development of new technologies and solutions in robotics",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: language === "pt-BR" ? "Comunidade" : "Community",
      description:
        language === "pt-BR"
          ? "Fortaleça a comunidade de robótica no Brasil e inspire novos estudantes"
          : "Strengthen the robotics community in Brazil and inspire new students",
    },
  ]

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {language === "pt-BR" ? "Apoie Nosso Projeto" : "Support Our Project"}
          </h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {language === "pt-BR"
              ? "Sua contribuição é fundamental para mantermos nossos projetos e participarmos de competições."
              : "Your contribution is essential to maintain our projects and participate in competitions."}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="flex flex-col space-y-6">
          <div className="bg-gradient-to-r from-salto-red to-salto-green p-0.5 rounded-xl">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">{language === "pt-BR" ? "Por que doar?" : "Why donate?"}</h3>
              <div className="grid gap-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1">{beneficio.icon}</div>
                    <div>
                      <h4 className="font-semibold">{beneficio.title}</h4>
                      <p className="text-zinc-500 text-sm">{beneficio.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                <p className="text-sm text-zinc-600 italic">
                  {language === "pt-BR"
                    ? '"Cada doação nos aproxima de mais uma conquista. Com seu apoio, podemos continuar desenvolvendo tecnologia de ponta e representando o Brasil em competições internacionais."'
                    : '"Each donation brings us closer to another achievement. With your support, we can continue developing cutting-edge technology and representing Brazil in international competitions."'}
                </p>
                <p className="text-right text-sm font-medium mt-2">
                  {language === "pt-BR" ? "— Equipe Salto Botz" : "— Salto Botz Team"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Tabs defaultValue="pix" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pix">{language === "pt-BR" ? "Doação via PIX" : "Donation via PIX"}</TabsTrigger>
              <TabsTrigger value="outros">{language === "pt-BR" ? "Outras Formas" : "Other Ways"}</TabsTrigger>
            </TabsList>
            <TabsContent value="pix" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative h-[200px] w-[200px] bg-white p-4 rounded-lg border-2 border-salto-green">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        fill
                        alt="QR Code PIX"
                        className="object-contain"
                      />
                      <div className="absolute -top-3 -right-3 bg-salto-green text-white text-xs font-bold px-2 py-1 rounded-full">
                        {language === "pt-BR" ? "Escaneie-me" : "Scan me"}
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2">{language === "pt-BR" ? "Chave PIX" : "PIX Key"}</h3>
                      <div className="flex items-center justify-center gap-2 bg-muted p-2 rounded-md">
                        <code className="text-sm">{pixKey}</code>
                        <Button variant="ghost" size="icon" onClick={handleCopyPix} className="h-8 w-8">
                          {copied ? <Check className="h-4 w-4 text-salto-green" /> : <Copy className="h-4 w-4" />}
                          <span className="sr-only">{language === "pt-BR" ? "Copiar chave PIX" : "Copy PIX key"}</span>
                        </Button>
                      </div>
                      <p className="text-sm text-zinc-500 mt-4">
                        {language === "pt-BR"
                          ? "Escaneie o QR Code ou copie a chave PIX para fazer sua doação. Qualquer valor é bem-vindo e ajudará a equipe a continuar desenvolvendo projetos inovadores."
                          : "Scan the QR Code or copy the PIX key to make your donation. Any amount is welcome and will help the team continue developing innovative projects."}
                      </p>

                      <div className="mt-6 grid grid-cols-3 gap-2">
                        <Button variant="outline" className="w-full">
                          R$ 10
                        </Button>
                        <Button variant="outline" className="w-full">
                          R$ 25
                        </Button>
                        <Button variant="outline" className="w-full">
                          R$ 50
                        </Button>
                      </div>

                      <Button className="w-full mt-2 bg-salto-green hover:bg-salto-green/90 text-white">
                        {language === "pt-BR" ? "Doar Agora" : "Donate Now"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="outros" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">
                      {language === "pt-BR" ? "Outras Formas de Apoio" : "Other Ways to Support"}
                    </h3>
                    <p className="text-sm text-zinc-500">
                      {language === "pt-BR"
                        ? "Além da doação via PIX, você também pode nos apoiar das seguintes formas:"
                        : "In addition to PIX donation, you can also support us in the following ways:"}
                    </p>

                    <div className="space-y-4">
                      <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold mb-2">
                          {language === "pt-BR" ? "Transferência Bancária" : "Bank Transfer"}
                        </h4>
                        <p className="text-sm text-zinc-500 mb-2">
                          {language === "pt-BR"
                            ? "Você pode fazer uma transferência para nossa conta bancária:"
                            : "You can make a transfer to our bank account:"}
                        </p>
                        <div className="text-sm">
                          <p>{language === "pt-BR" ? "Banco: 000 - Banco Exemplo" : "Bank: 000 - Example Bank"}</p>
                          <p>{language === "pt-BR" ? "Agência: 0000" : "Branch: 0000"}</p>
                          <p>{language === "pt-BR" ? "Conta: 00000-0" : "Account: 00000-0"}</p>
                          <p>CNPJ: 00.000.000/0001-00</p>
                          <p>
                            {language === "pt-BR"
                              ? "Titular: Associação Salto Botz"
                              : "Account Holder: Salto Botz Association"}
                          </p>
                        </div>
                      </div>

                      <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold mb-2">
                          {language === "pt-BR" ? "Doação de Materiais" : "Material Donation"}
                        </h4>
                        <p className="text-sm text-zinc-500">
                          {language === "pt-BR"
                            ? "Aceitamos doações de materiais e equipamentos que possam ser úteis para nossos projetos. Entre em contato conosco para mais informações."
                            : "We accept donations of materials and equipment that may be useful for our projects. Contact us for more information."}
                        </p>
                        <Button className="mt-4 w-full bg-salto-green hover:bg-salto-green/90 text-white">
                          {language === "pt-BR" ? "Entrar em Contato" : "Contact Us"}
                        </Button>
                      </div>

                      <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-semibold mb-2">{language === "pt-BR" ? "Voluntariado" : "Volunteering"}</h4>
                        <p className="text-sm text-zinc-500">
                          {language === "pt-BR"
                            ? "Se você tem conhecimentos em robótica, eletrônica, programação ou design, pode nos ajudar como voluntário."
                            : "If you have knowledge in robotics, electronics, programming, or design, you can help us as a volunteer."}
                        </p>
                        <Button className="mt-4 w-full bg-salto-green hover:bg-salto-green/90 text-white">
                          {language === "pt-BR" ? "Quero ser Voluntário" : "I Want to Volunteer"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
