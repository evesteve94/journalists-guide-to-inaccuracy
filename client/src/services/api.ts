import axios from 'axios';

const API_BASE_URL = 'http://localhost:3004'; // Update this to match your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchArticles = async () => {
  const response = await api.get('/articles');
  return response.data;
};

export const fetchArticle = async (id: string) => {
  const response = await api.get(`/articles/${id}`);
  return response.data;
};

export const createArticle = async (articleData: any) => {
  const response = await api.post('/articles/generate-content', articleData);
  return response.data;
};

export const updateArticle = async (id: string, articleData: any) => {
  const response = await api.put(`/articles/${id}`, articleData);
  return response.data;
};

export const deleteArticle = async (id: string) => {
  await api.delete(`/articles/${id}`);
};

export const generateImage = async (prompt: string) => {
  const response = await api.post('/images/generate-image', { prompt });
  return response.data;
};