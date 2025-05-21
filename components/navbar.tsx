"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  // Modificar o array navItems para incluir "Competições"
  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.robots"), href: "/robos" },
    { name: t("nav.competitions"), href: "/competicoes" },
    { name: t("nav.members"), href: "/membros" },
    /*{ name: t("nav.products"), href: "/produtos" },*/
    /*{ name: t("nav.sponsors"), href: "/patrocinadores" },*/
  ]

  // Detectar scroll para mudar a aparência do navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/salto-botz-logo.png"
              alt="Salto Botz Logo"
              width={180}
              height={72}
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-900 hover:text-salto-green transition-colors"
              onClick={(e) => {
                if (item.href.startsWith("/#")) {
                  e.preventDefault()
                  const id = item.href.substring(2)
                  const element = document.getElementById(id)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-900 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-white md:hidden overflow-y-auto",
          mobileMenuOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-zinc-900 hover:text-salto-green transition-colors"
              onClick={(e) => {
                if (item.href.startsWith("/#")) {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  const id = item.href.substring(2)
                  const element = document.getElementById(id)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                } else {
                  setMobileMenuOpen(false)
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
