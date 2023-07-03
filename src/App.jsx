import CartContainer from './reduxCartProject/components/CartContainer';
import Navbar from './reduxCartProject/components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculateTotal,
  getCartItems,
} from './reduxCartProject/features/cart/cartSlice';
import { useEffect } from 'react';
import Modal from './reduxCartProject/components/Modal';

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);

  // Open or close Modal
  const { isModalOpen } = useSelector((store) => store.modal);
  // calculate total will update cart total and total price on Navbar and Cart component respectively

  useEffect(() => {
    // console.log('render');
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  return (
    <main>
      {isModalOpen && <Modal />}
      <Navbar />
      {isLoading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <CartContainer />
      )}
    </main>
  );
}

export default App;
