import React from 'react'

function Sidebar() {
  return (
    
    <div  style={{backgroundColor:'black',width:"80px",position:"fixed",height:'700px'}}>
        <div className='d-flex  flex-column justify-content-center align-items-center text-light'>
            <button className='btn btn-transparent text-light'>
            <i style={{fontSize:"18px",marginTop:'10px'}} class="fa-solid fa-house "></i>
       <p style={{fontSize:'10px',marginTop:'7px'}}>Home</p> 
            </button>
       
        </div>
        <div className='d-flex  flex-column justify-content-center align-items-center text-light' style={{marginTop:"-10px"}}>
            <button className='btn btn-transparent text-light'>
            <i style={{fontSize:"18px"}} class="fa-solid fa-bolt"></i>
       <p style={{fontSize:'10px',marginTop:'7px'}}>Shorts</p> 
            </button>
       
        </div>
        <div className='d-flex  flex-column justify-content-center align-items-center text-light' style={{marginTop:"-10px"}}>
            <button className='btn btn-transparent text-light'>
            <i style={{fontSize:"18px"}} class="fa-brands fa-youtube"></i>
       <p style={{fontSize:'10px',marginTop:'7px'}}>Subscriptions</p> 
            </button>
       
        </div>
        <div className='d-flex  flex-column justify-content-center align-items-center text-light' style={{marginTop:"-10px"}}>
            <button className='btn btn-transparent text-light'>
            <i style={{fontSize:"18px"}}class="fa-solid fa-video"></i>
       <p style={{fontSize:'10px',marginTop:'7px'}}>You</p> 
            </button>
       
        </div>
        <div className='d-flex  flex-column justify-content-center align-items-center text-light' style={{marginTop:"-10px"}}>
            <button className='btn btn-transparent text-light'>
            <i style={{fontSize:"18px"}}  class="fa-solid fa-clock"></i>
       <p style={{fontSize:'10px',marginTop:'7px'}}>History</p> 
            </button>
       
        </div>
    </div>
  )
}

export default Sidebar