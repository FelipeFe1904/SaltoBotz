import type { Metadata } from "next"
import CompeticoesClient from "./CompeticoesClient"

export const metadata: Metadata = {
  title: "Competições | Salto Botz",
  description: "Acompanhe a participação da equipe Salto Botz em competições nacionais e internacionais de robótica.",
}

export default function CompeticoesPage() {
  return <CompeticoesClient />
}
