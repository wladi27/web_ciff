import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";
import { Link } from "react-router-dom"; // Asegúrate de tener react-router-dom instalado

// import "./FichaFundicion.css"; // Asegúrate de tener un archivo CSS para los estilos

const FichaFundicion = () => {
  return (
    <div className="min-h-screen bg-[#00205B]">
      {/* Header */}
      <Header />

      {/* Información de la empresa */}
      <CompanyInfo />

      {/* Navegación para volver al inicio */}
      <div className="flex justify-center mb-4">
        <Link to="/" className="text-white bg-red-700 px-4 py-2 rounded hover:bg-red-600">
          Volver al Inicio
        </Link>
      </div>

      {/* Contenido Principal */}
      <div className="grid gap-6 p-6 md:grid-cols-2">
        <ProcessDescription />
        <Infrastructure />
        <TargetMarket />
        <InvestmentAmount />
        <ProductionCapacity />
        <Gallery /> {/* Nueva tarjeta de galería */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="relative h-48 bg-gradient-to-r from-red-700 to-[#00205B]">
      <div className="absolute inset-0 bg-opacity-50">
        <img
          src="/assets/img/fundi.jpg"
          alt="Fondo industrial"
          className="h-full w-full object-cover opacity-30"
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
          <Twitter className="h-6 w-6" />
          <Instagram className="h-6 w-6" />
          <Facebook className="h-6 w-6" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 bg-red-700 px-8 py-2 text-white text-2xl font-bold">
        FICHA TÉCNICA
      </div>
    </div>
  );
};

const CompanyInfo = () => {
  return (
    <div className="bg-white p-6 text-[#00205B] shadow-md mb-6">
      <h1 className="text-3xl font-bold mb-2">
        CVG COMPLEJO INDUSTRIAL FÁBRICA DE FÁBRICAS
      </h1>
      <h2 className="text-xl mb-1">HUGO CHÁVEZ FRÍAS, C.A.</h2>
      <p className="text-sm">RIF: G-20016166-3</p>
    </div>
  );
};

const ProcessDescription = () => {
  return (
    <Card title="FUNDICIÓN POR CERA PERDIDA">
      <p style={{ textAlign: "justify" }}>
        Proceso para crear objetos, simples o complejos, usando diversos metales (como aleaciones de aluminio, acero al carbono, aceros de baja aleación, acero inoxidable, oro, plata, latón o bronce) mediante la fundición de un modelo o patrón original. Este método es muy usado para producir joyas, productos odontológicos y arte. En su forma industrial, la fundición con modelos de cera es un modo común de crear piezas precisas de metal en la ingeniería y la fabricación. Suele asociarse con la artesanía, en la actualidad los creadores pueden transformar el proceso de fundición en cera con diseños digitales e Impresión 3D para simplificar y reformular el proceso de trabajo, disminuir tiempos y reducir los costos.
      </p>
    </Card>
  );
};

const Infrastructure = () => {
  return (
    <Card title="INFRAESTRUCTURA">
      <table className="min-w-full text-left">
        <tbody>
          <tr>
            <td className="border-b py-2">GALPÓN</td>
            <td className="border-b py-2">5.185 m²</td>
          </tr>
          <tr>
            <td className="border-b py-2">OFICINA</td>
            <td className="border-b py-2">50 m²</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

const TargetMarket = () => {
  return (
    <Card title="MERCADO OBJETIVO">
      <ul className="list-disc pl-5">
        {[
          "AUTOMOTRIZ",
          "SALUD",
          "AEROESPACIAL",
          "MILITAR",
          "AGROALIMENTARIO",
          "SECTOR ELÉCTRICO",
          "JOYERÍA / BIENES DE CONSUMO",
          "METALMECÁNICO E INDUSTRIAL",
        ].map((sector) => (
          <li key={sector} className="py-1">
            {sector}
          </li>
        ))}
      </ul>
    </Card>
  );
};

const ProductionCapacity = () => {
  return (
    <Card title="CAPACIDAD DE PRODUCCIÓN">
      <div className="flex flex-col items-center">
        <table className="min-w-full text-left mb-4">
          <tbody>
            <tr>
              <td className="border-b py-2">Capacidad mensual</td>
              <td className="border-b py-2">8 Ton. / mes</td>
            </tr>
          </tbody>
        </table>
        <img
          src="/assets/img/20240627_155633.jpg"
          alt="Imagen de producción"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </Card>
  );
};

const InvestmentAmount = () => {
  return (
    <Card title="MONTO DE INVERSIÓN (USD)">
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="border-b py-2">CONCEPTO</th>
            <th className="border-b py-2">MONTO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b py-2">MATERIA PRIMA</td>
            <td className="border-b py-2">120.000,00</td>
          </tr>
          <tr>
            <td className="border-b py-2">INSUMOS Y HERRAMIENTAS</td>
            <td className="border-b py-2">12.000,00</td>
          </tr>
          <tr>
            <td className="border-b py-2">MANTENIMIENTO / MATERIALES</td>
            <td className="border-b py-2">660.000,00</td>
          </tr>
          <tr className="font-bold">
            <td className="border-b py-2">MONTO TOTAL DE INVERSIÓN:</td>
            <td className="border-b py-2">792.000,00</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

const Gallery = () => {
  return (
    <Card title="GALERÍA">
      <div className="pt-14 grid grid-cols-2 gap-2">
        {[
          "/assets/img/20240514_132053.jpg",
          "/assets/img/photo87446764678874686 (1).jpeg",
          "/assets/img/photo87446764678874686 (2).jpeg",
          "/assets/img/IMG_20241210_143429_540 (2).jpg",
        ].map((src, index) => (
          <img key={index} src={src} alt={`Galería ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
        ))}
      </div>
    </Card>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#00205B] p-6 text-sm text-white">
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
    <div className="bg-white p-4 shadow-md rounded-lg mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default FichaFundicion;
