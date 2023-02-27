
import React, { useState } from 'react'
/*import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { Card } from 'react-bootstrap/Card';*/

export default function WallNotes() { <h1>holA</h1>}
    /*const [description, setDescription] = useState('')
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const notes = collection(db, "notes")

    const store = async (e) => {
        e.preventDefault()
        await addDoc(notes, { note: "", title: "" })
        navigate('/WallNotes')
        //console.log(e.target[0].value)
    }

    return (
        //function TextExample() {
        //return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <button type='submit' className='btn btn-primary'>publicar</button>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}*/
    //)}


/*<div className='container'>
    <div className='row'>
        <div className='col'>
            <h1>Create Product</h1>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Stock</label>
                    <input
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        type="number"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    </div>
</div>
)
}
;*/

/*const logout = () => {
    localStorage.clear()
    window.location.reload()
}
return (
    <div>
        <h1>WallNotes</h1>
        <button onClick={logout}>Logout</button>
    </div>
);*/
