import React from 'react'
import {Carousel} from 'react-bootstrap'
import './css/heroSlider.css';
const HeroSlider = () => {
  return (
    <>
       <Carousel className='size pt-3'>
      <Carousel.Item interval={2000}>
        <div className='size'>
          <img src="https://www.joblo.com/wp-content/uploads/2014/10/interstellar-quad-nolan-1.jpg" alt="" className='firstDiv'/>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className='size' >
          <img src="https://nextbestpicture.com/wp-content/uploads/2023/06/Transformers-Rise-Of-The-Beasts-1-scaled.jpg" alt="" className='firstDiv'/>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className='size' >
          <img src="https://wallpapersmug.com/download/2560x1024/e5a909/star-wars-the-last-jedi-2017-movie-poster-red.jpg" alt="" className='firstDiv'/>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className='size' >
          <img src="https://webneel.com/wnet/file/images/11-16/8-xmen-movie-poster-design.jpg" alt="" className='firstDiv'/>
        </div>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default HeroSlider
