import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faBoxesPacking, } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle, faTwitter, faApple } from '@fortawesome/free-brands-svg-icons'
import WelcomeDealSlider from './WelcomeDealSlider.jsx'
import { slides } from '../data/welcomeDealSliderData/welcomeDealSlider.json'
import {slider} from '../data/welcomeDealSliderData/welcomeDealSliderData.js'
import './Homepage.css'
import PopupSignInModal from '../Navbar/Signup-Login-page/PopupSignInModal.jsx'

const Homepage = () => {
    return (
            <div style={{padding:"32px 0", width:"100%"}}>
                <div className="banner">
                    <div className="fast-delivery">
                        <div className="fast-delivery-img">
                            <FontAwesomeIcon icon={faBox} style={{color: "#571209", height:"24px"}} />
                        </div>

                        <div className="fast-delivery-text">
                                <strong><p style={{fontSize:"18px"}}>Fast Delivery</p></strong>
                                <p>Get refunds for any issues</p>
                            </div>
                    </div>

                    <div className="free-return">
                        <div className="return-img">
                            <FontAwesomeIcon icon={faBoxesPacking} style={{color: "#571209", height:"24px"}} />
                        </div>
                        <div className="free-return-text">
                                <strong><p style={{fontSize:"18px"}}>Free Returns</p></strong>
                                <p>within 90 days</p>
                        </div>
                    </div>
                </div>

                <div className="container-1">
                    <div className="login-welcome-deal">
                        <div className="login-container">
                            <div className="register-signIn-btn" style={{display:"flex"}}>
                                <button className='register-btn'>Register</button>
                                <button className='sign-in-btn'>Sign in</button>
                            </div>
                            
                            <div style={{ margin: " 14px 0 4px", textAlign: "center", lineHeight: "18px", fontSize: "12px", color: "#191919" }}>Or continue with</div>
                            
                        <div className="login-logos" style={{display: "flex", justifyContent:"space-evenly", margin:"14px 0 0 0"}}>
                                <div className="fb-login">
                                    <FontAwesomeIcon icon={faFacebookF} style={{color: "#4267B2", height:"24px"}} /> 
                                </div>
                                <div className="gg-login">
                                    <FontAwesomeIcon icon={faGoogle} style={{color: "#eac43e", height:"24px"}} /> 
                                </div>
                                <div className="x-login">
                                    <FontAwesomeIcon icon={faTwitter} style={{color: "#2EADF6", height:"24px"}} />                            </div>
                                <div className="apple-login">
                                    <FontAwesomeIcon icon={faApple} style={{color: "#000000", height:"24px"}} /> 
                                </div>
                            </div>
                        </div>

                        <div className="welcome-deal">
                            <div className="welcome-deal-text">
                                <h2>Welcome Deal</h2>
                                <p>Your exclusive price</p>
                            </div>

                            <WelcomeDealSlider data={slides} />
                        </div>

                    </div>

                    <div className="launched-new"></div>

                    <div className="under-usd3"></div>
                </div>
            </div>
    )
}

export default Homepage