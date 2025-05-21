"use client"

import Link from "next/link"
import { Instagram, Youtube, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function RedesSociaisSection() {
  const { language } = useLanguage()

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/saltobotz/",
      icon: <Instagram className="h-8 w-8" />,
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
      description:
        language === "pt-BR"
          ? "Acompanhe nosso dia a dia, bastidores e novidades"
          : "Follow our daily activities, behind the scenes and news",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/saltobotz",
      icon: <Youtube className="h-8 w-8" />,
      color: "bg-red-600",
      description:
        language === "pt-BR"
          ? "Vídeos de competições, tutoriais e projetos"
          : "Competition videos, tutorials and projects",
    },
    {
      name: "GitHub",
      url: "https://github.com/saltobotz",
      icon: <Github className="h-8 w-8" />,
      color: "bg-zinc-900",
      description:
        language === "pt-BR"
          ? "Códigos abertos e documentação dos nossos projetos"
          : "Open source code and documentation of our projects",
    },
  ]

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="section-heading">{language === "pt-BR" ? "Nossas Redes" : "Our Networks"}</h2>
        <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
          {language === "pt-BR"
            ? "Conecte-se conosco e acompanhe nosso trabalho nas redes sociais"
            : "Connect with us and follow our work on social media"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {socialLinks.map((social) => (
          <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group">
            <div className="flex flex-col items-center p-8 rounded-xl transition-all duration-300 bg-white hover:shadow-xl border border-transparent hover:border-gray-200 group-hover:scale-105">
              <div className={`${social.color} p-4 rounded-full text-white mb-4`}>{social.icon}</div>
              <h3 className="text-xl font-bold mb-2">{social.name}</h3>
              <p className="text-zinc-500 text-center">{social.description}</p>
              <div className="mt-4 text-salto-green font-medium">{language === "pt-BR" ? "Seguir →" : "Follow →"}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-zinc-100 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-salto-green"
          >
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">{language === "pt-BR" ? "Contato Direto" : "Direct Contact"}</h3>
        <p className="text-zinc-500 mb-4">
          {language === "pt-BR"
            ? "Para assuntos específicos, entre em contato pelo email:"
            : "For specific matters, contact us by email:"}
        </p>
        <a href="mailto:contato@saltobotz.com.br" className="text-xl font-medium text-salto-green hover:underline">
          contato@saltobotz.com.br
        </a>
      </div>
    </div>
  )
}
