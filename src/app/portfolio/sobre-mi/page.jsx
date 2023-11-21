import Link from "next/link"

export default function SobreMiPage() {

  return (
    <section id="sobre-mi" className="p-8 sm:p-16 md:p-24 lg:p-32 xl:p-40">
      <div id="about" className="flex flex-col items-center sm:flex-row justify-center  text-black space-y-8 sm:space-y-0 sm:space-x-10 h-full">
        <div className="w-full sm:w-2/3">
          <h1 className="text-3xl sm:text-5xl font-serif w-auto">
            Hola, mi nombre es{" "}
            <Link href="/" className="text-violet-800 font-bold">
              Mateo Camilion.
            </Link>
          </h1>
          <br />
          <br />
          <br />
          <p className="font-mono">
            Estudiante de la Tecnicatura Universitaria en Programación de la
            Universidad Tecnológica Nacional de Mar del Plata (UTN). Me apasiona el
            desarrollo web y la programación, y  realice tres diplomaturas en
            estos campos.
          </p>
          <br />
          <p className="font-mono">
            La primera fue una Diplomatura en Iniciación al Desarrollo Web con
            JavaScript, donde aprendí los fundamentos del lenguaje más utilizado en
            la web. La segunda fue una Diplomatura en Iniciación a la Programación
            con Java, donde adquirí los conceptos básicos de la programación
            orientada a objetos y el uso de este potente lenguaje. La tercera fue
            una Diplomatura en Desarrollo Web con NextJS, donde profundicé en el
            uso de este framework de React para crear aplicaciones web modernas y
            dinámicas.
          </p>
          <Link href="https://www.canva.com/design/DAFNDSxkhCk/8_e6LWWmtrTxIi22QNoxlQ/view?utm_content=DAFNDSxkhCk&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel">
          <button className="px-5 py-3 font-bold rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black hover:shadow sm:w-44 md:w-48 lg:w-56 xl:w-64 ">Ver curriculum</button>
        </Link>
        </div>

        <div className="mt-8 sm:mt-0 ">
          <img
            className="rounded-full  w-32 sm:w-44 md:w-48 lg:w-56 xl:w-64 h-32 sm:h-44 md:h-48 lg:h-56 xl:h-64 object-cover"
            src="https://media.licdn.com/dms/image/D4D03AQGjrD_0AZ1P9w/profile-displayphoto-shrink_800_800/0/1699475267203?e=1704931200&v=beta&t=5nxgV-yUU1V1ra_tfYw4xFulyHDQrtaFxfgQAn6oxtU"
            alt=""
          />
        </div>
        
       
      </div>
    
    </section>
  )
}