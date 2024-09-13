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
      const comments = response.data;
      return comments.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
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
      return null;
    }
  }
  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}shows?api_key=${this.apiKey}`
      );
      console.log("These are the shows:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error getting shows", error);
      return [];
    }
  }
}
// Initialize your API class with the API key

const api = new BandSiteApi("5aff78d3-787e-4a59-866d-a60127fe6cd5");
api.getShows();

// Export the instance for use in other files
export default api;
