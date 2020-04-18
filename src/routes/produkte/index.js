import { h } from 'preact';
import Produkt from '../../components/produkt';
import style from './style';
import ShopContext from '../../context/shop-context'
import { useContext } from 'preact/hooks'

const Produkte = () => {
	const contextType = useContext(ShopContext);
	console.log(contextType);
	return <div class={style.warenkorb}><p>Context{JSON.stringify(contextType)}</p></div>

}


export default Produkte;
