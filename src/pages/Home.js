import React from 'react'
import {Link} from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services} from '../utils/Data'
const Home = () => {
  return (
    <>
    <Container class1='home-wrapper-1 py-5'>
    <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="" />
                <div className="main-banner-content position-absolute ">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="" />
                <div className="small-banner-content position-absolute ">
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="" />
                <div className="small-banner-content position-absolute ">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="" />
                <div className="small-banner-content position-absolute ">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="" />
                <div className="small-banner-content position-absolute ">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
              
              </div>
            </div>
          </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>
   
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                {
                  services.map((item)=>(
                  <div className='d-flex align-items-center gap-15'>
                  <img src={item.tagline} alt="" />
                  <div>
                    <h6>{item.image}</h6>
                    <p className='mb-0' >{item.title}</p>
                  </div>
                </div>
                  )) 
                }

                

              </div>
            </div>
          </div>
      
    </Container>
    <Container class1='home-wrapper-2 py-5'>
    <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between alin-items-center">
                <div className='d-flex gap-30 align-items-center '>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p className='mb-0' >10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p className='mb-0' >10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p className='mb-0' >10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p className='mb-0' >10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p className='mb-0' >10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p className='mb-0' >10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p className='mb-0' >10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p className='mb-0' >10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
                
                

              </div>
            </div>
          </div>
    </Container>
    <Container class1='features-wrapper py-5 home-wrapper-2' >
    <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collections</h3>
            </div>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
          </div>
    </Container>  
    <Container class1='famous-wrapper py-5 home-wrapper-2' >
    <div className="row">
            <div className="col-3">
              <div className="famous-card bg-dark position-relative">
                <img className='img-fluid famous-image' src="images/famous-1.png" alt="" />
                <div className="famous-content position-absolute">
                <h5 className='text-white'>Big Screen</h5>
                <h6 className='text-white'>Smart Watch Series 7</h6>
                <p className='text-white'>From $399 or $16.62/mo for 24 mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-white  position-relative">
                <img className='img-fluid famous-image' src="images/famous-2.png" alt="" />
                <div className="famous-content position-absolute">
                <h5 >STUDIO DISPLAY</h5>
                <h6 >600 nits of brightness</h6>
                <p >27-inch 5K Retina display </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-white  position-relative">
                <img className='img-fluid famous-image' src="images/famous-3.jpg" alt="" />
                <div className="famous-content position-absolute">
                <h5 >SMARTPHONE</h5>
                <h6 >Smartphone 13 Pro</h6>
                <p >Now in green,From $999 or $41.26/mo for 24 mo. </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-white  position-relative">
                <img className='img-fluid famous-image' src="images/famous-4.jpg" alt="" />
                <div className="famous-content position-absolute">
                <h5 >HOME SPEAKERS</h5>
                <h6 >Room-filling sound</h6>
                <p >From $999 or $41.26/mo for 24 mo. </p>
                </div>
              </div>
            </div>
          </div>
    </Container>  
    <Container class1='special-wrapper py-5 home-wrapper-2' >
    <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <div className="row "></div>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
          </div>
    </Container>  
    <Container class1='popular-wrapper py-5 home-wrapper-2' >
         <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
           
          </div>
          <div className="row">
           
          <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
          </div>
    </Container>  
    <Container class1='marque-wrapper home-wrapper-2 py-5' >
    <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25' >
                  <img src="images/brand-01.png" alt="" />
                </div>
                <div className='mx-4 w-25' >
                  <img src="images/brand-02.png" alt="" />
                </div>
                <div className='mx-4 w-25' >
                  <img src="images/brand-03.png" alt="" />
                </div>
                <div className='mx-4 w-25' >
                  <img src="images/brand-04.png" alt="" />
                </div>
                <div className='mx-4 w-25' >
                  <img src="images/brand-05.png" alt="" />
                </div>
                <div className='mx-4 w-25' >
                  <img src="images/brand-06.png" alt="" />
                </div>
                <div className='mx-4 w-25' >
                  <img src="images/brand-07.png" alt="" />
                </div>
                <div className='mx-4 w-25' >
                  <img src="images/brand-08.png" alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
    </Container>  
     
    <Container class1='blog-wrapper py-5 home-wrapper-2' >
    <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <div className="row">
              <div className="col-3">
              <BlogCard/>
              </div>
              <div className="col-3">
              <BlogCard/>
              </div>
              <div className="col-3">
              <BlogCard/>
              </div>
              <div className="col-3">
              <BlogCard/>
              </div>
            </div>
           
          </div>
    </Container>  
     
     
    
     
      

     
      
    </>
  )
}

export default Home