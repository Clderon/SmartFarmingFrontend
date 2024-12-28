import { Navigation } from "@/components/template/Navigation"
import { TechnicalReports } from "@/components/template/technical-reports";
import {Footer} from "@/components/template/Footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <TechnicalReports/>
      <Footer />
    </main>
  )
}

