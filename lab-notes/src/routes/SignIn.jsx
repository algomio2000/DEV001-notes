//import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import logoGoogle from "../imagenes"
import logoCalendario from "../imagenes"
export default function SingIn() {


    async function handleOnClick() {
        const googleProvider = new GoogleAuthProvider();
        await signInWhiteGoogle(googleProvider);
    }
    async function signInWhiteGoogle(googleProvider) {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

  return (
   
        <>
          <h1 className="welcome">Welcome to</h1>
          <img className="logo" src={logoCalendario} alt="ORGANIZE ME" />
          <h1 className="mainTitle">organizate para cumplir tus sueños</h1>
          <button className="btn" onClick={handleOnClick}>
            Signin with
            <img
              className="googleIcon"
              src={logoGoogle}
              alt="google logo"
            />
          </button>
        </>
      );
    }