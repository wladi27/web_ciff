import React from 'react';
import { AuthForm } from '../components/AuthForm';
import { Background } from '../components/Background';
import { LoginCredentials } from '../types/auth';

export function Login() {
  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        throw new Error('Error en el inicio de sesión');
      }

      // Handle successful login
      const data = await response.json();
      console.log('Login successful:', data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Background />
      <AuthForm isLogin onSubmit={handleLogin} />
    </div>
  );
}