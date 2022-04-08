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
    <Container fluid className='mt-2 mb-5 text-center'>
      {posts.map((post, id) => {
        console.log(JSON.stringify(post.text.replace(/\n/g, '')));
        const md = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
- [ ] todo
- [x] done

A table:

| a | b |
| - | - |
`;
        // return <ReactMarkdown key={id}>{post.text.replace(/\n/g, '').trim()}</ReactMarkdown>;
        return <ReactMarkdown children={md} remarkPlugins={[remarkGfm]} key={id} />;
      })}
      <p>5 класс</p>
      <a href='#' className='d-block mb-2'>
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
      </a>
    </Container>
  );
}

export default FiveGradePage;
