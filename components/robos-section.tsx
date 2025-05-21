import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Award } from "lucide-react"

export default function RobosSection() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="section-heading">Nossos Robôs</h2>
        <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
          Conheça nossas criações que competem em torneios nacionais e internacionais de combate de robôs.
        </p>
      </div>

      <Tabs defaultValue="pesado" className="mt-8">
        <div className="flex justify-center">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="pesado">Peso Pesado</TabsTrigger>
            <TabsTrigger value="medio">Peso Médio</TabsTrigger>
            <TabsTrigger value="leve">Peso Leve</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="pesado" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <Trophy className="h-4 w-4 text-salto-green" />
                    <span className="text-xs text-zinc-500">3 pódios</span>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm mb-4">Especialidade: Arma giratória de alta potência</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <Award className="h-3 w-3 text-salto-red" />5 competições
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-salto-red hover:text-white hover:border-salto-red transition-colors"
                  >
                    Ver Detalhes
                  </Button>
                </div>
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
                    <Trophy className="h-4 w-4 text-salto-green" />
                    <span className="text-xs text-zinc-500">2 pódios</span>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm mb-4">Especialidade: Martelo pneumático de impacto</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <Award className="h-3 w-3 text-salto-red" />4 competições
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-salto-red hover:text-white hover:border-salto-red transition-colors"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="medio" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Robô 1 */}
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
                    <Trophy className="h-4 w-4 text-salto-green" />
                    <span className="text-xs text-zinc-500">4 pódios</span>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm mb-4">Especialidade: Sistema de flipper hidráulico</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <Award className="h-3 w-3 text-salto-red" />8 competições
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-salto-green hover:text-white hover:border-salto-green transition-colors"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Robô 2 */}
            <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Robô Vortex"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-salto-green text-white text-xs font-bold px-2 py-1 rounded-full">
                  55kg
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">Vortex</h3>
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4 text-salto-green" />
                    <span className="text-xs text-zinc-500">3 pódios</span>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm mb-4">Especialidade: Discos giratórios duplos</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <Award className="h-3 w-3 text-salto-red" />6 competições
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-salto-green hover:text-white hover:border-salto-green transition-colors"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="leve" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Robô 1 */}
            <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Robô Relâmpago"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-zinc-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                  30kg
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">Relâmpago</h3>
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4 text-salto-green" />
                    <span className="text-xs text-zinc-500">6 pódios</span>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm mb-4">Especialidade: Alta velocidade e manobras</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <Award className="h-3 w-3 text-salto-red" />
                      10 competições
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Robô 2 */}
            <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Robô Faísca"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-zinc-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                  25kg
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">Faísca</h3>
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4 text-salto-green" />
                    <span className="text-xs text-zinc-500">4 pódios</span>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm mb-4">Especialidade: Arma vertical giratória</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1">
                      <Award className="h-3 w-3 text-salto-red" />7 competições
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-12">
        <Button asChild className="bg-salto-red hover:bg-salto-red/90 text-white">
          <Link href="/galeria">Ver Galeria Completa</Link>
        </Button>
      </div>
    </div>
  )
}
