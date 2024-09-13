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
      // return response.data;
      const comments= response.data
      return comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

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
        comment,
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
// const api = new BandSiteApi("0117c33a-1c32-421a-8289-0eb243cee4ea");
const api = new BandSiteApi("923988cd-70d2-49cc-895c-8eb95ae8edf0");
api.getShows();

// Export the instance for use in other files
export default api;
