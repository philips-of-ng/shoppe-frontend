import React, { useContext } from 'react'
import SectionHead from '../SectionHead'
import { ShopContext } from '../../context/ShopContext'


const TopProducts = () => {

  const { bestSellers } = useContext(ShopContext)

  return (
    <div className='top-products'>
      <SectionHead title={'Top Products'} />

      <div className='tp-main'>

        {
          bestSellers.map((item, index) => (
            <>
              <div key={index} className='one-top-product'>
                <img key={index} src={item.image[0]} alt="" />
              </div>
            </>
          ))
        }

        {/* PROTOTYPE OF ITEMS IN THIS SECTION */}

        <div className='one-top-product'>
          <img src={assets.shoppe_banner} alt="" />
        </div>

        {/* see more button */}

        <div className='one-top-product'>
          <img style={{ width: '50%', height: '50%' }} src={assets_2.dropdown_icon} alt="" />
        </div>


      </div>
    </div>
  )
}

export default TopProducts