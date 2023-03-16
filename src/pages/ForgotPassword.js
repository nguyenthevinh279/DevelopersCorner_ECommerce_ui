import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import Meta from '../components/Meta'

const ForgotPassword = () => {
  return (
    <>
    <Meta title={'Forgot Password'}></Meta>
    <BreadCrumb title='Forgot Password'  />
    <Container class1="login-wrapper home-wrapper-2 py-5">
       
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Reset Your Password</h3>
                    <p className='text-center' >We will send you an email to reset your password</p>
                    <form action="" className='d-flex flex-column gap-15'>
                       <CustomInput 
                       type="text" 
                       name='email' 
                       
                       placeholder='Email'
                       />
                        <div className='mt-3 d-flex flex-column justify-content-center gap-15 align-items-center'>
                            <button className='button border-0' type='submit'>Submit</button>
                            <Link to='/login' className='button cancel' >Cancel</Link>

                        </div>
                    </form>
                </div>
            </div>
        </div>
       
        
    </Container>
    </>
  )
}

export default ForgotPassword