import { useEffect, useState } from "react"
import { Form, useNavigate, useParams } from "react-router-dom"
import { db } from "../firebase/firebase"
import { getDoc, updateDoc, doc } from "@firebase/firestore"
const Edit = () => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()



    const update = async (e) => {
        e.preventDefault()
        const noteCollection = doc(db, "notes", id)
        const data = { title: title, note: note }
        await updateDoc(noteCollection, data)
        navigate('/Note')

    }
    const getNotesById = async (id) => {
        const note = await getDoc(doc(db, "notes", id))
        if (note.exists()) {
            setTitle(note.data().title)
            setNote(note.data().note)

        } else {
            console.log("la nota no existe")
        }


    }

    useEffect(() => {
        getNotesById(id)
    }
        , []);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Editar Nota</h1>
                    <form onSubmit={update}>
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
                        <button type='submit' className='btn btn-primary'>Edit</button>

                    </form>

                </div>

            </div>

        </div>
    )
}
export default Edit