import Marille from '../../assets/marille-flasche.jpeg';
import Wermuth from '../../assets/wermuthNOBG.png';
import './shop.styles.css';
import FingerBlack from '../../assets/fingerblack.png';
import { useState } from 'react';
import { useEffect } from 'react';
import BackArrow from '../../assets/backarrow.png';

const Shop = () => {
    const products = [ Marille, Wermuth, FingerBlack, BackArrow, Marille,  Wermuth, FingerBlack, BackArrow ];
    const numProducts = products.length;
    const angle = 360 / numProducts; 
    const radius = 260; 

    const [rotation, setRotation] = useState(0)
  
   

    const rotationHandler = (e) => {
        const start = (e.target.style.transform.split('rotate(')[1].split('deg)')[0])
        const goal = 270;
        const targetDif = (goal - start);
        setRotation(targetDif)
        console.log(rotation)
       
        
    }

  return (
    <div className="shop-container" style={{transform:`rotate(${rotation}deg)`}}>
      {products.map((product, index) => (
        <img
            id={index}
            onClick={rotationHandler}
            key={index}
            className='item'
            src={product}
            style={{
                position: 'absolute',
                transform: `rotate(${angle * index}deg) translateX(${radius}px) rotate(${angle+45}deg)`,
                
          }}
        />
      ))}
      {/* <img className='finger' src={FingerBlack} /> */}
    </div>
  );
};

export default Shop;
