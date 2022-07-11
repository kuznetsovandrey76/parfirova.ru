import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Md from 'react-markdown';
import remarkGfm from 'remark-gfm';

import api from '../../api';

import './post.css';

function PostPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(null);

  const sampleLocation = useLocation();
  const { pathname } = sampleLocation;
  const RE = /\/posts\/?([0-9]+)(?:\/.*)?/i;
  const $matchPostId = pathname.match(RE);

  const [, id] = $matchPostId;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await api.getPost(id);
        setPost(data);
        setIsLoading(false);
      } catch (err) {
        console.warn('Cannot get images from server');
      }
    }
    fetchData();
  }, [id]);

  const postBlock = post ? (
    <Md key='text' remarkPlugins={[remarkGfm]}>
      {post.text}
    </Md>
  ) : null;

  return <div className='post-page'>{postBlock}</div>;
}

export default PostPage;
