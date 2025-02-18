import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";
import { Link } from "react-router-dom"; // Asegúrate de tener react-router-dom instalado

const FichaMecanizado = () => {
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
        <MissionVision />
        <ServicesOffered />
        <Gallery />
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
          src="/assets/img/mecanizado_portada.jpg" 
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

const ProcessDescription = () => {
  return (
    <Card title="DEPARTAMENTO DE MECANIZADO">
      <p style={{ textAlign: "justify" }}>
        En el Complejo Industrial Fábrica de Fábricas Hugo Chávez Frías, nuestro departamento de Mecanizado se dedica a la transformación de materia prima metálica, desde el simple corte hasta la fabricación de partes y piezas de alta complejidad. A través de una gran variedad de maquinaria y personal técnico calificado y comprometido con la mejora continua y el desempeño de nuestro sistema de gestión de la calidad, para ofrecer medidas precisas en nuestro producto final, a fin de satisfacer las necesidades de todos los sectores industriales del país.
      </p>
    </Card>
  );
};

const MissionVision = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card title="Misión">
        <p>
          Producir partes y piezas en el área de metalmecánica empleando nuestras capacidades tecnológicas instaladas, a fin de garantizar una respuesta inmediata a las necesidades de fabricación de los sectores industriales y sociales de la nación.
        </p>
      </Card>
      <Card title="Visión">
        <p>
          Ser un departamento líder en fabricar partes y piezas de producción masiva cumpliendo con los estándares de calidad, aportando al desarrollo de la sustitución de importaciones en la nación.
        </p>
      </Card>
    </div>
  );
};

const ServicesOffered = () => {
  return (
    <Card title="Servicios ofrecidos">
      <ul className="list-disc pl-5 space-y-2">
        {[
          {
            title: "Mecanizado por máquinas herramientas convencionales",
            description: "Proceso de fabricación que utiliza máquinas herramientas controladas manualmente para dar forma a piezas metálicas, tales como tornos, fresadoras, taladros radiales, rectificadoras, mandrinadoras, entre otros.",
            advantages: "Experiencia y precisión en la elaboración de piezas únicas o en pequeñas series, ideal para prototipos o reparaciones."
          },
          {
            title: "Mecanizado por máquinas herramientas control numérico (CNC)",
            description: "Proceso de fabricación que utiliza máquinas herramientas controladas por computadora para producir piezas con alta precisión y repetibilidad, tales como tornos CNC, centros de mecanizado, equipo de corte por láser, equipo de corte por plasma, entre otros.",
            advantages: "Alta precisión, acabados superficiales excelentes y capacidad para producir grandes volúmenes de piezas idénticas."
          },
          {
            title: "Fabricación de partes y piezas metálicas",
            description: "Proceso de transformación de materias primas en productos terminados, a través de máquinas como guillotinas, dobladoras, calandradoras.",
            advantages: "Amplia gama de servicios de fabricación, desde el corte y conformado hasta el ensamblaje final."
          },
          {
            title: "Soldadura de partes y piezas metálicas",
            description: "Proceso de unión de piezas metálicas mediante la fusión de sus bordes, a través de equipos de soldadura por electrodo revestido, arco sumergido, MIG, TIG.",
            advantages: "Soldadura de alta calidad en diversos materiales y espesores, garantizando la resistencia y durabilidad de las uniones."
          },
          {
            title: "Matricería",
            description: "Proceso de fabricación de matrices para la conformación de piezas metálicas por estampado o forja.",
            advantages: "Diseño y fabricación de matrices personalizadas para satisfacer las necesidades específicas de cada cliente, para la producción en masa de componentes metálicos con formas complejas."
          },
          {
            title: "Pintura Industrial",
            description: "Aplicación de recubrimientos protectores y decorativos sobre superficies metálicas.",
            advantages: "Amplia gama de pinturas y acabados para proteger sus piezas de la corrosión y mejorar su apariencia."
          },
          
        ].map((service, index) => (
          <li key={index}>
            <strong>{service.title}:</strong> {service.description} <br />
            <em>{service.advantages}</em>
          </li>
        ))}
      </ul>
    </Card>
  );
};

const Gallery = () => {
  return (
    <Card>
      <ul className="list-disc pl-5 space-y-2">
        {[
          
          {
            title: "Sandblasting",
            description: "Proceso de limpieza y acabado de superficies mediante la proyección de abrasivos a alta presión.",
            advantages: "Eliminación de óxidos, pintura y otros contaminantes, preparando la superficie para la pintura o soldadura."
          },
          {
            title: "Water Blasting",
            description: "Proceso de limpieza y acabado de superficies mediante la proyección de agua a alta presión.",
            advantages: "Limpieza suave y efectiva, ideal para superficies delicadas o sensibles a los abrasivos."
          },
          {
            title: "Acabado de Piezas Fundidas y Metálicas",
            description: "Conjunto de procesos para mejorar la apariencia y las propiedades de las piezas fundidas y metálicas.",
            advantages: "Amplia gama de acabados, desde el pulido hasta el cromado, para satisfacer las necesidades estéticas y funcionales de cada pieza."
          },
        ].map((service, index) => (
          <li key={index}>
            <strong>{service.title}:</strong> {service.description} <br />
            <em>{service.advantages}</em>
          </li>
        ))}
      </ul>
      <br />
      <h2 className="font-bold">GALERÍA</h2>
      <div className="pt-4 grid grid-cols-2 gap-2">
        {[
          "/assets/img/mecanizado_01.jpg",
          "/assets/img/photo_4954154788237454837_ye.jpg",
          "/assets/img/photo_5078062159480598084_ywfwf.jpg",
          "/assets/img/20241023_122454.jpg",
          "/assets/img/photo_5001500407469550943_y.jpg",
          "/assets/img/photo_5096132783406951785_wqw.jpg",
        ].map((src, index) => (
          <img key={index} src={src} alt={`Galería ${index + 1}`} className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105" />
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
    <div className="bg-white p-6 shadow-md rounded-lg mb-4 transition-transform transform hover:scale-102">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default FichaMecanizado;
