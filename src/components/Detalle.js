import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/BotiApi';

function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching product detail:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-12 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-3">Cargando detalle del producto...</p>
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
              <h4 className="alert-heading">Error al cargar el producto</h4>
              <p>{error}</p>
              <button className="btn btn-primary mt-2" onClick={() => navigate(-1)}>
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-warning" role="alert">
              <h4 className="alert-heading">Producto no encontrado</h4>
              <button className="btn btn-primary mt-2" onClick={() => navigate(-1)}>
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="row mb-3">
        <div className="col-12">
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            ← Volver
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h1>Detalle del Producto</h1>
        </div>
      </div>
      
      <div className="product-card">
        <div className="card-image">
          <img 
            src={product.cover_image?.url || '/assets/img/placeholder.png'} 
            alt={product.name}
            onError={(e) => { e.target.src = '/assets/img/placeholder.png'; }}
          />
        </div>
        
        <div className="card-text">
          <h2 className="card-title" id="h2-productos">{product.name}</h2>
          <p id="h2-productos">
            <strong id="h2-productos">Precio:</strong> ${product.price?.toLocaleString('es-CL') || 'N/A'} CLP
          </p>
          {product.description && (
            <p id="h2-productos">
              <strong id="h2-productos">Descripción:</strong> {product.description}
            </p>
          )}
          {product.category && (
            <p id="h2-productos">
              <strong id="h2-productos">Categoría:</strong> {product.category}
            </p>
          )}
          {product.stock !== undefined && (
            <p id="h2-productos">
              <strong id="h2-productos">Disponibilidad:</strong> {product.stock > 0 ? `En stock (${product.stock} unidades)` : 'Sin stock'}
            </p>
          )}
          
          <button 
            className="btn btn-primary mt-3"
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detalle;
