import axios from 'axios';

class Api {
  constructor(options = {}) {
    this.client = axios.create({
      //   withCredentials: true,
      baseURL: process.env.API_URL,
    });
    this.token = options.token;
    this.refreshToken = options.refreshToken;
    this.refreshRequest = null;

    this.client.interceptors.request.use(
      (config) => {
        if (!this.token) {
          return config;
        }

        const newConfig = {
          headers: {},
          ...config,
        };

        newConfig.headers.Authorization = `Bearer ${this.token}`;
        return newConfig;
      },
      e => Promise.reject(e)
    );

    this.client.interceptors.response.use(
      r => r,
      async error => {
        if (
          !this.refreshToken ||
          error.response.status !== 401 ||
          error.config.retry
        ) {
          throw error;
        }

        if (!this.refreshRequest) {
          this.refreshRequest = this.client.post("/auth/refresh", {
            refreshToken: this.refreshToken,
          });
        }
        const { data } = await this.refreshRequest;
        this.token = data.token;
        this.refreshToken = data.refreshToken;
        const newRequest = {
          ...error.config,
          retry: true,
        };

        console.log('newRequest', newRequest);
        return this.client(newRequest);
      }
    );
  }

  login = async ({ login, password }) => {
    const { data } = await this.client.post("auth/login/", { login, password });

    localStorage.setItem('refreshToken', data.refreshToken)

    this.token = data.token;
    this.refreshToken = data.refreshToken;
  }

  logout = () => {
    this.token = null;
    this.refreshToken = null;
  }

  checkAuth = async (refreshToken) => await this.client.post("/auth/refresh", { refreshToken });

  getUsers = async () => await this.client("users/");

  getLessons = async () => await this.client("lessons/");
  sendLesson = async ({ grade, title, description, active }) =>
    await this.client.post('lessons/', { grade, title, description, active });

  getCourses = async () => await this.client("courses/");

  getGallery = async () => await this.client("gallery/");
  getPosts = async () => await this.client("posts/");
  sendPost = async (text) => await this.client.post('posts/', { text });
}

const api = new Api();

export default api;