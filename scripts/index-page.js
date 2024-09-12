import api from "./band-site-api.js";

const listEl = document.querySelector("#comments-list");

function parseDate(timestamp) {
  if (!timestamp) {
    console.error("Invalid timestamp:", timestamp);
    return new Date();
  }

  return new Date(Number(timestamp));
}

export async function displayComments() {
  listEl.innerText = "";
  try {
    const commentsArray = await api.getComments();

    commentsArray.sort((a, b) => {
      return parseDate(b.timestamp) - parseDate(a.timestamp);
    });

    for (let i = 0; i < commentsArray.length; i++) {

      const detailsEl = document.createElement("li");
      detailsEl.classList.add("comments__details", "comments__details--border");

      const iconEl = document.createElement("div");
      iconEl.classList.add("comments__icon");

      const commentsdivEl = document.createElement("div");
      commentsdivEl.classList.add("comments__container");

      const headerEl = document.createElement("div");
      headerEl.classList.add("comments__header");

      const authorEl = document.createElement("p");
      authorEl.classList.add("comments__name");
      authorEl.innerText = commentsArray[i].name;

      const dateEl = document.createElement("p");
      dateEl.classList.add("comments__date");
      dateEl.innerText = parseDate(commentsArray[i].timestamp) .toLocaleDateString("en-US");


      headerEl.appendChild(authorEl);
      headerEl.appendChild(dateEl);

      commentsdivEl.appendChild(headerEl);

      const commentEl = document.createElement("p");
      commentEl.classList.add("comments__comment");
      commentEl.innerText = commentsArray[i].comment;
      commentsdivEl.appendChild(commentEl);

      detailsEl.appendChild(iconEl);
      detailsEl.appendChild(commentsdivEl);

      listEl.appendChild(detailsEl);
    }
  } catch (error) {
    console.error("Error displaying comments", error);
  }
}

displayComments();

const formEl = document.querySelector("#comments-form");

formEl.addEventListener("submit", async function (event) {
  event.preventDefault();


  const author = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  const newComment = {
    name: author,
    comment: comment,
  };
  try {
   console.log("I am posting");
    await api.postComment(newComment);
    console.log("Done posting");
    formEl.reset();
    displayComments();
  } catch (error) {
    console.error("Error posting comment", error);
  }
  
});

// const commentsArray = [
// {
//   author: "Victor Pinto",
//   date: "11/02/2023",
//   comment:
//     "This is art. This is inexplicable magic expressed in the purest way,verything that makes up this majestic work deserves reverence.Let us appreciate this for what it is and what it contains.",
// },
// {
//   author: "Christina Cabrera",
//   date: "10/28/2023",
//   comment:
//     "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
// },
// {
//   author: "Isaac Tadesse",
//   date: "10/20/2023",
//   comment:
//     "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
// },
// ];

// Add time functions here

//export the method
//  export function displayComments() {
//   listEl.innerText = "";

//   commentsArray.sort((a, b) => {
//     return parseDate(b.date) - parseDate(a.date);
//   });
//   for (let i = 0; i < commentsArray.length; i++) {

//     const detailsEl = document.createElement("li");
//     detailsEl.classList.add("comments__details", "comments__details--border");

//     const iconEl = document.createElement("div");
//     iconEl.classList.add("comments__icon");

//     const commentsdivEl = document.createElement("div");
//     commentsdivEl.classList.add("comments__container");

//     const headerEl = document.createElement("div");
//     headerEl.classList.add("comments__header");

//     const authorEl = document.createElement("p");
//     authorEl.classList.add("comments__name");
//     authorEl.innerText = commentsArray[i].author;

//     const dateEl = document.createElement("p");
//     dateEl.classList.add("comments__date");
//     dateEl.innerText = commentsArray[i].date;

//     headerEl.appendChild(authorEl);
//     headerEl.appendChild(dateEl);

//     commentsdivEl.appendChild(headerEl);

//     const commentEl = document.createElement("p");
//     commentEl.classList.add("comments__comment");
//     commentEl.innerText = commentsArray[i].comment;
//     commentsdivEl.appendChild(commentEl);

//     detailsEl.appendChild(iconEl);
//     detailsEl.appendChild(commentsdivEl);

//     listEl.appendChild(detailsEl);
//   }
// }

//SingleComment
// const  newCommentsArray=[
//   {

//     author: "Yvonne Itan",
//     date: "12/12/2024",
//     comment:
//       "This is an amazing song. The beats are well co-ordinated. Good job guys!",

//   }
// ]

//   function displaySingleComment(comment) {
//     listEl.innerText = "";
//     newCommentsArray.sort((a, b) => parseDate(b.date) - parseDate(a.date));

//     newCommentsArray.sort((a, b) => {
//     return parseDate(b.date) - parseDate(a.date);
//   });
//   for (let i = 0; i < newCommentsArray.length; i++) {

//     const detailsEl = document.createElement("li");
//     detailsEl.classList.add("comments__details", "comments__details--border");

//     const iconEl = document.createElement("div");
//     iconEl.classList.add("comments__icon");

//     const commentsdivEl = document.createElement("div");
//     commentsdivEl.classList.add("comments__container");

//     const headerEl = document.createElement("div");
//     headerEl.classList.add("comments__header");

//     const authorEl = document.createElement("p");
//     authorEl.classList.add("comments__name");
//     authorEl.innerText = newCommentsArray[i].author;

//     const dateEl = document.createElement("p");
//     dateEl.classList.add("comments__date");
//     dateEl.innerText = newCommentsArray[i].date;

//     headerEl.appendChild(authorEl);
//     headerEl.appendChild(dateEl);

//     commentsdivEl.appendChild(headerEl);

//     const commentEl = document.createElement("p");
//     commentEl.classList.add("comments__comment");
//     commentEl.innerText = newCommentsArray[i].comment;
//     commentsdivEl.appendChild(commentEl);

//     detailsEl.appendChild(iconEl);
//     detailsEl.appendChild(commentsdivEl);

//     listEl.appendChild(detailsEl);
//   }
// }
// displaySingleComment()
