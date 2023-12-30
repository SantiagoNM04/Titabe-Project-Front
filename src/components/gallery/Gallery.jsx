import './Gallery.css'
import { Nav } from "../nav/Nav";
import cardTitabeOne from "./GalleryImg/cardTitabe.jpg";
import cardTitabeTwo from "./GalleryImg/cardTitabeDos.jpg";
import imgFood from "./GalleryImg/foodTitabe.jpg";
import imgWood from "./GalleryImg/woodTitabe.jpg";


export const Gallery = ({isAuthenticated, onLogOut, userAuth, adminLog}) => {
  return (
    <>
        <Nav isAuthenticated={isAuthenticated} onLogOut={onLogOut} userAuth={userAuth} adminLog={adminLog}/>
        <section className='d-flex mt-5 justify-content-center gap-5'>
          <div className='color-bar'></div>
          <section>
            <div className='card-container d-flex flex-column h-100 justify-content-center align-items-center'>
              <img className='mt-5 w-75 rounded-5' src={imgFood} alt="" />
              <img className='mt-5 w-50' src={cardTitabeTwo} alt="" />
            </div>
          </section>
          <div className='color-bar mx-5'></div>

          <div className='color-bar mx-5'></div>
          <section>
            <div className='card-container d-flex flex-column h-100 justify-content-center align-items-center'>
              <img className='mt-5 w-50' src={cardTitabeOne} alt="" />
              <img className='mt-5 w-75 rounded-5' src={imgWood} alt="" />
            </div>
          </section>
          <div className='color-bar'></div>
        </section>
    </>
  )
}
