import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="images/logo.png"
                alt="Smart Farming"
                className="h-16 w-16 rounded-full"
              />
              <span className="font-semibold">Smart Farming</span>
            </div>
            <p className="text-sm text-gray-400">
              Analizar cultivos<br />
              es más fácil y efectivo.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Servicio</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#">Características</Link></li>
              <li><Link href="#">Tutoriales</Link></li>
              <li><Link href="#">Precios</Link></li>
              <li><Link href="#">Próximamente</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#">Sobre Nosotros</Link></li>
              <li><Link href="#">Contacto</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Recursos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Soporte</Link></li>
              <li><Link href="#">Guías</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#">Términos y condiciones</Link></li>
              <li><Link href="#">Privacidad</Link></li>
              <li><Link href="#">Cookies</Link></li>
              <li><Link href="#">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

