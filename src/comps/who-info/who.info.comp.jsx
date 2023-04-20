import Banner from './banner.png'
import Rudi from './rudi.png'
import AltLienz from './altLienz.png'
import Fallstaff from './fallstaff.png'
import './who.info.styles.css'
import Footer from './footer.png'

const WhoInfo = () => {
    return(
        <>
        
        <div className='vertical-line'></div>
        <div>
            <img className='header-image' src={Banner}></img>
        </div>
        <div className='box-wrapper'>
        <div className='who-info-wrapper'></div>
        <div className="timeline-container">
            <div className="time-line-container-left">
                <div className="time-line-container-left-image">
                    <img className='rudi' src={Rudi}></img>
                    <img className='alt-stadt' src={AltLienz}></img>
                </div>
            </div>
            <div className="time-line-container-middle">
                <div className='header-text'>Today</div>
                <div className='first-container'>
                pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus
                </div>

                <div className='header-text-second'>2004</div>
                <div className='first-container'>
                pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus
                </div>

                <div className='header-text-third'>1924</div>
                <div className='first-container'>
                pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus
                </div>

            </div>
            <div className="time-line-container-right">
                <img className='fallstaff' src={Fallstaff}></img>
            </div>
        </div>
        </div>
        <div >
            <img className="footer" src={Footer}></img>
        </div>
        
        </>
    )
}

export default WhoInfo