import React from "react";

export default function ItemDetail({ productos }) {
  return (
    <>
      <div className="container bg-light pb-3">
        <div className="row">
          <h3 className=" fs-1 mt-3 mx-4">
            <u>Detalle del Producto</u>
          </h3>
          <div className="col-lg-6 col-sm-12 mt-3">
            <div className="card">
              <img
                className="card-img-top"
                src={productos.imagen}
                alt="productos"
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-3">
            <h3 className="mt-3 text-start">{productos.nombre}</h3>
            <h4 className="text-start">Categoria: {productos.categoria}</h4>
            <h4 className="text-start">Precio: ${productos.precio}</h4>
            <h4 className="text-start">Stock: {productos.stock}</h4>
            <h4 className="text-start">Descripcion: {productos.descripcion}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
