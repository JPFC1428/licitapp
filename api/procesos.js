export const obtenerProcesos = async (busqueda = '') => {
  try {
    const baseUrl = 'https://www.datos.gov.co/resource/i6rr-nzvn.json';
    const query = busqueda
      ? `?$where=upper(detalle_objeto) like upper('%25${encodeURIComponent(busqueda)}%25')&$limit=15&$order=fecha DESC`
      : '?$limit=10&$order=fecha DESC';

    const response = await fetch(baseUrl + query);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al buscar: Datos mal formateados', error);
    return [];
  }
};
