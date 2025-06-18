export const obtenerProcesos = async () => {
  try {
    const response = await fetch('https://www.datos.gov.co/resource/i6rr-nzvn.json?$limit=10');
    return await response.json();
  } catch (error) {
    console.error('Error al obtener procesos:', error);
    return [];
  }
};