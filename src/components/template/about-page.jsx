import Image from "next/image"

const teamMembers = [
  {
    name: "Mariela Hernandez",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "Miguel Calderon",
    role: "Engineering Manager",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "Lana Steiner",
    role: "Product Manager",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    name: "Karolay Garcia",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=80&width=80"
  }
]

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Team Section */}
      <section className="text-center mb-24">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">Nuestro Equipo</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Nuestra filosofía es simple: reunir un equipo diverso y apasionado, y fomentar
          una cultura que les permita hacer su mejor trabajo. En Smart Farming, creemos
          que la diversidad de pensamiento y experiencia es fundamental para la
          innovación y el éxito.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-purple-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">Mision</h2>
          <p className="text-gray-600">
            Nuestra filosofía es simple: reunir un equipo diverso y
            apasionado, y fomentar una cultura que les permita hacer su
            mejor trabajo. En Smart Farming, creemos que la diversidad de
            pensamiento y experiencia es fundamental para la innovación y
            el éxito.
          </p>
        </div>
        <div className="relative aspect-[4/3] bg-red-400 rounded-lg">
          <Image
            src="/images/mision.png?height=400&width=533"
            alt="Mission illustration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] bg-red-400 rounded-lg">
          <Image
            src="/images/vision.png?height=400&width=533"
            alt="Mission illustration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">Vision</h2>
          <p className="text-gray-600">
            Nuestro equipo de transformar la agricultura mediante
            integrando tecnologías avanzadas, como drones e imágenes
            multiespectrales, y el procesamiento de datos en Python. Nos
            comprometemos a ofrecer soluciones innovadoras y precisas
            para que los agricultores gestionen sus plantaciones de
            manera eficiente, sostenible y rentable.
          </p>
        </div>
      </section>
    </div>
  )
}

