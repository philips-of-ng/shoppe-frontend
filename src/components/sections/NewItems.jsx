import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { assets } from '../../assets/images/images'
import SectionHead from '../SectionHead'
import OneProduct_S1 from '../OneProduct_S1'

import '../../css/new-items.css'

const NewItems = () => {
  const { allProducts } = useContext(ShopContext)

  return (
    <div className='new-items'>
      <SectionHead title={'New Items'} />

      <div className='new-items-main'>

        {
          allProducts.slice(0, 10).reverse().map((item, index) => (
            <>
              <OneProduct_S1 key={index} image={item.image[0]} name={item.name} price={item.price} />
            </>
          ))
        }
        <OneProduct_S1 image={assets.cat_bags_02} name={'A fine pink bag with long handles'} price={'17.99'} />
        <OneProduct_S1 image={assets.cat_bags_02} name={'A fine pink bag with long handles'} price={'17.99'} />
        <OneProduct_S1 image={assets.cat_bags_02} name={'A fine pink bag with long handles'} price={'17.99'} />
        <OneProduct_S1 image={assets.cat_bags_02} name={'A fine pink bag with long handles'} price={'17.99'} />
      </div>
    </div>
  )
}

export default NewItems