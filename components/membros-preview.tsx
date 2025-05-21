import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Wrench, Zap } from "lucide-react"

export default function MembrosPreview() {
  const membrosPreview = [
    {
      id: 1,
      nome: "Carlos Silva",
      cargo: "Capitão",
      area: "Mecânica",
      foto: "/placeholder.svg?height=300&width=300",
      icone: <Wrench className="h-4 w-4" />,
    },
    {
      id: 2,
      nome: "Ana Oliveira",
      cargo: "Vice-Capitã",
      area: "Elétrica",
      foto: "/placeholder.svg?height=300&width=300",
      icone: <Zap className="h-4 w-4" />,
    },
    {
      id: 3,
      nome: "Pedro Santos",
      cargo: "Desenvolvedor",
      area: "Computação",
      foto: "/placeholder.svg?height=300&width=300",
      icone: <Code className="h-4 w-4" />,
    },
  ]

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="section-heading">Nossa Equipe</h2>
        <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
          Conheça as pessoas por trás dos robôs da Salto Botz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {membrosPreview.map((membro) => (
          <div key={membro.id} className="relative group">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src={membro.foto || "/placeholder.svg"} alt={membro.nome} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-2 right-2 bg-zinc-900 text-white rounded-full p-1.5">{membro.icone}</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold">{membro.nome}</h3>
              <p className="text-sm text-zinc-300">{membro.cargo}</p>
              <div className="mt-2">
                <span
                  className={`area-badge ${
                    membro.area === "Mecânica"
                      ? "area-badge-mecanica"
                      : membro.area === "Elétrica"
                        ? "area-badge-eletrica"
                        : "area-badge-computacao"
                  }`}
                >
                  {membro.area}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 group">
          <Link href="/membros" className="flex items-center gap-2">
            Conhecer Toda a Equipe
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
