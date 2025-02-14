import React, { useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaTelegram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Carousel from "./Procesos";
import Infraestructura from "../components/Infraestructura";
import Noticias from "../components/Noticias";
import Contact from "../components/Contacto";
import Footer from "../components/Footer";

export function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        id="header"
        className="fixed top-0 left-0 right-0 bg-black bg-opacity-60 transition-all duration-300 ease-in-out z-10"
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              <a href="index.html">
                CIFF<span className="text-red-600"></span>
              </a>
            </h1>
          </div>

          {/* Menú de navegación para pantallas grandes */}
          <nav className="hidden lg:flex space-x-4">
            <ul className="flex space-x-4">
              <li>
                <a
                  className="nav-link text-white hover:text-red-600"
                  href="#hero"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="nav-link text-white hover:text-red-600"
                  href="#about"
                >
                  Quienes somos
                </a>
              </li>
              <li>
                <a
                  className="nav-link text-white hover:text-red-600"
                  href="#potencial"
                >
                  Potencial
                </a>
              </li>
              <li>
                <a
                  className="nav-link text-white hover:text-red-600"
                  href="#infraestructura"
                >
                  Infraestructura
                </a>
              </li>
              <li>
                <a
                  className="nav-link text-white hover:text-red-600"
                  href="#team"
                >
                  Noticias
                </a>
              </li>
              <li>
                <a
                  className="nav-link text-white hover:text-red-600"
                  href="#contact"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          {/* Botón del menú móvil */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>

          <a
            href="assets/portafolio.pdf"
            className="get-started-btn bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 hidden lg:block"
          >
            Portafolio
          </a>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center">
            <ul className="text-white text-2xl space-y-6">
              <li>
                <a
                  className="hover:text-red-600"
                  href="#hero"
                  onClick={toggleMobileMenu}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-600"
                  href="#about"
                  onClick={toggleMobileMenu}
                >
                  Quienes somos
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-600"
                  href="#potencial"
                  onClick={toggleMobileMenu}
                >
                  Potencial
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-600"
                  href="#infraestructura"
                  onClick={toggleMobileMenu}
                >
                  Infraestructura
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-600"
                  href="#team"
                  onClick={toggleMobileMenu}
                >
                  Noticias
                </a>
              </li>
              <li>
                <a
                  className="hover:text-red-600"
                  href="#contact"
                  onClick={toggleMobileMenu}
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="assets/portafolio.pdf"
                  className="bg-red-600 text-black px-4 py-2 rounded hover:bg-red-600"
                  onClick={toggleMobileMenu}
                >
                  Portafolio
                </a>
              </li>
            </ul>
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              <FaTimes />
            </button>
          </div>
        )}
      </header>

      {/* Sección con fondo */}
      <section
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
        style={{ backgroundImage: "url(/assets/img/portada.gif)" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center">
          <div className="container mx-auto" data-aos="fade-up">
            <div className="flex flex-col items-center space-y-6">
              <img
                className="drop-shadow-lg mx-auto"
                src="/assets/img/logo.png"
                alt="logo"
                width="250px"
              />

              <img
                className="max-w-full mx-auto"
                src="/assets/img/FABRICANDO-VICTORIAS-blanco.png"
                alt="Fabricando Victorias"
                width="400px"
              />

              <div className="social-icons flex justify-center space-x-6">
                
                <a
                  href="https://www.instagram.com/ciff_cvg"
                  className="text-white hover:text-red-600 transition-all"
                >
                  <FaInstagram size={32} />
                </a>
                <a
                  href="https://www.tiktok.com/@ciff_cvg"
                  className="text-white hover:text-red-600 transition-all"
                >
                  <FaTiktok size={32} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100082005701522"
                  className="text-white hover:text-red-600 transition-all"
                >
                  <FaFacebook size={32} />
                </a>
                <a
                  href="https://t.me/CIFF_CVG"
                  className="text-white hover:text-red-600 transition-all"
                >
                  <FaTelegram size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección "Sobre Nosotros" */}
      <section id="about" className="about bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-center text-3xl font-bold mb-8">
            CVG COMPLEJO INDUSTRIAL FÁBRICA <br /> DE  FÁBRICAS HUGO CHÁVEZ
            FRÍAS, C.A.
          </h1>
          <div className="mission mb-6">
            <h2 className="text-2xl font-semibold mb-2">MISIÓN</h2>
            <p className="text-lg" style={{ textAlign: "justify" }}>
              Somos una empresa dedicada al diseño, fabricación e innovación
              para las industrias metalmecánicas, petroleras, petroquímicas y
              sectores prioritarios, cumpliendo estándares nacionales e
              internacionales con el propósito de lograr la satisfacción total
              de nuestros clientes, siendo el enfoque principal el desarrollo
              económico del país mediante la sustitución de importaciones.
            </p>
          </div>

          <div className="mission">
            <h2 className="text-2xl font-semibold mb-2">VISIÓN</h2>
            <p className="text-lg" style={{ textAlign: "justify" }}>
              Posicionarnos y consolidarnos como lideres a nivel nacional e
              incursionar el mercado internacional en la fabricación de partes y
              piezas, así como la prestación de servicios para las industrias
              mediante una eficiente combinación de recursos: humano, económico
              y tecnológico que nos permitan ser competitivos. Además de
              promover el bienestar la clase trabajadora y la comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Nueva sección "Potencial Productivo" */}
      <section id="potencial" className="about text-blue py-16">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold uppercase tracking-wide">
              Potencial
            </h2>
            <p className="text-lg text-gray-600 mt-2">Potencial Productivo</p>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="content flex flex-col lg:flex-row items-center gap-12">
            <div className="image-container flex-1">
              <img
                src="assets/img/process.jpg"
                alt="Worker operating industrial machinery"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-container flex-1 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-red-600 pl-4">
                POTENCIAL PRODUCTIVO
              </h1>
              <ol className="space-y-6 text-gray-700">
                <li>
                  <h4 className="text-xl font-semibold text-blue-900">
                    POTENCIAL HIDROCARBUROS:
                  </h4>
                  <p className="text-justify leading-relaxed">
                    La ciudad de Anaco se encuentra a unos 160 Km del corazón de
                    la Faja Petrolífera del Orinoco "Hugo Chávez", ejerciendo
                    influencia en los Bloques Junín, Carabobo y Boyacá, grandes
                    demandantes de procesamiento metalmecánico.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-semibold text-blue-900">
                    POTENCIAL GASÍFERO:
                  </h4>
                  <p className="text-justify leading-relaxed">
                    Está ubicado en el área de uno de los yacimientos de gas más
                    importantes del país con una producción de más de 1.700
                    MMPCD, garantizando energía suficiente para la
                    transformación metalmecánica. La Siderúrgica "Alfredo
                    Maneiro" SIDOR, el cuarto productor de acero integrado de la
                    región latinoamericana, está ubicada al sur a unos 270 km.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-semibold text-blue-900">
                    POTENCIAL PETROQUÍMICO:
                  </h4>
                  <p className="text-justify leading-relaxed">
                    A 100 km se encuentra el Complejo Petroquímico de Jose,
                    ubicado al norte del Estado Anzoátegui.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-semibold text-blue-900">
                    POTENCIAL AGRÍCOLA:
                  </h4>
                  <p className="text-justify leading-relaxed">
                    Anaco está próxima a uno de los vértices de la denominada
                    Mesa de Guanipa, más de 1 millón de hectáreas cultivables
                    con un reservorio de aguas subterráneas para regar unas
                    150.000 hectáreas por año para la producción agrícola.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Carousel />
      <Infraestructura />
      <Noticias />
      <Contact />
      <Footer />
    </>
  );
}
