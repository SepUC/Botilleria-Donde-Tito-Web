import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/BotiApi';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Traer los primeros tres productos de BotiApi
  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        // Solo los primeros 3
        setProducts(data.slice(0, 3));
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopProducts();
  }, []);

  return (
    <div className="container my-2">
      <div className="row align-items-start">
        {/* Warning image column */}
        <div className="col-md-3 d-flex justify-content-center">
          <img src="/assets/img/advertencia.png" alt="Advertencia" className="img-fluid" />
        </div>

        {/* Product cards column */}
        <div className="col-md-9">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="mt-3">Cargando productos destacados...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              <h5 className="alert-heading">Error al cargar productos</h5>
              <p>{error}</p>
            </div>
          ) : (
            <div className="row">
              {products.length > 0 ? (
                products.map((product) => (
                  <div key={product.id} className="col-md-4 mb-3">
                    <Link to={`/producto/${product.id}`} className="text-decoration-none">
                      <div className="card h-100 clickable-card">
                        <img 
                          src={product.cover_image?.url || '/assets/img/placeholder.png'} 
                          className="card-img-top" 
                          alt={product.name}
                          style={{height: '200px', objectFit: 'cover'}}
                          onError={(e) => { e.target.src = '/assets/img/placeholder.png'; }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description || 'Sin descripción disponible'}</p>
                          <p className="text-muted">Precio: ${product.price?.toLocaleString('es-CL') || 'N/A'}</p>
                          {product.stock !== undefined && (
                            <p className="text-muted small">Stock: {product.stock}</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <p className="text-muted text-center">No hay productos disponibles</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;