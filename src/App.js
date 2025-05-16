import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        OptiGrowth Global
      </h1>
      <p className="text-lg md:text-xl text-center text-gray-600 max-w-2xl mb-6">
        Libérez votre potentiel avec l'IA. Des stratégies sur mesure, une croissance intelligente, une domination mondiale.
      </p>
      <div className="flex gap-4">
        <Button className="text-white bg-black hover:bg-gray-800 px-6 py-3 text-lg">
          Commencer gratuitement
        </Button>
        <Button variant="outline" className="px-6 py-3 text-lg">
          Voir les formules
        </Button>
      </div>
    </main>
  );
}
