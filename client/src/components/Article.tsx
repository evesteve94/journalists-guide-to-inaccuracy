import React from 'react';
import { Link } from 'react-router-dom';
import { Article as ArticleType } from '../pages/NewsPage';
import Arthur from '../img/arthur.png';
import Marvin from '../img/marvin.png';
import Zaphod from '../img/zaphod.png';

interface ArticleProps {
  article: ArticleType;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  // Function to format the date as dd-mm-yyyy
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
    <Link className="nav-link" to={`/article/${article.id}`}>
      <div className="article-feed">
        <h3>{article.title}</h3>
        <div className="article-middle">
          <img src={article.imageURL} alt="Generated" className="result-image" />
          <div className='article-info'>
          <p>{article.content.substring(0, 400)}...</p>
            {getFullName(article.character)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Article;
