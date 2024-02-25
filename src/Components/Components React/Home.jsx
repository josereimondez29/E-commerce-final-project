import React from 'react';
import Productos from './Productos'
import Carrito from './Carrito';
import '/workspaces/E-commerce-final-project/src/Styles/Home.css'

const Home = () => {
    // Supongamos que tienes una lista de productos para mostrar en la página principal
    const productos = [
        { id: 1, titulo: 'Producto 1', descripcion: 'Descripción del Producto 1', precio: 10, imagen: 'imagen1.jpg' },
        { id: 2, titulo: 'Producto 2', descripcion: 'Descripción del Producto 2', precio: 20, imagen: 'imagen2.jpg' },
        { id: 3, titulo: 'Producto 3', descripcion: 'Descripción del Producto 3', precio: 30, imagen: 'imagen3.jpg' }
    ];

    return (
        <div>
            <h1>Bienvenido a mi Tienda Online</h1>
            <Productos productos={productos} />
            <Carrito />
        </div>
    );
};

export default Home;
