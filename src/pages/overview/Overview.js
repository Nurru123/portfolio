import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Overview.css';

export default function Overview() {

    const [pics, setPics] = useState([]);

    fetch('http://localhost:3001/')
        .then(res => res.json())
        .then(data => setPics(data))
        .catch(err => console.log(err))



    return (
        <div className='overview__main-container'>

            {pics.map((pic) => (
                <div className="pic-cover">
                    <div className="pic">
                        <Link to={'/galery'}><img className="pic-item" src={pic} /></Link>
                    </div>
                </div>
            ))}

        </div>
    )
}