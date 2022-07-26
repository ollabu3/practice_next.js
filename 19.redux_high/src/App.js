import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const { isToggled } = useSelector((state) => state.ui);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    fetch(
      "https://practice-nextjs-http-default-rtdb.firebaseio.com/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);

  return (
    <Layout>
      {!isToggled && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
