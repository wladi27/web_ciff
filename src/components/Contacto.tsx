import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://3s73r3m9-8000.use2.devtunnels.ms/api/contact.php', { // Cambia la URL aquí
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setStatusMessage('Tu mensaje ha sido enviado. ¡Gracias!');
          setErrorMessage('');
          setFormData({ name: '', email: '', subject: '', message: '' }); // Resetear el formulario
        } else {
          setErrorMessage(data.message);
          setStatusMessage('');
        }
      })
      .catch(() => {
        setErrorMessage('Error en la solicitud');
        setStatusMessage('');
      });
  };

  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="section-title text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Contactos</h2>
          <p className="text-lg text-gray-600">Contáctanos</p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-4">
            <iframe
              style={{ border: 0, width: '100%', height: '670px' }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15741.451616892715!2d-64.4854355!3d9.4771294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dd2af6418e1f171%3A0x294d9a78853111f!2sCVG%20COMPLEJO%20INDUSTRIAL%20F%C3%81BRICA%20DE%20F%C3%81BRICAS%20HUGO%20CH%C3%81VEZ%20FR%C3%8DAS%2C%20C.A.!5e0!3m2!1ses-419!2sve!4v1725686411859!5m2!1ses-419!2sve"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="lg:w-1/2 p-4">
            <div className="info bg-white p-6 rounded-lg shadow-lg mb-4">
              <div className="address mb-4">
                <i className="bi bi-geo-alt text-blue-600"></i>
                <h4 className="font-bold text-lg">Ubicación:</h4>
                <p className="text-gray-600">Av. José Antonio Anzoátegui, Local Manzana 1 N° S/N <br />
                  Zona Industrial Anaco Anzoátegui. Zona Postal 6003.</p>
              </div>

              <div className="email mb-4">
                <i className="bi bi-envelope text-blue-600"></i>
                <h4 className="font-bold text-lg">Email:</h4>
                <p className="text-gray-600">complejoindustrialfdf@gmail.com</p>
              </div>

              <div className="phone mb-4">
                <i className="bi bi-phone text-blue-600"></i>
                <h4 className="font-bold text-lg">Teléfono:</h4>
                <p className="text-gray-600">+58 412-3739839</p>
              </div>
            </div>

            <form id="contactCIFF" onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Asunto"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  name="message"
                  rows="5"
                  className="form-control w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {statusMessage && <div className="my-3 text-green-600">{statusMessage}</div>}
              {errorMessage && <div className="my-3 text-red-600">{errorMessage}</div>}
              <div className="text-center">
                <button type="submit" className="bg-red-600 text-white p-3 rounded hover:bg-blue-700 transition duration-200">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
