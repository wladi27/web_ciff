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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <ProcessDescription />
        <Importance />
        <QualityTests />
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
    <Card title="LABORATORIO DE CALIDAD">
      <p style={{ textAlign: "justify" }}>
        En nuestro Laboratorio de Calidad nos especializamos en la realización de ensayos fundamentales para la Industria Metalmecánica, asegurando que cada componente fabricado en el Complejo Industrial "Fábrica de Fábricas Hugo Chávez Frías" cumpla con los requisitos necesarios para un óptimo desempeño.
      </p>
      <br />
      <img className="rounded-lg" src="/assets/img/photo_5057957430452923497_yqfsq.jpg" alt="" />
    </Card>
  );
};

const QualityTests = () => {
  
  return (
    <Card title="GALERIA">
        <br />
      <img className="rounded-lg" src="/assets/img/photo_5057957430452923498_yafae.jpg" alt="" />
     
    </Card>
  );
};

const Importance = () => {const tests = [
    {
      title: "Espectrometría por chispa",
      description: "Método de análisis químico que determina la composición de metales y aleaciones."
    },
    {
      title: "Ensayo de dureza de materiales",
      description: "Técnica para determinar la resistencia de un material a la deformación plástica."
    },
    {
      title: "Granulometría de la arena",
      description: "Análisis de la distribución de partículas de arena en el proceso de fundición."
    },
    {
      title: "Metalografía",
      description: "Análisis de la microestructura de los materiales metálicos a nivel microscópico."
    }
  ];

  return (
    <Card title="IMPORTANCIA DEL CONTROL DE CALIDAD">
      <p style={{ textAlign: "justify" }}>
        El desarrollo de estos ensayos en nuestro laboratorio es esencial para asegurar que cada etapa del proceso de fabricación cumpla con los estándares de calidad establecidos, minimizando riesgos y mejorando la competitividad en el mercado.
      </p>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tests.map((test, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105">
            <h4 className="font-bold mb-2">{test.title}</h4>
            <p style={{ textAlign: "justify" }}>{test.description}</p>
          </div>
        ))}
      </div>
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
    <div className="bg-white p-6 shadow-md rounded-lg mb-4 transition-transform transform hover:scale-105">
      <h3 className="text-xl font-bold mb-2 text-[#00205B]">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default FichaCalidad;
