import React from 'react'

function LoginForm(props) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

        <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Connexion</h2>
        <form action="#" method="POST" className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
            <input type="email" id="email" name="email" required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
    
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input type="password" id="password" name="password" required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
    
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"/>
              <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">Mot de passe oublié ?</a>
          </div>
    
          <button type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Se connecter
          </button>
        </form>
    
        <p className="text-sm text-center text-gray-600">
          Pas de compte ? <p onClick={props.onClick} className="text-blue-600 hover:underline inline cursor-pointer">Inscrivez-vous</p>
        </p>
      </div>
      </div>
    )

}

export default LoginForm