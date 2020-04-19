import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { useContext } from 'preact/hooks'
import ShopContext from '../../context/shop-context'

const Header = () => {
	const context = useContext(ShopContext);
	console.log(context.cart);
	return(
		<header class={style.header}>
			<h1>Preact App</h1>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/profile">Me</Link>
				<Link activeClassName={style.active} href="/profile/john">John</Link>
				<Link activeClassName={style.active} href="/warenkorb">Warenkorb {context.cart.length}</Link>
				<Link activeClassName={style.active} href="/produkte">Produkte</Link>
			</nav>
		</header>
	);
}

export default Header;
