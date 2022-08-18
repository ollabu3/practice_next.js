import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { isToggled } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);
  const { notification } = useSelector((state) => state.ui);

  useEffect(() => {
    const sendCartData = async () => {
      const response = await fetch(
        "https://next-df601-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Send cart data succrssfully!!!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      uiActions.showNotification({
        status: "error",
        title: "Error!...",
        message: "Send cart data failed",
      });
    });
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
