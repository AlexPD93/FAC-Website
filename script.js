let redditLink = document.getElementById("homepage");
redditLink.addEventListener("click", topOfPage);

function topOfPage() {
  $("html,body").scrollTop(0);
}
