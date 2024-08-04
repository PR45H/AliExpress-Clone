import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faTwitter, faApple } from '@fortawesome/free-brands-svg-icons'
import React, { useRef } from 'react'

const PopupSignInModal = ({onClose}) => {
    const handleSubmit = (e) => {
        return e.preventDefault()
    }

    const modalRef = useRef()

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed z-50 h-screen inset-0 bg-black bg-opacity-30 backdrop-blur-none flex flex-col justify-center items-center">
            <div>
                
                <div className="login-form w-[520px] bg-white text-black rounded-2xl">
                    <div className="heading flex justify-center items-center sticky">
                        <h1 className='text-center font-bold text-[20px] pt-[16px] '>Register / Sign-In
                        <FontAwesomeIcon onClick={onClose} icon={faX}  className='cursor-pointer absolute text-[#666] text-base top-5 right-2 px-2'/>
                        </h1>
                        
                    </div>

                    <div className="form px-[56px]">
                        <form action="" method="get">
                            <input type="email" name="" id="" placeholder='E-mail' className='w-full mx-auto p-2 outline-none border-solid mt-6 mb-2 border-2 border-black-600 rounded-lg' />
                            <input type="password" name="" id="" placeholder='Password' className='w-full mx-auto p-2 outline-none border-solid  mb-4 border-2 border-black-600 rounded-lg' />
                            <button type="submit" onClick={handleSubmit} className='bg-red-300 p-2 rounded-3xl text-lg w-full text-white cursor-not-allowed'>Continue</button>
                        </form>
                    </div>

                    <div className="sign-in-help p-8 ">
                        <p className='text-[12px] underline text-[#979797] leading-[16px] cursor-pointer text-center '>Trouble signing in?</p>
                    </div>

                    <div className='flex justify-center items-center mb-10'>
                        <hr className='w-[25%] mr-5' />
                        <p className='mr-5 text-[#979797] text-sm'>Or continue with</p>
                        <hr className='w-[25%]' />
                    </div>

                    <div className="login-logos pb-6" style={{display: "flex", justifyContent:"space-evenly", margin:"14px 0 0 0"}}>
                                <div className="fb-login cursor-pointer">
                                    <FontAwesomeIcon icon={faFacebookF} style={{color: "#4267B2", height:"24px"}} /> 
                                </div>
                                <div className="gg-login cursor-pointer">
                                    <FontAwesomeIcon icon={faGoogle} style={{color: "#eac43e", height:"24px"}} /> 
                                </div>
                                <div className="x-login cursor-pointer">
                                    <FontAwesomeIcon icon={faTwitter} style={{color: "#2EADF6", height:"24px"}} />                            </div>
                                <div className="apple-login cursor-pointer">
                                    <FontAwesomeIcon icon={faApple} style={{color: "#000000", height:"24px"}} /> 
                                </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default PopupSignInModal