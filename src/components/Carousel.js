import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/rosa.svg';
import img2 from '../img/rojoo.svg';
import img3 from '../img/verdee.svg';
import img4 from '../img/amarillo.svg';
import img_rojo from '../img/rojo.jpg';
import img_verde from '../img/verde.jpg';
import img_azul from '../img/azull.svg';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <a href='https://linkedin.com/in/melvin-franco-pedraza' target='_blank'>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt=''
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://linkedin.com/in/melvin-franco-pedraza' target='_blank'>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt=''
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://linkedin.com/in/melvin-franco-pedraza' target='_blank'>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt=''
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://linkedin.com/in/melvin-franco-pedraza' target='_blank'>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt=''
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://linkedin.com/in/melvin-franco-pedraza' target='_blank'>
                        <img
                            className="d-block w-100"
                            src={img_azul}
                            alt=''
                        />
                    </a>
                </Carousel.Item>
            </Carousel>

        );
    }
}

export default MyCarousel;
