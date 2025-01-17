import React from 'react'
import '../../css/flash-sales.css'
import { assets } from '../../assets/images/images'

const FlashSales = () => {
  return (
    <div className='flash-sales'>
      <div className='flash-sales-top'>
        <div className='fst-left'>
          <h2>Flash Sales</h2>
        </div>

        <div className='fst-right'>
          <i className='bx bx-timer' ></i>

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
  )
}

export default FlashSales