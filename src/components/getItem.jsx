import { useEffect, useState } from "react";
import { productos } from "../data/productos";

export default function GetITem() {
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const getProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos[0]);
      }, 2000);
    });

    getProductos.then((resultado) => {
      setResultado(resultado);
    });
  }, []);

  return resultado;
}
