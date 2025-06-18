import React from 'react';

const ResultadoCard = ({ data }) => {
  const { entidad, detalle_objeto, valor, estado, fecha, modalidad, urlproceso } = data;

  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <h2 className="text-lg font-semibold text-blue-700">{entidad || 'Entidad no disponible'}</h2>
      <p><strong>Objeto:</strong> {detalle_objeto || 'Sin descripción'}</p>
      <p><strong>Valor:</strong> ${valor || 'N/A'}</p>
      <p><strong>Estado:</strong> {estado || 'Desconocido'}</p>
      <p><strong>Fecha:</strong> {fecha || 'No registrada'}</p>
      <p><strong>Modalidad:</strong> {modalidad || 'No especificada'}</p>
      {urlproceso && <a href={urlproceso} className="text-blue-500 underline" target="_blank" rel="noreferrer">Ver más</a>}
    </div>
  );
};

export default ResultadoCard;