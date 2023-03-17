import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall,BiInfoCircle} from 'react-icons/bi'
import Container from '../components/Container'
const Contact = () => {
  return (
    <>
    <Meta title={'Contact'}></Meta>
        <BreadCrumb title='Contact Us'  />
        <Container class1="contact-wrapper home-wrapper-2 py-5">
         
            <div className="row">
              <div className="col-12">
              <iframe 
              title='myFrame'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9880.820111973044!2d76.99537935213378!3d28.88653516020469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0xe5a485e2ac7c3d4a!2zTWFuZGF1cmEsIEhhcnlhbmEgMTMxMTAzLCDhuqRuIMSQ4buZ!5e0!3m2!1svi!2s!4v1678612554179!5m2!1svi!2s" 
              width="600" 
              height="450" 
              className='border-0 w-100'
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </div>
              <div className="col-12 mt-5">
                <div className="contact-inner-wrapper d-flex justify-content-between">
                    <div>
                      <h3 className="contact-title mb-4">Contact</h3>
                      <form action="" className='d-flex flex-column gap-15'>
                        <div>
                          <input type="text" className='form-control' placeholder='Name' />
                        </div>
                        <div>
                          <input type="email" className='form-control' placeholder='Email' />
                        </div>
                        <div>
                          <input type="tel" className='form-control' placeholder='Mobile Number' />
                        </div>
                        <div>
                          <textarea col='30' rows='4' type="text" className='form-control' placeholder='comments' />
                        </div>
                        <div>
                          <button className='button border-0'>Submit</button>
                        </div>
                      </form>
                    </div>
                    <div>
                      <h3 className="contact-title mb-4">Get in touch with us</h3>
                      <div>
                        <ul className='ps-0'>
                          <li className='mb-3 d-flex gap-15 align-items-center' >
                            <AiOutlineHome className='fs-5'  />
                            <address className='mb-0'>Hno: 277 ,near viilage chopal,Mandaura,sopinat,Hrayya</address>
                          </li>
                          <li className='mb-3 d-flex gap-15 align-items-center' >
                            <BiPhoneCall className='fs-5' />
                            <a href="tel +91 9803474">+91 039328723</a>
                          </li>
                          <li className='mb-3 d-flex gap-15 align-items-center' >
                            <AiOutlineMail className='fs-5' />
                            <a href="mailto:ntvinhkts@gmail.com">
                              digitic@gmail.com</a>            
                          </li>
                          <li className='mb-3 d-flex gap-15 align-items-center' >
                            <BiInfoCircle className='fs-5' />
                            <p className='mb-0'>Monday - Friday 10AM-8PM</p>
                            </li>
                        </ul>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          
        </Container>
    </>
  )
}

export default Contact