import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL,
});

export default class {
  static getHome = () => api.get('/');
  static getCourses = () => api.get('courses/');
  static getGallery = () => api.get('gallery/');

  static getPosts = () => api.get('posts/');
  static sendPost = (text) => api.post('posts/', { text });

  static signIn = (login, pass) => api.post('login/', { login, pass });
}
