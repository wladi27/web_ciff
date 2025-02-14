import React, { useState, useEffect } from 'react';

const Noticias = () => {
  const newsItems = [
    {
      image: 'assets/img/photo_4947539829932010998_y.jpg',
      title: 'Fortaleciendo Sinergias: Mesa Técnica entre PDVSA Petrocedeño y el CIFF',
      content: 'Continuamos fortaleciendo la capacidad productiva del sector petrolero y avanzando en la especialización en piezas petroleras, se llevó a cabo una mesa técnica con el equipo de PDVSA Petrocedeño. Este encuentro reunió a los presidentes de ambas empresas: el Ing. Carlos Torres, Presidente de PDVSA Petrocedeño, y el Ing. Carlos Faria, Presidente del Complejo Industrial Fabrica de Fabricas Hugo Chávez Frías, C.A.',
      slogan: '¡Fabricamos Victorias!',
    },
    {
      image: 'assets/img/photo_4936160777937726857_y.jpg',
      title: 'CIFF adquiere nuevos instrumentos de medición para cumplir con las estrictas normas de calidad en la Industria Petrolera',
      content: 'En un esfuerzo por elevar los estándares de calidad en la producción, el CIFF ha adquirido instrumentos de medición para la verificación y comprobación, los cuales permitirán cumplir con las estrictas normas de calidad en el sector petrolero, con lo que podemos, desde este momento, incorporarnos a la producción de importantes piezas que demanda nuestra principal industria, PDVSA. Esta adquisición mejora nuestros procesos de fabricación dando un salto cualitativo en la precisión de sus procesos productivos.',
      slogan: '¡Fabricamos Victorias!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex === 0) ? newsItems.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex === newsItems.length - 1) ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 20000); // Cambia de diapositiva cada 5 segundos
    return () => clearInterval(interval); // Limpieza del intervalo al desmontar el componente
  }, [currentIndex]);

  return (
    <section id="team" className="bg-blue-900 py-12" data-aos="fade-up">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="section-title text-gray-300 mb-8">
          <h2 className="text-4xl font-bold mb-2">¡Entérate!</h2>
          <p className="text-lg">Nuestras Noticias</p>
        </div>
        <br />
        <div className="relative w-full max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img src={newsItems[currentIndex].image} alt="News" className="w-full h-64 md:h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{newsItems[currentIndex].title}</h2>
              <p className="text-gray-700 mb-4">{newsItems[currentIndex].content}</p>
              <p className="text-lg italic text-gray-600">{newsItems[currentIndex].slogan}</p>
              <div className="mt-4 flex space-x-2">
                {/* Agrega aquí los íconos de redes sociales */}
              </div>
            </div>
          </div>

          <button onClick={goToPrevious} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white w-8 h-8 carousel-button">
            <span className="block w-4 h-4 border-l-2 border-t-2 transform -rotate-45"></span>
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-900 w-8 h-8 carousel-button">
            <span className="block w-4 h-4 border-r-2 border-t-2 transform rotate-45"></span>
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <br /><br /><br />
    </section>
  );
};

export default Noticias;
