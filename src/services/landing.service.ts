import api from '@/lib/axios';

export const landingService = {
  async getStats() {
    try {
      const response = await api.get('/landing/stats');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch stats:', error);
      return null;
    }
  },
  async getNews() {
    try {
      const response = await api.get('/landing/news');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch news:', error);
      return [];
    }
  }
};
export default landingService;
