import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createArticle } from '../services/api';

// Import the character images
import marvinImg from '../img/marvin-btn.png';
import arthurImg from '../img/arthur-btn.png';
import zaphodImg from '../img/zaphod-btn.png';
import loading from '../img/loading.png'

interface ArticleRequest {
  topic: string;
  audience: string;
  character: "Marvin" | "Arthur" | "Zaphod";
  length: "short" | "medium" | "long";
}

interface ArticleResponse {
  title: string;
  content: string;
  imageURL: string;
  id: string;
}

const GenerateArticlePage: React.FC = () => {
  const [articleRequest, setArticleRequest] = useState<ArticleRequest>({
    topic: '',
    audience: '',
    character: 'Marvin',
    length: 'short',
  });

  const [generatedArticle, setGeneratedArticle] = useState<ArticleResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setArticleRequest({ ...articleRequest, [name]: value });
  };

  const handleButtonClick = (name: string, value: string) => {
    setArticleRequest({ ...articleRequest, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const generatedArticle = await createArticle({
        topic: articleRequest.topic,
        audience: articleRequest.audience,
        character: articleRequest.character,
        length: articleRequest.length,
      });
      
      // Navigate to the new article's page
      navigate(`/article/${generatedArticle.id}`);
    } catch (error) {
      console.error('Error generating article:', error);
      setError('An error occurred while generating the article. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Create an object to map character names to their images
  const characterImages = {
    Marvin: marvinImg,
    Arthur: arthurImg,
    Zaphod: zaphodImg,
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <main>
          <h1 className="title">Content Generator</h1>
          {isLoading ? 
          <div className='loading-div'>
            <img src={loading} className='loading-icon'/>
            <h3 style={{textAlign: "center"}}>Loading...</h3>
            <p style={{color:"rgb(96, 165, 250)"}}>The robots are creating your nonsense</p>
          </div> :
          <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="topic"
            value={articleRequest.topic}
            onChange={handleInputChange}
            placeholder="Topic"
            required
            className="input-field"
          />
          <input
            type="text"
            name="audience"
            value={articleRequest.audience}
            onChange={handleInputChange}
            placeholder="Audience"
            required
            className="input-field"
          />
          <div className="button-group">
            <label>Character:</label>
            <div className="character-buttons">
              {['Marvin', 'Arthur', 'Zaphod'].map((char) => (
                <button
                  key={char}
                  type="button"
                  onClick={() => handleButtonClick('character', char)}
                  className={`option-button character-button ${articleRequest.character === char ? 'active' : ''}`}
                >
                  <img 
                    src={characterImages[char as keyof typeof characterImages]} 
                    alt={char} 
                    className="character-image"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="button-group">
            <label>Length:</label>
            <div className="length-buttons">
              {['short', 'medium', 'long'].map((len) => (
                <button
                  key={len}
                  type="button"
                  onClick={() => handleButtonClick('length', len)}
                  className={`option-button ${articleRequest.length === len ? 'active' : ''}`}
                >
                  {len.charAt(0).toUpperCase() + len.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? "Generating..." : "Generate Content"}
          </button>
        </form>}
        </main>
      </div>
    </div>
  );
};

export default GenerateArticlePage;
