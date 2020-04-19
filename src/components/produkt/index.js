import { h } from 'preact';
import ShopContext from '../../context/shop-context'
import { useContext } from 'preact/hooks'

const produkt = () => {
  const contextType = useContext(ShopContext);
  return (
    <>
      {contextType.products.map(function(product,i) {
        return (
          <div>
            <button onClick={contextType.addProduct.bind(this, product)}>add {product.title}</button>
            <button onClick={(e) => contextType.removeProduct( product.id)}>Remove</button>
          </div>
        )
      })}
    </>
  )
}

export default produkt
