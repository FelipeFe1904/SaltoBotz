import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function ProdutosPreview() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="section-heading">Nossos Produtos</h2>
        <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
          Adquira nossos produtos e ajude a financiar nossos projetos e competições.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Camiseta */}
        <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-[200px] overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=200"
              fill
              alt="Camiseta Salto Botz"
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-4 border-t">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Camiseta Salto Botz</h3>
              <p className="text-zinc-500 text-sm">Camiseta oficial da equipe, 100% algodão</p>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-salto-red">R$ 49,90</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Boné */}
        <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-[200px] overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=200"
              fill
              alt="Boné Salto Botz"
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardContent className="p-4 border-t">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Boné Salto Botz</h3>
              <p className="text-zinc-500 text-sm">Boné ajustável com logo bordado</p>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-salto-red">R$ 39,90</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild className="group">
          <Link href="/produtos" className="flex items-center gap-2">
            Ver Todos os Produtos
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
