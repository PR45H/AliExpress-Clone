import React from 'react'
import logo from '../assets/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faQrcode, faExpand, faUser, faCartShopping, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'

const Navbar = () => {
  return (
        <div className='nav-container'>
            <div className='top-bar'>
                <div className="logo">
                        <img src={logo} alt="AliExpress logo" />
                </div>
                
                <div className="search-bar">
                    <div className="search-input">
                        <input type="text" placeholder="Search products, brands and more" />
                        <FontAwesomeIcon icon={faExpand} style={{color: "#ffffff",}} />
                        <button>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                        </button>
                    </div>
                </div>
                
                <div className="dowload-app">
                    <div className="qrImg">
                        <FontAwesomeIcon icon={faQrcode} style={{color: "#ffffff",}} />
                    </div>
                    
                    <div className="download-text set">
                        <p>Download the </p>
                        <p>AliExpress app</p>
                    </div>

                </div>
                
                <div className="location">
                    <div className="flag">
                        <p>flag</p>
                    </div>
                    <div className='shipping set'>
                        <p>Ship to</p>
                        <p>United States</p> 
                    </div>
                </div>

                <div className="login">
                    <div className="user">
                        <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />
                    </div>

                    <div className="username set">
                        <p>Welcome</p>
                        <p><strong>Sign in / Register</strong></p>
                    </div>
                </div>

                <div className="cart">
                    <div className="cart-svg"> 
                        <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff", }} />
                    </div>
                    <div className="count set">
                        <div style={{backgroundColor:"white", color:"black", borderRadius:"10px 10px 5px 10px" ,padding:"0 7px"}}> 0 </div>
                        <p>cart</p>
                    </div>
                
                </div>

            </div>

            
            <div className="bottom-bar" >
                <div className="categories" style={{padding:"10px 15px", marginBottom:"10px", borderRadius:"20px"}}>
                    <div className="category-dropdown" >
                        <div className="category-icon">
                            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
                        </div>
                        <p className="category-text" style={{paddingRight:"20px"}}>All Categories</p>
                        <div className="arrow-icon">
                            <FontAwesomeIcon icon={faChevronDown} style={{ color: "#ffffff" }} />
                        </div>
                        <div className="category-list">
                          {/* Add your category list items here */}
                            <ul>
                                <li>furniture</li>
                                <li>furniture</li>
                                <li>furniture</li>
                                <li>furniture</li>
                                <li>furniture</li>
                            </ul>
                        </div>
                        
                    </div>

                    
                </div>
        

                <div className="bottombar-list" style={{width:"70vw"}}>
                    <strong><li><a href="" style={{color:"#FD384F"}}>From $0.99</a></li></strong>
                    <li><a href="">Welcome deal</a></li>
                    <li><a href="">First come 50% off</a></li>
                    <li><a href="">Choice</a></li>
                    <li><a href="">Ship from US</a></li>
                    <li><a href="">Wigs</a></li>
                    <li><a href="">Super Deals</a></li>
                    <li><a href="">AliExpress Business</a></li>
                    <li><a href="">Furniture</a></li>
                    <li><a href="">Beauty & Health</a></li>
                  <li><a href="" style={{marginRight:"05px"}}>more</a><FontAwesomeIcon icon={faChevronDown} style={{ color: "#ffffff", cursor:"pointer" }}/></li>
                </div>
              
              
            </div>
        </div>
    )
}

export default Navbar