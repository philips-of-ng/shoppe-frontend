import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import '../css/home.css'
import '../css/home.css'
import { assets } from '../assets/images/images';
import { assets_2 } from '../assets/assets/assets';

import Categories from '../components/sections/Categories';

//IMPORTING REACT SLICK
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionHead from '../components/SectionHead';
import OneProduct_S1 from '../components/OneProduct_S1';
import { ShopContext } from '../context/ShopContext';
import TopProducts from '../components/sections/TopProducts';
import NewItems from '../components/sections/NewItems';
import FlashSales from '../components/sections/FlashSales';
import JustForYou from '../components/sections/JustForYou';

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


  //Products and Items Functions

  const { allProducts, bestSellers, menClothing, womenClothing, childrenClothing, categories } = useContext(ShopContext)

  console.log('Best sellers from home', bestSellers);

  const getRepImages = (array) => {
    const repImages = []
    array.forEach(item => {
      repImages.push(item.image[0])
    });
    return repImages
  }

  console.log('Men clothing rep images', getRepImages(menClothing));



  return (
    <div className='home'>

      {/* THIS IS THE NAVBAR IN THE HOME PAGE */}
      <div className='home-nav'>
        <h1>Shop</h1>

        <div className='search-div'>
          <input type="text" placeholder='Search' />
          <i className='bx bx-search-alt-2'></i>
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
          <Categories />
        </section>


        {/* THIRD COMPONENT OF THE HOME PAGE - TOP PRODUCTS */}
        <section className='home-section-three my-2'>
          <TopProducts />
        </section>

        {/* THIS IS THE FOURTH COMPONENT IN THE HOME PAGE - NEW ITEMS  */}

        <section className='home-section-four my-2'>
          <NewItems />
        </section>


        {/* THIS IS THE FIFTH SECTION IN THE HOME PAGE - FLASH SALES */}

        <section className='home-section-five'>
          <FlashSales />
        </section>

        {/* THIS IS THE SIXTH COMPONENT IN THE HOME PAGE - MOST POPULAR */}

        <section className='home-section-six'>
          <div className='most-popular'>
            <SectionHead title={'Most Popular'} />

            <div className='most-popular-main'>

              <div className='one-mp-item'>
                <img src={assets.cat_clothing_03} alt="" />
                <div>
                  <h4>1278 <i className='bx bxs-heart' ></i></h4>

                  <span>New</span>
                </div>
              </div>

              <div className='one-mp-item'>
                <img src={assets.cat_clothing_03} alt="" />
                <div>
                  <h4>1278 <i className='bx bxs-heart' ></i></h4>

                  <span>New</span>
                </div>
              </div>

              <div className='one-mp-item'>
                <img src={assets.cat_clothing_03} alt="" />
                <div>
                  <h4>1278 <i className='bx bxs-heart' ></i></h4>

                  <span>New</span>
                </div>
              </div>

              <div className='one-mp-item'>
                <img src={assets.cat_clothing_03} alt="" />
                <div>
                  <h4>1278 <i className='bx bxs-heart' ></i></h4>

                  <span>New</span>
                </div>
              </div>

              <div className='one-mp-item'>
                <img src={assets.cat_clothing_03} alt="" />
                <div>
                  <h4>1278 <i className='bx bxs-heart' ></i></h4>

                  <span>New</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* THIS IS THE SEVENTH COMPONENT IN THE HOME PAGE - JUST FOR YOU */}

        <section className='home-section-seven'>
          <JustForYou />
        </section>

      </div>

    </div>
  )
}

export default Home