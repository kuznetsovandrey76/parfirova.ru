import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../api';

import './footer.css';

function Footer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.getPosts();
        setPosts(data);
      } catch (err) {
        console.warn('Cannot get posts from server');
      }
    }
    fetchData();
  }, []);

  return (
    <Container fluid className='footer'>
      <Container className='mb-3 p-0'>
        <Row>
          <Col md={6} lg={4}>
            <div className='footer-title'>
              <h5>Ирина Парфирова</h5>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className='footer-title'>
              <h5> Свежие посты </h5>
              {posts.map((post) => {
                return (
                  <Link key={post.id} to={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
                );
              })}
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className='footer-title'>
              <h5> Информация </h5>
              <a href='https://vk.com/parfirova.irina'>Вконтакте</a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='footer-second'>
        ©{new Date().getFullYear()} Парфирова Ирина Андреевна
      </Container>
    </Container>
  );
}

export default Footer;
