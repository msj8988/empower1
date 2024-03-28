import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './CareerSlider.scss';
import blogImg1 from '../../Assets/blogImg1.png';
import blogImg2 from '../../Assets/blogImg2.png';
import blogImg3 from '../../Assets/blogImg3.png';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 767, min: 310 },
      items: 3,
      slidesToSlide: 1
    }
  };
  const sliderImageUrl = [
    {
      userImg: blogImg1,
    },
    {
      userImg: blogImg2,
    },
    {
      userImg: blogImg3,
    },
    {
      userImg: blogImg1,
    },
    {
      userImg: blogImg2,
    }
  ];

const CareerSlider = () => {
    return (
        <div className="career-silder-sec">
            <div className="container">
                <div className="career-silder-wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="top-content">
                                <span className="meta">Limited 5-Day Special Access</span>
                                <h2 className="heading">
                                    Career 
                                    <span> Resources </span> <br />
                                    and Insights
                                </h2>
                                <p className="description">Stay informed with EmpowerCare's latest career resources, industry insights, and professional development opportunities for healthcare professionals.</p>
                            </div>
                            <div className="carousel-sec">
                                <div className="parent">
                                    <Carousel
                                        responsive={responsive}
                                        autoPlay={false}
                                        swipeable={true}
                                        draggable={true}
                                        autoPlaySpeed={1000}
                                        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                                        showDots={true}
                                        infinite={true}
                                        partialVisible={false}
                                        dotListClass="custom-dot-list-style"
                                    >
                                        {sliderImageUrl.map((imageUrl, index) => {
                                        return (
                                            <div className="slider" key={index}>
                                            <img src={imageUrl.userImg} alt="career" />
                                            </div>
                                        );
                                        })}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerSlider