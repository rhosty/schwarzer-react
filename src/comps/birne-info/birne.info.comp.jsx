import BirnenBanner from '../../assets/birnenbanner.png'
import Birne from '../../assets/marille-flasche.jpeg'
import './birne.info.styles.css'

const BirnenInfo = () => {
    return(
        <>
            <div className="birne-info-container">
                
                <div className="birne-info-container-text">
                    <span className="birne-info-header">Gelbe Williams</span>
                    <span className="birne-info-subheader">felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate</span>
                </div>
                <img className='flasche' src={Birne}></img>
            </div>
            <div className='birnen-info-footer'>
                    <img src={BirnenBanner} className='banner'></img>
                </div>
        </>
    )
}

export default BirnenInfo;