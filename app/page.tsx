"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import DoacaoSection from "@/components/doacao-section"
import RedesSociaisSection from "@/components/redes-sociais-section"
import InstagramFeed from "@/components/instagram-feed"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { language } = useLanguage()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Estatísticas */}
      <section className="w-full py-8 bg-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-salto-green">10+</div>
              <div className="text-sm text-zinc-400 mt-1">
                {language === "pt-BR" ? "Robôs Construídos" : "Robots Built"}
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-salto-green">15+</div>
              <div className="text-sm text-zinc-400 mt-1">{language === "pt-BR" ? "Competições" : "Competitions"}</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-salto-green">8+</div>
              <div className="text-sm text-zinc-400 mt-1">{language === "pt-BR" ? "Prêmios" : "Awards"}</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-salto-green">20+</div>
              <div className="text-sm text-zinc-400 mt-1">{language === "pt-BR" ? "Membros" : "Members"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="section-heading">{language === "pt-BR" ? "Nossa História" : "Our History"}</h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
              {language === "pt-BR"
                ? "A Salto Botz nasceu da paixão por robótica e tecnologia. Nossa equipe foi formada por estudantes e entusiastas que compartilham o mesmo objetivo: criar robôs de combate inovadores e competitivos."
                : "Salto Botz was born from a passion for robotics and technology. Our team was formed by students and enthusiasts who share the same goal: to create innovative and competitive combat robots."}
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/equipe-salto-botz.jpeg"
                fill
                alt={language === "pt-BR" ? "Equipe Salto Botz" : "Salto Botz Team"}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
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
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">{language === "pt-BR" ? "Nossa Missão" : "Our Mission"}</h3>
                    </div>
                    <p className="text-zinc-500 mt-2">
                      {language === "pt-BR"
                        ? "Desenvolver tecnologia de ponta em robótica de combate, inspirando novas gerações e promovendo o conhecimento técnico e científico."
                        : "Develop cutting-edge technology in combat robotics, inspiring new generations and promoting technical and scientific knowledge."}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-salto-red p-1 text-white">
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
                          <circle cx="12" cy="8" r="7"></circle>
                          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">{language === "pt-BR" ? "Nossa Visão" : "Our Vision"}</h3>
                    </div>
                    <p className="text-zinc-500 mt-2">
                      {language === "pt-BR"
                        ? "Ser referência nacional em robótica de combate, participando das principais competições e desenvolvendo soluções inovadoras."
                        : "To be a national reference in combat robotics, participating in major competitions and developing innovative solutions."}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-zinc-900 p-1 text-white">
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
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                          <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                          <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                          <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                          <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                          <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">{language === "pt-BR" ? "Nossos Valores" : "Our Values"}</h3>
                    </div>
                    <p className="text-zinc-500 mt-2">
                      {language === "pt-BR"
                        ? "Inovação, trabalho em equipe, resiliência, ética e paixão pela tecnologia são os pilares que sustentam nosso trabalho."
                        : "Innovation, teamwork, resilience, ethics, and passion for technology are the pillars that support our work."}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Uma nova equipe */}
      <section id="patrocinar" className="w-full py-16 md:py-24 lg:py-32 bg-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {language === "pt-BR" ? "Uma nova equipe" : "Become a Sponsor"}
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {language === "pt-BR"
                    ? "Junte-se a nós e faça parte desta jornada de inovação e tecnologia. Sua empresa pode se beneficiar de:"
                    : "Join us and be part of this journey of innovation and technology. Your company can benefit from:"}
                </p>
              </div>
              <ul className="grid gap-2 py-4">
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
                      ? "Visibilidade em mídias especializadas e eventos"
                      : "Visibility in specialized media and events"}
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
            </div>
            <div className="rounded-lg overflow-hidden">
              <div className="relative h-[300px] lg:h-[400px]">
                <Image
                  src="/images/fotobonitinha.png"
                  fill
                  alt={language === "pt-BR" ? "Equipe Salto Botz com patrocinadores" : "Salto Botz team with sponsors"}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Posts */}
      <InstagramFeed />

      {/* Destaques */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="section-heading">{language === "pt-BR" ? "Destaques" : "Highlights"}</h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
              {language === "pt-BR"
                ? "Conheça nossos principais robôs e competições."
                : "Discover our main robots and competitions."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Robôs */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-[200px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/mini-joker/mini-joker-cover.jpeg"
                  fill
                  alt={language === "pt-BR" ? "Robôs" : "Robots"}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{language === "pt-BR" ? "Nossos Robôs" : "Our Robots"}</h3>
              <p className="text-zinc-500 text-sm mb-4">
                {language === "pt-BR"
                  ? "Conheça as máquinas que representam a Salto Botz em competições nacionais e internacionais."
                  : "Meet the machines that represent Salto Botz in national and international competitions."}
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/robos" className="flex items-center justify-center gap-2">
                  {language === "pt-BR" ? "Ver Robôs" : "See Robots"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Competições */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-[200px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/mini-joker/mini-joker-cover.jpeg"
                  fill
                  alt={language === "pt-BR" ? "Competições" : "Competitions"}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">
                {language === "pt-BR" ? "Nossas Competições" : "Our Competitions"}
              </h3>
              <p className="text-zinc-500 text-sm mb-4">
                {language === "pt-BR"
                  ? "Acompanhe nossa participação em competições nacionais e internacionais de robótica."
                  : "Follow our participation in national and international robotics competitions."}
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/competicoes" className="flex items-center justify-center gap-2">
                  {language === "pt-BR" ? "Ver Competições" : "See Competitions"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seja um Patrocinador */}
      <section id="patrocinar" className="w-full py-16 md:py-24 lg:py-32 bg-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {language === "pt-BR" ? "Seja um Patrocinador" : "Become a Sponsor"}
                </h2>
                <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {language === "pt-BR"
                    ? "Junte-se a nós e faça parte desta jornada de inovação e tecnologia. Sua empresa pode se beneficiar de:"
                    : "Join us and be part of this journey of innovation and technology. Your company can benefit from:"}
                </p>
              </div>
              <ul className="grid gap-2 py-4">
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
                      ? "Visibilidade em mídias especializadas e eventos"
                      : "Visibility in specialized media and events"}
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
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-salto-green hover:bg-salto-green/90 text-white">
                  <Link href="/patrocinadores">{language === "pt-BR" ? "Ver Patrocinadores" : "See Sponsors"}</Link>
                </Button>
                <Button asChild size="lg" className="bg-salto-red hover:bg-salto-red/90 text-white">
                  <Link href="#redes">{language === "pt-BR" ? "Entre em Contato" : "Contact Us"}</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <div className="relative h-[300px] lg:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  fill
                  alt={language === "pt-BR" ? "Equipe Salto Botz com patrocinadores" : "Salto Botz team with sponsors"}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doações */}
      <section id="doacoes" className="w-full py-16 md:py-24 lg:py-32">
        <DoacaoSection />
      </section>

      {/* Redes Sociais */}
      <section id="redes" className="w-full py-16 md:py-24 lg:py-32 bg-zinc-50">
        <RedesSociaisSection />
      </section>
    </div>
  )
}
