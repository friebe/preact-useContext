import { h, createContext } from "preact";

export default createContext({
  products: [
    {id: "p1", title: "Gaming Mouse", price: 29.99}
  ],
  cart:[]
})
