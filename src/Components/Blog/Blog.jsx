import React from 'react';
import './Blog.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import blogImg1 from '../../Assets/blogImg1.png';
import blogImg2 from '../../Assets/blogImg2.png';
import blogImg3 from '../../Assets/blogImg3.png';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 310 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const Blog = () => {
    return (
        <div className="blog-sec">
            <div className="blog-container">
                <div className="blog-wrapper">
                    <div className="container">
                        <div className="top-content">
                            <span className="meta">Blogs</span>
                            <h2 className="heading">
                                Healthcare <br />
                                <span> News </span>
                                & Blog Feed
                            </h2>
                            <p className="description">Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</p>
                        </div>
                        <div className="row">
                            <Carousel
                                responsive={responsive}
                                autoPlay={false}
                                swipeable={true}
                                draggable={true}
                                autoPlaySpeed={1000}
                                showDots={true}
                                infinite={true}
                                partialVisible={false}
                                dotListClass="custom-dot-list-style"
                            >
                                <div className="col-md-12">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src={blogImg1} alt="blogImg1" />
                                        </div>
                                        <div className="blog-content active">
                                            <p className="description">11 Best Link in Bio Tools in 2023 <br />You Should Definitely Know.</p>
                                            <p className='date-time'><span className="date">April 19, 2023</span>-<span className='time'>4 min read</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src={blogImg2} alt="blogImg2" />
                                        </div>
                                        <div className="blog-content">
                                            <p className="description">11 Best Link in Bio Tools in 2023 <br />You Should Definitely Know.</p>
                                            <p className='date-time'><span className="date">April 19, 2023</span>-<span className='time'>4 min read</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <img src={blogImg3} alt="blogImg3" />
                                        </div>
                                        <div className="blog-content">
                                            <p className="description">11 Best Link in Bio Tools in 2023 <br />You Should Definitely Know.</p>
                                            <p className='date-time'><span className="date">April 19, 2023</span>-<span className='time'>4 min read</span></p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog