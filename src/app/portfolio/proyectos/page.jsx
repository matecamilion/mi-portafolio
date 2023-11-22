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
        <Link href="https://github.com/frantribu/shopix" className="flex flex-col items-center">
          <div className="border border-violet-800 rounded overflow-hidden w-full max-w-md mb-4 md:mb-0">
            <Image src="/shopix.png" width={400} height={400} objectFit="cover" className="w-full h-full" />
          </div>
          <div className="text-center text-black">
            <h1 className="font-bold text-lg mt-4 md:mt-0">TIENDA SHOPIX</h1>
            <p>
              Este es un proyecto que realicé en la Diplomatura en Desarrollo Web con NextJS junto con Franco
              Triboulard. El objetivo del proyecto era crear un e-commerce, es decir, una tienda online que permitiera
              a los usuarios comprar y vender productos de diferentes categorías. Para ello, utilicé la fakestoreapi, una
              API que proporciona datos falsos de productos, como el nombre, la descripción, el precio, la imagen y la
              categoría.
            </p>
          </div>
        </Link>
        <Link href="https://github.com/frantribu/shopix" className="flex flex-col items-center">
          <div className="border border-violet-800 rounded overflow-hidden w-full max-w-md mb-4 md:mb-0">
            <Image src="/shopix.png" width={400} height={400} objectFit="cover" className="w-full h-full" />
          </div>
          <div className="text-center text-black">
            <h1 className="font-bold text-lg mt-4 md:mt-0">TIENDA SHOPIX</h1>
            <p>
              Este es un proyecto que realicé en la Diplomatura en Desarrollo Web con NextJS junto con Franco
              Triboulard. El objetivo del proyecto era crear un e-commerce, es decir, una tienda online que permitiera
              a los usuarios comprar y vender productos de diferentes categorías. Para ello, utilicé la fakestoreapi, una
              API que proporciona datos falsos de productos, como el nombre, la descripción, el precio, la imagen y la
              categoría.
            </p>
          </div>
        </Link>
        <Link href="https://github.com/frantribu/shopix" className="flex flex-col items-center">
          <div className="border border-violet-800 rounded overflow-hidden w-full max-w-md mb-4 md:mb-0">
            <Image src="/shopix.png" width={400} height={400} objectFit="cover" className="w-full h-full" />
          </div>
          <div className="text-center text-black">
            <h1 className="font-bold text-lg mt-4 md:mt-0">TIENDA SHOPIX</h1>
            <p>
              Este es un proyecto que realicé en la Diplomatura en Desarrollo Web con NextJS junto con Franco
              Triboulard. El objetivo del proyecto era crear un e-commerce, es decir, una tienda online que permitiera
              a los usuarios comprar y vender productos de diferentes categorías. Para ello, utilicé la fakestoreapi, una
              API que proporciona datos falsos de productos, como el nombre, la descripción, el precio, la imagen y la
              categoría.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
