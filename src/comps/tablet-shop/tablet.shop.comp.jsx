import Marille from '../../assets/marille-flasche.jpeg';
import Wermuth from '../../assets/wermuthNOBG.png';
import './tablet.shop.styles.css';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';
import ShopInfo from '../shop-info/shop.info.comp';
import { Info } from '../../product-directory/product.info';

const TabletShop = () => {

    const products = [ Marille, Wermuth, Marille, Marille, Marille,  Wermuth, Marille, Marille];
    let [currentPicture, setCurrentPicture] = useState(0)
    const [product, setProduct] = useState(0)
    const {name, description} = Info[product]
    console.log(name)

    
    
   
    const imageSliderUp = () => {
        if(currentPicture <= 6)
     setCurrentPicture(currentPicture = currentPicture + 1)
     setProduct(currentPicture)
    }

    const imageSliderDown = () => {
      if( currentPicture >= 1)
        setCurrentPicture(currentPicture = currentPicture - 1)
        setProduct(currentPicture)

    }


    return(
        <>
        
            <ShopInfo name={name} description={description} />
       

           <div className='bottle-container'>
            <span onClick={imageSliderUp}>&#9650;</span>
                <img  className='bottle' src={products[currentPicture]}></img>
            <span onClick={imageSliderDown} >&#9660;</span>
           </div>
        </>
    )
}

export default TabletShop;