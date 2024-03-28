import React from 'react';
import { Link } from 'react-router-dom';
import './Userslider.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import blogImg1 from '../../Assets/blogImg1.png';
import blogImg2 from '../../Assets/blogImg2.png';
import blogImg3 from '../../Assets/blogImg3.png';
import rightarrow from '../../Assets/right-arrow.svg';
import downarrow from '../../Assets/down-link-arrow.svg';
import StarIcon from '@mui/icons-material/Star';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

const userData = [
    {
        userImg: blogImg1,
        userName: "Stepphane R",
        userMeta: "Industry Standard",
        userMessage: "This is a great company and they do their best to accomodate your needs I'm happy to be a part of this company",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
    {
        userImg: blogImg2,
        userName: "Denea H",
        userMeta: "Industry Standard",
        userMessage: "This is a great company and they do their best to accomodate your needs I'm happy to be a part of this company",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
    {
        userImg: blogImg3,
        userName: "Gail M",
        userMeta: "Industry Standard",
        userMessage: "This is a great company and they do their best to accomodate your needs I'm happy to be a part of this company",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
    {
        userImg: blogImg1,
        userName: "Stepphane R",
        userMeta: "Industry Standard",
        userMessage: "This is a great company and they do their best to accomodate your needs I'm happy to be a part of this company",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
    {
        userImg: blogImg2,
        userName: "Denea H",
        userMeta: "Industry Standard",
        userMessage: "This is a great company and they do their best to accomodate your needs I'm happy to be a part of this company",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
    {
        userImg: blogImg3,
        userName: "Gail M",
        userMeta: "Industry Standard",
        userMessage: "This is a great company and they do their best to accomodate your needs I'm happy to be a part of this company",
        btnText: "READ MORE",
        btnarrow: rightarrow
    },
]

const Userslider = () => {
    return (
        <div className="user-slider-sec">
            <div className="user-slider-container">
                <div className="user-slider-wrapper">
                    <div className="container">
                        <div className="users-item row">
                            <Carousel
                                responsive={responsive}
                                autoPlay={true}
                                swipeable={true}
                                draggable={true}
                                autoPlaySpeed={1000}
                                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                                showDots={false}
                                infinite={true}
                                partialVisible={false}
                                dotListClass="custom-dot-list-style"
                            >
                                {
                                    userData.map((item, id) => (
                                        <>
                                            <div className="col-md-12" key={id}>
                                                <div className="user-box">
                                                    <div className="user-logo">
                                                        <img src={item.userImg} alt="blogImg1" />
                                                    </div>
                                                    <h4 className="heading">{item.userName}</h4>
                                                    <p className="description">{item.userMessage}</p>
                                                    <div className="rating">
                                                        <div className="rating-star">
                                                            <StarIcon />
                                                        </div>
                                                        <div className="rating-star">
                                                            <StarIcon />
                                                        </div>
                                                        <div className="rating-star">
                                                            <StarIcon />
                                                        </div>
                                                        <div className="rating-star">
                                                            <StarIcon />
                                                        </div>
                                                        <div className="rating-star">
                                                            <StarIcon />
                                                        </div>
                                                    </div>
                                                    <Link className="learn-more" to="/">
                                                        <span>{item.btnText}</span>
                                                        <img src={item.btnarrow} alt="rightarrow" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </Carousel>
                        </div>
                        <div className="bottom-btn">
                            <button className="apply-btn">
                                <span>Quick Apply</span>
                                <img src={downarrow} alt="downarrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userslider