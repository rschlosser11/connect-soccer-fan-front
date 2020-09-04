import React from 'react';
import { Container, Image, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import audience from '../img/audience-1866738_1920.jpg'
import ball from '../img/soccer-ball.png'

export default function homepage () {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={audience}
                        alt='header'
                    />
                    <Carousel.Caption>
                        <h1>Welcome to Soccer Fan Connect</h1>
                        <h5>A place to connect with fellow fans in the midst of the pandemic.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <p>Since the pandemic, many sporting events have been played behind closed doors and, while fans can usually watch from their homes, the experience is not the same. There's no connecting with fellow fans at a match or in a pub. No way to celebrate victories together or commiserate loses. Now there's Soccer Fan Connect!</p>
            <p>Soccer Fan Connect allows you to begin a chat on a live game, to connect with other fans and get a little bit of the match-day experience back.</p>
            <p>You must <Link to='/signup'>sign up</Link> to participate in the conversation. Enjoy the beautiful game!</p>
        </Container>
    )
}