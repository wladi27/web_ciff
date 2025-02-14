import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather"; // Asegúrate de tener react-feather instalado
import { Link } from "react-router-dom"; // Asegúrate de tener react-router-dom instalado

const FichaGalvanizado = () => {
  return (
    <div className="bg-[#00205B] min-h-screen">
      {/* Header */}
      <Header />

      {/* Información de la empresa */}
      <CompanyInfo />

      {/* Navegación para volver al inicio */}
      <div className="flex justify-center mb-4">
        <Link to="/" className="text-white bg-red-600 px-4 py-2 hover:bg-red-500 transition duration-300">
          Volver al Inicio
        </Link>
      </div>

      {/* Contenido Principal */}
      <div className="bg-[#00205B] grid gap-6 p-6 md:grid-cols-2">
        <ProcessDescription />
        <Infrastructure />
        <MarketTarget />
        <Investment />
        <References />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="relative h-48 bg-gradient-to-r from-red-600 to-red-800">
      <div className="absolute inset-0 bg-opacity-30">
        <img
          src="/assets/img/proceso-de-galvanizado-inmersion-en-caliente.jpg" 
          alt="Fondo industrial"
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
        FICHA TÉCNICA
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

const ProcessDescription = () => {
  return (
    <Card title="GALVANIZADO POR INMERSIÓN EN CALIENTE">
      <p style={{ textAlign: "justify" }}>
        Este método de recubrimiento de superficies garantiza la durabilidad y vida útil de las piezas, mejorando la resistencia a la abrasión y corrosión.
      </p>
      <p>100% AUTONOMÍA ELÉCTRICA: 14 MW DE GENERACIÓN</p>
    </Card>
  );
};

const Infrastructure = () => {
  return (
    <Card title="INFRAESTRUCTURA">
      <ul>
        <li>GALPON: 3.436 m²</li>
        <li>OFICINA: 50 m²</li>
      </ul>
    </Card>
  );
};

const MarketTarget = () => {
  return (
    <Card title="MERCADO OBJETIVO">
      <ul>
        <li>PETROQUÍMICO</li>
        <li>NAVIERO/FERROVIÁRIO / AERONAUTICO</li>
        <li>CIVIL</li>
        <li>SECTOR ELÉCTRICO</li>
        <li>AGROINDUSTRIA</li>
      </ul>
    </Card>
  );
};

const Investment = () => {
  return (
    <Card title="MONTO DE INVERSIÓN (USD)">
      <ul>
        <li>MATERIA PRIMA: 1.724.034,00</li>
        <li>MATERIALES EN GENERAL: 11.584,00</li>
        <li>INSUMOS Y HERRAMIENTAS: 29.327,00</li>
        <li>MONTO TOTAL DE INVERSIÓN: 1.764.948,00</li>
      </ul>
    </Card>
  );
};

const References = () => {
  return (
    <Card title="REFERENCIAS IMPORTANTES">
      <p>
        • Las dimensiones de la cuba de galvanizado son de las más grandes del país. El galvanizado por inmersión en caliente es un proceso crucial en la Industria metalúrgica, ya que proporciona una capa protectora de zinc a los productos de acero, aumentando su resistencia a la corrosión y prolongando su vida útil. Actualmente, solo existe una planta para galvanizado en caliente, ubicada en el centro del país. La presencia en el oriente del país de la planta de galvanizado por Inmersión en caliente en CVG Complejo Industrial Fábrica de Fábricas Hugo Chávez Frías, C.A., proyecta el gran significado que tiene esta instalación como parte del desarrollo y la modernización de la infraestructura industrial del país.
      </p>
      <h3 className="font-bold mt-2">Dirección:</h3>
      <p>Av. José Antonio Anzoátegui, Local Manzana 1 N° S/N Zona Industrial Anaco Anzoátegui. Zona Postal 6003.</p>
    </Card>
  );
};

const Gallery = () => {
  return (
    <Card title="GALERÍA">
      <img src="/assets/img/galva.png" alt="" />
    </Card>
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

// Componente Card
const Card = ({ title, children }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-4 transition-transform transform hover:scale-102">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default FichaGalvanizado;
