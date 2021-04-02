const { response } = require("express");

const newCommentHandler = async (event) => {
  const comment = document.querySelector("#comment").Value.trim();
  const path = window.location.pathname.split("/");
  const post_id = path[2];

  if (comment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment, post_id }),
      header: { "Content-Type": "application/json" },
    });
  }
  if (response.ok) {
    console.log(JSON.stringify({ comment, post_id }));
  } else {
    alert("Failed to create post");
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);
