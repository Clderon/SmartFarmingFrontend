import Link from "next/link"
import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navigation() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Smart Farming"
                className="h-8 w-8"
              />
              <span className="font-semibold text-[#2E7D32]">Smart Farming</span>
            </Link>
          </div>
          <div className="hidden justify-between md:flex items-center space-x-10">
            <Link href="#" className="text-sm text-black font-medium hover:text-[#2E7D32] transition-colors">
              Inicio
            </Link>
            <Link href="#" className="text-sm text-black font-medium hover:text-[#2E7D32] transition-colors">
              Historial
            </Link>
            <Link href="#" className="text-sm text-black font-medium hover:text-[#2E7D32] transition-colors">
              Informes
            </Link>
            <Link href="#" className="text-sm text-black font-medium hover:text-[#2E7D32] transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="#" className="text-sm text-black font-medium hover:text-[#2E7D32] transition-colors">
              Índices de Vegetación
            </Link>
            <Link href="#" className="text-sm text-black font-medium hover:text-[#2E7D32] transition-colors">
              Suscripciones
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-[#2E7D32] hover:text-[#1B5E20] hover:bg-[#E8F5E9]">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>SF</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  )
}

