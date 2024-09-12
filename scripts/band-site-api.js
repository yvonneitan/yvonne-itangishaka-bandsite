class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }
  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("Error getting comments", error);
      return [];
    }
  }
  // Post a new comment
  async postComment(comment) {
    try {
      const response = await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        comment
      );
      return response.data;
    } catch (error) {
      console.error("Error posting comment", error);
      return null;
    }
  }
}
// Initialize your API class with the API key
const api = new BandSiteApi("0117c33a-1c32-421a-8289-0eb243cee4ea");

// Export the instance for use in other files
export default api;
