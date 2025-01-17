import React, { useContext } from 'react'
import '../../css/categories.css'
import { ShopContext } from '../../context/ShopContext'
import SectionHead from '../SectionHead'

const Categories = () => {

  const { categories } = useContext(ShopContext)

  const getRepImages = (array) => {
    const repImages = []
    array.forEach(item => {
      repImages.push(item.image[0])
    });
    return repImages
  }

  return (
    <div className='categories-section'>

      <div className='categories'>

        <SectionHead title={'Categories'} />

        <div className='ct-main'>

          {
            categories.map((item, index) => (
              <>
                <div key={index} className="one-category">
                  <div className='one-cat-up'>
                    {/* complicated code, dont touch */}
                    {
                      getRepImages(item.products).slice(0, 4).map((image, imgIndex) => (
                        <img key={imgIndex} src={image} />
                      ))
                    }

                  </div>

                  <div className='one-cat-down'>
                    <p>{item.name}</p>

                    <span>{item.length}</span>
                  </div>
                </div>
              </>
            ))
          }


          {/* PROTOTYPE JUST TO BE SAFE */}
          {/* <div className="one-category">
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
  </div> */}



        </div>

      </div>

    </div>
  )
}

export default Categories