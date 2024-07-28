import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faBoxesPacking } from '@fortawesome/free-solid-svg-icons'
import './Homepage.css'

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
                        
                        <div className="login-logos">
                            
                        </div>
                    </div>

                </div>

                <div className="launched-new"></div>

                <div className="under-usd3"></div>
            </div>
        </div>
  )
}

export default Homepage