// app/home/page.js
import { Navigation } from "@/components/template/Navigation"
import { VegetationIndices } from "@/components/template/Vegetation-indices";  // Asegúrate de que el nombre de la carpeta esté en minúsculas
import { Footer } from "@/components/template/Footer"


export default function RegisterPage() {

    
    return (
        <main>
            <Navigation />
            <VegetationIndices />
            <Footer />
        </main>
    );
}
