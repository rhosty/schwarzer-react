import Marille from './marille-flasche.jpeg'
import './marille.info.styles.css'
import GinBanner from './gin-banner.png'


const MarilleInfo = () => {
    return(
        <>
            <div className="marille-info-container">
                <img className='flasche' src={Marille}></img>
                <div className="marille-info-container-text">
                    <span className="marille-info-header">Tschin</span>
                    <span className="marille-info-subheader">felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate</span>
                </div>
            </div>
            <div className='marillen-info-footer'>
                    <img src={GinBanner} className='banner'></img>
                </div>
        </>
    )
}

export default MarilleInfo;