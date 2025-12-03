import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getProducts } from '../services/BotiApi';

function Productos() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('categoria');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Saca los productos (fetch) desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const groupedProducts = {
    cervezas: products.filter(p => p.category?.toLowerCase() === 'cerveza' || p.category?.toLowerCase() === 'cervezas'),
    vinos: products.filter(p => p.category?.toLowerCase() === 'vino' || p.category?.toLowerCase() === 'vinos'),
    licores: products.filter(p => p.category?.toLowerCase() === 'licor' || p.category?.toLowerCase() === 'licores')
  };

  if (loading) {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-12 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-3">Cargando productos...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Error al cargar productos</h4>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Determina el titulo dependiendo de la categoría seleccionada
  const getTitle = () => {
    if (categoryFilter === 'cervezas') return 'Cervezas';
    if (categoryFilter === 'vinos') return 'Vinos';
    if (categoryFilter === 'licores') return 'Licores';
    return 'Nuestros Productos';
  };

  // Filtra los productos a mostrar según la categoría
  const shouldShowCategory = (category) => {
    if (!categoryFilter) return true;
    return categoryFilter === category;
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h1>{getTitle()}</h1>
          {!categoryFilter}
        </div>
      </div>

      {/* Sección de Cervezas */}
      {shouldShowCategory('cervezas') && (
      <div className="row mt-5">
        <div className="col-12">
          <h2>Cervezas</h2>
          <hr />
        </div>
        {groupedProducts.cervezas.length > 0 ? (
          groupedProducts.cervezas.map((product) => (
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
            <p className="text-muted text-center">No hay cervezas disponibles</p>
          </div>
        )}
      </div>
      )}

      {/* Sección de Vinos */}
      {shouldShowCategory('vinos') && (
      <div className="row mt-5">
        <div className="col-12">
          <h2>Vinos</h2>
          <hr />
        </div>
        {groupedProducts.vinos.length > 0 ? (
          groupedProducts.vinos.map((product) => (
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
            <p className="text-muted text-center">No hay vinos disponibles</p>
          </div>
        )}
      </div>
      )}

      {/* Sección de Licores */}
      {shouldShowCategory('licores') && (
      <div className="row mt-5">
        <div className="col-12">
          <h2>Licores</h2>
          <hr />
        </div>
        {groupedProducts.licores.length > 0 ? (
          groupedProducts.licores.map((product) => (
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
            <p className="text-muted text-center">No hay licores disponibles</p>
          </div>
        )}
      </div>
      )}
    </div>
  );
}

export default Productos;