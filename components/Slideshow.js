import slideshowStyles from '../styles/Slideshow.module.css'
import Image from 'next/image'

import defaultCardImage from '../public/images/image1.png';


const Slideshow = ({imageSrc = defaultCardImage}) => {

    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
    
  return (
    <div>
      <h1>SLIDE SHOW</h1>
    <div className={slideshowStyles.slideshow}>
    <div className={slideshowStyles.slideshowSlider}>
    <Image src={imageSrc} alt="me" width="64" height="64" />
    </div>
  </div>

  </div>
  )
}

export default Slideshow