import { useContext } from "react";
import { Button } from "../button/index";
import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";
import "./style.css";

function ProductList({ type }) {
  const { catalogue } = useContext(CatalogueContext);
  console.log(catalogue);
  const { cart } = useContext(CartContext);

  const title = type === "catalogue" ? "Catálogo" : "Carrinho";

  return (
    <div className="Container">
      <ul className="ul">
        <h1 className="titulo">{title}</h1>
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <li className="lista" key={index}>
              <p className="Name">{item.name} </p>{" "}
              <Button type={type} item={item} />
            </li>
          ))}

        {type === "cart" &&
          cart.map((item, index) => (
            <li className="lista" key={index}>
              <p className="Name">{item.name} </p>
              <Button type={type} item={item} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProductList;
