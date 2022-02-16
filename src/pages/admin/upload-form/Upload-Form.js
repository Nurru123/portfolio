import React from "react";
import { FaFileUpload, FaPlus } from "react-icons/fa";
import './Upload-Form.css';


export function UploadForm({ host, id, img, callback }) {
    const upload = e => {
        e.preventDefault()
        console.log('lol')
        const formData = new FormData(e.target)
        const file = formData.get('upload-image')

        fetch(`${host}/gallery/${id}`, {
            method: 'POST',
            body: formData
        })
        callback(file.name, id)
    }

    return (
        <div>
            <form className='upload-form' onSubmit={upload}>
                {img.url && <img src={img.url} className='preview-img' />}
                <input className='input' type='file' accept=".png, .jpg, .jpeg" name='upload-image' required />
                <button className='form-btn' type='submit'><FaFileUpload className="btn-icon" /></button>
            </form>
        </div>
    )
}