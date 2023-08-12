import { useState, createContext, useEffect } from "react";
import Cart from "../components/Cart";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [ratingState, setRatingState] = useState(true);

  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemsAmount(amount);
    const total = cart.reduce((a, c) => {
      return a + c.amount * c.attributes.price;
    }, 0);
    setTotal(total);
  }, [cart]);

  const addToCart = (item, id) => {
    const itemId = parseInt(id);
    console.log(cart, itemId, item);
    const newItem = { ...item[0], amount: 1 };
    console.log(newItem);
    // setCart([...cart, newItem]);
    const cartItem = cart.find((item) => item.id === itemId);
    console.log(cartItem);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemId) {
          setAmount(cartItem.amount + 1);
          if (document.getElementById(`input${item.id}`)) {
            document.getElementById(`input${item.id}`).value = item.amount + 1;
          }
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    console.log(cart);
    setIsOpen(true);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value)) {
            setAmount(1);
            return { ...item, amount: 1 };
          } else {
            setAmount(value);
            return { ...item, amount: value };
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    setIsOpen(true);
  };

  const handleSelect = (e, id) => {
    const value = parseInt(e.target.value);
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          setAmount(value);
          return { ...item, amount: value };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };
  const clearCart = () => [setCart([])];

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeItem,
        itemsAmount,
        handleInput,
        handleSelect,
        total,
        clearCart,
        ratingState,
        setRatingState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
