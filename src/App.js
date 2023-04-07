import {Routes, Route, useLocation} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {Fragment} from 'react';
import Hero from '../../schwarzer/src/comps/hero/hero.comp';
import MarilleInfo from '../../schwarzer/src/comps/marille-info/marille.info.comp';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ProductPreview from './comps/product preview/product.preview.comp';

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
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App
