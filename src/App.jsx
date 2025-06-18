import React, { useEffect, useState } from 'react';
import { obtenerProcesos } from './api/procesos';
import ResultadoCard from './components/ResultadoCard';

const App = () => {
  const [procesos, setProcesos] = useState([]);

  useEffect(() => {
    obtenerProcesos().then(setProcesos);
  }, []);

  return (
    <main className="p-4 grid gap-4">
      <h1 className="text-2xl font-bold mb-4">Procesos de Contratación en Colombia</h1>
      {procesos.map((proceso, index) => (
        <ResultadoCard key={index} data={proceso} />
      ))}
    </main>
  );
};

export default App;