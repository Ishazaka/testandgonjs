import React, {useState} from 'react'

function StudentInfo() {
    const initialval = {
        firstName : '',
        lastName : '',
        BirthDate : '',
        PhoneNumber : '',
        Email : '',
       Address : '',
       Addressline2 : '',
       Apt : '',
       State : '',
       zipcode : '',

    }
    const [formvalues , setFormvalues] = useState(initialval)
    const [emptyarr, setEmptyarr] = useState([])
    const [valid , setValid] = useState('')
  const [nextpage, setNextpage] = useState(false)

  
   
    function CheckValidity() {
      if(emptyarr.length == 0){
         setValid('is-invalid')
         setNextpage(false)
      } else{
        setValid('is-valid')
        setNextpage(true)
      }
  }

   function CheckValidity(){
    
   }

  return (
    <>

    
<div className='student-box'>
    <div className='student-main-section'>
    <div className="main-heading">
            <h2>Patient Information</h2>
          </div>
          <div className="student-details">
            <p>
              Please provide the below information and click on the Next Button. 
            </p>
            <p>
              Click Next to move to the Test Results Step. 
            </p>
          </div>
          <div className="student-input-area">
            <label for="validationServer01" className="form-label">
              First Name
            </label>
            <input
            placeholder='First Name'
              type="text"
              name="firstName"
              onChange={(e) => setEmptyarr([...emptyarr , e.target.value])}
              className={`form-control ${valid}`}
              id="validationServer01"
              required
            />
             <p>Hello use your name</p>
          </div>
          <div className="student-input-area">
            <label for="validationServer02" className="form-label">
              Last Name
            </label>
            <input
            placeholder='Last Name'
              type="text"
              name="lastName"
              onChange={(e) => setEmptyarr([...emptyarr , e.target.value])}
              className={`form-control ${valid}`}
              id="validationServer02"
              required
            />
            <p>Hello use your name</p>
          </div>
          <div className="student-input-area">
            <label for="validationServer03" className="form-label">
              Date of Birth(only older than 18)
            </label>
            <input
              placeholder='4/22/1997'
              type="date"
              name="BirthDate"
              onChange={(e) => setEmptyarr([...emptyarr , e.target.value])}
              className={`form-control ${valid}`}
              id="validationServer03"
              required
            />
             <p>Hello use your name</p>
          </div>

          <div className="student-input-area">
            <label for="validationServer04" className="form-label">
              Phone
            </label>
            <input
            placeholder='(443) 000-0000'
              type="text"
              name="PhoneNumber"
              onChange={(e) => setEmptyarr([...emptyarr , e.target.value])}
              className={`form-control ${valid}`}
              id="validationServer04"
              required
            />
             <p>Hello use your name</p>
          </div>
          <div className="student-input-area">
            <label for="validationServer05" className="form-label">
              Email
            </label>
            <input
            placeholder='name@example.com'
            name='Email'
              type="text"
              onChange={(e) => setEmptyarr([...emptyarr , e.target.value])}
              className={`form-control ${valid}`}
              id="validationServer05"
              required
            />
             <p>Hello use your name</p>
          </div>
        
          <div className="student-input-area">
            <label for="validationServer06" className="form-label">
              Address
            </label>
            <input
            placeholder='1100 BlackWolf Run Rd '
            name='Address'
              type="text"
              onChange={(e) => setEmptyarr([...emptyarr , e.target.value])}
              className={`form-control ${valid}`}
              id="validationServer06"
              required
            />
             <p>Hello use your name</p>
          </div>
           
        
             <div className="student-input-area">
            <label for="validationServer07" className="form-label">
              Address Line 2 (optional)
            </label>
            <input
              type="text"
              name='Addressline2'
              className={`form-control`}
              id="validationServer07"
              required
            />
          </div>
          <div className="student-input-area">
            <label for="validationServer08" className="form-label">
             Apt / Site #
            </label>
            <input
              type="text"
              name='apt'
              className={`form-control`}
              id="validationServer08"
              required
            />
          </div>
          <div className="student-input-area">
            <label for="validationServer09" className="form-label">
              State
            </label>
            <input
            placeholder='like NewYork'
            name='State'
              type="text"
              onChange={(e) => setEmptyarr([...emptyarr , e.target.value])}
              className={`form-control ${valid}`}
              id="validationServer09"
              required
            />
             <p>Hello use your name</p>
          </div>
          <div className="student-input-area">
            <label for="validationServer010" className="form-label">
             Zip Code
            </label>
            <input
            placeholder='3968-7'
            name='zipcode'
              type="text"
            onChange={(e) => setEmptyarr([...emptyarr , e.target.value])}
            
              className={`form-control ${valid}`}
              id="validationServer010"
              required
            />
            <p>Hello use your name</p>
            <button onClick={CheckValidity} className="btn btn-secondary next-btn">
              Next
            </button>
          </div>
    </div>

    </div>
    
    </>
  )
}

export default StudentInfo