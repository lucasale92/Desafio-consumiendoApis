import ItemList from "../ItemList";
import getProductos from "../getProductos";
import ItemCount from "../ItemCount";

const ItemListContainer = ({ greeting }) => {
  const productos = getProductos();

  return (
    <div>
      <ItemList productos={productos} />
      <ItemCount
        stock={5}
        inicial={1}
        onAdd={(count) => {
          alert(`se agregaron ${count} productos`);
        }}
      />
    </div>
  );
};
export default ItemListContainer;
