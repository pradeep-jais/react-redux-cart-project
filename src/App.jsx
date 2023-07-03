import CartContainer from './reduxCartProject/components/CartContainer';
import Navbar from './reduxCartProject/components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './reduxCartProject/features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  // calculate total will update cart total and total price on Navbar and Cart component respectively

  useEffect(() => {
    // console.log('render');
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
