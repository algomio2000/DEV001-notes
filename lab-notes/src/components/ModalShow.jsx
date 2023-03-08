import React, { useState } from 'react';
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
    await addDoc(noteCollection, { title: title, note: note })
    navigate('/Note')
  }


  //console.log(publicaciones);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Agregar Nota</h1>
          <form onSubmit={publicaciones}>
            <div className='mb-3'>
              <label className='form-label' >Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className='form-control' id='input1' />

            </div>
            <div className='mb-3'>

              <label className='form-label'>Nota</label>
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                type="text"
                className='form-control' id='input2' />

            </div>
            <button type='submit' className='btn btn-primary'>publicar</button>

          </form>

        </div>

      </div>

    </div>
  )

}

