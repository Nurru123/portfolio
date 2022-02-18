import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Overview.css';

const HOST = 'http://localhost:3001';
const mobileSize = 500;

export default function Overview() {

    const [pics, setPics] = useState([]);
    const [mobile, setMobile] = useState(window.innerWidth <= mobileSize);

    const resize = () => {
        setMobile(window.innerWidth <= mobileSize)
    }

    useEffect(() => {
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    })

    useEffect(() => {

        fetch('http://localhost:3001/gallery')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPics(
                    data.map(imgName => ({ url: `${HOST}/gallery/${imgName}` }))
                )
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='overview__main-container'>
            {pics.map((pic, index) => (
                <div className="pic-cover" key={index}>
                    <div className="pic">
                        {!mobile && <Link to={'/gallery'}><img className="pic-item" src={pic.url} /></Link>}
                        {mobile && <img className="pic-item" src={pic.url} />}
                    </div>
                </div>
            ))}

        </div>
    )
}