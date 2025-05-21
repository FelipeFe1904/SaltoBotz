"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleLanguage}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-salto-green text-white shadow-lg hover:bg-salto-green/90 transition-colors"
        aria-label="Mudar idioma / Change language"
      >
        <Globe className="h-5 w-5" />
        <span className="absolute top-0 right-0 bg-white text-salto-green text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {language === "pt-BR" ? "PT" : "EN"}
        </span>
      </button>
    </div>
  )
}
