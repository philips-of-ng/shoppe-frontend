import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import '../css/home.css'
import '../css/home.css'
import { assets } from '../assets/images/images';

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
        <section className='home-section-one'>
          <Slider className='home-slider' {...sliderSettings}>
            <div className='one-slide'><img src={assets.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={assets.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={assets.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={assets.shoppe_banner} alt="" /></div>
            <div className='one-slide'><img src={assets.shoppe_banner} alt="" /></div>
          </Slider>
        </section>


        {/* SECOND COMPONENT OF THE HOME PAGE - CATEGORIES */}

        <section className='home-section-two'>
          <div className='categories'>

            <div className='ct-top'>
              <h2>Categories</h2>
            </div>

            <div className='ct-main'>

              <div className="one-category">
                <div className='one-cat-up'>
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                </div>

                <div className='one-cat-down'>
                  <p>Clothing</p>

                  <span>109</span>
                </div>
              </div>
              <div className="one-category">
                <div className='one-cat-up'>
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                </div>

                <div className='one-cat-down'>
                  <p>Clothing</p>

                  <span>109</span>
                </div>
              </div>
              <div className="one-category">
                <div className='one-cat-up'>
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                </div>

                <div className='one-cat-down'>
                  <p>Clothing</p>

                  <span>109</span>
                </div>
              </div>
              <div className="one-category">
                <div className='one-cat-up'>
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                  <img src={assets.shoppe_banner} />
                </div>

                <div className='one-cat-down'>
                  <p>Clothing</p>

                  <span>109</span>
                </div>
              </div>


              

            </div>

          </div>
        </section>


        {/* THIRD COMPONENT OF THE HOME PAGE - CATEGORIES */}
        <section className='home-section-three my-5'>
          <div className='top-products'>
            <div className='tp-top'>
              <h2>Top Products</h2>
            </div>

            <div className='tp-main'>

            </div>
          </div>
        </section>


      </div>


    </div>
  )
}

export default Home