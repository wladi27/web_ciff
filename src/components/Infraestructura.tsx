import React, { useState } from 'react';

const Infraestructura = () => {
  const [modalOpen, setModalOpen] = useState(null);

  const openModal = (modalId) => {
    setModalOpen(modalId);
  };

  const closeModal = () => {
    setModalOpen(null);
  };

  return (
    <section id="infraestructura" className="cards py-12" data-aos="fade-up">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="section-title mb-12">
          <h2 className="text-4xl font-bold">Infraestructura</h2>
          <p className="text-lg text-gray-600">Infraestructura</p>
        </div>
        <p className="text-2xl text-gray-600 mb-8">Área del Complejo Industrial 29,02 ha</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              title: 'GALPONES',
              description: 'Se cuenta con 27 galpones productivos.',
              imgSrc: 'assets/img/photo_5096245513413570023jsf.jpg',
              modalImages: ['assets/img/galpones.jpg', 'assets/img/galpones_2.jpg'],
            },
            {
              id: 2,
              title: 'MÁQUINAS',
              description: '+1000 equipos de alta tecnología.',
              imgSrc: 'assets/img/maquinas.png',
              modalImages: ['assets/img/p2.jpg', 'assets/img/p2_2.jpg'],
            },
            {
              id: 3,
              title: 'PRODUCTOS TERMINADOS',
              description: 'Partes y piezas fabricadas con mano de obra calificada.',
              imgSrc: 'assets/img/n1.jpg',
              modalImages: ['assets/img/pt/photo_4931918088983653720_y.jpg', 'assets/img/pt/photo_4933896445409471940_y.jpg'],
            },
          ].map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md flex flex-col">
              <div className="relative flex-grow">
                <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover md:h-60 lg:h-72" />
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2">
                  <h2 className="text-xl font-semibold text-center">{item.title}</h2>
                </div>
              </div>
              <div className="p-4 flex items-center justify-center">
                <p className="text-center">{item.description}</p>
              </div>
              <div className="p-4 text-center">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                  onClick={() => openModal(item.id)}
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {modalOpen && (
        <div className="modal flex justify-center items-center fixed z-50 left-0 top-0 w-full h-full bg-black bg-opacity-70">
          <div className="modal-content bg-white p-4 rounded-lg text-center w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto">
            <span className="close cursor-pointer text-2xl absolute top-2 right-2" onClick={closeModal}>
              &times;
            </span>
            <h2 className="text-xl font-bold mb-4">{[
              { 1: 'GALPONES' },
              { 2: 'MÁQUINAS' },
              { 3: 'PRODUCTOS TERMINADOS' },
            ].find((item) => item[modalOpen])[modalOpen]}</h2>
            <div className="modal-gallery grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 1: ['assets/img/ga/CSC_0284.JPG', 'assets/img/ga/DSC_0542.JPG', 'assets/img/ga/DSC_0978.JPG', 'assets/img/ga/PHOTO-5846846664.png'] },
                { 2: ['assets/img/ma/DSC_0416.JPG', 'assets/img/ma/DSC_0417.JPG', 'assets/img/ma/DSC_0419.JPG', 'assets/img/ma/DSC_0956.JPG', 'assets/img/ma/IMG_20221013_161528_5.jpg', 'assets/img/ma/IMG_20221013_161536_9.jpg'] },
                { 3: ['assets/img/pt/photo_4916055782622080496_y (1) (1).jpg', 'assets/img/pt/20240704_120449 (2).jpg', 'assets/img/pt/20250115_183350 (2).jpg', 'assets/img/pt/photo_4916055782622080487_y.jpg', 'assets/img/pt/photo_5082468980609887624_y (1).jpg', 'assets/img/pt/photo_5118465715697987225_y.jpg'] },
              ].find((item) => item[modalOpen])[modalOpen].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Modal ${modalOpen} - Imagen ${index + 1}`}
                  className="modal-image max-w-full max-h-96 h-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              ))}
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mt-4" onClick={closeModal}>
              Cerrar Modal
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Infraestructura;
