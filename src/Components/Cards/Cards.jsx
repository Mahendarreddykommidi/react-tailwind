import './Cards.css'
import nature_2 from '../../assets/nature2.jpg'
import nature3 from '../../assets/pexels-james-lee-932763-4414868.jpg'

import waterfall_2 from '../../assets/waterfall2.jpg'
const Cards = () => {
  return (
    <>
    <div className="nature-title text-center font-bold capitalize">
        <h2>nature images gallery</h2>
     
    </div>
<div className='cards grid lg:grid-cols-3 gap-5 grid-cols-1  sm:grid-cols-2 md:grid-cols-2'>
  
    <div className="card rounded-[50px]">
    <img src={nature3} alt=""  className="rounded-md " />
    <p className='text-center mt-2'>green leaves macro shots</p>


    </div>
    <div className="card ">
        <img src={waterfall_2} alt=""/>
        <p className='text-center mt-2'>man exploring waterfalls</p>
    </div>
    <div className="card">
<img src={nature_2} alt="" />
<p className='text-center mt-2'>beautiful wooden bridge helps to view beautiful sky</p>
    </div>
    <button className="btn btn-primary w-[35%] text-center flex justify-center mx-[467px]">explore more</button>
    




    </div>
    </>
  )
}

export default Cards