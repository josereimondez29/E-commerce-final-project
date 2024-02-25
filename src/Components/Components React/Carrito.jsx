import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import '/workspaces/E-commerce-final-project/src/Styles/Carrito.css'; 

const Carrito = () => {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);

    useEffect(() => {
        cargarProductosEnCarrito();
    }, []);

    const cargarProductosEnCarrito = () => {
        let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
        productosEnCarritoLS = JSON.parse(productosEnCarritoLS);
        if (productosEnCarritoLS) {
            setProductosEnCarrito(productosEnCarritoLS);
        }
    };

    const eliminarDelCarrito = (id) => {
        const nuevosProductosEnCarrito = productosEnCarrito.filter(producto => producto.id !== id);
        setProductosEnCarrito(nuevosProductosEnCarrito);
        localStorage.setItem("productos-en-carrito", JSON.stringify(nuevosProductosEnCarrito));
        Toastify({
            text: "Producto eliminado del carrito",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #4b33a8, #785ce9)",
                borderRadius: "2rem",
                textTransform: "uppercase",
                fontSize: ".75rem"
            }
        }).showToast();
    };

    const vaciarCarrito = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Se van a borrar todos los productos del carrito",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar carrito',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setProductosEnCarrito([]);
                localStorage.removeItem("productos-en-carrito");
                Toastify({
                    text: "El carrito ha sido vaciado",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        background: "linear-gradient(to right, #4b33a8, #785ce9)",
                        borderRadius: "2rem",
                        textTransform: "uppercase",
                        fontSize: ".75rem"
                    }
                }).showToast();
            }
        });
    };

    return (
        <div className="carrito">
            {}
            {productosEnCarrito.map(producto => (
                <div key={producto.id} className="producto-en-carrito">
                    <p>{producto.nombre}</p>
                    <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
                </div>
            ))}
            <div className="acciones">
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    );
};

export default Carrito;

