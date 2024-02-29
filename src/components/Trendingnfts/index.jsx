import React from 'react'
import './trendingnfts.css'
import Slider from 'react-slick'
import { Trending_NFT } from '../../assets/data/trendingnft.jsx'
import Trendingcard from './Trendingcard'
import Buttons from '../../common/Button/index.jsx'


const set = {
  slidesToShow: 3,
  autoplay: true,
  slidestoScroll: 1,
  speed: 1500,
  arrows: false
}
const Trendingnfts = () => {
  return (
    <div className='trendingnft'>
      <div className='tn-title absolute-center'>
      <span className='heading-gradient'>TRENDING NFT's</span>
      <div className='tn-bg'></div>
      </div>

    <Slider {...set}>
      {Trending_NFT.map((_nft)=>
      ( 
        <Trendingcard key={_nft.id} nft={_nft} />
      ))
      }
    </Slider>   
    <div className='tn-btn absolute-center'>   
    <Buttons btntext="SEE MORE" btntype="SECONDARY" customclass="seemore_btn"/>
    </div>
    </div>
  )
}

export default Trendingnfts