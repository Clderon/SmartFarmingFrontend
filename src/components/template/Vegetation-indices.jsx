export function VegetationIndices() {
  const indices = [
    {
      id: "ndvi",
      title: "NDVI",
      description: "El NDVI mide la densidad y salud de la vegetación mediante la banda de luz visible e infrarroja cercana. Utiliza valores cercanos a +1 indicar superficies sin vegetación.",
      color: "bg-purple-100"
    },
    {
      id: "gndvi",
      title: "GNDVI",
      description: "Similar al NDVI, el GNDVI utiliza la banda verde en lugar del rojo para evaluar el contenido de clorofila y la salud de la planta, siendo útil en la detección temprana de la influencia de nutrientes.",
      color: "bg-blue-100"
    },
    {
      id: "savi",
      title: "SAVI",
      description: "El EVI mejora la sensibilidad en áreas de alta biomasa y reduce los efectos atmosféricos. Utiliza la banda azul para corregir la influencia atmosférica y mejorar los valores.",
      color: "bg-pink-100"
    },
    {
      id: "ndrei",
      title: "NDREI",
      description: "El NDREI utiliza el borde rojo y el infrarrojo cercano para medir la tasa de la vegetación y monitorear su actividad, siendo especialmente útil en la detección temprana de estrés en las plantas.",
      color: "bg-green-100"
    },
    {
      id: "evi",
      title: "EVI",
      description: "El EVI mejora la sensibilidad en áreas de alta biomasa y reduce los efectos atmosféricos y del suelo. Utiliza las bandas del rojo, verde y azul y es útil en regiones remotas.",
      color: "bg-purple-100"
    },
    {
      id: "evir",
      title: "EVIR",
      description: "El EVIR es para áreas semiboscosas sin filtrar los efectos de la niebla sed. Es que facilita su cálculo y aplicación en plataformas de teledetección que no capturan toda banda.",
      color: "bg-blue-100"
    },
    {
      id: "mcari",
      title: "MCARI",
      description: "El MCARI mide la estimación del contenido de clorofila en las plantas y es sensible a los cambios en la variabilidad de la estructura de la hoja. Utiliza las bandas del verde, rojo y borde rojo.",
      color: "bg-pink-100"
    },
    {
      id: "ireci",
      title: "IRECI",
      description: "El IRECI utiliza las bandas del borde rojo y el infrarrojo cercano para evaluar el impacto de la clorofila en la vegetación, proporcionando información sobre la salud de la vegetación.",
      color: "bg-green-100"
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8  w-[100%] mx-auto ">
      <div className="max-w-7xl mx-auto bg-[#244756] rounded px-6 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-50 mb-4">
            Índices De Vegetación Para La Agricultura
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            La integración de análisis basados en datos de satélites puede aumentar el valor social de las aplicaciones agrícolas, así como resolver sus ciertas limitaciones actuales.
          </p>
        </div>
        <div className=" rounded-lg p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indices.map((index) => (
              <div
                key={index.id}
                className="bg-[#2c5668] rounded-lg p-6 text-white space-y-4"
              >
                <div className={`w-14 h-14 p-2 rounded-full ${index.color} flex items-center justify-center mx-auto`}>
                  <span className="text-gray-800 font-semibold ">{index.title}</span>
                </div>
                <h3 className="text-xl font-semibold text-center">{index.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {index.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

