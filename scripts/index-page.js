/* 

<li class="comments__details comments__details--border">
<div class="comments__icon"></div>
<div class="comments__container">
<div class="comments__header">
    <p class="comments__name">Victor Pinto</p>
    <p class="comments__date">11/02/2023</p>
  </div>
    <p class="comments__comment">
        This is art. This is inexplicable magic expressed in the purest way,
        everything that makes up this majestic work deserves reverence. 
        Let us appreciate this for what it is and what it contains.
    </p>
</div>

</li>  

*/

const commentsArray = [
  {
    author: "Victor Pinto",
    date: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way,verything that makes up this majestic work deserves reverence.Let us appreciate this for what it is and what it contains.",
  },
  {
    author: "Christina Cabrera",
    date: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    author: "Isaac Tadesse",
    date: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const listEl = document.querySelector("#comments-list");

function parseDate(dateString) {
  const [month, day, year] = dateString.split("/");
  return new Date(`${year}-${month}-${day}`);
}

function getCurrentFormattedDate() {
  const date = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
}

function displayComments() {
  listEl.innerText = "";

  commentsArray.sort((a, b) => {
    return parseDate(b.date) - parseDate(a.date);
  });
  for (let i = 0; i < commentsArray.length; i++) {
    console.log(commentsArray[i]);

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
    authorEl.innerText = commentsArray[i].author;

    const dateEl = document.createElement("p");
    dateEl.classList.add("comments__date");
    dateEl.innerText = commentsArray[i].date;

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
}
displayComments();

const formEl = document.querySelector("#comments-form");
formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const author = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  
  const newComment = {
    author: author,
    date: getCurrentFormattedDate(),
    comment: comment,
  };

  commentsArray.push(newComment);

  formEl.reset();

  displayComments();
});

