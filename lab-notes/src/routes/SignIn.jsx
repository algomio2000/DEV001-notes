//import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
 //function BasicExample() {
  return (
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
      <Button variant="primary" type="submit" onClick={handleOnClick} >
        GOOGLE
      </Button>
    </Form>
  );
//}


  
        
}
