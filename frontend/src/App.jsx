
import { useState } from "react";
import ResultadoCard from "./components/ResultadoCard";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(false);

  const buscar = async () => {
    if (!busqueda.trim()) return;
    setCargando(true);
    setError(false);
    try {
      const response = await fetch(`/api/procesos?search=${encodeURIComponent(busqueda)}&limit=6`);
      const data = await response.json();
      setResultados(data);
    } catch (err) {
      console.error("Error al buscar:", err);
      setError(true);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 text-white py-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">LICITAPP</h1>
        <p className="text-sm mt-2">Plataforma de inteligencia en contratación pública</p>
      </header>
      <main className="max-w-4xl mx-auto mt-6">
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Buscar procesos..."
            className="flex-1 p-3 rounded-md border shadow-sm"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && buscar()}
          />
          <button onClick={buscar} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Buscar
          </button>
        </div>
        {cargando && <p className="text-center text-gray-600">🔄 Buscando...</p>}
        {error && <p className="text-center text-red-500">❌ Error al buscar procesos.</p>}
        {!cargando && !error && resultados.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {resultados.map((r,i) => <ResultadoCard key={i} resultado={r}/>)}
          </div>
        )}
      </main>
    </div>
  );
}
export default App;
