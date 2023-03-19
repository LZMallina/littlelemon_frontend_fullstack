import { createContext, useContext, useState, useEffect } from 'react';
import useFetchdata from "../components/hooks/useFetchdata";

const CartContext = createContext({});
    
export const CartcontextProvider = ({ children }) => {
  //Array to store quantity and id of the products
  const [cartProducts, setCartProducts] = useState([]);

  //Fetch products from API
  const { list, fetchItems } = useFetchdata();

  useEffect(() => {
    fetchItems("https://lzmallina.github.io/little_lemon_API/products.json");
  }, []);

  const orderCategories = list.reduce((categoryBank, item) => {
    if (!categoryBank.includes(item.categories)) {
      categoryBank.push(item.categories);
    }
    return categoryBank;
  }, []);
  const entrees = list.filter((item) => {
    return item.categories === "Entrees";
  });
  const beverages = list.filter((item) => {
    return item.categories === "Beverages";
  });
  const dessert = list.filter((item) => {
    return item.categories === "Dessert";
  });
  const dips = list.filter((item) => {
    return item.categories === "Dips";
  });
  const kidsMeal = list.filter((item) => {
    return item.categories === "Kids Menu";
  });
  const soupAndSalad = list.filter((item) => {
    return item.categories === "Soup and Salads";
  });
  const sides = list.filter((item) => {
    return item.categories === "Sides";
  });
  const wrapsAndburgers = list.filter((item) => {
    return item.categories === "Wraps and Burgers";
  });
  const appetizers = list.filter((item) => {
    return item.categories === "Appetizers";
  });

  //functions to control cart
  const getProductQuantity = (id) => {
    return cartProducts.find((item) => item.id === id)?.quantity || 0; //if items inside cart = id passed in, then return the quantity else return 0
  };
  const addOneToCart = (id) => {
    setCartProducts((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        //if the cart is empty
        return [...currentItems, { id, quantity: 1 }]; //add the id and quantity 1
      } else {
        return currentItems.map((item) => {
          //if it is not empty, find item id, then increase quantity by 1
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeOneFromCart = (id) => {
    setCartProducts((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const deleteFromCart = (id) => {
    setCartProducts((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  const cartQuantity = cartProducts.reduce((quantity, item)=>item.quantity + quantity, 0)

  //getting
  /* 
 const getProductData = (id) => {
   let productData = list.find(product => product.id === id);

   if (productData === undefined) {
     console.log("product data does nto exist for id:" + id);
     return undefined;
   }
   return productData;
   }*/
  /*
  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.map((cartItems) => {
      const productData = getProductData(cartItems.id);
      totalCost += (productData.price * cartItems.quantity);
  });
  return totalCost;
   };*/

  return (
    <CartContext.Provider
      value={{
        orderCategories,
        entrees,
        appetizers,
        beverages,
        dessert,
        dips,
        kidsMeal,
        soupAndSalad,
        wrapsAndburgers,
        sides,
        cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext)