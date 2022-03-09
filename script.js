let count = 0;

let likeCount = document.getElementById("likeCount");
let likeButton = document.getElementById("likeImageButton");
let dislikeButton = document.getElementById("dislikeImageButton");

function like(event) {
  console.log(event);
  count += 1;
  likeCount.innerHTML = `${count}`;
}

function dislike() {
  count -= 1;
  likeCount.innerHTML = `${count}`;
}
