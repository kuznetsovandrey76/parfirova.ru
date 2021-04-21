import React, { useEffect, useRef, useState } from 'react';
// import { Carousel, Container } from 'react-bootstrap';
import { Container, Card } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import { TweenMax, TimelineLite, TweenLite } from 'gsap';
import { Controls, PlayState, Tween } from 'react-gsap';
import YouTube from 'react-youtube';
import images from '../../assets/images';

// https://greensock.com/react/

function AboutPage() {
  let element = useRef(null);

  const [animation, setAnimation] = useState(null);

  const opts = {
    height: '300px',
    width: '100%',
    playerVars: {
      controls: 0,
      disablekb: 1,
      autoplay: 0,
    },
  };

  useEffect(() => {
    // #1 Rotate
    // setAnimation(
    //   TweenMax.to(element, 10, {
    //     rotation: 360,
    //     repeat: -1,
    //   }).pause()
    // );
    // #2 Move
    setAnimation(TweenLite.to(element, 1, { x: 100, y: -100 }).pause());
  }, []);

  return (
    <Container fluid>
      <Card style={{ width: '50%', padding: '1rem', margin: '0 auto' }}>
        <YouTube videoId='PKsSSvp5ZSM' opts={opts} />
        <Card.Body style={{ padding: 0 }}>
          <Card.Title>Парфирова Ирина Андреевна</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </Card.Text>
        </Card.Body>
      </Card>

      <img
        src={images.slide}
        style={{ height: '150px', opacity: 1 }}
        className='App-logo'
        ref={(el) => {
          element = el;
        }}
      />
      <div>
        <button type='button' onClick={() => animation.play()}>
          Play
        </button>
        <button type='button' onClick={() => animation.pause()}>
          Pause
        </button>
        <button type='button' onClick={() => animation.reverse()}>
          Reverse
        </button>
      </div>

      <Controls playState={PlayState.stop}>
        <Tween to={{ x: '200px', rotation: 180 }} duration={2} ease='back.out(1.7)'>
          <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
        </Tween>
      </Controls>
      {/* <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={images.slide} alt='First slide' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={images.slide} alt='Second slide' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={images.slide} alt='Third slide' />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </Container>
  );
}

export default AboutPage;
