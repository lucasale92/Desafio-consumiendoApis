import React from "react";

export default function Item({ producto }) {
  const { nombre, precio, imagen, stock } = producto;

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card mt-3">
          <img className="card-img-top" src={imagen} alt="Comida" />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">${precio}</p>
            <p className="card-text">Stock:{stock}</p>
            <a href="/#" className="btn btn-primary">
              Ver
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
