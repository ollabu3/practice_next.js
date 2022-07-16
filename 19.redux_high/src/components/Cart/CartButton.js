import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui";

const CartButton = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function handleToggleBtn(e) {
    e.preventDefault();
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={handleToggleBtn}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
