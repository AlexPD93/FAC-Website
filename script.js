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
