import api from "./band-site-api.js";

const listEl = document.querySelector("#comments-list");

function parseDate(timestamp) {
  if (!timestamp) {
    console.error("Invalid timestamp:", timestamp);
    return new Date();
  }

  return new Date(Number(timestamp));
}
//Render Comments
function renderComment(comment) {

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
  authorEl.innerText = comment.name;

  const dateEl = document.createElement("p");
  dateEl.classList.add("comments__date");
  dateEl.innerText = parseDate(comment.timestamp).toLocaleDateString("en-US");

  headerEl.appendChild(authorEl);
  headerEl.appendChild(dateEl);
  commentsdivEl.appendChild(headerEl);

  const commentEl = document.createElement("p");
  commentEl.classList.add("comments__comment");
  commentEl.innerText = comment.comment;
  commentsdivEl.appendChild(commentEl);

  // Add the Like button and counter
  const likeButton = document.createElement("button");
  likeButton.classList.add("comments__like-button");
  likeButton.innerText = `❤️  ${comment.likes}`;
  
  likeButton.addEventListener("click", async () => {
    try {
      await api.likeComments(comment.id);
      comment.likes += 1;
      likeButton.innerText = `❤️  ${comment.likes}`;
    } catch (error) {
      console.error("Error liking comment", error);
    }
  });

  // Add the Delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("comments__delete-button");
  deleteButton.innerText = "Delete";
  
  deleteButton.addEventListener("click", async () => {
    try {
      await api.deleteComments(comment.id);
      detailsEl.remove();
    } catch (error) {
      console.error("Error deleting comment", error);
    }
  });

  // Append Like and Delete buttons
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("comments__buttons");
  buttonsContainer.appendChild(likeButton);
  buttonsContainer.appendChild(deleteButton);

  commentsdivEl.appendChild(buttonsContainer);

  detailsEl.appendChild(iconEl);
  detailsEl.appendChild(commentsdivEl);

  listEl.appendChild(detailsEl);
}


async function displayComments() {
  listEl.innerText = "";
  try {
    const commentsArray = await api.getComments();

    for (let i = 0; i < commentsArray.length; i++) {
      renderComment(commentsArray[i]);
    
    }
  } catch (error) {
    console.error("Error displaying comments", error);
  }
}

displayComments();


document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.querySelector("#comments-form");

  if (formEl) {
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
  } else {
      console.error("Form element not found.");
  }
});

