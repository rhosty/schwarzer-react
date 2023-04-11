import Wermuth from '../../assets/wermuth.png'
import './wermuth.info.styles.css'

const WermuthInfo = () => {
    return (
        <div className='wermuth-container'>
            <div className='text-left'>
                <span className='header-wermuth'>Wermuth</span>
                <span className='wermuth-info-text'>nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis </span>
            </div>
            <div className='image-right'>
                <img className='wermuth-bottle' src={Wermuth} alt='Wermuth' />
            </div>
            
        </div>
    )
}

export default WermuthInfo