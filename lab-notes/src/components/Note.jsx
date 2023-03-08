import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, getDoc, deleteDoc, doc } from "@firebase/firestore"
import { db } from '../firebase/firebase'



const Note = () => {
  //configurar los hooks
  const [notes, setNotes] = useState([])
  //referenciar los documentos de firestone
  const publiNotas = collection(db, "notes")
  //funcion para mostrar todos los documentos
  const getNotes = async () => {
    const data = await getDocs(publiNotas)

    //console.log(data.docs)
    setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    )
    console.log(notes)
  }
  //funcion para eliminar un doc
  const deleteNote = async (id) => {
    const noteDoc = doc(db, "notes", id)
    await deleteDoc(noteDoc)
    getNotes()
  }
  //usar useeffect
  useEffect(() => { getNotes() }, [])
  //devolvemos la vista de nuestro componente
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='d-grid gap-2'>
              <Link to="/ModalShow" className='btn btn-secondary mt-2 mb-2'>publicar</Link>
            </div>
            <table className='table table-dark table-hover'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Note</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {notes.map((note) => (
                  <tr key={note.id}>
                    <td>{note.title}</td>
                    <td>{note.note}</td>
                    <td>
                      <Link to={`/Edit/${note.id}`} className="btn btn-primary">Edit</Link>
                      <button onClick={() => { deleteNote(note.id) }} className="btn btn-primary">Delete</button>
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  );
}

export default Note

