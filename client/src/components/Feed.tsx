import React from 'react';
import Article from './Article';
import { Article as ArticleType } from '../pages/NewsPage';

interface FeedProps {
  articles: ArticleType[];
}

const Feed: React.FC<FeedProps> = ({ articles }) => {
  return (
    <div className="feed">
      {articles.slice().reverse().map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Feed;
