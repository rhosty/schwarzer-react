import './tasting.room.styles.css'
import TastingBanner from '../../assets/tastingbanner.png'
import BackWhite from '../../assets/back-white.png'
import { useNavigate } from 'react-router-dom'

const TastingRoom = () => {

    const navigate = useNavigate();
    const backHandler = () => {
        navigate('/');
    }
    
    return(
        <>
        <img onClick={backHandler} className='back' src={BackWhite}></img>
        <div className="tasting-container">
        <div className="tasting-header-container">
            <div className="tasting-header-side"></div>
            <div className="tasting-header">
                Tasting Room
            </div>
            <div className="tasting-header-side"></div>
        </div>
        <div className="tasting-text-container">
            sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
        </div>
        <div className="tasting-footer-container">
            <img className='banner' src={TastingBanner}></img>
            </div>
       </div>
        </>
       
    )
}

export default TastingRoom