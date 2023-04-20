import Marille from '../../assets/marille-flasche.jpeg';
import Wermuth from '../../assets/wermuthNOBG.png';
import './shop.styles.css';
import FingerBlack from '../../assets/fingerblack.png';
import { useState } from 'react';
import { useEffect } from 'react';
import BackArrow from '../../assets/backarrow.png';
import { useNavigate } from 'react-router-dom';
import { Info } from '../../product-directory/product.info';
import TabletShop from '../tablet-shop/tablet.shop.comp';


const Shop = () => {

  const navigate = useNavigate();

    const products = [ Marille, Wermuth, Marille, Marille, Marille,  Wermuth, Marille, Marille];
    const numProducts = products.length;
    const angle = 360 / numProducts; 
    const radius = 260; 

    const [rotation, setRotation] = useState(0)
   
  
   const backHandler = () => {
        navigate('/')
   }

    const rotationHandler = (e, products) => {
      console.log(window.innerWidth)
        const start = (e.target.style.transform.split('rotate(')[1].split('deg)')[0])
        const goal = 180;
        const targetDif = (goal - start);
        setRotation(targetDif)
        const index = parseInt(e.target.id, 10);
          setProduct(index);
          setClicked(index)
          console.log(index)
          if(index === 0 || index ===4) {
            setButtonColor('var(--gin)')
          }
          if(index === 1 || index === 5) {
            setButtonColor('var(--marille)')
          }
          if(index === 2 || index === 6) {
            setButtonColor('var(--wermuth)')
          }
          if(index === 3 || index === 7) {
            setButtonColor('var(--birne)')
          }             
    }

    const [product, setProduct] = useState(0)
    const {name, description} = Info[product]
    const [buttonColor, setButtonColor] = useState('var(--gin)')
    const [clicked, setClicked] = useState(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    //fires when browser window is resized
    useEffect(() => {
      window.addEventListener('resize', getWindowWidth)
      return () => window.removeEventListener('resize', getWindowWidth)
    }, [])

    const getWindowWidth = () => {
      const width = window.innerWidth;
      setWindowWidth(width)
    }



  return (
        <div className='main'>
        <img onClick={backHandler} className='shop-arrow' src={BackArrow}></img>
         <div className='top-container'>
        <div className='shop-info-container'>
          <span className='shop-title' >{name}</span>
          <span className='shop-description' >{description}</span>
          <div className='button-container'>
            <button style={{background: buttonColor}} className='cart-button'>Add To Cart</button>
            <button className='cart-button checkout'>Checkout</button>
          </div>
        </div>

        {windowWidth < 1100 ? 
        
        <div className='tablet-container'><TabletShop product={product} /></div> 
        
        : 
        
        <div className="shop-container" style={{transform:`rotate(${rotation}deg)`}}>
          {products.map((product, index) => (
            <img
                alt='product'
                id={index}
                onClick={rotationHandler}
                key={index}
                className={`item-bottle ${index === clicked ? 'clicked' : ''}`} 
                src={product}
                style={{
                    position: 'absolute',
                    transform: `rotate(${angle * index}deg) translateX(${radius}px) rotate(${angle+45}deg)`,
                    
              }}
            />
          ))}
        </div>}
            
        </div>
        </div>  
       
    
  );
};

export default Shop;
