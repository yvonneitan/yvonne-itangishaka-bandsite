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
    await api.postComment(newComment);
    formEl.reset();
    displayComments();
  } catch (error) {
    console.error("Error posting comment", error);
  }
  
});

