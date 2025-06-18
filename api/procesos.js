export default async function handler(req, res) {
  const { search = "", limit = 6 } = req.query;

  const baseUrl = "https://www.datos.gov.co/resource/p6dx-8zbt.json";

  const params = new URLSearchParams({
    $limit: limit.toString(),
    $q: search,
    $order: "fecha_de_publicacion DESC"
  });

  try {
    const response = await fetch(`${baseUrl}?${params}`);
    if (!response.ok) throw new Error(`Error ${response.status}`);
    const data = await response.json();

    const resultados = (Array.isArray(data) ? data : []).map(item => ({
      entidad: item.entidad || "Entidad no disponible",
      valor: item.objeto || "Sin objeto",
      fecha: item.fecha_de_publicacion || "Sin fecha",
      estado: item.estado || item.tipo_contrato || "Sin estado"
    }));

    res.status(200).json(resultados);
  } catch (error) {
    console.error("🔥 Error en /api/procesos:", error.message);
    res.status(500).json({ error: true, message: "Datos mal formateados" });
  }
}
