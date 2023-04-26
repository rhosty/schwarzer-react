import { useState } from 'react';
import { Info } from '../../product-directory/product.info';
import Button from '../button/button.comp';
import { CartContext } from '../contexts/cartCtx';
import { useContext } from 'react';
import '../shop-directory/shop.styles.css';

const ShopInfo = ({name, description, buttonColor}) => {
    console.log(name)

    const {cartItems, setCartItems} = useContext(CartContext)

    const [product, setProduct] = useState(0)
    // const {name, description} = Info[product]

     const addToCartHandler = () => {
        setCartItems([...cartItems, name])
        console.log(cartItems)
    }
    
    

    return(
        <>
        <div className='shop-info-container'>
          <span className='shop-title' >{name}</span>
          <span className='shop-description' >{description}</span>
          <div className='button-container'>
            <Button onClick={addToCartHandler}  style={{background: buttonColor}} className='cart-button'>Add To Cart</Button>
            <Button className='cart-button checkout'>Checkout</Button>
          </div>
        </div>

        </>
    )
}

export default ShopInfo