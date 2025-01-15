import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticle } from '../services/api';
import logo from '../img/logo.png'
import Arthur from '../img/arthur.png';
import Marvin from '../img/marvin.png';
import Zaphod from '../img/zaphod.png';

interface Article {
  id: string;
  title: string;
  content: string;
  character: string;
  topic: string;
  audience: string;
  length: string;
  createdAt: string;
  imageURL: string;
}

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      if (!id) {
        setError('Article ID is missing');
        return;
      }

      try {
        const fetchedArticle = await fetchArticle(id);
        setArticle(fetchedArticle);
      } catch (error) {
        console.error('Error fetching article:', error);
        setError('Failed to load the article. Please try again.');
      }
    };

    loadArticle();
  }, [id]);

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!article) {
    return <div className="loading-message">Loading...</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).split('/').join('-');
  };

  const getFullName = (name: string) => {
    let fullName = ''
    let pic;
    if(name == "Arthur"){
      fullName = "Arthur Dent"; pic = Arthur;
    } 
    if(name == "Zaphod"){
      fullName = "Zaphod Beetlebrox";
      pic = Zaphod;
    } 
    if(name == "Marvin"){
      fullName = "Marvin the Paranoid Android";
      pic = Marvin;
    } 

    return <div style={{ display:"flex", justifyContent:"start", alignItems:"center", gap:"1rem"}}>  <img src={pic} style={{height:"50px", borderRadius:"50%"}}/>     <p>Author: {fullName} </p>     <p style={{justifySelf:"end"}} >Published: {formatDate(article.createdAt)}</p> </div>
  }

  return (
    <main>
      <div className="article-full-view">
        <div className="article-header">
          <h2>{article.title}</h2>
          {getFullName(article.character)}
        </div>
        <div className="article-content">
          <img className="article-image" src={article.imageURL} alt="Generated"/>
          <img className="article-logo" src={logo} alt="Generated"/>
          <p>{article.content}</p>
        </div>
        <div className="article-footer">
          <p>Topic: {article.topic}</p>
          <p>Audience: {article.audience}</p>
        </div>
      </div>

    </main>
  );
};

export default ArticlePage;
