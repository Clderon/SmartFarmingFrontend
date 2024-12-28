import { Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/template/Navigation"
import Footer from "@/components/template/Footer"
import FileUpload from "@/components/fileUpload/FileUpload"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e6ede6]">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto p-8 transition-shadow duration-200 hover:shadow-lg">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-xl font-semibold">Cargar Imagen</h1>
            <FileUpload />
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

