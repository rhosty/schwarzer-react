import { useState } from 'react';
import { Info } from '../../product-directory/product.info';

import '../shop-directory/shop.styles.css';

const ShopInfo = ({name, description}) => {

    const [product, setProduct] = useState(0)
    // const {name, description} = Info[product]
    const [buttonColor, setButtonColor] = useState('var(--gin)')
    

    return(
        <>
        <div className='shop-info-container'>
          <span className='shop-title' >{name}</span>
          <span className='shop-description' >{description}</span>
          <div className='button-container'>
            <button style={{background: buttonColor}} className='cart-button'>Add To Cart</button>
            <button className='cart-button checkout'>Checkout</button>
          </div>
        </div>

        </>
    )
}

export default ShopInfo