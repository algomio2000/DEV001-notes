
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import google from "./logoGoogle.png"
import logo from "./calendario.png"
import { useNavigate } from 'react-router-dom';

export default function SingIn() {
  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWhiteGoogle(googleProvider);
  }
  const navigate = useNavigate()
  async function signInWhiteGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
    navigate('/Note')
  }

  return (
    <div className="contenedor">
      <div className="container1">
        <div className="encabezado">
          <img
            className="logo"
            src={logo}
            alt="calendarDay" />
             </div>
            <div className="title">
            <h1>ORGANIZE ME</h1>
          
        </div>
       
        
        <div className="subtitle" >
          <h2 >Organizate para cumplir tus sueños</h2>
        </div>
      </div>
      <div className="container2">
        <h1>BIENVENIDO</h1>
        <h2>Inicia sesion</h2>
       
        <button className="btn" onClick={handleOnClick}>

          <img
            className="googleIcon"
            src={google}
            alt="google logo"
          />
        </button>


      </div>
    </div>





  );
};
