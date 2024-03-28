import React from 'react';
import { Link } from 'react-router-dom';
import './Priemer.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import job1 from '../../Assets/job1.png';
import job2 from '../../Assets/job2.png';
import job3 from '../../Assets/job3.png';
import rightarrow from '../../Assets/right-arrow.svg';
import empower1img from '../../Assets/empower1.png';
import empower2img from '../../Assets/empower2.png';

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

const Priemer = () => {
    return (
        <div className="priemer-sec">
            <div className="priemer-container">
                <div className="priemer-wrapper">
                    <div className="empoer1">
                        <img src={empower1img} alt="empower1img" />
                    </div>
                    <div className="empoer2">
                        <img src={empower2img} alt="empower2img" />
                    </div>
                    <div className="container">
                        <div className="top-content">
                            <span className="meta">Limited 5-Day Special Access</span>
                            <h2 className="heading">
                                Become an  Premier 
                                <span> EmpowerCare </span>
                                Healthcare Professional 
                            </h2>
                            <p className="description">Act Fast! Apply by today is date + 5 to secure your exclusive spot! Seize this rare opportunity to join our prestigious network of Premier Healthcare Professionals within the next 5 days. Gain access to top-tier healthcare jobs, unparalleled support, and career-accelerating benefits. Here is what awaits you:</p>
                        </div>
                        <div className="row">
                            <Carousel
                                responsive={responsive}
                                autoPlay={true}
                                swipeable={true}
                                draggable={true}
                                autoPlaySpeed={1000}
                                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                                showDots={true}
                                infinite={true}
                                partialVisible={false}
                                dotListClass="custom-dot-list-style"
                            >
                                <div className="col-md-12">
                                    <div className="job-box">
                                        <div className="job-logo">
                                            <img src={job1} alt="job1" />
                                        </div>
                                        <h4 className="heading">Priority Job Access</h4>
                                        <p className="description">Be first in line for the most coveted healthcare roles across hospitals, clinics, labs and more, including contract positions, ensuring the widest array of opportunities.</p>
                                        <Link to="/" className="learn-more">
                                            <span>Learn More</span>
                                            <img src={rightarrow} alt="rightarrow" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="job-box active">
                                        <div className="job-logo">
                                            <img src={job2} alt="job2" />
                                        </div>
                                        <h4 className="heading">Tailored Benefits Package</h4>
                                        <p className="description">Choose from a range of benefits curated for your needs - competitive compensation, flexible schedules, health insurance for contract roles, and more.</p>
                                        <Link to="/" className="learn-more">
                                            <span>Learn More</span>
                                            <img src={rightarrow} alt="rightarrow" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="job-box">
                                        <div className="job-logo">
                                            <img src={job3} alt="job3" />
                                        </div>
                                        <h4 className="heading">Personal Career Mentor</h4>
                                        <p className="description">Work hand-in-hand with a dedicated mentor providing personalized guidance, interview prep, and strategic career planning</p>
                                        <Link to="/" className="learn-more">
                                            <span>Learn More</span>
                                            <img src={rightarrow} alt="rightarrow" />
                                        </Link>
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

export default Priemer