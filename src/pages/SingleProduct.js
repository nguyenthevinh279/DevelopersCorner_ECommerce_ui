import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactImageZoom from 'react-image-zoom';
import {Color} from '../components/Color'
import {TbGitCompare} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'
import Container from '../components/Container'
const SingleProduct = () => {


    const props = {
        width: 400, 
        height: 500, 
        zoomWidth: 600, 
        img: "https://thegioialo.vn/wp-content/uploads/2022/11/Watch-Series-8-45mm-5.jpg"};
    const [orderdProduct,setOderedProduct]=useState(true)
  const  copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    
   <>
        <Meta title={'Product Name'}></Meta>
    <BreadCrumb title='Product Name'  />
    <Container class1="main-product-wrapper py-5 home-wrapper-2">
        
            <div className="row">
                <div className="col-6">
                    <div className="main-product-image">
                        <div>
                        <ReactImageZoom {...props} />
                        </div>
                    </div>
                    <div className="other-product-image d-flex flex-wrap gap-15">
                        <div><img src="https://thegioialo.vn/wp-content/uploads/2022/11/Watch-Series-8-45mm-5.jpg" className='img-fluid' alt="" /></div>
                        <div><img src="https://thegioialo.vn/wp-content/uploads/2022/11/Watch-Series-8-45mm-5.jpg" className='img-fluid' alt="" /></div>
                        <div><img src="https://thegioialo.vn/wp-content/uploads/2022/11/Watch-Series-8-45mm-5.jpg" className='img-fluid' alt="" /></div>
                        <div><img src="https://thegioialo.vn/wp-content/uploads/2022/11/Watch-Series-8-45mm-5.jpg" className='img-fluid' alt="" /></div>
                    </div>
                    
                </div>
                <div className="col-6">
                    <div className="main-product-details">
                        <div className='border-bottom'>
                            <h3 className='title'>Kids headphones Bulk 10 Pack Multi Colored For Students</h3>
                        </div>
                        <div className="border-bottom py-3">
                            <p className="price">$ 100</p>
                            <div className="d-flex align-items-center gap-10">
                            <ReactStars
                                    count={5}
                                    size={24}
                                    value={3}
                                    edit={false}
                                    activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>(2 Reviews)</p>
                            </div>
                            <a className='review-btn' href="#review">Write a Review</a>
                        </div>
                        <div className=" py-3">
                            <div className='d-flex gap-10 align-items-center'>
                                <h3 className='product-heading'>Type :</h3> 
                                <p className='product-data'>Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <h3 className='product-heading'>Brand :</h3> 
                                <p className='product-data'>Havels</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <h3 className='product-heading'>Category :</h3> 
                                <p className='product-data'>Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <h3 className='product-heading'>Tags :</h3> 
                                <p className='product-data'>Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center'>
                                <h3 className='product-heading'>Availablity :</h3> 
                                <p className='product-data'>In stock</p>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h3 className='product-heading'>Size :</h3> 
                                <div className='d-flex flex-wrap gap-15'>
                                    <span className="badge text-dark border border-1 bg-white border-secondary">S</span>
                                    <span className="badge text-dark border border-1 bg-white border-secondary">M</span>
                                    <span className="badge text-dark border border-1 bg-white border-secondary">L</span>
                                    <span className="badge text-dark border border-1 bg-white border-secondary">XL</span>
                                </div>

                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h3 className='product-heading'>Color :</h3> 
                               <Color />
                            </div>
                            <div className='d-flex gap-15 align-items-center  mt-2 mb-3'>
                                <h3 className='product-heading'>Quanlity :</h3> 
                                <div className='d-flex flex-wrap gap-15'>
                                    <input 
                                    type="number" 
                                    name="" 
                                    min={1}
                                    max={10}
                                    id=""
                                    className='from-control'
                                    style={{width: "50px"}} 
                                    />

                                </div>
                                <div className='d-flex align-items-center gap-30 ms-5'>
                                <button className='button border-0' type='submit'>Add to Cart</button>
                                <button className='button signup' to='/signup'>Buy It Now</button>

                                </div>
                            </div>
                            <div className="d-flex gap-15 align-items-center gap-15">
                                <div>
                                    <a href="#"> <TbGitCompare className='fs-5 me-2'/> Add to compare</a>
                                </div>
                                <div>
                                    <a href="#"><AiOutlineHeart className='fs-5 me-2'/> Add to Wishlist</a>
                                </div>
                            </div>
                            <div className='d-flex flex-column gap-10 my-3 '>
                                <h3 className='product-heading'>Shipping & Return :</h3> 
                                <p className='product-data'>Free shipping and return available on all orders!
                                <br /> We ship all US dometisc orders within <b>5-10 bussiness days!</b>
                                </p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-3'>
                                <h3 className='product-heading'>Copy Product Link :</h3> 
                                <a href="javascript:void(0);" onClick={()=>copyToClipboard("https://thegioialo.vn/wp-content/uploads/2022/11/Watch-Series-8-45mm-5.jpg")}>
                                Product Link
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        
    </Container>
    <Container class1="description-wrapper py-5 home-wrapper-2">
        
            <div className="row">
                <div className="col-12">
                    <h4>Description</h4>
                    <div className='bg-white p-3'>
                    <p >
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    </div>
                    
                </div>
            </div>
        
    </Container>
    <Container  class1="review-wrapper home-wrapper-2">
        
            <div className="row">
                <div className="col-12">
                    <h3  id='review' >Reviews</h3>
                    <div className="review-inner-wrapper">
                        <div className="review-head d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                    count={5}
                                    size={24}
                                    value={3}
                                    edit={false}
                                    activeColor="#ffd700"
                                    />
                                    <p className='mb-0'>Base on 2 Reviews</p>
                                </div>
                            </div>
                            <div>
                            {
                                orderdProduct && (
                                    <div>
                                        <a className='text-decoration-underline' href="#">Write a review</a>
                                    </div>
                                )
                            }
                            </div>
                        </div>
                        <div  className="review-form py-4">
                            <h4 className="mb-2">Write a Review</h4>
                        <form action="" className='d-flex flex-column gap-15'>
                       
                        <div>
                        <ReactStars
                                    count={5}
                                    size={24}
                                    value={3}
                                    edit={true}
                                    activeColor="#ffd700"
                                    />
                        </div>
                       
                       
                        <div className='mt-1'>
                            <textarea  name='password' className="w-100 form-control" col='30' rows='4' placeholder='Comments' />
                        </div>
                        
                        <div className='d-flex justify-content-end'>
                            <button className='button border-0'>Submit Review</button>

                        </div>
                    </form>
                        </div>
                        <div className="reviews mt-4">
                            <div className="review">
                                <div className="d-flex gap-10 align-items-center">
                                     <h6 className='mb-0'>Navdeep</h6>
                                    <ReactStars
                                    count={5}
                                    size={24}
                                    value={3}
                                    edit={false}
                                    activeColor="#ffd700"
                                    />
                                </div>
                                <p className='mt-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
                            </div>
                            <div className="review">
                                <div className="d-flex gap-10 align-items-center">
                                     <h6 className='mb-0'>Navdeep</h6>
                                    <ReactStars
                                    count={5}
                                    size={24}
                                    value={3}
                                    edit={false}
                                    activeColor="#ffd700"
                                    />
                                </div>
                                <p className='mt-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
            
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
      
   </>
  )
}

export default SingleProduct