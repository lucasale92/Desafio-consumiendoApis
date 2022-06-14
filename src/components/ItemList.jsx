import React from "react";
import Item from "./Item";
import ItemDetail from "./ItemDetail";

const ItemList = ({ pastas }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pastas?.map((pasta) => (
        <Item key={pasta.id} pasta={pasta} />
      ))}
      {pastas?.map((pasta) => (
        <ItemDetail key={pasta.id} pasta={pasta} />
      ))}
    </div>
  );
};
export default ItemList;
