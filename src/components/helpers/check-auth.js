import api from '../../api';

export default async function () {
    const refreshToken = localStorage.getItem('refreshToken')
    if (refreshToken) {
        const { data } = await api.checkAuth(refreshToken);

        if (data && data.refreshToken) {
            const { refreshToken } = data;
            localStorage.setItem('refreshToken', refreshToken)
            return true;
        }
        return false;
    }
    return false;
}