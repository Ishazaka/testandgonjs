import React, { useState, useEffect } from 'react'

const Login = () => {
    const [formvalues, setFormvalues] = useState({
        email: '',
        password: '',
    })
    const [formErrors, setFormErrors] = useState({})
    const [issubmit, setIssubmit] = useState(false)
    const [validateinput, setValidateinput] = useState({
        email: '',
        password: ''
    })

    function inputData(e) {
        const { name, value } = e.target;
        setFormvalues({ ...formvalues, [name]: value })
    }


    function handleSubmit() {

        setIssubmit(true)
        setFormErrors(ValidateForm(formvalues));
    }



    function ValidateForm(values) {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email is Required!'
            setValidateinput({ ...validateinput, email: 'is-invalid' })
        } else{
            setValidateinput({ ...validateinput, email: 'is-valid' })
        }
        if (!values.password) {
            errors.password = 'Password is required!'
            setValidateinput({ ...validateinput, password: 'is-invalid' })
        }else{
            setValidateinput({ ...validateinput, password: 'is-valid' })
        }

        return errors;

    }

    return (
        <>
            <div className='login-box'>


                <div className='Login-main-content'>
                    <div className="mb-3">
                        <label for="validationServer01" className="form-label">Email</label>
                        <input type="text" name='email' value={formvalues.email}  onChange={inputData} className={`form-control full-areas ${validateinput.email} `} id="validationServer01" />
                        <div className="invalid-feedback">
                           {formErrors.email}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="validationServer02" className="form-label">Password</label>
                        <input type="password" name='password' value={formvalues.password}  onChange={inputData} className={`form-control full-areas ${validateinput.password}`} id="validationServer02" />
                        <div className="invalid-feedback">
                            {formErrors.password}
                        </div>
                    </div>
                    <button className="btn btn-dark full-areas" onClick={handleSubmit} >LOGIN</button>

                    <div className='three-below-btns'>
                        <a href='#' className='my-1'>Create an Account</a>
                        <a href='#' className='mb-1'>Forget Password?</a>
                        <a href='#' >Privacy</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login