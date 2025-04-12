import React, { useState } from 'react'
import api from '../api/axios';


export default function RegisterForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/admin/register", {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });

      console.log(response.data);
      
        // Stocker le token
    const token = response.data.token; // adapte selon ton backend
    localStorage.setItem('token', token); 
      switchToLogin();
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Créer un compte</h2>

        <form action="#" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
            <input type="text" id="name" name="name" required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
            <input type="password" id="confirm-password" name="password_confirmation" onChange={(e) => setPasswordConfirmation(e.target.value)} required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <button type="submit" onClick={handleRegister}
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            S'inscrire
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Déjà inscrit ? <span className="text-blue-600 hover:underline">Connectez-vous</span>
        </p>
      </div>
    </div>

  )
}

