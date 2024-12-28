import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const features = [
  "Acceso ilimitado",
  "Informes técnicos",
  "Soporte Prioritario"
]

export function PricingCard() {
    return (
      <div className="min-h-screen bg-[#e6e9e3] flex items-center justify-center py-16 px-4">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Suscríbete Ahora y Disfruta de Beneficios Exclusivos
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit for official consequat enim to main purpose. If
          you haven't tried out Flaro App for them help.
        </p>
        <Card className="bg-[#27ae60] text-white max-w-sm mx-auto h-[500px] flex flex-col gap-10 py-4">
            <CardHeader className="pb-4">
                <h3 className="text-lg font-semibold">Premium</h3>
                <p className="text-sm opacity-90">¡Únete a nuestra Suscripción!</p>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold">$100</span>
                <span className="text-lg ml-1 opacity-90">/Mes</span>
                </div>
                <ul className="space-y-3">
                {features.map((feature) => (
                    <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button 
                className="w-full bg-white text-[#27ae60] hover:bg-gray-100 hover:text-[#27ae60]"
                size="lg"
                >
                Obtener
                </Button>
            </CardFooter>
        </Card>
      </div>
    </div>
    
  )
}

