//import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import logo from "./calendario.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

export default function SignIn () {
  const { registro, setRegistro} = useState(false);


  
  return (
    <div className="row container p-4">
      <div className="col-md-8">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>

      </div>
      {/*en esta section es el formulario*/}
      <div className="col-md-4">
        <div className="mt-5 ms-5">
        </div>
        


    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  


      </div>
    </div>


    
  );
}


/*async function handleOnClick() {
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
  }*/
/* <h1 className="welcome">Welcome to</h1>
     <h1>ORGANIZE ME</h1>
     <h1 className="mainTitle">organizate para cumplir tus sueños</h1>
     <button className="btn" onClick={handleOnClick}>
       Signin with
       
     </button>*/
