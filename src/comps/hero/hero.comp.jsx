import Background from './background.webp';
import { Link } from 'react-router-dom';
import './hero.comp.styles.css';
import WhiteFinger from './whitefinger.png';
import Burger from './burger.png';
import ArrowDown from './arrowdown.png';
import { CSSTransition } from 'react-transition-group';

const Hero = () => {

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
          aspectRatio: '16/10',
        }}
        className='background'
      ></div>
      <div className='dimmer'></div>
      <div className='nav-bar'>
        <div className='placeholder'></div>
        <div className='placeholder'></div>
        <img className='burger' src={Burger}></img>
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
