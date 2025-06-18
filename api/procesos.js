export default async function handler(req, res) {
  const { search = "", limit = 6 } = req.query;

  const baseUrl = "https://www.datos.gov.co/resource/nma6-7zmm.json";
  const params = new URLSearchParams({
    $limit: limit.toString(),
    $q: search,
    $order: "fecha_publicacion DESC"
  });

  try {
    const response = await fetch(`${baseUrl}?${params}`);
    if (!response.ok) throw new Error(`API respondió con ${response.status}`);

    const data = await response.json();
    if (!Array.isArray(data)) throw new Error("La API no retornó un array");

    const resultados = data.map(item => ({
      entidad: item.entidad_contratante || "Entidad no disponible",
      valor: item.objeto || "Sin descripción",
      fecha: item.fecha_publicacion || "Sin fecha",
      estado: item.estado || "Sin estado"
    }));

    res.status(200).json(resultados);
  } catch (error) {
    console.error("❌ Error en handler /api/procesos:", error.message);
    res.status(500).json({ error: true, message: error.message });
  }
}
