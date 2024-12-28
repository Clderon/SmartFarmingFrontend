"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function PasswordRecoveryForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Manejar la lógica de recuperación de contraseña aquí
    console.log("Correo de recuperación:", email)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-4">
      <Card className="w-full max-w-3xl grid md:grid-cols-2 overflow-hidden">
        <div className="relative p-6 bg-white flex items-center justify-center">
          <div className="relative w-full aspect-square">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Security illustration"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
        <CardContent className="p-6 space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-green-700">
              Recuperación De Contraseña
            </h1>
            <p className="text-sm text-gray-600">
              Por favor ingresa la dirección del correo electrónico
              para resetear tu contraseña
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
              >
                Login
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-green-700 hover:bg-green-800"
              >
                Siguiente →
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
