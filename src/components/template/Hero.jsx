import Image from "next/image"

export function Hero() {
  return (
    <div className="bg-[#f0f4ed] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight text-center">
              Analizar cultivos<br />
              es mas fácil y<br />
              efectivo.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              ¡Analiza cultivos de forma sencilla y gratuita con nuestro innovador analizador multiespectral!
            </p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-2">
              <div className="flex items-center gap-1 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Análisis de cultivos"
                width={600}
                height={400}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

