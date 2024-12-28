import { Navigation } from "@/components/template/Navigation"
import { AboutPage } from "@/components/template/about-page";
import {Footer} from "@/components/template/Footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <AboutPage/>
      <Footer />
    </main>
  )
}

