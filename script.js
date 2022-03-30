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
  let timeApiKey = `LOVZZS8UH5RS`;
  let timeURL = `http://api.timezonedb.com/v2.1/get-time-zone?key=${timeApiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayCelciusTemp);
  axios.get(`${timeURL}`).then(showLiveTime);
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

getCurrentLocation();

// Comment box

let time;
let zoneName;

function addComment(element) {
  const boxContainer = element.parentNode.parentNode.parentNode;
  const commentContainer = element.parentNode;
  commentContainer.classList.add("comment-container-after-click");

  const commentBox = document.createElement("textarea");
  commentBox.classList.add("comment-box-after-click");
  commentBox.placeholder = "What are your thoughts?";
  commentBox.innerHTML = "";

  const submitComment = document.createElement("button");
  submitComment.classList.add("submit-comment-after-click");
  submitComment.innerHTML = "Comment";

  commentContainer.append(commentBox, submitComment);

  submitComment.onclick = function postComment() {
    let comment = commentBox.value;
    const commentBoxContainer = document.createElement("div");
    commentBoxContainer.classList.add("comment-box-container");
    const newComments = document.createElement("p");
    newComments.classList.add("comment-boxes");
    boxContainer.appendChild(commentBoxContainer);
    boxContainer.appendChild(newComments);
    commentBoxContainer.innerHTML = `You posted: @${time} ${zoneName} `;
    newComments.innerHTML = `${comment}`;
    commentBox.value = "";
  };
}

function comment(event) {
  if (event.target.classList.value === "comment-button") {
    const commentButton = event.target;
    commentButton.style.display = "none";

    const commentIcon = document.getElementsByClassName("comment-icon");
    const iconArray = Array.from(commentIcon);
    iconArray.forEach((icon) => {
      if (icon.nextElementSibling.style.display === "none") {
        icon.style.display = "none";
      }
    });
    addComment(commentButton);
  }
  if (event.target.classList.value === "comment-icon") {
    const icon = event.target;
    icon.style.display = "none";

    const button = document.getElementsByClassName("comment-button");
    const buttonArray = Array.from(button);
    if (event.target.parentNode.parentNode.id === "aboutMe") {
      buttonArray[0].style.display = "none";
    } else if (event.target.parentNode.parentNode.id === "freeCodeCamp") {
      buttonArray[1].style.display = "none";
    } else if (event.target.parentNode.parentNode.id === "tributePage") {
      buttonArray[2].style.display = "none";
    } else if (event.target.parentNode.parentNode.id === "functionsPartOne") {
      buttonArray[3].style.display = "none";
    } else if (event.target.parentNode.parentNode.id === "functionsPartTwo") {
      buttonArray[4].style.display = "none";
    } else if (event.target.parentNode.parentNode.id === "dom") {
      buttonArray[5].style.display = "none";
    } else if (event.target.parentNode.parentNode.id === "arrays") {
      buttonArray[6].style.display = "none";
    } else if (event.target.parentNode.parentNode.id === "objects") {
      buttonArray[7].style.display = "none";
    } else if (event.target.parentNode.parentNode.id === "feature") {
      buttonArray[8].style.display = "none";
    }
    addComment(icon);
  }
}

function showLiveTime(response) {
  time = response.data.formatted.slice(10, 16);
  zoneName = response.data.zoneName;
  console.log(time);
}
