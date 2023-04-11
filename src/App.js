import {Routes, Route, useLocation} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {Fragment} from 'react';
import Hero from '../../schwarzer/src/comps/hero/hero.comp';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ProductPreview from './comps/product preview/product.preview.comp';
import TschinInfo from './comps/tschin-info/tschin.info.comp';
import WhoInfo from './comps/who-info/who.info.comp';
import TastingRoom from './comps/tasting-room/tasting.room.comp';
import Shop from './comps/shop-directory/shop.comp';

const App = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="page"
        timeout={500}
        in={location.pathname === "/preview"}
      >
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/preview" element={<ProductPreview />} />
          <Route path="/who" element={<WhoInfo />} />
          <Route path="/tasting" element={<TastingRoom />} />
          <Route path="/shop" element={<Shop />} />


        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App
