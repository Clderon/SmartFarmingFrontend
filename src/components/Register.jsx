import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Register() {
  return (
    <div className="grid min-h-screen grid-cols-2 py-10 px-40 ">
      
      <div className="flex items-center justify-center px-6 py-10">
        <Card className="w-full max-w-sm border-none p-8 shadow-none">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-emerald-800">Registro</h1>
              <p className="text-gray-600">
                Smart Farming le brinda herramientas para poder monitorear tus cultivos y mediante imágenes multiespectrales
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="usuario">Usuario</Label>
                <Input id="usuario" placeholder="Usuario" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" placeholder="E-mail" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" required type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Password</Label>
                <Input id="confirm-password" required type="password" />
              </div>
              <Button className="w-full bg-emerald-800 hover:bg-emerald-700">
                Register
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">O</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continuar con google
              </Button>
            </div>
          </div>
        </Card>
      </div>
      <div className="relative flex items-center justify-center bg-emerald-800 px-6 pb-10">
        <div className="relative z-10 w-full text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">Registrate para empezar</h2>
          <p className="mb-8 text-lg">
            Smart Farming le brinda una manera de ¡Analiza cultivos de forma precisa y gratuita con nuestro innovador analizador multiespectral!
          </p>
          <Button
            variant="outline"
            className="w-full max-w-sm border-white hover:bg-white hover:text-emerald-800"
            asChild
          >
            <Link href="/login">← Login</Link>
          </Button>
        </div>
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-bl-[100%] bg-emerald-700" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-tr-[100%] bg-emerald-700" />
        </div>
      </div>
        
    </div>
  )
}

