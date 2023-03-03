import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { collection,getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { async } from '@firebase/util'
const Note = () => {                             
  //configurar los hooks
  const [notes, setNotes] = useState([])
  //referenciar los documentos de firestone
  const publiNotas = collection(db,"notes")
  //funcion para mostrar todos los documentos
  const getNotes = async() => {
    const data = await getDocs(publiNotas)

    //console.log(data.docs)
    setNotes(data.docs.map((doc)=> ({...doc.data(),id:doc.id}))
    )
console.log(notes) 
  }
  //funcion para eliminar un doc
  //usar useeffect
  useEffect( () =>{getNotes()}, [])
  //devolvemos la vista de nuestro componente
  return (
    <div>Note</div>
  )
}

export default Note

/*import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';



export default function Note() {
  const [title, setDescription] = useState('')
  const [note, setStock] = useState('')
  const navigate = useNavigate()

  const notes = collection(db, "notes")

  const store = async (e) => {
      e.preventDefault()
      await addDoc(notes, { note: "", title: "" })
      navigate('/WallNotes')
      //console.log(e.target[0].value)
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group
            //className="mb-3"
              //controlId="exampleForm.ControlTextarea2"
            
                        value={title}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        className='form-control'
                    >
          
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>


            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//render(<Note />);*/