import type { Metadata } from "next"
import ProdutosPageClient from "./ProdutosPageClient"

export const metadata: Metadata = {
  title: "Produtos | Salto Botz",
  description: "Adquira produtos oficiais da Salto Botz e ajude a financiar nossos projetos e competições.",
}

export default function ProdutosPage() {
  return <ProdutosPageClient />
}
