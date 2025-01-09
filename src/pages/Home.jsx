import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import '../css/home.css'

//IMPORTING REACT SLICK
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
}



import Navtab from '../components/Navtab'
import '../css/home.css'
import { useLocation } from 'react-router-dom';

const Home = () => {

  const { user } = useContext(AuthContext)
  useEffect(() => {
    console.log('User details from context API', user);

  }, [user])


  return (
    <div className='home'>

      <div className='home-nav'>
        <h1>Shop</h1>

        <div className='search-div'>
          <input type="text" placeholder='Search' />
          <i class='bx bx-search-alt-2'></i>
        </div>

      </div>

      <div className='home-content'>

        {/* THE FIRST COMPONENT OF HOME PAGE */}
        <Slider className='home-slider' {...sliderSettings}>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Slider>
        
        {/* SECOND COMPONENT OF THE HOME PAGE - CATEGORIES */}

        <div className='categories'>

          <div ct-top>

          </div>

        </div>


      </div>


    </div>
  )
}

export default Home