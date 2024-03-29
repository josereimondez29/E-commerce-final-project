import React from 'react';
import ProductoSimple from './ProductoSimple'
import '/workspaces/E-commerce-final-project/src/Styles/GaleriaProductos.css';

const GaleriaProductos = ({ productos }) => {
    return (
        <div className="galeria-productos">
            {productos.map(producto => (
                <ProductoSimple key={producto.id} producto={producto} />
            ))}
        </div>
    );
};

export default GaleriaProductos;

