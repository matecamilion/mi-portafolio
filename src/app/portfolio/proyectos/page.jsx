import Image from "next/image";
import Link from "next/link";

export default function ProyectosPage() {
  return (
    <section id="proyectos" className="container mx-auto px-4">
    <div className="text-center">
      <h1 className="text-3xl font-mono text-violet-800">PROYECTOS</h1>
      <hr className="bg-violet-800 h-0.5 mx-10" />
    </div>
    <br />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Proyecto 1 */}
      <Link target="_blank" href="https://github.com/frantribu/shopix" className="flex flex-col items-center">
        <div className="border border-violet-800 rounded overflow-hidden w-full max-w-md mb-4 md:mb-0">
          <Image src="/shopix.png" width={150} height={150} objectFit="cover" className="w-full h-full" />
        </div>
        <div className="text-center text-black">
          <h1 className="font-bold text-violet-800 text-lg mt-4 md:mt-0">TIENDA SHOPIX</h1>
          <p>
            Este es un proyecto que realicé en la Diplomatura en Desarrollo Web con NextJS junto con Franco
            Triboulard. El objetivo del proyecto era crear un e-commerce, es decir, una tienda online que permitiera
            a los usuarios comprar y vender productos de diferentes categorías...
          </p>
        </div>
      </Link>
  
      {/* Proyecto 2 */}
      <Link target="_blank" href="https://github.com/matecamilion/blog-de-roberto" className="flex flex-col items-center">
        <div className="border border-violet-800 rounded overflow-hidden w-full max-w-md mb-4 md:mb-0">
          <Image src="/blog-de-roberto.png" width={150} height={150} objectFit="cover" className="w-full h-full" />
        </div>
        <div className="text-center text-black">
          <h1 className="font-bold text-violet-800 text-lg mt-4 md:mt-0">BLOG DE ROBERTO</h1>
          <p>
            Este es un proyecto web desarrollado con Next.js que ofrece una plataforma interactiva para la publicación y visualización de blogs. Enfocado en la simplicidad y la experiencia del usuario...
          </p>
        </div>
      </Link>
  
      {/* Proyecto 3 */}
      <Link target="_blank" href="https://github.com/matecamilion/chat-next" className="flex flex-col items-center">
        <div className="border border-violet-800 rounded overflow-hidden w-full max-w-md mb-4 md:mb-0">
          <Image src="/WaveChat.png" width={150} height={150} objectFit="cover" className="w-full h-full" />
        </div>
        <div className="text-center text-black">
          <h1 className="font-bold text-violet-800 text-lg mt-4 md:mt-0">WAVE CHAT</h1>
          <p>
            WaveChat es un proyecto de chat interactivo creado con Next.js. La plataforma permite conversaciones grupales ilimitadas y la capacidad única de enviar y recibir fotos en tiempo real...
          </p>
        </div>
      </Link>
    </div>
  </section>
  );
}
