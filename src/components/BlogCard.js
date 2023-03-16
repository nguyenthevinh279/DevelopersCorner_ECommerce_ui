import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className="blog-card">
        <div className="card-image">
            <img src="../images/blog-1.jpg" className='img-fluid w-100' alt="" />
        </div>
        <div className="blog-content">
            <p className='date'>1 Dec,2023</p>
            <h5 className="title">
                A beautiful sunday morning renainssance
            </h5>
            <p className="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
            <Link to='/blogs/:id' className='button'>Read More</Link>
        </div>
    </div>
  )
}

export default BlogCard