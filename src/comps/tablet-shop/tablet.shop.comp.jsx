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
    const [buttonColor, setButtonColor] = useState('var(--gin)')
    console.log(name)

    
    
   
    const imageSliderUp = () => {
        if(currentPicture < 6)
     setCurrentPicture(currentPicture = currentPicture + 1)
     setProduct(currentPicture)
     if(currentPicture === 0 || currentPicture ===4) {
        setButtonColor('var(--gin)')
      }
      if(currentPicture === 1 || currentPicture === 5) {
        setButtonColor('var(--marille)')
      }
      if(currentPicture === 2 || currentPicture === 6) {
        setButtonColor('var(--wermuth)')
      }
      if(currentPicture === 3 || currentPicture === 7) {
        setButtonColor('var(--birne)')
      }             
    }

    const imageSliderDown = () => {
      if( currentPicture >= 1)
        setCurrentPicture(currentPicture = currentPicture - 1)
        setProduct(currentPicture)
        if(currentPicture === 0 || currentPicture ===4) {
            setButtonColor('var(--gin)')
          }
          if(currentPicture === 1 || currentPicture === 5) {
            setButtonColor('var(--marille)')
          }
          if(currentPicture === 2 || currentPicture === 6) {
            setButtonColor('var(--wermuth)')
          }
          if(currentPicture === 3 || currentPicture === 7) {
            setButtonColor('var(--birne)')
          }             

    }


    return(
        <>
        
            <ShopInfo buttonColor={buttonColor} name={name} description={description} />
       

           <div className='bottle-container'>
            <span onClick={imageSliderUp}>&#9650;</span>
                <img  className='bottle' src={products[currentPicture]}></img>
            <span onClick={imageSliderDown} >&#9660;</span>
           </div>
        </>
    )
}

export default TabletShop;