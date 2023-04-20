import TschinInfo from "../tschin-info/tschin.info.comp";
import BirnenInfo from "../birne-info/birne.info.comp";
import MarilleInfo from "../marille-info/marille.info.comp";
import WermuthInfo from "../wermuth-info/wermuth.info.comp";
import { useNavigate } from 'react-router-dom'
import BackArrow from '../../assets/backarrow.png'
import { useRef, useState, useEffect } from "react";
import BackWhite from '../../assets/back-white.png'
import './product.styles.css'
import autoAnimate from '@formkit/auto-animate'
import ShoppingBag from '../../assets/shoppingbag.png'


const ProductPreview = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        }, []);

    const [colorBackArrow, setColorBackArrow] = useState(BackArrow);

    const navigate = useNavigate();
    
    const BackHandler = () => {
        navigate('/');
    }

    const ShopHandler = () => {
        navigate('/shop');
    }

    const getWindowHeight = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrolledToBottom = scrollTop + windowHeight >= documentHeight - '50';
        if (scrolledToBottom) {
            setColorBackArrow(BackWhite)
        }
        if(!scrolledToBottom){
            setColorBackArrow(BackArrow)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', getWindowHeight);
        return () => window.removeEventListener('scroll', getWindowHeight);
    }, []);

    return (
        
        <div className={`container-overview ${mounted ? 'fade-in' : ''}`}>
        <div className='back-arrow-container'>
        <img onClick={ShopHandler} className="shopping-bag" src={ShoppingBag}></img>
        <img onClick={BackHandler} className='back-arrow' src={colorBackArrow} />
      </div>
      
    <TschinInfo />
    <BirnenInfo />,
    <MarilleInfo />,
    <WermuthInfo />,
  </div>
    )
}

export default ProductPreview;
