
/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Card } from 'react-bootstrap';

export default function WallNotes() {
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const notes = collection(db, "notes")

    const store = async (e) => {
        e.preventDefault()
        await addDoc(notes, { note: "", title: "" })
        navigate('/WallNotes')
        //console.log(e.target[0].value)
    }*/

    


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
