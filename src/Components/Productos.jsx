import React from 'react';
import GaleriaProductos from './GaleriaProductos';
import './Styles/Productos.css';

const ProductosComponent = ({ productos }) => {
    return (
        <div className="productos">
            <h2>Nuestros Productos</h2>
            <GaleriaProductos productos={productos} />
        </div>
    );
};

export default ProductosComponent;
