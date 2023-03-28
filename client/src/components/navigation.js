import React, { useState, useRef, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "./CartContext";
import logo from "../Assets/logo.png";
import search from "../Assets/search.png";
import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";
import AuthService from "../services/auth.service";

const Nav = (props) => {
  const { currentUser, setCurrentUser } = props;
  const { isCartOpen } = useContext(CartContext);

  const [navColor, updateNavbar] = useState(false);
  const [searchData, setSearchData] = useState("");

  const navigate = useNavigate();

  const pathname = useLocation().pathname;

  const inputRef = useRef(null);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  const homepageHandler = () => {
    navigate("/");
  };

  const searchChangeHandler = (e) => {
    setSearchData(e.target.value);
  };

  const searchClickHandler = (e) => {
    e.preventDefault();
    if (searchData === "") {
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      navigate(`/search?query=${searchData}`);
      inputRef.current.value = "";
      window.scrollTo(0, 0);
    }
  };

  const registerHandler = () => {
    navigate("/register");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    setCurrentUser(AuthService.logout());
    navigate("/");
  };

  const adminHandler = () => {
    navigate("/admin");
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navColor ? "sticky" : null}>
      <img
        className="img-logo"
        src={logo}
        alt="logo"
        onClick={homepageHandler}
      />

      <div className="nav-middle">
        <form onSubmit={searchClickHandler}>
          <input
            type="text"
            placeholder="搜尋車輛 ..."
            onChange={searchChangeHandler}
            ref={inputRef}
          />

          <div className="search-container">
            <img src={search} alt="search" onClick={searchClickHandler} />
          </div>
        </form>
      </div>

      <div className="nav-right">
        <CartIcon />

        {!currentUser && pathname === "/login" && (
          <p onClick={registerHandler}>會員註冊</p>
        )}

        {!currentUser && pathname !== "/login" && (
          <p onClick={loginHandler}>會員登入</p>
        )}

        {currentUser && <p onClick={logoutHandler}>登出</p>}

        {currentUser &&
          currentUser.user.email === process.env.REACT_APP_ADMIN && (
            <p onClick={adminHandler}>管理員專用</p>
          )}
      </div>

      {isCartOpen && <CartDropdown />}
    </nav>
  );
};

export default Nav;
