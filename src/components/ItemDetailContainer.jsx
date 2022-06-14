import ItemDetail from "./ItemDetail";
import GetITem from "./getItem";
import { Spinner } from "react-bootstrap";

export default function ItemDetailContainer() {
  let resultado = GetITem();
  console.log(resultado);

  return (
    <div>
      {resultado.id ?? null ? (
        <ItemDetail productos={resultado} />
      ) : (
        <h3>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading</span>
          </Spinner>
        </h3>
      )}
    </div>
  );
}
