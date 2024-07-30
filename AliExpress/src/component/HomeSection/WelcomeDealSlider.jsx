import React, { useState, useEffect } from 'react'
import discountBanner from '../assets/discount-banner_prev_ui.png'
import './WelcomeDealSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'


const WelcomeDealSlider = ({data}) => {

    const [slide, setSlide] = useState(0)
    const nextSlide = () => {
        setSlide(slide === data.length-1 ? 0 : slide + 1)

        
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length-1 : slide - 1)
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [slide]);

    const calculateDiscount = (oldPrice, newPrice) => {
        return Math.floor((oldPrice-newPrice)/oldPrice*100)
    }
    return (
        
        <div>
            <div className="welcome-deal-slider">
                <div className="btn" style={{left:"0.1rem"}}>
                    <button className='prev-btn' onClick={prevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff",}} />
                    </button>
                </div>

                <div className="slider-container">
                    
                    {data.map((slides, i) => {
                        return <img src={slides.src} alt={slides.alt} key={i} className={slide===i ? "slider" : "slider slider-hidden"} />
                    })}
                    
                </div>
            
                    <div className='discount-banner'>
                        <img src={discountBanner} alt="" />
                        
                        {/* {data.map((price, i) => {
                            return <p key={i}>{Math.floor(((price.oldPrice-price.newPrice)/price.oldPrice)*100)}</p>
                            })} */}
                            <p>{calculateDiscount(data[slide].oldPrice, data[slide].newPrice)}</p>
                        
                </div>
                

                    <div className="price-container">
                        <div className="price">
                            <p className='new-price'>C${data[slide].newPrice}</p>
                            
                        </div>
                        <div className="old-price">
                            <p>C${data[slide].oldPrice}</p>
                        </div>
                    </div>

                <div className="btn" style={{right:"0.1rem"}}>
                    <button className='next-btn' onClick={nextSlide}>
                        <FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff", }}  />
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default WelcomeDealSlider