import React from 'react';
import { BookOpenCheck } from 'lucide-react';

interface AuthFormProps {
  isLogin?: boolean;
  onSubmit: (data: any) => void;
}

export function AuthForm({ isLogin = false, onSubmit }: AuthFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <div className="w-full max-w-md p-8 bg-gray-900/60 backdrop-blur-lg rounded-xl shadow-2xl">
      <div className="flex items-center justify-center mb-8">
        <BookOpenCheck className="w-12 h-12 text-blue-500" />
      </div>
      <h2 className="text-2xl font-bold text-center text-white mb-8">
        {isLogin ? 'Iniciar Sesión' : 'Registro'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <>
            <input
              type="text"
              name="nombre_completo"
              placeholder="Nombre Completo"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
            <input
              type="text"
              name="dni"
              placeholder="DNI"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
            <input
              type="email"
              name="correo_electronico"
              placeholder="Correo Electrónico"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
            <input
              type="text"
              name="linea_llamadas"
              placeholder="Línea de Llamadas"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
            <input
              type="text"
              name="linea_whatsapp"
              placeholder="WhatsApp"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
            <input
              type="text"
              name="cuenta_numero"
              placeholder="Número de Cuenta"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
            <input
              type="text"
              name="banco"
              placeholder="Banco"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
            <input
              type="text"
              name="titular_cuenta"
              placeholder="Titular de la Cuenta"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
            <input
              type="text"
              name="codigo_referido"
              placeholder="Código de Referido"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
          </>
        )}
        <input
          type="text"
          name="nombre_usuario"
          placeholder="Nombre de Usuario"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
          required
        />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
          required
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors"
        >
          {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
        </button>
      </form>
    </div>
  );
}