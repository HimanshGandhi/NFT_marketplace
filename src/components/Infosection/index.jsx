import React from 'react'
import './infosection.css'
import { INFO_ITEM } from '../../assets/data/info_items'
import Infoitem from './Infoitem'

const Infosection = () => {
  return (
    <div className='info-section'>
      <div className='is-heading heading-gradient absolute-center'>Create and Sell your NFT's</div>
      
      <div className='is-items-container'>
      
        {INFO_ITEM.map((_infoitem)=>(
          <Infoitem item={_infoitem}/>
      ))}
      </div>

    </div>
  )
}

export default Infosection