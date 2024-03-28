import React from 'react';
import './HCareer.scss';
import HCarreImg from '../../Assets/HCareerimg.png';
import dropdownarrow from '../../Assets/dropdown.svg';

const HCareer = () => {
    return (
        <div className="hcareer-sec">
            <div className="container">
                <div className="hcareer-wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content">
                                <span className="meta">Who We Are</span>
                                <h2 className="heading">
                                    Healthcare
                                    <span> Career </span> <br />
                                    Opportunities
                                </h2>
                                <div className="explore-jobs">
                                    <div className="selection-field">
                                        <span>Explore Jobs in Various Settings:</span>
                                        <img src={dropdownarrow} alt="dropdownarrow" />
                                    </div>
                                    <div className="select-jobs">
                                        <div className="button-select">
                                            <div class="btn_check">
                                                <input type="radio" id="check" name="options" />
                                                <label class="btn btn-default" for="check">
                                                    Hospitals and Health Systems
                                                </label>
                                            </div>
                                            <div class="btn_check">
                                                <input type="radio" id="check1" name="options" />
                                                <label class="btn btn-default" for="check1">
                                                    School Healthcare Jobs
                                                </label>
                                            </div>
                                            <div class="btn_check">
                                                <input type="radio" id="check2" name="options" />
                                                <label class="btn btn-default" for="check2">
                                                    Community Health Centers
                                                </label>
                                            </div>
                                            <div class="btn_check">
                                                <input type="radio" id="check3" name="options" />
                                                <label class="btn btn-default" for="check3">
                                                    Skilled Nursing Facilities Jobs
                                                </label>
                                            </div>
                                            <div class="btn_check">
                                                <input type="radio" id="check4" name="options" />
                                                <label class="btn btn-default" for="check4">
                                                    Mental & Behavioral Health Centers
                                                </label>
                                            </div>
                                        </div>
                                        <div className="bottom-btn">
                                            <button className="job-btn">
                                                <span>Find contract nursing jobs</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <div className="section-img">
                                    <img src={HCarreImg} alt="HCarreImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HCareer