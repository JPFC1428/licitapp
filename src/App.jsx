import React, { useEffect, useState } from 'react';
import { obtenerProcesos } from './api/procesos';
import ResultadoCard from './components/ResultadoCard';

const App = () => {
  const [procesos, setProcesos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [error, setError] = useState(false);

  const buscar = async () => {
    const resultados = await obtenerProcesos(busqueda);
    setProcesos(resultados);
    setError(resultados.length === 0);
  };

  useEffect(() => {
    buscar();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center bg-blue-600 text-white p-4 rounded-md shadow-md">LICITAPP</h1>
      <p className="text-center text-sm text-gray-700 mb-6">Inteligencia en contratación pública colombiana</p>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="border p-2 rounded-l w-1/2"
        />
        <button onClick={buscar} className="bg-blue-600 text-white px-4 rounded-r">Buscar</button>
      </div>
      {error ? (
        <p className="text-center text-red-600 mt-6">❌ Ocurrió un error o no hay datos disponibles.</p>
      ) : (
        <div className="grid gap-4">
          {procesos.map((proceso, i) => (
            <ResultadoCard key={i} data={proceso} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;