import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { collection, addDoc } from "@firebase/firestore"
import { db } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom';

export default function ModalShow() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("")
  const navigate = useNavigate()

  const noteCollection = collection(db, "notes")
  const publicaciones = async (e) => {
    e.preventDefault()
    await addDoc(publicaciones, { title: title, note: note })
    navigate('/Note')
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Agregar Nota</h1>
          <form onSubmit={noteCollection}>
            <div className='mb-3'>
              <label className='form-label'>Title</label>
              <imput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className='form-control' />

            </div>
            <div className='mb-3'>
            
              <label className='form-label'>Nota</label>
              <imput
                value={note}
                onChange={(e) => setNote(e.target.value)}
                type="text"
                className='form-control' />

            </div>
            <button type='submit' className= 'btn btn-primary'>publicar</button>

          </form>

        </div>

      </div>

    </div>
  )

}

//render(<Example />);