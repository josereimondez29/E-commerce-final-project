import React from 'react';
import './Style/ProductoSimple.css';

const ProductoSimple = ({ producto }) => {
    const agregarAlCarrito = () => {
        let productosEnCarrito = localStorage.getItem("productos-en-carrito");
        productosEnCarrito = productosEnCarrito ? JSON.parse(productosEnCarrito) : [];
        productosEnCarrito.push(producto);
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        alert("Producto agregado al carrito");
    };

    return (
        <div className="producto">
            <img className="imagen" src={producto.imagen} alt={producto.titulo} />
            <div className="detalles">
                <h3>{producto.titulo}</h3>
                <p>{producto.descripcion}</p>
                <p>${producto.precio}</p>
                <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default ProductoSimple;

