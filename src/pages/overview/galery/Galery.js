import React from "react";
import { Carousel } from "../../../components/carousel-components/Carousel";
import './Galery.css';

export default class Galery extends React.Component {

    state = {
        pics: []
    }

    componentDidMount() {

        fetch('http://localhost:3001/')
            .then(res => res.json())
            .then(data => {
                this.setState({ pics: data })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { pics } = this.state;

        if (!pics.length)
            return null

        return (
            <div className='galery__main-container'>
                <Carousel infinite>
                    {pics.map((pic) => (
                        <Carousel.Page>
                            <img src={pic} className='item' />
                        </Carousel.Page>
                    ))}
                </Carousel>
            </div>
        )
    }
}