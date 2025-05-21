import type { Metadata } from "next"
import RobosClientPage from "./RobosClientPage"

export const metadata: Metadata = {
  title: "Robôs | Salto Botz",
  description: "Conheça os robôs da equipe Salto Botz que competem em torneios nacionais e internacionais.",
}

export default function RobosPage() {
  return <RobosClientPage />
}
