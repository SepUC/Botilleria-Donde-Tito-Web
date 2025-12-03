const BASE_URL = "https://x8ki-letl-twmt.n7.xano.io";

// Cache para reducir llamadas a la API - Datos temporales
const cache = {
  products: null,
  productsTimestamp: null,
  productDetails: {},
  CACHE_DURATION: 5 * 60 * 1000, // Se reinicia por cada 5 minutos
};

// Función para reiniciar intento de API por cualquier cosa
async function fetchWithRetry(url, options = {}, retries = 2, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      
      if (response.status === 429) {
        // Limite de tasa
        const waitTime = delay * (i + 1);
        console.log(`Rate limit alcanzado (429). Esperando ${waitTime}ms antes de reintentar...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response;
    } catch (error) {
      if (i === retries - 1) {
        throw error;
      }
      console.log(`Intento ${i + 1} fallido, reintentando en ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

export async function getProducts() {
  // Verificar si hay datos en cache y si son recientes
  const now = Date.now();
  if (cache.products && cache.productsTimestamp && (now - cache.productsTimestamp < cache.CACHE_DURATION)) {
    console.log("Usando productos desde cache");
    return cache.products;
  }

  const url = `${BASE_URL}/api:XAU5yqUS/product`;
  
  try {
    const response = await fetchWithRetry(url, {
      headers: {
        "User-Agent": "MiAppReact/1.0 (mi-correo@ejemplo.com)",
      },
    });
    
    const data = await response.json();
    
    // Guardar en cache
    cache.products = data;
    cache.productsTimestamp = now;
    
    return data;
  } catch (error) {
    console.error("Error en getProducts:", error);
    
    // Si hay cache antiguo, usarlo como fallback
    if (cache.products) {
      console.log("Usando cache antiguo como fallback");
      return cache.products;
    }
    
    throw new Error("Error al cargar los productos. Por favor intenta de nuevo en unos momentos.");
  }
}

export async function getProductById(id) {
  // Primero intentar obtener del cache de productos
  if (cache.products) {
    const cachedProduct = cache.products.find(p => p.id === parseInt(id));
    if (cachedProduct) {
      console.log(`Usando producto ${id} desde cache`);
      return cachedProduct;
    }
  }

  // Verificar cache específico del producto
  if (cache.productDetails[id]) {
    const cachedDetail = cache.productDetails[id];
    const now = Date.now();
    if (now - cachedDetail.timestamp < cache.CACHE_DURATION) {
      console.log(`Usando detalle del producto ${id} desde cache`);
      return cachedDetail.data;
    }
  }

  const url = `${BASE_URL}/api:XAU5yqUS/product/${id}`;
  
  try {
    const response = await fetchWithRetry(url, {
      headers: {
        "User-Agent": "MiAppReact/1.0 (mi-correo@ejemplo.com)",
      },
    });
    
    const data = await response.json();
    
    // Guardar en cache
    cache.productDetails[id] = {
      data: data,
      timestamp: Date.now()
    };
    
    return data;
  } catch (error) {
    console.error("Error en getProductById:", error);
    
    // Si hay cache antiguo, usarlo como fallback
    if (cache.productDetails[id]) {
      console.log(`Usando cache antiguo del producto ${id} como fallback`);
      return cache.productDetails[id].data;
    }
    
    throw new Error("Error al cargar el detalle del producto. Por favor intenta de nuevo en unos momentos.");
  }
}
