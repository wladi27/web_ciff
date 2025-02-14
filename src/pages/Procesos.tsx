import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom"; // Asegúrate de tener react-router-dom instalado

const procesos = [
  {
    id: 1,
    title: "Fundición",
    description: "Es un proceso de fabricación que implica la creación de moldes para verter metal fundido y dar forma a piezas o componentes.",
    image: "assets/img/photo87446764678874686 (1).jpeg",
  },
  {
    id: 2,
    title: "Mecanizado",
    description: "Proceso que comprende un conjunto de operaciones de conformación de piezas, mediante remoción de material.",
    image: "assets/img/mecanizado_portada.jpg",
  },
  {
    id: 3,
    title: "Laboratorio de calidad",
    description: "Realiza ensayos esenciales para la fundición y mecanizado de piezas.",
    image: "assets/img/photo_4918133026374921982_y.jpg",
  },
  {
    id: 4,
    title: "Ingeniería y Proyectos",
    description: "Es una disciplina fundamental en la planificación, diseño y ejecución de obras.",
    image: "assets/img/photo_4949742740132965965_y.jpg",
  },
  {
    id: 5,
    title: "Galvanizado",
    description: "El proceso de recubrimiento consiste en aplicar una capa de zinc sobre hierro y acero.",
    image: "assets/img/galva.png",
  },
];

const Carousel = () => {
  return (
    <section className="bg-red-600 min-h-[600px] p-4" id="procesos">
      <div className="container mx-auto">
        <div className="section-title text-center">
          <h2 className="text-white font-bold text-4xl mt-20">Nuestros Procesos</h2>
          <p className="text-gray-200 text-lg">Procesos Tecnológicos</p>
          <br />
        </div>
        
        <Swiper
          slidesPerView={1} // Por defecto, muestra 1 tarjeta
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 tarjeta en móviles
            768: { slidesPerView: 2 }, // 2 tarjetas en tabletas
            1024: { slidesPerView: 3 }, // 3 tarjetas en pantallas grandes
          }}
        >
          {procesos.map((proceso) => (
            <SwiperSlide key={proceso.id}>
              <div className="bg-white min-h-[450px] rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                <img src={proceso.image} alt={proceso.title} className="w-full h-50 object-cover" />
                <div className="p-4 flex-grow flex flex-col">
                  <h4 className="text-lg font-semibold">{proceso.title}</h4>
                  <p className="text-gray-700 flex-grow">{proceso.description}</p>
                  <div className="mt-4 flex justify-center">
                    <Link
                      to={`/proceso/${proceso.id}`} // Ajusta la ruta según tu configuración de rutas
                      className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-500 transition transform hover:scale-105"
                    >
                      Ver Más
                    </Link>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
