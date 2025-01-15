import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'

import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import GenerateArticlePage from './pages/GenerateArticlePage';
import ArticlePage from './pages/ArticlePage';
import ImagePage from './pages/ImagePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/news-feed" element={<NewsPage />} />
          <Route path="/generate-article" element={<GenerateArticlePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/image" element={<ImagePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
