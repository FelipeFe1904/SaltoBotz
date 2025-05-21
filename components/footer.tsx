"use client"

import Link from "next/link"
import { Youtube, Github, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full bg-zinc-900 text-white">
      {/* Conteúdo principal do footer */}
      <div className="container px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">{t("footer.contact")}:</h3>
            <div className="flex items-center gap-2 text-zinc-400 hover:text-salto-green transition-colors">
              <Mail className="h-5 w-5" />
              <a href="mailto:contato@saltobotz.com.br">contato@saltobotz.com.br</a>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 hover:text-salto-green transition-colors">
              <Phone className="h-5 w-5" />
              <a href="tel:+551146029191">+55 11 4602-9191</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">{t("footer.social")}:</h3>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/saltobotz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-salto-green transition-colors"
              >
                <div className="bg-zinc-800 p-2 rounded-md">
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
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </Link>
              <Link
                href="https://youtube.com/saltobotz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-salto-green transition-colors"
              >
                <div className="bg-zinc-800 p-2 rounded-md">
                  <Youtube className="h-5 w-5" />
                </div>
              </Link>
              <Link
                href="https://github.com/saltobotz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-salto-green transition-colors"
              >
                <div className="bg-zinc-800 p-2 rounded-md">
                  <Github className="h-5 w-5" />
                </div>
              </Link>
            </div>

            <h3 className="text-lg font-bold mt-6">{t("footer.address")}:</h3>
            <address className="not-italic text-sm text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-salto-red" />
                <div>
                  <p>Instituto Federal de São Paulo</p>
                  <p>Campus Salto</p>
                  <p>Av. dos Três Poderes, n° 375</p>
                  <p>Residencial Central Parque, Salto - SP</p>
                  <p>CEP: 13325-047</p>
                </div>
              </div>
            </address>
          </div>

          <div className="h-[200px] md:h-auto relative rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.8888324931723!2d-47.2933646!3d-23.1997236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8a4e0b37beb8f%3A0x6b10c1c0a4a9695!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%2C%20Campus%20Salto!5e0!3m2!1spt-BR!2sbr!4v1712175897927!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6 text-center">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p className="text-xs text-zinc-400 mt-1 flex items-center justify-center gap-1">
            Site desenvolvido por Felipe Ferreira
            <Link
              href="https://github.com/FelipeFe1904"
              target="_blank"
              rel="noopener noreferrer"
              className="text-salto-green hover:underline flex items-center gap-1 ml-1"
            >
              <Github className="h-3 w-3" /> FelipeFe1904
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
