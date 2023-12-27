import "./Home.css";
import titabeDesign from "../../assets/titabeDesign.png";
import { Link } from "react-router-dom";
import { Nav } from "../nav/Nav";

export const Home = ({onLogOut, isAuthenticated, userAuth, adminLog}) => {

  return (
    <>
        <main className="vh-100 text-white">
            <Nav isAuthenticated={isAuthenticated} onLogOut={onLogOut} userAuth={userAuth} adminLog={adminLog}/>
            <div>
                <i className="orangeFire bi bi-fire"></i>
            </div>
            <section className="d-flex flex-column h-75 justify-content-center">
                <div className="mt-5 ms-5 mb-2">
                    <h1 className="title fs-3 text-white">Made by <span className="underline-titabe">TITABÉ</span></h1>
                </div>
                <div className="slogan-container ps-5 mt-4 z-1">
                    <p className="fs-xxl">LA SOLUCION PARA</p>
                </div>
                <div className="slogan-container ps-5 mt-4 z-1">
                    <p className="fs-xxl">EL ASADOR</p>
                </div>
                <div className="d-flex ms-5 mt-5">
                    <Link to="/shop" className="button-shop text-decoration-none py-2 px-4 bg-white rounded-5 text-black z-1">Shop Now!</Link>
                </div>
            </section>
            <section className="d-flex w-100 justify-content-end">
                <div className="titabe-container d-flex flex-column w-50 justify-content-center align-items-center position-fixed z-1">
                    <img className="titabe-img" src={titabeDesign} alt="titabe-aside-image" />
                </div>
            </section>
        </main>
    </>
  )
}
