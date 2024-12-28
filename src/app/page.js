'use client';

import { usePathname } from 'next/navigation';  // Reemplaza useRouter por usePathname
import Login from "@/components/Login";
import Homepage from "@/components/HomePage";

export default function Home() {
  const pathname = usePathname();  // Obtiene la ruta actual

  return (
    <main>
      {pathname === '/' && <Login />}
      {pathname === '/home' && <Homepage />}
    </main>
  );
}
