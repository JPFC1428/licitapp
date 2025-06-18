import React from 'react';

const ResultadoCard = ({ data }) => {
  const { entidad, objeto, valor, estado, fecha, modalidad } = data;

  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <h2 className="text-lg font-semibold">{entidad || 'Entidad no disponible'}</h2>
      <p><strong>Objeto:</strong> {objeto || 'Sin descripción'}</p>
      <p><strong>Valor:</strong> ${valor || 'N/A'}</p>
      <p><strong>Estado:</strong> {estado || 'Desconocido'}</p>
      <p><strong>Fecha:</strong> {fecha || 'No registrada'}</p>
      <p><strong>Modalidad:</strong> {modalidad || 'No especificada'}</p>
    </div>
  );
};

export default ResultadoCard;