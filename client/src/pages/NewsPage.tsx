import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../services/api';
import Feed from '../components/Feed';

export interface Article {
  id: string;
  title: string;
  content: string;
  character: string;
  topic: string;
  audience: string;
  length: string;
  createdAt: string; // Add this line
  imageURL: string;
}

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const fetchedArticles = await fetchArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    loadArticles();
  }, []);

  return (
    <main>
      <div className='stars'>
      </div>
      <h1>News Feed</h1>
      <Feed articles={articles} />
    </main>
  );
};

export default NewsPage;