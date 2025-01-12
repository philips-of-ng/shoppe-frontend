import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import '../css/home.css'
import '../css/home.css'
import { assets } from '../assets/images/images';

//IMPORTING REACT SLICK
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionHead from '../components/SectionHead';
import OneProduct_S1 from '../components/OneProduct_S1';
import { Outlet } from 'react-router-dom';

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

      {/* THIS IS THE NAVBAR IN THE HOME PAGE */}
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

           <SectionHead title={'Categories'} />

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
        <section className='home-section-three my-2'>
          <div className='top-products'>
            <SectionHead title={'Top Products'} />

            <div className='tp-main'>

              <div className='one-top-product'>
                <img src={assets.shoppe_banner} alt="" />
              </div>

              <div className='one-top-product'>
                <img src={assets.shoppe_banner} alt="" />
              </div>

              <div className='one-top-product'>
                <img src={assets.shoppe_banner} alt="" />
              </div>
              <div className='one-top-product'>
                <img src={assets.shoppe_banner} alt="" />
              </div>
              <div className='one-top-product'>
                <img src={assets.shoppe_banner} alt="" />
              </div>
              <div className='one-top-product'>
                <img src={assets.shoppe_banner} alt="" />
              </div>
              <div className='one-top-product'>
                <img src={assets.shoppe_banner} alt="" />
              </div>
              <div className='one-top-product'>
                <img src={assets.shoppe_banner} alt="" />
              </div>



            </div>
          </div>
        </section>

        {/* THIS IS THE FOURTH COMPONENT IN THE HOME PAGE - NEW ITEMS  */}

        <section className='home-section-four my-2'>
          <div className='new-items'>
            <SectionHead title={'New Items'} />

            <div className='new-items-main'>
              <OneProduct_S1 image={assets.cat_bags_02} name={'A fine pink bag with long handles'} price={'17.99'}  />
              <OneProduct_S1 image={assets.cat_bags_02} name={'A fine pink bag with long handles'} price={'17.99'}  />
              <OneProduct_S1 image={assets.cat_bags_02} name={'A fine pink bag with long handles'} price={'17.99'}  />
              <OneProduct_S1 image={assets.cat_bags_02} name={'A fine pink bag with long handles'} price={'17.99'}  />


            </div>
          </div>
        </section>


        {/* THIS IS THE FIFTH SECTION IN THE HOME PAGE - FLASH SALES */}

        <section className='home-section-five'>
          <div className='flash-sales'>
            <div className='flash-sales-top'>
              <div className='fst-left'>
                <h2>Flash Sales</h2>
              </div>

              <div className='fst-right'>
              <i class='bx bx-timer' ></i>

              <span>00</span>
              <span>19</span>
              <span>34</span>
              </div>
            </div>


            <div className='flash-sales-main'>

              <div className='one-fs-item'>
                <span>-20%</span>
                <img src={assets.cat_bags_04} alt="" />
              </div>
              <div className='one-fs-item'>
                <img src={assets.cat_bags_04} alt="" />
              </div>
              <div className='one-fs-item'>
                <img src={assets.cat_bags_04} alt="" />
              </div>
              <div className='one-fs-item'>
                <img src={assets.cat_bags_04} alt="" />
              </div>
              <div className='one-fs-item'>
                <img src={assets.cat_bags_04} alt="" />
              </div>
              <div className='one-fs-item'>
                <img src={assets.cat_bags_04} alt="" />
              </div>
              

            </div>

          </div>
        </section>

        {/* THIS IS THE SIXTH COMPONENT IN THE HOME PAGE - MOST POPULAR */}

        <section className='home-section-six'>
          <div className='most-popular'>
            <SectionHead title={'Most Popular'} />

            <div className='most-popular-main'>

              <div className='one-mp-item'>
                <img src={assets.cat_clothing_03} alt="" />
                <div>
                  <h4>1278 <i class='bx bxs-heart' ></i></h4>

                  <span>New</span>
                </div>
              </div>

              <div className='one-mp-item'>
                <img src={assets.cat_clothing_03} alt="" />
                <div>
                  <h4>1278 <i class='bx bxs-heart' ></i></h4>

                  <span>New</span>
                </div>
              </div>

              <div className='one-mp-item'>
                <img src={assets.cat_clothing_03} alt="" />
                <div>
                  <h4>1278 <i class='bx bxs-heart' ></i></h4>

                  <span>New</span>
                </div>
              </div>

              <div className='one-mp-item'>
                <img src={assets.cat_clothing_03} alt="" />
                <div>
                  <h4>1278 <i class='bx bxs-heart' ></i></h4>

                  <span>New</span>
                </div>
              </div>

              <div className='one-mp-item'>
                <img src={assets.cat_clothing_03} alt="" />
                <div>
                  <h4>1278 <i class='bx bxs-heart' ></i></h4>

                  <span>New</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* THIS IS THE SEVENTH COMPONENT IN THE HOME PAGE - JUST FOR YOU */}

        <section className='home-section-seven'>
          <div className='just-for-you'>
            <SectionHead title={'Just For You'} icon={'bx bxs-star'} iconColor={'#004CFF'} />

            <div className='just-for-you-main'>
              <OneProduct_S1 name={'A beautiful bag, comes in different colors'} price={'20.99'} image={assets.cat_bags_01} />
              <OneProduct_S1 name={'A beautiful bag, comes in different colors'} price={'20.99'} image={assets.cat_bags_02} />
              <OneProduct_S1 name={'A beautiful bag, comes in different colors'} price={'20.99'} image={assets.cat_bags_03} />
              <OneProduct_S1 name={'A beautiful bag, comes in different colors'} price={'20.99'} image={assets.cat_bags_04} />
            </div>
          </div>
        </section>

      </div>


      <Outlet />
    </div>
  )
}

export default Home