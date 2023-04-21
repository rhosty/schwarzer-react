import { useState } from 'react';
import { Info } from '../../product-directory/product.info';
import Button from '../button/button.comp';

import '../shop-directory/shop.styles.css';

const ShopInfo = ({name, description, buttonColor}) => {

    const [product, setProduct] = useState(0)
    // const {name, description} = Info[product]
    
    

    return(
        <>
        <div className='shop-info-container'>
          <span className='shop-title' >{name}</span>
          <span className='shop-description' >{description}</span>
          <div className='button-container'>
            <Button style={{background: buttonColor}} className='cart-button'>Add To Cart</Button>
            <Button className='cart-button checkout'>Checkout</Button>
          </div>
        </div>

        </>
    )
}

export default ShopInfo