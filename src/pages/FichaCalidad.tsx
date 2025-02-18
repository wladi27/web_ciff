import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";
import { Link } from "react-router-dom";

const FichaCalidad = () => {
  return (
    <div className="bg-[#00205B] min-h-screen">
      {/* Header */}
      <Header />

      {/* Información de la empresa */}
      <CompanyInfo />

      {/* Navegación para volver al inicio */}
      <div className="flex justify-center mb-4">
        <Link to="/" className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition duration-300">
          Volver al Inicio
        </Link>
      </div>

      {/* Contenido Principal */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Nuestro Laboratorio de Calidad</h2>
        <Card 
          description="En nuestro Laboratorio de Calidad nos especializamos en la realización de ensayos fundamentales para la Industria Metalmecánica, asegurando que cada componente fabricado en el Complejo Industrial 'Fábrica de Fábricas Hugo Chávez Frías' cumpla con los requisitos necesarios para un óptimo desempeño."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Métodos de Ensayo */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Métodos de Ensayo</h3>
            {methods.map((method, index) => (
              <MethodCard key={index} title={method.title} description={method.description} />
            ))}
          </div>

          {/* Galería */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Galería</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white my-6">Importancia del Control de Calidad</h2>
        <Card 
          description="El desarrollo de estos ensayos en nuestro laboratorio es esencial para asegurar que cada etapa del proceso de fabricación cumpla con los estándares de calidad establecidos, minimizando riesgos y mejorando la competitividad en el mercado. Un enfoque riguroso en el control de calidad no solo protege a la empresa contra posibles fallos, sino que también fortalece su reputación y confianza entre los clientes."
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="relative h-64 bg-gradient-to-r from-red-600 to-red-800">
      <div className="absolute inset-0 bg-opacity-30">
        <img
          src="/assets/img/photo_4918133026374921982_y.jpg"
          alt="Fondo de calidad"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative flex items-center justify-between p-6">
        <img
          src="/assets/img/logo.png"
          alt="Logo de la empresa"
          className="rounded-full border-4 border-white bg-white"
          width={100}
          height={100}
        />
        <div className="flex gap-4 text-white">
          <Twitter className="h-6 w-6 hover:text-red-200 transition duration-300" />
          <Instagram className="h-6 w-6 hover:text-red-200 transition duration-300" />
          <Facebook className="h-6 w-6 hover:text-red-200 transition duration-300" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 bg-red-600 px-8 py-2 text-white text-2xl font-bold">
        PROCESO
      </div>
    </div>
  );
};

const CompanyInfo = () => {
  return (
    <div className="bg-white p-6 text-[#00205B] shadow-md mb-6">
      <h1 className="text-3xl font-bold mb-2">CVG COMPLEJO INDUSTRIAL FÁBRICA DE FÁBRICAS</h1>
      <h2 className="text-xl mb-1">HUGO CHÁVEZ FRÍAS, C.A.</h2>
      <p className="text-sm">RIF: G-20016166-3</p>
    </div>
  );
};

const Card = ({ description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-6">
      <p className="text-gray-700 text-justify">{description}</p>
    </div>
  );
};

const MethodCard = ({ title, description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-6">
      <h4 className="text-lg font-bold text-[#00205B] mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#00205B] p-6 text-sm text-white text-center">
      <p>
        Av. José Antonio Anzoátegui, Local Manzana 1 N° S/N
        <br />
        Zona Industrial Anaco Anzoátegui. Zona Postal 6003.
      </p>
    </div>
  );
};

// Datos de métodos de ensayo
const methods = [
  {
    title: "Espectrometría por chispa",
    description: "Método de análisis químico que determina la composición de metales y aleaciones, asegurando que las materias primas cumplan con las especificaciones requeridas."
  },
  {
    title: "Ensayo de dureza de materiales",
    description: "Técnica para determinar la resistencia de un material a la deformación plástica, utilizando un durómetro para evaluar la calidad de los materiales."
  },
  {
    title: "Granulometría de la arena",
    description: "Análisis de la distribución de partículas de arena en el proceso de fundición, optimizando la calidad de los moldes y garantizando acabados superiores."
  },
  {
    title: "Metalografía",
    description: "Análisis de la microestructura de los materiales metálicos a nivel microscópico, proporcionando información sobre su composición y propiedades mecánicas."
  }
];

// Datos de la galería
const galleryImages = [
  { src: "/assets/img/photo_4918133026374921982_y.jpg", alt: "Galería 1" },
  { src: "/assets/img/photo_5057957430452923497_yqfsq.jpg", alt: "Galería 2" },
  { src: "/assets/img/photo_5057957430452923498_yafae.jpg", alt: "Galería 3" },
  { src: "/assets/img/photo_5057957430452923495_y.jpg", alt: "Galería 4" }
];

export default FichaCalidad;
