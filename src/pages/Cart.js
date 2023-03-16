import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
const Cart = () => {
  return (
    <>
    <Meta title={'Cart'}></Meta>
    <BreadCrumb title='Cart'  />
    <Container class1="cart-wrapper home-wrapper-2 py-5">
       
            <div className="row">
                <div className="col-12">
                    <div className="cart-header d-flex justify-content-between align-items-center">
                        <h4 className='cart-col-1'>PRODUCT</h4>
                        <h4 className='cart-col-2'>PRICE</h4>
                        <h4 className='cart-col-3'>QUANLITY</h4>
                        <h4 className='cart-col-4'>TOTAL</h4>
                    </div>
                    <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                       <div className='cart-col-1 d-flex align-items-center'>
                        <div className='w-25'>
                            <img className='img-fluid' src="../images/watch.jpg" alt="" />
                        </div>
                        <div className='w-75'>
                            <p >Kids headphoes bulk 10 pack multicolored for students</p>
                            <p >Size: S</p>
                            <p >cOLOR: #AHB567</p>
                        </div>
                       </div>
                       <div className='cart-col-2'>
                            <h5 className="price">$ 100.00</h5>
                       </div>
                       <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div>
                            <input 
                                className='form-control' 
                                type="number" 
                                name="" 
                                id="" 
                                min={1}
                                max={10}
                            />
                        </div>
                        <div><AiFillDelete className='text-danger ' /></div>
                       </div>
                       <div className='cart-col-4'>
                       <h5 className="price">$ 100.00</h5>
                       </div>
                    </div>
                    <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                       <div className='cart-col-1 d-flex align-items-center'>
                        <div className='w-25'>
                            <img className='img-fluid' src="../images/watch.jpg" alt="" />
                        </div>
                        <div className='w-75'>
                            <p >Kids headphoes bulk 10 pack multicolored for students</p>
                            <p >Size: S</p>
                            <p >cOLOR: #AHB567</p>
                        </div>
                       </div>
                       <div className='cart-col-2'>
                            <h5 className="price">$ 100.00</h5>
                       </div>
                       <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div>
                            <input 
                                className='form-control' 
                                type="number" 
                                name="" 
                                id="" 
                                min={1}
                                max={10}
                            />
                        </div>
                        <div><AiFillDelete className='text-danger ' /></div>
                       </div>
                       <div className='cart-col-4'>
                       <h5 className="price">$ 100.00</h5>
                       </div>
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                        <Link to='/product' className='button'>Countinue To Shopping</Link>
                        <div className='d-flex flex-column align-items-end'>
                            <h4>SubTotal: $ 1000</h4>
                            <p>Taxes and shipping calculated at checkout </p>
                            <Link to='/checkout' className='button'>Checkout</Link>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        
    </Container>

    </>
  )
}

export default Cart