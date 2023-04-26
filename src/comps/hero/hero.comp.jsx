import Background from '../../assets/background.webp'
import { Link } from 'react-router-dom';
import './hero.comp.styles.css';
import WhiteFinger from '../../assets/whitefinger.png';
import Burger from '../../assets/burger.png';
import ArrowDown from '../../assets/arrowdown.png';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import NavDropDown from '../nav/nav.comp';
import { Info } from '../../product-directory/product.info';
import { useEffect } from 'react';
import { getCategorisAndDocs } from '../../utill/firebase';
import { useContext } from 'react';
import { CategoryContext } from '../contexts/categorie.ctx';

const Hero = () => {

  // const [categories, setCategories] = useState({});
  const {categories, setCategories} = useContext(CategoryContext);

  useEffect(() => {
      async function fetchCategories() {
        const categoriesData = await getCategorisAndDocs();
        setCategories(categoriesData);
        
      }
  
      fetchCategories();
    }, []);
  
    useEffect(() => {
      setCategories(categories);
      console.log(categories)
    }, [categories]);


  const [isOpen, setIsOpen] = useState(false)
 



  const DropDownHandler = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
    return
  }

  const burgerClassname = !isOpen ? 'burger' : ' burger open';


  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
          aspectRatio: '16/7',
        }}
        className='background'
      ></div>
      <div className='dimmer'></div>
      <div className='nav-bar'>
        <div className='placeholder'></div>
        <div className='placeholder'></div>
        <img onClick={DropDownHandler} className={burgerClassname} src={Burger}></img>
        { isOpen ? <NavDropDown clickHandler={DropDownHandler} />  : null  }
      </div>
      <div className='hero-main'>
        <img className='hero-logo' src={WhiteFinger} alt='WhiteFinger Logo' />
        <span className='subtitle'>Feinste Edelbrände</span>
        <h1 className='title'>Schwarzer<span>Brennerei</span></h1>
        <CSSTransition
          classNames="fade"
          timeout={500}
        >
          <Link to='preview'>
            <img className='arrow' src={ArrowDown}></img>
          </Link>
        </CSSTransition>
      </div>
    </>
  );
};

export default Hero;
