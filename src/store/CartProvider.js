import { useEffect, useState } from 'react';
import CartContext from './cart-context';
import data from '../DATA.json';
import { addToLocalStorage, readDataFromLS } from '../helpers/getData';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// cart reducer that define the action you want to do
// const cartReducer = (state, action) => {
//     if (action.type === 'ADD'){
//         const updatedItems = state.items.concat(action.item);
//         const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
//         return {
//             items: updatedItems,
//             totalAmount: updatedTotalAmount
//         }
//     }
// return defaultCartState;
// };

export default function CartProvider(props) {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [cartNum, setCartNum] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const existingItemsInCart = readDataFromLS();
    // console.log(existingItemsInCart)
    let totalPrice = 0;
    let cartItemsCounter = 0;

    let itemToBeRenderedToCart = [];

    for (let originalCoreProduct of data) {
      for (let item of existingItemsInCart)
        if (item.id == originalCoreProduct.id) {
          itemToBeRenderedToCart.push({
            ...originalCoreProduct,
            quantity: item.quantity,
          });
          cartItemsCounter += item.quantity;
          totalPrice += item.quantity * originalCoreProduct.price;
        }
    }

    setItemsInCart(itemToBeRenderedToCart);
    setCartNum(cartItemsCounter);
    setTotalPrice(totalPrice);
    console.log(itemToBeRenderedToCart);
  }, []);

  const addItemToCart = (id, quantity) => {
    // mapping over the data to get all the products details
    // create new array to set the state with it
    // if the item I want to add does not exist in the cart .. i will push it
    // if it exists i will increse the quantity
    // lastly we will set the state and add to local storage
    let itemsToAdd = data.filter((d) => {
      return d.id === id;
    });
    itemsToAdd = {
      ...itemsToAdd[0],
      quantity: quantity,
    };

    let newArr = [...itemsInCart];
    console.log(itemsInCart);

    // console.log(newArr)
    let index = newArr.findIndex((index) => index.id == id);

    if (index === -1) newArr.push(itemsToAdd);
    else {
      newArr[index].quantity += quantity;
    }

    setItemsInCart(newArr);
    setCartNum((prevState) => prevState + quantity);
    setTotalPrice((prevState) => prevState + itemsToAdd.price * quantity);

    addToLocalStorage(itemsInCart);
  };

  const removeItemFromCart = (id) => {
    const newCartItems = itemsInCart.filter((item) => item.id !== id);
    const deletedItem = itemsInCart.filter((item) => item.id === id);
    setItemsInCart(newCartItems);
    setCartNum((prevState) => prevState - deletedItem[0].quantity);
    setTotalPrice(
      (prevState) => prevState - deletedItem[0].price * deletedItem[0].quantity
    );

    addToLocalStorage(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart,
        itemsInCart,
        totalPrice,
        cartNum,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
