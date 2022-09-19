import React from 'react'

function Testinfo() {

     
  return (
    <>
    <div className='testinfo-page'>

   
         <div className='testinfo-box'>


<div className='testinfo-main-content'>
    <div className='main-heading'>
  <h2>Home Test Information</h2>
    </div>

    <div className="mb-3 full-areas">
        <label for="validationServer01" className="form-label">Test Date</label>
        <input type="date" name='testdate' value=''  className={`form-control full-areas`} id="validationServer01" />
       
    </div>
    <div className="mb-3 full-areas">
        <label for="validationServer02" className="form-label">Test ID Number</label>
        <input type="text" name='testid' value=''  className={`form-control full-areas`} id="validationServer02" />
       
    </div>
    <div className="mb-3 full-areas">
    <button className="btn btn-dark full-areas"  >Save</button>
    </div>
   


</div>
</div>
</div>
    </>
  )
}

export default Testinfo