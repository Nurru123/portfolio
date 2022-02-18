import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/actions';
import { UploadForm } from './upload-form/Upload-Form';
import { IoTrashSharp } from "react-icons/io5";
import { FaPlus } from 'react-icons/fa';

import './Admin.css';

const HOST = 'http://localhost:3001'

function Admin(props) {
    const navigate = useNavigate()
    const [images, setImage] = useState([{ url: null }])


    useEffect(() => {
        if (images.length === 1 && images[0].url === null) {
            fetch(`${HOST}/gallery`)
                .then(res => res.json())
                .then(data => {
                    if (data.length) {
                        setImage(
                            data.map(imgName => ({ url: `${HOST}/gallery/${imgName}` }))
                        )
                    }
                })
        }
    }, [images])

    useEffect(() => {
        if (!props.auth) {
            localStorage.removeItem('auth')
            navigate('/login')
        }
    }, [props.auth, navigate])

    const logOut = () => {
        props.logOut()
    }

    const loadImage = (fileName, index) => {
        images[index] = { ...images[index], url: `${HOST}/gallery/${fileName}` }
        setImage([...images]);
    }

    const addImage = () => {
        setImage([...images, { url: null }])
    }

    const deleteImg = (i) => {
        fetch(`${HOST}/gallery/${i}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            if (data.length) {
                setImage(
                    data.map(imgName => ({ url: `${HOST}/gallery/${imgName}` }))
                )
            }
        })

    }

    return (
        <div className='admin-inner'>
            <div className='welcome'>
                <div>Welcome!</div>
                {images.map((img, i) => (
                    <div key={i} className='images'>
                        <UploadForm
                            img={img}
                            host={HOST}
                            id={i}
                            callback={loadImage}
                        />
                        <button className='form-btn' onClick={() => deleteImg(i)}><IoTrashSharp className="btn-icon" /></button>
                    </div>
                ))}
                <FaPlus className='form-btn' onClick={addImage} />
                <button className='btn-out submit-btn' onClick={() => logOut()}>Log out</button>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut())
});

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(Admin);