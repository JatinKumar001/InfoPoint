import React from 'react'
import loading from '../../asset/loading.gif'

export default function Spinner() {
  return (
      <div className='text-center' style={{display:"flex", justifyContent:"center", marginLeft:"720px"}}>
        <img src={loading} alt="loading"/>
      </div>
  )
}
