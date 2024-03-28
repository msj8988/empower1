import React from 'react';
import './Network.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import downarrow from '../../Assets/down-link-arrow.svg';

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
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const Network = () => {
    return (
        <div className="network-sec">
            <div className="network-sec-bg">
                <div className="">
                    <div className="network-wrapper">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="left-content">
                                    <span className="meta">Who We Are</span>
                                    <h2 className="heading">
                                        An Extensive
                                        <span> Network of Healthcare </span>
                                        Opportunities
                                    </h2>
                                    <p className="description">From single shifts to long-term placements, EmpowerCare delivers <br /> a wide range of healthcare staffing solutions.</p>
                                
                                    <div className="sec-btns">
                                        <button className="learn-btn">
                                            <span>Search Job Openings</span>
                                            <img src={downarrow} alt="downarrow" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right-content">
                                    <Carousel
                                        responsive={responsive}
                                        autoPlay={true}
                                        swipeable={true}
                                        draggable={true}
                                        autoPlaySpeed={1000}
                                        showDots={false}
                                        infinite={true}
                                        partialVisible={false}
                                        dotListClass="custom-dot-list-style"
                                    >
                                        <div className="col-md-12">
                                            <div className="network-box">
                                                <div className="network-row">
                                                    <div className="top-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Opportunities</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="network-box">
                                                <div className="network-row">
                                                    <div className="top-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Opportunities</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="network-box">
                                                <div className="network-row">
                                                    <div className="top-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Opportunities</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="network-box">
                                                <div className="network-row">
                                                    <div className="top-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Opportunities</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="network-box">
                                                <div className="network-row">
                                                    <div className="top-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Opportunities</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="network-box">
                                                <div className="network-row">
                                                    <div className="top-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Opportunities</span>
                                                        </div>
                                                    </div>
                                                    <div className="bottom-network">
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                        <div className="network-btn">
                                                            <span>Nursing Roles (RN, LPN, CNAs)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Network