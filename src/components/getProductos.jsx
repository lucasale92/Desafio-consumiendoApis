import { useEffect, useState } from "react";
import { productos } from "../data/productos";

export default function GetProductos() {
  const [resultado, setResultado] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductos = new Promise((res) => {
      setTimeout(() => {
        res(productos);
      });
    });

    getProductos
      .then((resultado) => {
        setResultado(resultado);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return resultado;
}
