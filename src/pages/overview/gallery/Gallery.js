
import React, { useEffect, useState } from "react";
import { Carousel } from "../../../components/carousel-components/Carousel";
import './Gallery.css';

const HOST = 'http://localhost:3001';

export default function Galery() {
    const [pics, setPics] = useState([]);

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

    if (!pics.length)
        return null

    return (
        <>
            <div className='galery__main-container'>
                <Carousel infinite>
                    {pics.map((pic) => (
                        <Carousel.Page>
                            <img src={pic.url} className='item' alt="carousel" />
                        </Carousel.Page>
                    ))}
                </Carousel>
            </div>
        </>
    )
}
