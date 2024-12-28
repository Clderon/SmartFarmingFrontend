import { Crop, ImageIcon, Maximize } from 'lucide-react'

export function Features() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            
            <h3 className="mt-4 text-xl font-semibold text-green-600 ">
              Analizar cultivos es más fácil y efectivo.
            </h3>
            <p className="mt-2 text-gray-600">
              Con nuestro sistema podrás analizar cultivos y optimizar tu trabajo de manera eficiente!
            </p>
          </div>
          <div className="text-center">
            
            <h3 className="mt-4 text-xl font-semibold text-green-600">
              Analiza tanto imágenes multiespectrales satelitales y de drones
            </h3>
            <p className="mt-2 text-gray-600">
              Analiza tanto imágenes multiespectrales satelitales y de drones. Obtén resultados precisos.
            </p>
          </div>
          <div className="text-center">
            
            <h3 className="mt-4 text-xl font-semibold text-green-600">
              Maximiza el uso de tu terreno agrícola
            </h3>
            <p className="mt-2 text-gray-600">
              Optimiza la distribución de tus cultivos en el terreno. Obtén información valiosa para maximizar el metro cuadrado de tu tierra.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

