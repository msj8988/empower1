import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import instagram from '../../Assets/icons/instagram.svg';
import tiktok from '../../Assets/icons/tiktok.svg';
import facebook from '../../Assets/icons/facebook-f.svg';
import linkedin from '../../Assets/icons/linkedin-in.svg';
import twitter from '../../Assets/icons/twitter.svg';
import './Footer.scss';

const Footer = () => {
    return (
        <>
          <footer className="footer">
            <div className="container">
              <div className="footer-wrapper">
                <div className="top-footer">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="contents">
                        <div className="footer-logo">
                          <img src={logo} alt="logo" />
                        </div>
                        <p className="description">Uplifting Care. Enriching Communities</p>
                        <ul className="menu-items">
                          <li className="menu-item">
                            <Link to='/'>
                            <img src={instagram} alt="instagram" />
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to='/'>
                            <img src={twitter} alt="twitter" />
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to='/'>
                            <img src={facebook} alt="facebook" />
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to='/'>
                            <img src={linkedin} alt="linkedin" />
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to='/'>
                            <img src={tiktok} alt="tiktok" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="contents">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="list-items">
                          <li className="list-item">
                            <Link to='/'>
                              <span>About</span>
                            </Link>
                          </li>
                          <li className="list-item">
                            <Link to='/'>
                              <span>Quick Apply</span>
                            </Link>
                          </li>
                          <li className="list-item">
                            <Link to='/'>
                              <span>Contests</span>
                            </Link>
                          </li>
                          <li className="list-item">
                            <Link to='/'>
                              <span>Our Blogs</span>
                            </Link>
                          </li>
                          <li className="list-item">
                            <Link to='/'>
                              <span>Reenage With Us</span>
                            </Link>
                          </li>
                          <li className="list-item">
                            <Link to='/'>
                              <span>Community Partnerships</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="contents">
                        <h4 className="footer-title">Contact</h4>
                        <p className="address">562 LincoIn St. Warcester, MA 01605</p>
                        <ul className="list-items">
                          <li className="list-item">
                            <Link to='/'><span>508-799-7674</span></Link>
                          </li>
                          <li className="list-item">
                            <Link to='/'><span>www.empowercare.us</span></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="contents">
                        <h4 className="footer-title">Stay Connected</h4>
                        <form action="" className='footer-form'>
                          <input type="email" placeholder='Email' />
                          <button type="submit" className='submit-btn'>
                            <span>Submit</span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-footer">
                  <div className="bottom-foote-row">
                    <p className="text">&copy; 2024 <span>Empowercare.</span> All right reserved.</p>
                    <p className="text">Privacy Policy Terms of Service.</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
    )
}

export default Footer