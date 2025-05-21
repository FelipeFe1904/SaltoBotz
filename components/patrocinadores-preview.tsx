import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function PatrocinadoresPreview() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="section-heading">Nossos Patrocinadores</h2>
        <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-6">
          Empresas e instituições que acreditam e apoiam nosso trabalho.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center mt-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="sponsor-card">
            <Image
              src={`/placeholder.svg?height=100&width=200`}
              width={200}
              height={100}
              alt={`Patrocinador ${i}`}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild className="group">
          <Link href="/patrocinadores" className="flex items-center gap-2">
            Ver Todos os Patrocinadores
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
