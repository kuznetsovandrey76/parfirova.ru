import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Container } from 'react-bootstrap';

import { WordSvg, ExcelSvg, PpointSvg } from '../../assets/svg';
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
          <Container className='p-0 mb-3'>
            <h3>{post.title}</h3>
            <ReactMarkdown key={id} remarkPlugins={[remarkGfm]}>
              {post.text}
            </ReactMarkdown>
          </Container>
        );
      })}
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
