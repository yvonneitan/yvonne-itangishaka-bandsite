// class BandSiteApi{
//     constructor(apiKey){
//         this.apiKey=apiKey;
//         this.baseUrl="https://unit-2-project-api-25c1595833b2.herokuapp.com/";
//     } 
    
// }

// api_key= "0117c33a-1c32-421a-8289-0eb243cee4ea"

async function getComment(){
    try {
        const response= await axios.get("https://unit-2-project-api-25c1595833b2.herokuapp.com/comments");
        // const response= await axios.get("https://unit-2-project-api-25c1595833b2.herokuapp.com/comments?api_key=0117c33a-1c32-421a-8289-0eb243cee4ea");

        console.log(response.data);
        return response.data;
            
    } catch (error) {
        console.error("Error getting comments",error);
        
    }
}
getComment();
    
