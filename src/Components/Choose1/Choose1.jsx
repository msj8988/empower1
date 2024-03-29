import React from 'react';
import './Choose1.scss';

const Choose1 = (props) => {
    return (
        <div className="choose-sec1">
            <div className="choose-container">
                <div className="choose-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="right-content">
                                    <div className="content-row">
                                        <div className="content-box active">
                                            <h5 className="heading">Convenient Staffing:</h5>
                                            <p className="description">We provide a full range of staffing solutions, covering all aspects of your <br />
                                            professional requirements, making the process convenient for you</p>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="heading">Personable Approach:</h5>
                                            <p className="description">Our customized staffing plans are designed to align with your unique needs, ensuring 
                                            the best fit for your career aspirations. We prioritize building strong relationships with our healthcare professionals.</p>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="heading">Supportive Community:</h5>
                                            <p className="description">Access a vast network of highly qualified and responsible healthcare professionals who are ready to make a positive impact together.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="left-content">
                                    <span className="meta">{props.meta}</span>
                                    <h2 className="heading">
                                        {props.heading} <span> {props.spantext}</span> {props.headingafter} 
                                    </h2>
                                    <p className="description">{props.description1}</p>
                                    <p className="description">{props.description2}</p>
                                
                                    <div className="sec-btns">
                                        <button className="learn-btn">
                                            <span>Learn More</span>
                                        </button>
                                        <button className="signup-btn">
                                            <span>Sign up</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose1