"use client";

import Link from "next/link";
import { useEffect, useState } from 'react';


const TypingTitle = () => {
  const fullText = "Hola, mi nombre es Mateo Camilion.";
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setAnimatedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Ajusta la velocidad de escritura

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <h1 className="text-3xl sm:text-5xl font-serif w-auto">
      <span className="text-violet-800">{animatedText}</span>
    </h1>
  );
};

const listaDiplomaturas = [
  'Diplomatura en Iniciación al Desarrollo Web con JavaScript: Aprendí los fundamentos del lenguaje más utilizado enla web.',
  'Diplomatura en Iniciación a la Programación con Java: Adquirí los conceptos básicos de la programación orientada a objetos y el uso de este potente lenguaje',
  'Diplomatura en Desarrollo Web con NextJS: Profundicé en el uso de este framework de React para crear aplicaciones web modernas y dinámicas.'
];
export default function SobreMiPage() {
  return (
    <section id="sobre-mi" className="p-8 sm:p-16 md:p-24 lg:p-32 xl:p-40">
      <div id="about" className="flex flex-col items-center sm:flex-row justify-center text-black space-y-8 sm:space-y-0 sm:space-x-10 h-full">
        <div className="w-full sm:w-2/3">
          <TypingTitle />
          <br />
          <br />
          <br />
          <p className="font-mono">
            Estudiante de la Tecnicatura Universitaria en Programación de la
            Universidad Tecnológica Nacional de Mar del Plata (UTN). Apasionado del
            desarrollo web y la programación, realicé tres diplomaturas en
            estos campos:
          </p>
          <br />
          <ul className="list-disc ml-4 space-y-2">
            {listaDiplomaturas.map((elemento, index) => {
              // el .split divide cada elemento de la lista en dos partes
              const [titulo, descripcion] = elemento.split(':');

              return (
                <li className="font-mono" key={index}>
                  <span className="text-violet-800 font-bold">{titulo}</span>: {descripcion}
                  
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center mt-10 ">
            <Link target="blank" href="https://www.canva.com/design/DAFNDSxkhCk/8_e6LWWmtrTxIi22QNoxlQ/view?utm_content=DAFNDSxkhCk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
              <button className=" hover:shadow-2xl shadow-violet-800 px-5 py-3 font-bold rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black  sm:w-44 md:w-48 lg:w-56 xl:w-64">
                Ver curriculum
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-8 sm:mt-0">
          <img
            className="rounded-full w-32 sm:w-44 md:w-48 lg:w-56 xl:w-64 h-32 sm:h-44 md:h-48 lg:h-56 xl:h-64 object-cover"
            src="https://media.licdn.com/dms/image/D4D03AQGjrD_0AZ1P9w/profile-displayphoto-shrink_800_800/0/1699475267203?e=1704931200&v=beta&t=5nxgV-yUU1V1ra_tfYw4xFulyHDQrtaFxfgQAn6oxtU"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

