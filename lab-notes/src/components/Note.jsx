import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, getDoc, deleteDoc, doc } from "@firebase/firestore"
import { db } from '../firebase/firebase'
import { async } from '@firebase/util'
import { Card } from 'react-bootstrap';



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

   
    <div className='contenedor'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>title</Card.Title>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button type='submit' className='btn btn-primary'>Edit</button>
        <button type='submit' className=' m-5 btn btn-primary'>check</button>
      </Card.Body>
    </Card>
    </div>

);
}

export default Note

