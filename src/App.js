import "./App.css";
import ProductList from "./components/product-list/index";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CatalogueProvider>
          <CartProvider>
            <div className="Container_product">
              <div className="Catalogue_container">
                <ProductList type="catalogue" />
              </div>
              <div className="Cart_container">
                <ProductList type="cart" />
              </div>
            </div>
          </CartProvider>
        </CatalogueProvider>
      </header>
    </div>
  );
}

export default App;
