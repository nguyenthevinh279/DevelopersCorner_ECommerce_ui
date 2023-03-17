import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    let location= useLocation()
    const {grid}=props
    
  return (
    <>
    <div className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-3'}`}>
        <Link to='/product/:id' className="product-card position-relative">
            <div className="wishlist-icon position-absolute ">
                <button className='border-0 bg-transparent'>
                    <img src="../images/wish.svg" alt="" />
                </button>
            </div>
            <div className="product-image ">
               
                <img src="../images/watch.jpg" className='img-fluid' alt="" />
                <img src="../images/watch1.jpg"  className='img-fluid' alt="" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                    Kids headphones bulk 10 pack multi colored for students
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={`description ${grid === 12 ? 'd-block' : 'd-none' }`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                <p className="price">$100.00</p>

            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column gap-15'>
                    <button className='border-0 bg-transparent'>
                        <img src="../images/prodcompare.svg" alt="" />
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src="../images/view.svg" alt="" />
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src="../images/add-cart.svg" alt="" />
                    </button>
                </div>
            </div>
        </Link>
    </div>
    </>
    
  )
}

export default ProductCard