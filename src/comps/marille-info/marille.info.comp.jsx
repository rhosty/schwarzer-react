import './marille.info.styles.css'
import MarillenBanner from '../../assets/marillebanner.png'
import Marille from '../../assets/marille-flasche.jpeg'
import FingerBlack from '../../assets/fingerblack.png'

const MarilleInfo = () => {
    return(
        <>
            <div className="marille-info-container">    
                    <img className='flasche' src={Marille}></img>            
                <div className="marille-info-container-text">
                    <span className="marille-info-header">Vinschger Marille</span>
                    <span className="marille-info-subheader">felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate</span>
                </div>
            </div>
            <div className='marillen-info-footer'>
                    <img src={MarillenBanner} className='banner'></img>
                </div>
        </>
    )
}

export default MarilleInfo