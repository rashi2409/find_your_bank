import React from 'react'
import { Typography } from '@material-ui/core';
import './bankDesign.css'

const BankDescription = ({ val, favourite, setFavourite }) => {
  return (
      <div className='container'>
          <div className='contentContainer'>
            <Typography className='bankName' variant='h5'>{val.bank_name}</Typography>
            <div className='bankID'>
                <Typography variant='subtitle'>Bank ID</Typography>
                <Typography variant='subtitle'>{val.bank_id}</Typography>
            </div>
            <div className='details'>
                <Typography variant='subtitle'>IFSC Code</Typography>
                <Typography variant='subtitle'>{val.ifsc}</Typography>
            </div>
            <div className='details'>
                <Typography variant='subtitle'>Branch</Typography>
                <Typography variant='subtitle'>{val.branch}</Typography>
            </div>
            <div className='details'>
                <Typography variant='subtitle'>Address</Typography>
                <Typography className='addressStyle' variant='subtitle'>{val.address}</Typography>
            </div>
            <div className='details'>
                <Typography variant='subtitle'>District</Typography>
                <Typography variant='subtitle'>{val.district}</Typography>
            </div>
            <div className='details'>
                <Typography variant='subtitle'>City</Typography>
                <Typography variant='subtitle'>{val.city}</Typography>
            </div>
            <div className='details'>
                <Typography variant='subtitle'>State</Typography>
                <Typography variant='subtitle'>{val.state}</Typography>
            </div>
            <button className='buttonFav' onClick={() => {
                if(!favourite.includes(val)){
                    setFavourite(favourite.concat(val))
                }
            }}>Add Bank to Favourites </button>
          </div>
      </div>
  )
}

export default BankDescription;