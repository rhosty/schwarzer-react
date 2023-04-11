import './nav.styles.css'
import { useNavigate, Link } from 'react-router-dom'


const NavDropDown  = ({clickHandler}) => {


    const navigate = useNavigate();

    const WhoHandler = () => {
        navigate('/who')
    }

    const TastingHandler = () => {
        navigate('/tasting')
    }

    return(
        <>
        <div className='nav-dropdown-dimmer'></div>
        <div onClick={clickHandler} className="nav-dropdown-container">
            <div className='nav-dropdown-links-container'>
                <span onClick={WhoHandler} className='nav-dropdown-link'>Who are we?</span>
                <span className='nav-dropdown-link'>Shop</span>
                <span onClick={TastingHandler} className='nav-dropdown-link'>Tasting Room</span>
            </div>
           <div>
            <span>Contact</span>
           </div>
        </div>
        </>
    )
}

export default NavDropDown