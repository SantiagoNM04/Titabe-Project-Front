import "./User.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../nav/Nav";

export const User = ({isAuthenticated, onLogOut, handleLogin, handleRegister, userAuth, adminLog}) => {
  const [changeForm, setChangeForm] = useState(false)
  const [titleForm, setTitleForm] = useState('Login')
  const [inputRegister, setInputRegister] = useState(false)
  const [textForgotPassword, setTextForgotPassword] = useState('Forgot Password?')
  const [textNoAccount, setTextNoAccount] = useState(`Don't have an account?`)
  const [buttonForm, setButtonForm] = useState('Register')
  const [onSubmit, setOnSubmit] = useState(false) // Cambia el boton para llamar a la funcion handleLogin o handleRegister.

  const changeComponent = () => {
      setChangeForm(!changeForm);

      if (changeForm === true) {
        setTitleForm('Register')
        setTextForgotPassword('')
        setTextNoAccount(`Already have an account?`)
        setInputRegister(true)
        setButtonForm('Login')
        setOnSubmit(true)
      } else {
        setTitleForm('Login')
        setTextForgotPassword('Forgot Password?')
        setTextNoAccount(`Don't have an account?`)
        setInputRegister(false)
        setButtonForm('Register')
        setOnSubmit(false)
      }
  };


  return (
    <>
      <Nav isAuthenticated={isAuthenticated} onLogOut={onLogOut} userAuth={userAuth} adminLog={adminLog}/>
      <section className="section-container d-flex flex-column justify-content-center">
        <div className="login-section d-flex justify-content-center z-3">
          <div className="login-container d-flex flex-column align-items-center justify-content-center rounded-5">
            <div className="text-white fs-4">
              <p className="text-center">
                Be part of the community of <br />
                TITABE
              </p>
            </div>
            <div className="title-login text-white fs-2 w-100 d-flex justify-content-center align-items-center mb-4">
              <p className="mb-0 fw-bold">{titleForm}</p>
            </div>
            <form className="d-flex flex-column text-white">
                {inputRegister? 
                    <div className="input-container d-flex flex-column">
                        <label className="fw-bold fs-5 mb-1" htmlFor="username">
                        Username
                        </label>
                        <input
                        className="rounded-5 py-2 ps-3"
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        required
                        />
                    </div> : ''}
              <div className="input-container d-flex flex-column">
                <label className="fw-bold mt-3 fs-5 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  className="rounded-5 py-2 ps-3"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-container d-flex flex-column">
                <label className="fw-bold mt-3 fs-5 mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  className="rounded-5 py-2 ps-3"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="d-flex justify-content-end">
                <Link to="" className="text-decoration-none text-white mb-3">
                  <p className="fp-text mt-2 me-3">{textForgotPassword}</p>
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                {onSubmit? 
                    <button
                    className="button-submit rounded-5 px-4 py-2 border-0"
                    onClick={(event) => {
                    handleRegister(event);
                    }}
                    type="submit"
                    >
                        SUBMIT
                    </button>
                : 
                    <button
                    className="button-submit rounded-5 px-4 py-2 border-0"
                    onClick={(event) => {
                        handleLogin(event);
                    }}
                    type="submit"
                    >
                    SUBMIT
                    </button>
                }
              </div>
            </form>
            <div className="text-white d-flex flex-column align-items-center justify-content-center">
              <p className="fp-text mt-4 mb-1">{textNoAccount}</p>
              <button onClick={changeComponent} className="button-logAndReg text-decoration-none text-white px-5 py-1 fw-bold border-0 rounded-5 fs-5">
                {buttonForm}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
