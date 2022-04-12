import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Container, Card } from 'react-bootstrap';

// import { WordSvg, ExcelSvg, PpointSvg } from '../../assets/svg';
import Api from '../../api';

function FiveGradePage() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    try {
      const response = await Api.getPosts();
      const { data } = response;
      setPosts(data);
    } catch (err) {
      console.warn('Cannot get images from server');
    }
  }, []);

  return (
    <Container fluid className='mt-2 mb-5'>
      <h1>5 класс</h1>
      <hr />
      {posts.map((post, id) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              {/*<Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>*/}
              <Card.Text>
                <ReactMarkdown key={id} remarkPlugins={[remarkGfm]}>
                  {post.text}
                </ReactMarkdown>
              </Card.Text>
              {/*<Card.Link href='#'>Card Link</Card.Link>*/}
              {/*<Card.Link href='#'>Another Link</Card.Link>*/}
            </Card.Body>
          </Card>
          // <Container className='p-0 mb-3'>
          //   <h3>{post.title}</h3>
          //   <ReactMarkdown key={id} remarkPlugins={[remarkGfm]}>
          //     {post.text}
          //   </ReactMarkdown>
          // </Container>
        );
      })}
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </Card.Text>
          <Card.Link href='#'>Card Link</Card.Link>
          <Card.Link href='#'>Another Link</Card.Link>
        </Card.Body>
      </Card>
      {/* <a href='#' className='d-block mb-2'>
        <img src={WordSvg} className='me-2' style={{ width: '30px' }} />
        <span>Урок 1</span>
      </a>
      <a href='#' className='d-block mb-2'>
        <img src={ExcelSvg} className='me-2' style={{ width: '30px' }} />
        <span>Урок 2</span>
      </a>
      <a href='#' className='d-block mb-2'>
        <img src={PpointSvg} className='me-2' style={{ width: '30px' }} />
        <span>Урок 3</span>
      </a> */}
    </Container>
  );
}

export default FiveGradePage;
