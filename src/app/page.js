import { redirect } from "next/navigation";

export default function Root() {
  redirect("/home"); // Redirige automáticamente a la ruta '/home'
}
