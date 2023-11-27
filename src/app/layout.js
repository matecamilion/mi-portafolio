"use client"
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import 'tailwindcss/tailwind.css';
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [navbar, setNavbar] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('react-scroll/modules/mixins/animate-scroll');

      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsHeaderVisible(scrollY < 100);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <html lang="en" className='bg-white'>
      <body className="bg-white">
        <header className={`bg-white ${isHeaderVisible ? 'visible' : 'invisible'}`}>
          <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-4 lg:px-8'>
            <div className=" flex justify-between items-center">
              <div className='sm:text-left'>
                <h1 className="text-3xl font-extrabold justify-center text-violet-800 cursor-pointer">
                  <ScrollLink to="top" smooth duration={100}>MC!</ScrollLink>
                </h1>
              </div>

              <div className="md:hidden">
                <button
                  className="p-2 bg-violet-800 text-gray-700 rounded-md outline-none border-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 6l16 0" />
                      <path d="M4 12l16 0" />
                      <path d="M4 18l16 0" />
                    </svg>
                  )}
                </button>
              </div>

              <div className={`sm:flex-grow ${navbar ? 'block' : 'hidden'} md:flex md:items-center md:w-auto text-right`}>
                <div className="text-sm sm:flex-grow">
                  <ScrollLink to="sobre-mi" smooth duration={100} className="cursor-pointer block mt-4 font-bold sm:inline-block sm:mt-0 text-violet-800 hover:text-violet-500 mr-4">
                    Sobre mi
                  </ScrollLink>
                  <ScrollLink to="habilidades" smooth duration={100} className=" cursor-pointer block mt-4  font-bold sm:inline-block sm:mt-0 text-violet-800 hover:text-violet-500 mr-4">
                    Habilidades
                  </ScrollLink>
                  <ScrollLink to="proyectos" smooth duration={100} className="cursor-pointer block mt-4 font-bold sm:inline-block sm:mt-0 text-violet-800 hover:text-violet-500 mr-4">
                    Proyectos
                  </ScrollLink>
                </div>
              </div>
            </div>
            <br />
            <hr className='bg-violet-800 h-0.5' />
          </div>

        </header>

        {children}

        <br />
        <br />
        <br />
        <footer className='h-1/5' >
        <hr className='bg-violet-800 h-0.5 ' />

          <div className='text-black flex justify-center gap-10 my-10'>
            <Link target="_blank" href="https://www.linkedin.com/in/mateo-camilion-38b93426a/"><ion-icon name="logo-linkedin" size="large"></ion-icon></Link>
            <Link target="_blank" href="https://github.com/matecamilion"> <ion-icon name="logo-github" size="large"></ion-icon></Link>
            <Link target="_blank" href="mailto:mateocamilion@gmail.com"><ion-icon name="mail-outline" size="large"></ion-icon></Link>
          </div>
        </footer>
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
}