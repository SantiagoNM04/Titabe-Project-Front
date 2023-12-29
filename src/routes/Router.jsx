import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home"
import { User } from "../components/user/User";
import { Gallery } from "../components/gallery/Gallery";
import { Shop } from "../components/shop/Shop";

import { useState, useEffect } from "react";
import axios from "axios";

export const Router = () => {

  const [products, setProducts] = useState([]);
  const [isAuthenticated, setAuthenticated] = useState(false); // Comprueba si esta validado el usuario.
  const [userAuth, setUserAuth] = useState(''); // Trae el usuario de la database para mostrarlo en el Nav.
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4300/shop');
        const data = response.data;
        setProducts(data)
      
      } catch (error) {
        console.error('Error al obtener productos', error);
      }
    };
    getProducts();
  },[])

  // Cuando el usuario se quiere registrar se ejecuta esta funcion.
  const handleRegister = async(event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await axios.post('http://localhost:4300/user/register', { username, email, password });
      console.log('>> User registered successfully');
      // Crear funcion que muestre que el usuario fue registrado con exito
    
    } catch (error) {
      console.error('>> Failed to register the user: ', error);
    }
  };
  
  // Cuando el usuario se quiere loguear se ejecuta esta funcion.
  const handleLogin = async(event) => {
    event.preventDefault();

    // Obtenemos el valor de los input.
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envio de informacion para validar el Log in.
    try {
      const response = await axios.post('http://localhost:4300/user/login', { email, password });

      if (response.status === 200) {
        setAuthenticated(true);
        setUserAuth(response.data)

        if (userAuth === 'Santiago') {
          setAdmin(true)
          console.log(">> Admin logged in")
          console.log(admin)
        }
      }

    } catch (error) {
      console.error('>> Error in the validation:');
    }
  };

  // Cuando el usuario cierra sesion se ejecuta esta funcion.
  const onLogOut = async() => {
    setAuthenticated(false);
    setAdmin(false);
    console.log('>> User logged Out')
    console.log(admin)
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onLogOut={onLogOut} isAuthenticated={isAuthenticated} userAuth={userAuth} adminLog={admin} />} />
        <Route path="/user" element={<User onLogOut={onLogOut} isAuthenticated={isAuthenticated} handleLogin={handleLogin} handleRegister={handleRegister} userAuth={userAuth} adminLog={admin} />} />
        <Route path="/gallery" element={<Gallery onLogOut={onLogOut} isAuthenticated={isAuthenticated} userAuth={userAuth} adminLog={admin} />} />
        <Route path="/shop" element={<Shop onLogOut={onLogOut} isAuthenticated={isAuthenticated} infoProducts={products} userAuth={userAuth} adminLog={admin}/>} />
      </Routes>
    </BrowserRouter>
  );
};