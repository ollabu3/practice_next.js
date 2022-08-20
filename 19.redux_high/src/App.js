import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/actions/cart";
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { isToggled } = useSelector((state) => state.ui);
  const { cart } = useSelector((state) => state);
  const { notification } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          state={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {!isToggled && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
