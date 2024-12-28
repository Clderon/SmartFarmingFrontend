'use client'

import { useState } from "react"
import { Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function FileUpload() {
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2 p-8">
        <Upload className="h-10 w-10 text-gray-400" />
        <p className="text-sm text-gray-600">Carga la imagen para analizar</p>
        <div className="mt-4">
          <label htmlFor="file-upload">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full hover:bg-[#E8F5E9] hover:text-[#2E7D32] transition-colors duration-200" 
              asChild
            >
              <span>+</span>
            </Button>
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <Button 
        className="w-full bg-[#2A8C4A] hover:bg-[#1B5E20] transition-colors duration-200 text-white font-medium"
        disabled={!file}
      >
        Analizar
      </Button>
    </div>
  )
}
