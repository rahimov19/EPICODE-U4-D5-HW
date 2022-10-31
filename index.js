let inputName = document.querySelector("#input input");
let numberOfTeams = document.querySelector("#numberofteams");
let addButton = document.querySelector("#input button");
let plusButton = document.querySelector("#teaminput :nth-child(3)");
let minusButton = document.querySelector("#teaminput :nth-child(1)");
let assignButton = document.querySelector("#assign");
let resetButton = document.querySelector("#reset");
let membersField = document.querySelector("#members");
let cardsField = document.querySelector("#rightside");
const cards = document.querySelectorAll(".team");
let createDiv = document.createElement("div");
let createP = document.createElement("p");
let assignEveryoneButton = document.querySelector("#assignEveryone");

let resetState = function () {
  cardsField.innerHTML = "";
  inputName.value = "";
  numberOfTeams.value = "1";
  membersField.innerHTML = "";
  createCard();
};
resetButton.addEventListener("click", resetState);

let createCard = function () {
  let mainCard = cardsField.appendChild(document.createElement("div"));
  mainCard.classList.add("team");
  let createH2 = document.createElement("h2");
  createH2.innerText = "Team " + numberOfTeams.value;
  mainCard.appendChild(createH2);
  let subCard = mainCard.appendChild(document.createElement("div"));
  subCard.classList.add("teammembers");
  //   subCard.appendChild(document.createElement("p"));
};

let addTeam = function () {
  numberOfTeams.value++;
  createCard();
};
plusButton.addEventListener("click", addTeam);

let removeTeam = function () {
  let cards = document.querySelector("#rightside");
  cards.lastChild.remove();
  numberOfTeams.value--;
};
minusButton.addEventListener("click", removeTeam);

let addName = function () {
  if (inputName.value !== "") {
    let member = membersField.appendChild(document.createElement("p"));
    member.innerText = inputName.value;
  }
  inputName.value = "";
};
addButton.addEventListener("click", addName);
inputName.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // event.preventDefault();
    document.querySelector("#input button").click();
  }
});
let teamIndex = 0;
let assignOne = function () {
  let members = document.querySelectorAll("#members p");
  let cards = document.querySelectorAll("#rightside div.teammembers");
  let randomIndex = Math.floor(Math.random() * members.length);
  let randomMember = members[randomIndex];
  let randomMemberName = randomMember.innerText;
  // let createName = document.createElement("p");
  let createButton = document.createElement("div");
  createButton.classList.add("wrapper");
  let createA = document.createElement("a");
  createA.classList.add("awrapper");
  createButton.appendChild(createA);
  let createSpan = document.createElement("span");
  createA.appendChild(createSpan);
  createSpan.classList.add("spanwrapper");
  if (teamIndex === cards.length) {
    teamIndex = 0;
  }
  let createButtons = document.querySelectorAll(".teammembers div");
  for (i = 0; i < createButtons.length; i++) {
    createButtons[i].addEventListener("click", function nameBack(e) {
      membersField.appendChild(document.createElement("p")).innerText =
        e.target.innerText;
    });
    createButtons[i].addEventListener("click", function handleClick(event) {
      event.currentTarget.remove();
    });
  }

  movedName = cards[teamIndex].appendChild(createButton);

  createSpan.innerText = randomMemberName;
  randomMember.remove();
  teamIndex++;
};

assignButton.addEventListener("click", assignOne);

let assignEveryone = function () {
  let members = document.querySelectorAll("#members p");
  while (members.length > 0) {
    assignOne();
  }
};
assignEveryoneButton.addEventListener("click", assignEveryone);
window.onload = function () {
  resetState();
};
