import { h, Component } from 'preact';
import ShopContext from '../context/shop-context'

class GlobalState extends Component {
  state = {
		products: [
			{id: "p1", title: "Gaming Mouse", price: 29.99}
		],
		cart:[]
	}

	addProduct = (product) => {
		//kopie state
		const updatedCart = [...this.state.cart];

		//prüfen ob produkt bereits im warenkorb ist und gibt den index zurück
		const updatedItemIndex = updatedCart.findIndex(
			item => item.id === product.id
		);

		//prüfen ob der artikel vorhanden ist
		if(updatedItemIndex < 0) {
			//push artikel in den warenkorb
			updatedCart.push({...product, quantity:1});
		}
		else {
			//artikel ist bereits vorhanden dann erhöhe kaufanzahl
			const updateItem = {...updatedCart[updatedItemIndex]}
			updateItem.quantity++
			//ersetze gegen neu
			updatedCart[updatedItemIndex] = updateItem
		}

		//schreibe neuen arr in state
		this.setState({ cart: updatedCart });
	}

	removeProduct = (productId) => {console.log(productId)}

  render() {
    return(
      <ShopContext.Provider value={{
        products:this.state.products,
        addProduct: this.addProduct,
        removeProduct: this.removeProduct,
        cart: this.state.cart
      }}>
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

export default GlobalState
