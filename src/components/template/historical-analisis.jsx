"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, FileText, MoreVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const reports = [
  { id: "001", name: "REPORTE N°14-11-001.pdf", size: "145 KB", date: "Jan 4, 2022" },
  { id: "002", name: "REPORTE N°14-11-002.pdf", size: "155 KB", date: "Jan 4, 2022" },
  { id: "003", name: "REPORTE N°14-11-003.pdf", size: "115 KB", date: "Jan 2, 2022" },
  { id: "004", name: "REPORTE N°14-11-004.pdf", size: "167 KB", date: "Jan 6, 2022" },
  { id: "005", name: "REPORTE N°14-11-005.pdf", size: "115 KB", date: "Jan 8, 2022" },
  { id: "006", name: "REPORTE N°14-11-006.pdf", size: "121 KB", date: "Jan 6, 2022" },
  { id: "007", name: "REPORTE N°14-11-007.pdf", size: "200 KB", date: "Jan 4, 2022" },
]

export function HistoricalAnalysis() {
  const [selectedReports, setSelectedReports] = useState([])

  const toggleReport = (reportId) => {
    setSelectedReports((prev) =>
      prev.includes(reportId)
        ? prev.filter((id) => id !== reportId)
        : [...prev, reportId]
    )
  }

  const toggleAll = () => {
    setSelectedReports((prev) =>
      prev.length === reports.length ? [] : reports.map((report) => report.id)
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Historial Análisis</h1>
            <div className="flex gap-3">
              <Button variant="outline">Solicitar análisis</Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Download className="mr-2 h-4 w-4" />
                Descargar Todo
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left">
                    <Checkbox
                      checked={selectedReports.length === reports.length}
                      onCheckedChange={toggleAll}
                    />
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                    File name
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                    Tamaño
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">
                    Fecha
                  </th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr
                    key={report.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">
                      <Checkbox
                        checked={selectedReports.includes(report.id)}
                        onCheckedChange={() => toggleReport(report.id)}
                      />
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{report.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500">{report.size}</td>
                    <td className="py-3 px-4 text-sm text-gray-500">{report.date}</td>
                    <td className="py-3 px-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Descargar</DropdownMenuItem>
                          <DropdownMenuItem>Compartir</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
