import api from '../../api';

export default async function () {
  const refreshToken = localStorage.getItem('refreshToken');
  if (refreshToken) {
    const isAuth = await api.checkAuth(refreshToken);
    return isAuth;
  }
  return false;
}
