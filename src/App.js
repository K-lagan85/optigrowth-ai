import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-indigo-600">OptiGrowth AI</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:text-indigo-600">Fonctionnalités</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <h2 className="text-4xl font-extrabold mb-4">L'IA au service de votre croissance</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Optimisez vos stratégies marketing et boostez votre chiffre d'affaires avec notre copilote IA intelligent.
        </p>
        <a href="#contact" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100">
          Demander une démo gratuite
        </a>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Ce que propose OptiGrowth AI</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Analyse Prédictive</h4>
            <p>Anticipez les tendances et prenez des décisions fondées sur les données en temps réel.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Campagnes intelligentes</h4>
            <p>Lancez des actions marketing ultra ciblées en quelques clics.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Automatisation IA</h4>
            <p>Gagnez du temps et accélérez votre croissance avec nos automatisations puissantes.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-indigo-50 px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-8">Intéressé ? On vous rappelle</h3>
        <form className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
          <input type="text" placeholder="Nom" className="w-full p-3 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
          <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded" />
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700">
            Envoyer
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500">
        © 2025 OptiGrowth AI. Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;
