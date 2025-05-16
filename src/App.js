import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold text-blue-700">OptiGrowth Global</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:text-blue-500">Fonctionnalités</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Optimisez votre croissance</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-700">
          Automatisez, innovez et gagnez en performance avec notre IA intelligente.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Démarrer maintenant
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4">
        © {new Date().getFullYear()} OptiGrowth Global. Tous droits réservés.
      </footer>
    </div>
  );
}
