import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import Warenkorb from '../routes/warenkorb';
import Produkte from '../routes/produkte'
import ShopContext from '../context/shop-context'

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	state = {
		products: [
			{id: "p1", title: "Gaming Mouse", price: 29.99}
		],
		cart:[]
	}


	render() {
		return (
			<div id="app">
			<ShopContext.Provider value={{
				products:this.state.products
			}}>
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Warenkorb path="/warenkorb" />
					<Produkte path="/produkte" />
				</Router>
			</ShopContext.Provider>
			</div>
		);
	}
}
