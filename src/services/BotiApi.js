const BASE_URL = "https://x8ki-letl-twmt.n7.xano.io";

export async function getProducts() {
  const url = `${BASE_URL}/api:XAU5yqUS/product`;
  const response = await fetch(url, {
    headers: {
      "User-Agent": "MiAppReact/1.0 (mi-correo@ejemplo.com)",
    },
  });
  
  if (!response.ok) {
    throw new Error("Error en la llamada a la lista de productos de botillería");
  }
  
  return response.json();
}