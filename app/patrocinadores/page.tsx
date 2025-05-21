import type { Metadata } from "next"
import PatrocinadoresClient from "./PatrocinadoresClient"

export const metadata: Metadata = {
  title: "Patrocinadores | Salto Botz",
  description: "Conheça as empresas e instituições que apoiam a equipe Salto Botz.",
}

// Modificar para um componente cliente para usar o contexto de idioma
export default function PatrocinadoresPage() {
  return <PatrocinadoresClient />
}
