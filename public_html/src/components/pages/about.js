import React, { useEffect, useRef, useState } from 'react';
// import { Carousel, Container } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { TweenMax } from 'gsap';
import images from '../../assets/images';

function AboutPage() {
  let logoContainer = useRef(null);
  // let logoTween = useRef(null);

  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    // logoTween = new TimelineLite({ paused: true })
    //   .to(logoContainer, 2, { x: 500 })
    //   .to(logoContainer, 1, { rotation: 360, transformOrigin: 'center' });

    // TweenMax.to(logoContainer, 5, { opacity: 1, y: 0, easy: Power3.easeOut });
    setAnimation(
      TweenMax.to(logoContainer, 10, {
        rotation: 360,
        repeat: -1,
      }).pause()
    );
  }, []);

  return (
    <Container fluid>
      <img
        src={images.slide}
        style={{ height: '150px', opacity: 1 }}
        className='App-logo'
        ref={(el) => {
          logoContainer = el;
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
      {/* <div>
        <button type='button' className='btn gsap-btn' onClick={() => logoTween.play()}>
          Play
        </button>
        <button type='button' className='btn gsap-btn' onClick={() => logoTween.pause()}>
          Pause
        </button>
        <button type='button' className='btn gsap-btn' onClick={() => logoTween.reverse()}>
          Reverse
        </button>
        <button type='button' className='btn gsap-btn' onClick={() => logoTween.restart()}>
          Restart
        </button>
      </div> */}

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
