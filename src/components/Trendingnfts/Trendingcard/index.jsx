import React from 'react'
import './trendingcard.css'


const trendingcard = (props) => {
  const {nft} = props;
  return (
    <div className='trendingcard absolute-center'>
      <div className='tc-inner-wrap'>
        <div className='tc-content'>
          <img alt={nft.user_name} src={nft.banner} className='tc-banner'></img>
          <div className='tc-user-info'>
            <div className='tc-ui'>
              <img alt={nft.user_name} src={nft.user_photo} className="tc-user-logo" ></img>
              <div className='tc-user-name'>{nft.userhandle}
              <div className='tc-user-handle'>{nft.user_name}</div>
              </div>
              
            </div>
            <img src='https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-Image-HD.png'
              alt='ETH on solana'
              className='tc-solana-logo'></img>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default trendingcard