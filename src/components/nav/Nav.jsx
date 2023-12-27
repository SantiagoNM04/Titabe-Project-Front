import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export const Nav = ({isAuthenticated , userAuth, onLogOut, adminLog}) => {
    const [userButton, setUserButton] = useState(false)

    const handleUserButton = () => {
        setUserButton(!userButton);
    };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light z-3 ps-5 w-100 position-fixed top-0">
        <Link to="/" className="navbar-brand fs-2 fw-bold me-5 text-white">TITABÉ</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex gap-3">
                <li className="nav-item fs-5">
                    <Link to="/" className="nav-link text-white">Home</Link>
                </li>
                <li className="nav-item fs-5">
                    <Link to="/gallery" className="nav-link text-white">Gallery</Link>
                </li>
                <li className="nav-item fs-5">
                    <Link to="/shop" className="nav-link text-white">Shop</Link>
                </li>
            </ul>
            {adminLog?
            <div className="d-flex w-100 justify-content-end align-items-center ">
              <p className="text-danger mb-0 fs-4">⚠ YOU ARE IN ADMIN MODE ⚠</p>
            </div>
            : 
              "" }
            {isAuthenticated?
            <div className="d-flex w-100 justify-content-end me-4">
                <div className="authUser-container d-flex flex-column justify-content-end align-items-center rounded-5 px-3 z-3">
                    <div className="d-flex justify-content-end align-items-center">
                        <i className="bi bi-person-fill fs-2 me-2 text-white"></i>
                        <p className="mb-0 me-2">{userAuth}</p>
                        <button onClick={ handleUserButton } className="userOptions-button">
                            {userButton ? 
                            <i className="bi bi-caret-up-fill fs-4 mt-1"></i> 
                            : 
                            <i className="bi bi-caret-down-fill fs-4 mt-1"></i>}
                        </button>
                    </div>
                    {userButton ? 
                    <div className="d-flex mb-3">
                        <button onClick={onLogOut} className="d-flex userOptions-button">
                            <i className="bi bi-box-arrow-right me-2"></i>
                            <p className="mb-0">Log out</p>
                        </button>
                    </div> 
                    : ""}
                </div>
            </div>
            : 
            <div className="d-flex w-100 justify-content-end align-items-center">
                <Link to="/user"><i className="user-icon bi bi-person-fill fs-1 me-4 text-white"></i></Link>
            </div>
            }
        </div>
    </nav>
  )
}
