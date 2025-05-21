import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function RobosPreview() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="section-heading">Nossos Robôs</h2>
        <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
          Conheça nossas criações que competem em torneios nacionais e internacionais de combate de robôs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Robô 1 */}
        <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-[200px] overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=200"
              fill
              alt="Robô Destruidor"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 right-2 bg-salto-red text-white text-xs font-bold px-2 py-1 rounded-full">
              120kg
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Destruidor</h3>
              <div className="flex items-center gap-1">
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
                  className="h-4 w-4 text-salto-green"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
                <span className="text-xs text-zinc-500">3 pódios</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm mb-4">Especialidade: Arma giratória de alta potência</p>
          </CardContent>
        </Card>

        {/* Robô 2 */}
        <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-[200px] overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=200"
              fill
              alt="Robô Titã"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 right-2 bg-salto-red text-white text-xs font-bold px-2 py-1 rounded-full">
              110kg
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Titã</h3>
              <div className="flex items-center gap-1">
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
                  className="h-4 w-4 text-salto-green"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
                <span className="text-xs text-zinc-500">2 pódios</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm mb-4">Especialidade: Martelo pneumático de impacto</p>
          </CardContent>
        </Card>

        {/* Robô 3 */}
        <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-[200px] overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=200"
              fill
              alt="Robô Lâmina"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 right-2 bg-salto-green text-white text-xs font-bold px-2 py-1 rounded-full">
              60kg
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Lâmina</h3>
              <div className="flex items-center gap-1">
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
                  className="h-4 w-4 text-salto-green"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
                <span className="text-xs text-zinc-500">4 pódios</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm mb-4">Especialidade: Sistema de flipper hidráulico</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild className="group">
          <Link href="/robos" className="flex items-center gap-2">
            Ver Todos os Robôs
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
