import { h, createContext } from "preact";

//default createContext obj
export default createContext({
  products: [
    {id: "p1", title: "Gaming Mouse", price: 29.99}
  ],
  cart:[],
  addProduct: product => {},
  removeProduct: productId => {}
})
