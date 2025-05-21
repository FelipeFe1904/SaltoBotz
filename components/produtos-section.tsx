import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProdutosSection() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossos Produtos</h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Adquira nossos produtos e ajude a financiar nossos projetos e competições.
          </p>
        </div>
      </div>

      <Tabs defaultValue="camisetas" className="mt-8">
        <div className="flex justify-center">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="camisetas">Camisetas</TabsTrigger>
            <TabsTrigger value="acessorios">Acessórios</TabsTrigger>
            <TabsTrigger value="kits">Kits</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="camisetas" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Camiseta 1 */}
            <Card className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Camiseta Salto Botz Preta"
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Camiseta Salto Botz Preta</h3>
                  <p className="text-zinc-500 text-sm">Camiseta oficial da equipe, 100% algodão</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-salto-red">R$ 49,90</span>
                    <div className="flex items-center gap-2">
                      <select className="h-8 rounded-md border border-input bg-background px-2 text-xs">
                        <option>P</option>
                        <option>M</option>
                        <option>G</option>
                        <option>GG</option>
                      </select>
                      <Button size="sm" className="bg-salto-green hover:bg-salto-green/90">
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Camiseta 2 */}
            <Card className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Camiseta Salto Botz Branca"
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Camiseta Salto Botz Branca</h3>
                  <p className="text-zinc-500 text-sm">Camiseta oficial da equipe, 100% algodão</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-salto-red">R$ 49,90</span>
                    <div className="flex items-center gap-2">
                      <select className="h-8 rounded-md border border-input bg-background px-2 text-xs">
                        <option>P</option>
                        <option>M</option>
                        <option>G</option>
                        <option>GG</option>
                      </select>
                      <Button size="sm" className="bg-salto-green hover:bg-salto-green/90">
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Camiseta 3 */}
            <Card className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Camiseta Salto Botz Verde"
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Camiseta Salto Botz Verde</h3>
                  <p className="text-zinc-500 text-sm">Camiseta oficial da equipe, 100% algodão</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-salto-red">R$ 49,90</span>
                    <div className="flex items-center gap-2">
                      <select className="h-8 rounded-md border border-input bg-background px-2 text-xs">
                        <option>P</option>
                        <option>M</option>
                        <option>G</option>
                        <option>GG</option>
                      </select>
                      <Button size="sm" className="bg-salto-green hover:bg-salto-green/90">
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Camiseta 4 */}
            <Card className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Camiseta Salto Botz Vermelha"
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Camiseta Salto Botz Vermelha</h3>
                  <p className="text-zinc-500 text-sm">Camiseta oficial da equipe, 100% algodão</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-salto-red">R$ 49,90</span>
                    <div className="flex items-center gap-2">
                      <select className="h-8 rounded-md border border-input bg-background px-2 text-xs">
                        <option>P</option>
                        <option>M</option>
                        <option>G</option>
                        <option>GG</option>
                      </select>
                      <Button size="sm" className="bg-salto-green hover:bg-salto-green/90">
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="acessorios" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Boné */}
            <Card className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Boné Salto Botz"
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Boné Salto Botz</h3>
                  <p className="text-zinc-500 text-sm">Boné ajustável com logo bordado</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-salto-red">R$ 39,90</span>
                    <Button size="sm" className="bg-salto-green hover:bg-salto-green/90">
                      Comprar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Adesivos */}
            <Card className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Kit de Adesivos"
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Kit de Adesivos</h3>
                  <p className="text-zinc-500 text-sm">Conjunto com 5 adesivos da equipe</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-salto-red">R$ 15,90</span>
                    <Button size="sm" className="bg-salto-green hover:bg-salto-green/90">
                      Comprar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Caneca */}
            <Card className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Caneca Salto Botz"
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Caneca Salto Botz</h3>
                  <p className="text-zinc-500 text-sm">Caneca de cerâmica com logo da equipe</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-salto-red">R$ 29,90</span>
                    <Button size="sm" className="bg-salto-green hover:bg-salto-green/90">
                      Comprar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chaveiro */}
            <Card className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Chaveiro Salto Botz"
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Chaveiro Salto Botz</h3>
                  <p className="text-zinc-500 text-sm">Chaveiro em metal com logo da equipe</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-salto-red">R$ 19,90</span>
                    <Button size="sm" className="bg-salto-green hover:bg-salto-green/90">
                      Comprar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="kits" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kit Iniciante */}
            <Card className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Kit Iniciante Robótica"
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Kit Iniciante Robótica</h3>
                  <p className="text-zinc-500 text-sm">Kit educacional para montagem de robô simples</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-salto-red">R$ 149,90</span>
                    <Button size="sm" className="bg-salto-green hover:bg-salto-green/90">
                      Comprar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kit Intermediário */}
            <Card className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Kit Intermediário Robótica"
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Kit Intermediário Robótica</h3>
                  <p className="text-zinc-500 text-sm">Kit com componentes para projetos mais avançados</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-salto-red">R$ 299,90</span>
                    <Button size="sm" className="bg-salto-green hover:bg-salto-green/90">
                      Comprar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Miniatura de Robô */}
            <Card className="overflow-hidden bg-white">
              <div className="relative h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  fill
                  alt="Miniatura de Robô"
                  className="object-contain p-4"
                />
              </div>
              <CardContent className="p-4 border-t">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">Miniatura de Robô</h3>
                  <p className="text-zinc-500 text-sm">Réplica em escala do robô Destruidor</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-salto-red">R$ 89,90</span>
                    <Button size="sm" className="bg-salto-green hover:bg-salto-green/90">
                      Comprar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button asChild className="bg-salto-red hover:bg-salto-red/90 text-white">
          <Link href="/loja">Ver Loja Completa</Link>
        </Button>
      </div>
    </div>
  )
}
