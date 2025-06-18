
function ResultadoCard({ resultado }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-700 mb-2">{resultado.entidad}</h2>
      <p className="text-gray-800 mb-1"><strong>Objeto:</strong> {resultado.valor}</p>
      <p className="text-gray-600 mb-1"><strong>Fecha:</strong> {resultado.fecha}</p>
      <p className="text-gray-500"><strong>Estado:</strong> {resultado.estado}</p>
    </div>
  );
}
export default ResultadoCard;
