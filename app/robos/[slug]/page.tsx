import type { Metadata } from "next"
import { notFound } from "next/navigation"
import RoboDetailPage from "./RoboDetailPage"
import { getRobotBySlug, getAllRobotSlugs } from "@/lib/robots-data"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const robot = getRobotBySlug(params.slug)

  if (!robot) {
    return {
      title: "Robô não encontrado | Salto Botz",
    }
  }

  return {
    title: `${robot.nome} | Salto Botz`,
    description: `Conheça ${robot.nome}, um robô de ${robot.categoria} da equipe Salto Botz. ${robot.especialidade}.`,
  }
}

export async function generateStaticParams() {
  const slugs = getAllRobotSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function RoboPage({ params }: { params: { slug: string } }) {
  const robot = getRobotBySlug(params.slug)

  if (!robot) {
    notFound()
  }

  return <RoboDetailPage robot={robot} />
}
