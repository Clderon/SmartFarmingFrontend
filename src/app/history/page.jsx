import { Navigation } from "@/components/template/Navigation"
import { HistoricalAnalysis } from "@/components/template/historical-analisis";
import {Footer} from "@/components/template/Footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HistoricalAnalysis/>
      <Footer />
    </main>
  )
}

