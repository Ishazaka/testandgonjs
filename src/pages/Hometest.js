import React from 'react'

function Hometest() {
  return (
    <>
   
   <div className='home-test-page'>
    <div className='home-test-box'>


    <div className='home-test-content'>
      <div className='home-main-heading'>
        
       <h2>  At Home Covid Test Result </h2>
      
      </div>
      <div className='home-test-details'>
        <p>Have you administered the at Home Covid Test for this Student?</p>
      </div>
    
     <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
      <label class="form-check-label" for="flexRadioDefault1">
        Yes
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
      <label class="form-check-label" for="flexRadioDefault2">
       No
      </label>
      </div>
      <button  className="btn btn-secondary next-btn">
              Next
            </button>
      </div> 
      </div>
      </div>

    </>
  )
}

export default Hometest;





  