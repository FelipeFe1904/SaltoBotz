import type { Metadata } from "next"
import { Suspense } from "react"
import MembrosClient from "./MembrosClient"

export const metadata: Metadata = {
  title: "Membros | Salto Botz",
  description: "Conheça a equipe Salto Botz, formada por estudantes e profissionais apaixonados por robótica.",
}

export default function MembrosPage() {
  return (
    <Suspense fallback={<div className="container py-16 text-center">Carregando...</div>}>
      <MembrosClient />
    </Suspense>
  )
}
