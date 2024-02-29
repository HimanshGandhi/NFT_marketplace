import React from 'react'
import './topfold.css'
import Buttons from '../../common/Button'
// import Button from './common/Button' 

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
     <div className='tf-left'>

    <div className='tf-heading'>Discover collect, & sell <span className='heading-gradient'>Extraordindary </span>NFT's</div>
    <div className='tf-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam adipisci deleniti atque quidem nemo beatae quis, delectus eveniet rerum commodi.</div>     
    
    <div className='tf-left-btns'>
         <Buttons btntype="PRIMARY" btntext='EXPLORE' />
         <Buttons btntype="SECONDARY" btntext='Create' customclass='tf-left-secondary-btn'/>
     </div>
    
    <div className='tf-left-info'>
      <div className='tf-left-info-item'>
        <div className='tf-left-info-count'>200K+</div>
        <div className='tf-left-info-label'>Collections</div>
      </div>

      <div className='tf-left-info-item'>
      <div className='tf-left-info-count'>10K+</div>
      <div className='tf-left-info-label'>Artist</div>
      </div>

      <div className='tf-left-info-item'>
      <div className='tf-left-info-count'>275K+</div>
      <div className='tf-left-info-label'>Communtiy</div> 
      </div>
      
    </div>

     </div>


    <div className='tf-right' >
        <div className='tf-right-bg'></div>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-items absolute-center'>
          <img className='tf-r-diamond-img' 
          alt='diamond-banner'
          src="https://media3.giphy.com/media/TJLmmG3vlSt6ZkLdoR/giphy.webp?cid=ecf05e47q9rv6ifqal700kvid30ofre8yt5hq3gx6debbuj6&ep=v1_gifs_search&rid=giphy.webp&ct=g">
          </img>
          </div>

          <div className='tf-r-diamond-items absolute-center'>
          <img className='tf-r-diamond-img' 
          alt='diamond-banner'
          src="https://i.seadn.io/s/raw/files/23a9a6e438a9f3a3d4ba7f7b6ce46991.gif?auto=format&dpr=1&w=384">
          </img>
          </div>

          <div className='tf-r-diamond-items absolute-center'>
          <img className='tf-r-diamond-img' 
          alt='diamond-banner'
          src="https://media4.giphy.com/media/ZHkYsyET93y8MlHDwe/giphy.webp?cid=ecf05e47xscrff4iuvrl0f6q64mtgr84jik3ipfttvurokq3&ep=v1_gifs_search&rid=giphy.webp&ct=g">
          </img>
          </div>

          <div className='tf-r-diamond-items absolute-center'>
          <img className='tf-r-diamond-img' 
          alt='diamond-banner'
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjF5cXVkZW41ZGk2bjd0aXo4MWhnYXFzeXhybXoyenJ0bXpkdnAxNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/w334hyb3HGGGGHWvRw/giphy.webp">
          </img>
          </div>

        </div>
    </div>
   
   
    </div>
  )
}

export default TopFold