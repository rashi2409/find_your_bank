import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import BankDescription from './BankDescription';

const BankDetailPage = ({favourite, setFavourite, bankDetails, loading}) => {

  const params = useParams();
  const ifscID = params.ifscID.slice(0, -1)

  if(loading){
    return(
      <h3>Loading the details...</h3>
    )
  }
  
  return (
    <div>
      {
        bankDetails.filter((val) => {
          if(val.ifsc == ifscID){
            return val;
          }
        }).map((val) => (
          <BankDescription val={val} favourite={favourite} setFavourite={setFavourite}/>
        ))
      }
    </div>
  )
}

export default BankDetailPage;