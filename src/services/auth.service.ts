import api from '@/lib/axios';

export const authService = {
  async getProfile() {
    try {
      const response = await api.get('/user');
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  },
  async logout() {
    try {
      await api.post('/logout');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
};
export default authService;
