import React, { useState } from 'react';
import ItemList from '././itemList';

const ItemListContainer = ({ productos }) => {
    const [categoria, setCategoria] = useState("Todos");

    const CategoriaChange = (cat) => {
        setCategoria(cat);
    };

    const productosFiltrados = categoria === "Todos" 
        ? productos 
        : productos.filter(producto => producto.categoria === categoria);

    return (
        <>
            {
                productos.length === 0 ?
                    <p>Cargando...</p>
                    :
                    <>
                        <h2 style={{ padding: "2rem" }}>Bienvenidos a la pagina</h2>
                        <div style={{ padding: "2rem" }}>
                            <button onClick={() => CategoriaChange("Todos")}>Todos</button>
                            <button onClick={() => CategoriaChange("Negro")}>Negro</button>
                            <button onClick={() => CategoriaChange("Blanco")}>Blanco</button>
                        </div>
                        <ItemList productos={productosFiltrados} />
                    </>
            }
        </>
    );
};

export default ItemListContainer;