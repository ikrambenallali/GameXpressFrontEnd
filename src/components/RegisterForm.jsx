import React from 'react'

export default function RegisterForm(props) {
  return (
    <>
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
    <h2 className="text-2xl font-bold text-center text-gray-800">Créer un compte</h2>

    <form action="#" method="POST" className="space-y-4">
      <div>
        <label for="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
        <input type="text" id="name" name="name" required
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      <div>
        <label for="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
        <input type="email" id="email" name="email" required
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      <div>
        <label for="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
        <input type="password" id="password" name="password" required
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      <div>
        <label for="confirm-password" className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
        <input type="password" id="confirm-password" name="confirm-password" required
          className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      <button type="submit"
        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        S'inscrire
      </button>
    </form>

    <p className="text-sm text-center text-gray-600">
      Déjà inscrit ? <a href="#" onClick={props.onClick} className="text-blue-600 hover:underline">Connectez-vous</a>
    </p>
  </div>
  </>

  )
}

