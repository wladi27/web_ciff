import React from 'react';
import { AuthForm } from '../components/AuthForm';
import { Background } from '../components/Background';
import { RegisterData } from '../types/auth';

export function Register() {
  const handleRegister = async (data: RegisterData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/registrar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Error en el registro');
      }

      // Handle successful registration
      const responseData = await response.json();
      console.log('Registration successful:', responseData);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Background />
      <AuthForm onSubmit={handleRegister} />
    </div>
  );
}