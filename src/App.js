import React from 'react';
// We should use HashRouter for work with gh-pages
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { pages, shared as Wrapper } from './components';
import './app.css';

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          {pages.map(({ path, element }) => (
            <Route exact path={path} element={element} key={path} />
          ))}
        </Routes>
      </Wrapper>
    </Router>
  );
}
