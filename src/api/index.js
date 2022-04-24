import axios from 'axios';

class Api {
  constructor() {
    this.client = axios.create({
      withCredentials: true, // ??
      baseURL: process.env.API_URL,
    });
    this.token = null;
    // this.client.interceptors.request.use(
    //   (config) => {
    //     if (!this.token) {
    //       return config;
    //     }

    //     const newConfig = {
    //       headers: {},
    //       ...config,
    //     };

    //     newConfig.headers.Authorization = `Bearer ${this.token}`;
    //     return newConfig;
    //   },
    //   (e) => Promise.reject(e)
    // );

    //   this.client.interceptors.response.use(
    //     (r) => r,
    //     async (error) => {
    //       const { data } = await this.client.post('/auth/refresh', {
    //         refreshToken: localStorage.getItem('refreshToken'),
    //       });
    //       if (!data) {
    //         localStorage.removeItem('refreshToken');
    //         return;
    //       }
    //       this.token = data.token;
    //       localStorage.setItem('refreshToken', data.refreshToken);
    //     }
    //   );
  }

  login = async ({ login, password }) => {
    const { data } = await this.client.post('auth/login/', { login, password });
    if (!data) return false;

    this.token = data.token;
    localStorage.setItem('refreshToken', data.refreshToken);
    return true;
  };

  logout = () => {
    this.token = null;
    localStorage.removeItem('refreshToken');
    window.location.reload();
  };

  checkAuth = async (refreshToken) => {
    const { data } = await this.client.post('/auth/refresh', { refreshToken });
    if (!data) {
      localStorage.removeItem('refreshToken');
      return false;
    }

    this.token = data.token;
    localStorage.setItem('refreshToken', data.refreshToken);

    return true;
  };

  getUsers = async () => await this.client('users/');

  getLessons = async () => await this.client('lessons/');
  sendLesson = async ({ grade, title, description, active }) =>
    await this.client.post('lessons/', { grade, title, description, active });

  getCourses = async () => await this.client('courses/');

  getGallery = async () => await this.client('gallery/');
  testGallery = async (file) => {
    console.log(file);
    await this.client.post('gallery/', file, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  };

  getPosts = async () => await this.client('posts/');
  sendPost = async (text) => await this.client.post('posts/', { text });
}

const api = new Api();

export default api;
