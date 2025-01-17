import React, { useContext } from 'react'
import '../../css/just-for-you.css'
import { ShopContext } from '../../context/ShopContext'
import SectionHead from '../SectionHead'
import OneProduct_S1 from '../OneProduct_S1'

const JustForYou = () => {

  const { menClothing } = useContext(ShopContext)

  return (
    <div className='just-for-you'>
      <SectionHead title={'Just For You'} icon={'bx bxs-star'} iconColor={'#004CFF'} />

      <div className='just-for-you-main'>

        {
          menClothing.slice(0, 10).map((item, index) => (
            <OneProduct_S1 key={index} name={item.name} price={item.price} image={item.image[0]} />
          ))
        }

      </div>
    </div>
  )
}

export default JustForYou