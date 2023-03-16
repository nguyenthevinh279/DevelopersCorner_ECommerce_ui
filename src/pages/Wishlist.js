import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
const Wishlist = () => {
  return (
   <>
   <Meta title={'Wishlist'}></Meta>
    <BreadCrumb title='Wishlist'  />
    <Container class1="wishlist-wrapper home-wrapper-2 py-5">
       
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card w-100 position-relative">
                    <img 
                        src="images/cross.svg" 
                        alt="" 
                        className='position-absolute cross img-fluid' />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                        </div>
                        <div className="px-3 py-3">
                        <h5 className='title'>Horor T1 0.1 GB RAM 8GB ROM 7 Inch Wi-Fi+3G Tablet</h5>
                        <h6 className='price'>$100</h6>
                        </div>
                    </div>
                    
                </div>
                <div className="col-3">
                    <div className="wishlist-card w-100 position-relative">
                    <img 
                        src="images/cross.svg" 
                        alt="" 
                        className='position-absolute cross img-fluid' />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                        </div>
                        <div className="px-3 py-3">
                        <h5 className='title'>Horor T1 0.1 GB RAM 8GB ROM 7 Inch Wi-Fi+3G Tablet</h5>
                        <h6 className='price'>$100</h6>
                        </div>
                    </div>
                    
                </div>
                <div className="col-3">
                    <div className="wishlist-card w-100 position-relative">
                    <img 
                        src="images/cross.svg" 
                        alt="" 
                        className='position-absolute cross img-fluid' />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                        </div>
                        <div className="px-3 py-3">
                        <h5 className='title'>Horor T1 0.1 GB RAM 8GB ROM 7 Inch Wi-Fi+3G Tablet</h5>
                        <h6 className='price'>$100</h6>
                        </div>
                    </div>
                    
                </div>
                <div className="col-3">
                    <div className="wishlist-card w-100 position-relative">
                    <img 
                        src="images/cross.svg" 
                        alt="" 
                        className='position-absolute cross img-fluid' />
                        <div className="wishlist-card-image">
                            <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                        </div>
                        <div className="px-3 py-3">
                        <h5 className='title'>Horor T1 0.1 GB RAM 8GB ROM 7 Inch Wi-Fi+3G Tablet</h5>
                        <h6 className='price'>$100</h6>
                        </div>
                    </div>
                    
                </div>
            </div>
        
    </Container>
   
   </> 
 )
}

export default Wishlist