import { createContext } from "react";

export const CartContext = createContext({
  items: [], //This is the default value for the context that helps to get better auto completion.
  addItemsToCart: (id) => {}, //This is the default value for the context that helps to get better auto completion.
  removeItemsFromCart: (id) => {}, //This is the default value for the context that helps to get better auto completion.
}); //Create context return an oject which further contains a component.
