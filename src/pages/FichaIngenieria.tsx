import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";
import { Link } from "react-router-dom";

const IngenieriaYProyectos = () => {
  return (
    <div className="min-h-screen bg-[#00205B]">
      {/* Header */}
      <Header />

      {/* Información de la Empresa */}
      <CompanyInfo />

      {/* Navegación para volver al inicio */}
      <div className="flex justify-center mb-4">
        <Link to="/" className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-500 transition duration-300">
          Volver al Inicio
        </Link>
      </div>

      {/* Contenido Principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <DepartmentInfo />
        <Mission />
        <Services />
        <MultidisciplinaryTeam />
        <AdvancedTechnology />
        <QualityCommitment />
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
          src="/assets/img/photo_4936160777937726856_y.jpg"
          alt="Fondo de Ingeniería"
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

const DepartmentInfo = () => {
  return (
    <Card title="Ingeniería y Proyectos">
      <p style={{ textAlign: "justify" }}>
        En el Complejo Industrial Fábrica de Fábricas Hugo Chávez Frías, nuestro Departamento de Ingeniería y Proyectos se dedica a la creación y desarrollo de piezas metal mecánicas de alta calidad, ofreciendo soluciones integrales en fundición, mecanizado y soldadura. Nuestro compromiso con la innovación y la excelencia nos permite transformar ideas en productos funcionales y eficientes.
      </p>
    </Card>
  );
};

const Mission = () => {
  return (
    <Card title="Nuestra Misión">
      <p style={{ textAlign: "justify" }}>
        Somos un equipo de especialistas encargado del diseño y desarrollo de proyectos a través de la aplicación de conocimientos técnicos y uso de equipos tecnológicos aplicados en la ingeniería conceptual y de detalle, con el propósito de cumplir la demanda nacional de la industria metalmecánica, petrolera y sectores de desarrollo, contribuyendo a un modelo de desarrollo propio sustentable, independiente y anti hegemónico, cumpliendo con estándares nacionales e internacionales de calidad para lograr la satisfacción de nuestros clientes.
      </p>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Ingeniería Conceptual",
      description: "Nuestro equipo trabaja codo a codo con los clientes para comprender sus necesidades y objetivos, generando conceptos innovadores que servirán como base para el desarrollo del proyecto."
    },
    {
      title: "Ingeniería Básica",
      description: "Realizamos un análisis exhaustivo que incluye cálculos estructurales, selección de materiales y diseño preliminar, asegurando la viabilidad técnica y económica del proyecto."
    },
    {
      title: "Ingeniería Inversa",
      description: "Analizamos y reproducimos piezas existentes, mejorando su diseño y funcionalidad, optimizando su rendimiento y prolongando su vida útil."
    },
    {
      title: "Fundición, Mecanizado y Soldadura",
      description: "Contamos con un equipo especializado en procesos de fundición, mecanizado y soldadura, utilizando tecnología de vanguardia para garantizar que cada pieza cumpla con los más altos estándares de calidad."
    }
  ];

  return (
    <Card title="Servicios que Ofrecemos">
      <div className="grid grid-cols-1 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105">
            <h4 className="font-bold mb-2">{service.title}</h4>
            <p style={{ textAlign: "justify" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

const MultidisciplinaryTeam = () => {
  return (
    <Card title="Un Equipo Multidisciplinario">
      <p style={{ textAlign: "justify" }}>
        Nuestro departamento está compuesto por ingenieros de diversas áreas y proyectistas altamente calificados que aportan su experiencia y conocimiento a cada proyecto. Esta diversidad nos permite abordar desafíos complejos desde múltiples perspectivas, asegurando soluciones integrales y efectivas.
      </p>
      <br />
      <img className="rounded-lg" src="/assets/img/photo_4949742740132965965_y.jpg" alt="" />
    </Card>
  );
};

const AdvancedTechnology = () => {
  return (
    <Card title="Tecnología Avanzada">
      <p style={{ textAlign: "justify" }}>
        Utilizamos software de dibujo y modelado 3D de última generación, lo que nos permite visualizar y ajustar diseños en tiempo real, mejorando la precisión y acelerando el proceso de desarrollo. La integración de tecnología avanzada es fundamental para mantenernos a la vanguardia del sector.
      </p>
    </Card>
  );
};

const QualityCommitment = () => {
  return (
    <Card title="Compromiso con la Calidad">
      <p style={{ textAlign: "justify" }}>
        En el Complejo Industrial Fábrica de Fábricas Hugo Chávez Frías, la calidad es nuestra principal prioridad. Implementamos rigurosos controles en cada etapa del proceso para asegurar que nuestras piezas no solo cumplan con las expectativas de nuestros clientes, sino que también superen los estándares establecidos en la industria.
      </p>
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

export default IngenieriaYProyectos;
