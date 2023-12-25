/* .js files add interaction to your website */
var factList = [
  "Every 10 minutes, somewhere in the world, an adolescent girl dies as a result of violence.",
  "Nearly one in five girls is sexually abused at least once in her life. In the United States, 18 percent of girls report that by age 17 they have been victims of a sexual assault or abuse at the hands of another adolescent. ",
  "In a study of print media, researchers at Wesleyan University found that on average, across 58 different magazines, 51.8 percent of advertisements that featured women portrayed them as sex objects.",
  "According to a study published by The American Journal of Psychiatry, between 10 percent and 25 percent of adolescents surveyed had sent sexts — photos or texts of a sexual nature — and 15 percent to 35 percent had received sexts.",
  "Research conducted for the Dove Self Esteem Project found that only 11 percent of girls worldwide would call themselves beautiful and six in ten girls avoid participating in life activities because of concerns about the way they look.",
  "According to data from 30 countries, only 1 percent of adolescent girls who have experienced forced sex reached out for professional help.",
  "In the U.S., only one in five female student victims between the ages of 18 and 24 reports the crime to law enforcement, according to the Department of Justice.",
  "Studies show that girls and women make up 80% of sex trafficking victims in the United States.",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

var displayMessage = document.getElementById("positive-message");
var button = document.getElementById("messageButton");

if (button) {
  button.addEventListener("click", displayPositivity);
}

function displayPositivity() {
  var text = document.getElementById("adjective").value;
  displayMessage.innerHTML =
    "#girls You are already " + text + " for who you are! Be confident!";
}
