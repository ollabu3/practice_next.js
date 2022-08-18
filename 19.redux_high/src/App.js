import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
// https://practice-nextjs-http-default-rtdb.firebaseio.com
function App() {
  const { isToggled } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://next-df601-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {!isToggled && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
