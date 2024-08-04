import React from "react";
import logo from "../assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faQrcode,
  faExpand,
  faUser,
  faCartShopping,
  faBars,
  faChevronDown,
  faClipboardList,
  faCoins,
  faMessage,
  faCreditCard,
  faHeart,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Navbar.css";
import PopupSignInModal from "./Signup-Login-page/PopupSignInModal";

const Navbar = () => {
  const signInDropDown = [
    {
      id: 1,
      icon: faClipboardList,
      content: "My Orders",
    },
    {
      id: 2,
      icon: faCoins,
      content: "My Coins",
    },
    {
      id: 3,
      icon: faMessage,
      content: "Message Center",
    },
    {
      id: 4,
      icon: faCreditCard,
      content: "Payment",
    },
    {
      id: 5,
      icon: faHeart,
      content: "Wish List",
    },
    {
      id: 6,
      icon: faTicket,
      content: "My Coupons",
    },
  ];

  const [showSignInModal, setShowSignInModal] = useState(false)

  const handleSignIn = () => {
    return setShowSignInModal(true)
  }
  return (
    <>
    <div className="nav-container">
      <div className="top-bar">
        <div className="logo">
          <img src={logo} alt="AliExpress logo" />
        </div>

        <div className="search-bar">
          <div className="search-input">
            <input type="text" placeholder="Search products, brands and more" />
            <FontAwesomeIcon icon={faExpand} style={{ color: "#ffffff" }} />
            <button>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </div>

        <div className="dowload-app">
          <div className="qrImg">
            <FontAwesomeIcon icon={faQrcode} style={{ color: "#ffffff" }} />
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
          <div className="shipping set">
            <p>Ship to</p>
            <p>United States</p>
          </div>
        </div>

        <div className="login relative ">
          <div className="user">
            <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} />
          </div>

          <div className="username set group ">
            <p>Welcome</p>
            <p>
              <strong>Sign in / Register </strong>
            </p>
            <div className="userProfile h-96 bg-white rounded-xl shadow-xl flex absolute top-0 mt-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
              

              
              <ul className=" p-4 min-w-[260px] h-full overflow-auto items-center justify-center ">
                
                  <button onClick={handleSignIn} className="text-white  text-xl mt-2 bg-black h-[48px] px-[36px] py-[12px] rounded-full font-semibold w-full">Sign-In</button>
                <p onClick={handleSignIn} className="text-[#1919197f] text-center mt-2 mb-2 cursor-pointer">Register</p>

                
                
                <hr className="w-[90%] m-auto " />
                {signInDropDown.map((item) => (
                  <li
                    key={item.id}
                    className="text-black p-2 m-4 cursor-pointer flex items-center hover:text-[#FD384F] hover:bg-[#ffeaea5e]"
                  >
                    <FontAwesomeIcon className="mx-4" icon={item.icon} />
                    <a href="#">{item.content}</a>
                  </li>
                ))}
                <hr className="w-[90%] m-auto " />
              </ul>

            </div>
          </div>
        </div>

        <div className="cart">
          <div className="cart-svg">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#ffffff" }}
            />
          </div>
          <div className="count set">
            <div
              className="bg-white"
              style={{
                color: "black",
                borderRadius: "10px 10px 5px 10px",
                padding: "0 7px",
              }}
            >
              {" "}
              0{" "}
            </div>
            <p>cart</p>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div
          className="categories"
          style={{
            padding: "10px 15px",
            marginBottom: "10px",
            borderRadius: "20px",
          }}
        >
          <div className="category-dropdown">
            <div className="category-icon">
              <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
            </div>
            <p className="category-text" style={{ paddingRight: "20px" }}>
              All Categories
            </p>
            <div className="arrow-icon">
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: "#ffffff" }}
              />
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

        <div className="bottombar-list" style={{ width: "70vw" }}>
          <strong>
            <li>
              <a href="" style={{ color: "#FD384F" }}>
                From $0.99
              </a>
            </li>
          </strong>
          <li>
            <a href="">Welcome deal</a>
          </li>
          <li>
            <a href="">First come 50% off</a>
          </li>
          <li>
            <a href="">Choice</a>
          </li>
          <li>
            <a href="">Ship from US</a>
          </li>
          <li>
            <a href="">Wigs</a>
          </li>
          <li>
            <a href="">Super Deals</a>
          </li>
          <li>
            <a href="">AliExpress Business</a>
          </li>
          <li>
            <a href="">Furniture</a>
          </li>
          <li>
            <a href="">Beauty & Health</a>
          </li>
          <li>
            <a href="" style={{ marginRight: "05px" }}>
              more
            </a>
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "#ffffff", cursor: "pointer" }}
            />
          </li>
        </div>
      </div>
        

      
    </div>
      {showSignInModal && <PopupSignInModal onClose={()=>setShowSignInModal(false) } />}
    </>
  );
};

export default Navbar;