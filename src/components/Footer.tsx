import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-red-900">
      <div className="footer-top bg-red-900">
        <div className="container mx-auto">
          <div className="bg-red-900 text-white p-6">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="mb-6 md:mb-0">
                <img
                  src="assets/img/logof.png"
                  alt="Company Logo"
                  width="150"
                  height="150"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))' }}
                  className="mb-4"
                />
              </div>
              <div className="mb-6 md:mb-0">
                <h3 className="font-bold mb-2">Ubicación</h3>
                <p className="text-sm">Av. José Antonio Anzoátegui,</p>
                <p className="text-sm">Local Manzana 1 N° S/N</p>
                <p className="text-sm">Zona Industrial Anaco Anzoátegui.</p>
                <p className="text-sm">Zona Postal 6003.</p>
              </div>
              <div className="mb-6 md:mb-0">
                <h3 className="font-bold mb-2">Sistema</h3>
                <ul className="text-sm">
                  <li>Inicio</li>
                  <li>Principal</li>
                  <li>Infraestructura</li>
                  <li>Noticias</li>
                  <li>Contactos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">E-mail</h3>
                <p className="text-sm flex items-center mb-2">
                  <svg className="mr-2" width="16" height="16" fill="currentColor">
                    <path d="M2 2h12v12H2V2zm1 1v10h10V3H3zm5 5l5-3H8l-5 3 5 3z" />
                  </svg>
                  compindustrialdf@gmail.com
                </p>
                <h3 className="font-bold mb-2">Número telefónico:</h3>
                <p className="text-sm flex items-center mb-2">
                  <svg className="mr-2" width="16" height="16" fill="currentColor">
                    <path d="M2 2h12v12H2V2zm1 1v10h10V3H3zm5 5l5-3H8l-5 3 5 3z" />
                  </svg>
                  +58 412-3739839
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center py-4">
        <div className="copyright text-white">
          &copy; Copyright <strong><span>CIFF</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
