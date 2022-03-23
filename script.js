//Like count

let aboutMeCount = 0;
let fccCount = 0;
let tributePageCount = 0;
let functionsPartOneCount = 0;
let functionsPartTwoCount = 0;
let domCount = 0;
let arrayCount = 0;
let objectsCount = 0;
let featureCount = 0;

let aboutMeLikeCount = document.getElementById("aboutMeLikeCount");
let fccLikeCount = document.getElementById("fccLikeCount");
let tributePageLikeCount = document.getElementById("tributePageLikeCount");
let functionsPartOneLikeCount = document.getElementById("functionsPartOne");
let functionsPartTwoLikeCount = document.getElementById(
  "functionsPartTwoLikeCount"
);
let domLikeCount = document.getElementById("domLikeCount");
let arrayLikeCount = document.getElementById("arrayLikeCount");
let objectsLikeCount = document.getElementById("objectsLikeCount");
let featureLikeCount = document.getElementById("featureLikeCount");

function aboutMeLike() {
  aboutMeCount += 1;
  aboutMeLikeCount.innerHTML = `${aboutMeCount}`;
}

function aboutMeDislike() {
  aboutMeCount -= 1;
  aboutMeLikeCount.innerHTML = `${aboutMeCount}`;
}

function fccLike() {
  fccCount += 1;
  fccLikeCount.innerHTML = `${fccCount}`;
}

function fccDislike() {
  fccCount -= 1;
  fccLikeCount.innerHTML = `${fccCount}`;
}

function tributePageLike() {
  tributePageCount += 1;
  tributePageLikeCount.innerHTML = `${tributePageCount}`;
}

function tributePageDislike() {
  tributePageCount -= 1;
  tributePageLikeCount.innerHTML = `${tributePageCount}`;
}

function functionsPartOneLike() {
  functionsPartOneCount += 1;
  functionsPartOneLikeCount.innerHTML = `${functionsPartOneCount}`;
}

function functionsPartOneDislike() {
  functionsPartOneCount -= 1;
  functionsPartOneLikeCount.innerHTML = `${functionsPartOneCount}`;
}

function functionsPartTwoLike() {
  functionsPartTwoCount += 1;
  functionsPartTwoLikeCount.innerHTML = `${functionsPartTwoCount}`;
}

function functionsPartTwoDislike() {
  functionsPartTwoCount -= 1;
  functionsPartTwoLikeCount.innerHTML = `${functionsPartTwoCount}`;
}

function domLike() {
  domCount += 1;
  domLikeCount.innerHTML = `${domCount}`;
}

function domDislike() {
  domCount -= 1;
  domLikeCount.innerHTML = `${domCount}`;
}

function arrayLike() {
  arrayCount += 1;
  arrayLikeCount.innerHTML = `${arrayCount}`;
}

function arrayDislike() {
  arrayCount -= 1;
  arrayLikeCount.innerHTML = `${arrayCount}`;
}

function objectsLike() {
  objectsCount += 1;
  objectsLikeCount.innerHTML = `${objectsCount}`;
}

function objectsDislike() {
  objectsCount -= 1;
  objectsLikeCount.innerHTML = `${objectsCount}`;
}

function featureLike() {
  featureCount += 1;
  featureLikeCount.innerHTML = `${featureCount}`;
}

function featureDislike() {
  featureCount -= 1;
  featureLikeCount.innerHTML = `${featureCount}`;
}

//Weather feature
let temperature = document.getElementById("temperature");
let weatherDescription = document.getElementById("weather-description");
let iconElement = document.getElementById("weather-icon");

function displayCelciusTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  let descriptionUpper =
    description.charAt(0).toUpperCase() + description.slice(1);
  temperature.innerHTML = `${temp}°C`;
  weatherDescription.innerHTML = `${descriptionUpper}`;
  iconElement.setAttribute(
    `src`,
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;
  let apiKey = `d3da927bc59cf1a6983a5b442fc7678e`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayCelciusTemp);
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

getCurrentLocation();

// Comment box

/*let commentText, wrapDiv;
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    const wrapDiv = document.createElement('div');
    wrapDiv.className = 'wrapper';
    wrapDiv.style.marginLeft = 0;
    commentText = document.getElementById('newComment').value;
    document.getElementById('newComment').value = '';
    textBox.innerHTML = commentText;
    wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
    commentContainer.appendChild(wrapDiv);*/

function addComment() {
  document.getElementById("commentButton").style.display = "none";

  const commentBox = document.createElement("textarea");
  commentBox.id = "commentBox";
  commentBox.style.display = "flex";
  commentBox.placeholder = "What are your thoughts?";
  commentBox.innerHTML = "";
  document.getElementById("comments").appendChild(commentBox);

  const submitComment = document.createElement("button");
  submitComment.id = "submitCommentTwo";
  submitComment.style.marginTop = "1em";
  submitComment.innerHTML = "Comment";
  document.getElementById("comments").appendChild(submitComment);

  submitComment.onclick = function submitComment() {
    let comment = commentBox.value;
    const newComments = document.createElement("p");
    document.getElementById("comments").appendChild(newComments);
    newComments.innerHTML = `${comment}`;
  };
}
