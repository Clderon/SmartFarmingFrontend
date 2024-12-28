import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  return (
    <div className="grid min-h-screen grid-cols-2 py-10 px-40 ">
      <div className="relative flex items-center justify-center bg-emerald-800 px-6 pb-10 rounded-l border-t-2 border-l-2 border-b-2 border-slate-500">
        <div className="relative z-10 w-full text-center text-white">
          <h1 className="mb-4 text-4xl font-bold">Bienvenido de Vuelta</h1>
          <p className="mb-8 text-lg">
            Smart Farming le brinda una manera de ¡Analiza cultivos de forma precisa y gratuita con nuestro innovador analizador multiespectral!
          </p>
          <Button
            variant="outline"
            className="w-full max-w-sm border-white hover:bg-white hover:text-emerald-800"
            asChild
          >
            <Link href="/register">Register →</Link>
          </Button>
        </div>
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="absolute left-0 top-0 h-32 w-32 rounded-br-full bg-emerald-700" />
          <div className="absolute bottom-0 right-0 h-32 w-32 rounded-tl-full bg-emerald-700" />
        </div>
      </div>
      <div className="flex items-center justify-center px-6 py-10 rounded-r border-t-2 border-r-2 border-b-2 border-slate-500">
        <Card className="w-full max-w-sm border-none p-8 shadow-none">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold text-emerald-800">Inicio De Sesión</h2>
              <p className="text-gray-600">
                Smart Farming le brinda herramientas para poder monitorear tus cultivos y mediante imágenes multiespectrales
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" placeholder="E-mail" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" required type="password" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Recordarme
                  </label>
                </div>
                <Link className="text-sm text-emerald-800 underline" href="/recovery">
                  ¿Olvidaste Tu Contraseña?
                </Link>
              </div>
              <Button to="/home" className="w-full bg-emerald-800 hover:bg-emerald-700">
                Login →
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

