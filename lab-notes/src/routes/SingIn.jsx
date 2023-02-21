import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.js";

export default function SingIn() {
    function handleOnClick() {
        const googleProvider = new GoogleAuthProvider();
    }
    async function signInWhiteGoogle(googleProvider) {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            //console.log(res);
        } catch (error) {
            //console.error(error);
        }
    }

    return (<div>
        <button onClick={handleOnClick}>Login with google</button>
    </div>);
};