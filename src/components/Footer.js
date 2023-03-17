import React from 'react'
import {Link} from 'react-router-dom'
import{BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
   <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
            <img src="../images/newsletter.png" alt="" />
            <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group">
                <input 
                    type="text" 
                    className="form-control py-1" 
                    placeholder="Your Email Address..." 
                    aria-label="Your Email Address..." 
                    aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                    Subscribe
                </span>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className='text-white'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>
                Hno: 277 Near Villl chopal,<br />
                Sonipat, Haryana <br />
                Pincode: 131103
              </address>
              <a href="tel:+91 97846334" className='mt-3 text-white'>+91 0786734678</a>
              <a href="mailto:digitic@gmail.com" className='mt-3 d-block mb-1 text-white'>digitic@gamil.com</a>
              <div className="social-icons d-flex align-items-center gap-30 mt-4">
                <a href="#top">
                  <BsLinkedin className='text-white fs-5' />
                </a>
                <a href="#top">
                  <BsInstagram className='text-white fs-5' />
                </a>
                <a href="#top">
                  <BsGithub className='text-white fs-5' />
                </a>
                <a href="#top">
                  <BsYoutube className='text-white fs-5' />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white'>Information</h4>
            <div>
            <div className='footer-links d-flex flex-column'>
              <Link to='/privacy-policy' className='text-white py-2 mb-1' >Privacy Policy</Link>
              <Link to='/refund-policy'   className='text-white py-2 mb-1' >Refund Policy</Link>
              <Link to='/shipping-policy' className='text-white py-2 mb-1' >Shipping Policy</Link>
              <Link to='/term-conditions' className='text-white py-2 mb-1' >Term & Conditions</Link>
              <Link to='/blogs' className='text-white py-2 mb-1' >Blogs</Link>
            </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white'>Acount</h4>
            <div>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' >About us</Link>
              <Link className='text-white py-2 mb-1' >Faq</Link>
              <Link className='text-white py-2 mb-1' >Contact</Link>
            </div>
            </div>
          </div>
          <div className="col-2">
            <h4 className='text-white'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1' >Laptops</Link>
              <Link className='text-white py-2 mb-1' >Headphones</Link>
              <Link className='text-white py-2 mb-1' >Tablets</Link>
              <Link className='text-white py-2 mb-1' >Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear() }: Powered by Digitic </p>
          </div>
        </div>
      </div>
    </footer>
   </>
   
  )
}

export default Footer