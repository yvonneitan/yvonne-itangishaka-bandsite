class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }

  // get comments from api
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
  // Post a new comment to api
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
  // Get shows from api
  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("Error getting shows", error);
      return [];
    }
  }
  // Like comments
  async likeComments(likeCommentId) {
    try {
      const response = await axios.put(
        `${this.baseUrl}comments/${likeCommentId}/like?api_key=${this.apiKey}`);
      console.log("Likes:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to like comment", error);
    }
  }
// Delete comments
  async deleteComments(deleteCommentId) {
    try {
      const response = await axios.delete(
        `${this.baseUrl}comments/${deleteCommentId}?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to delete comment", error);
    }
  }
}
// Initialize your API class with the API key

const api = new BandSiteApi("130f7e6c-ffe0-4b34-be64-bbfe7d92cffb");

// Export the instance for use in other files
export default api;
