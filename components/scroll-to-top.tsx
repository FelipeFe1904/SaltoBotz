"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  // Quando o pathname mudar, rolar para o topo da página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
