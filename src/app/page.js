import Image from 'next/image'
import Link from 'next/link'
import SobreMiPage from './portfolio/sobre-mi/page';
import HabilidadesPage from './portfolio/habilidades/page'
import ProyectosPage from './portfolio/proyectos/page'
import 'tailwindcss/tailwind.css';


export default function Home() {
  return (
    <main>
      <SobreMiPage/>
      <HabilidadesPage/>
      <br/>
      <br/>
      <br/>
    
      <ProyectosPage/>
      
    </main>
  )
}
