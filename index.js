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

//  {
//   let lengthOfPeople = document.querySelectorAll("#members p").length;
//   let lengthOfTeams = document.querySelectorAll(
//     "#rightside div.teammembers"
//   ).length;
//   let teamsNumber = document.querySelectorAll(".teammembers");
//   let ratio = Math.ceil(lengthOfPeople / lengthOfTeams);
//   //   let memberNumber = teamsNumber.querySelectorAll("p");
//   for (i = 0; i < lengthOfPeople; i++) {
//     if (teamsNumber[i].querySelectorAll("p").length <= ratio) {
//       let allMembers = document.querySelector("#members");
//       let firstMember = allMembers.firstChild;
//       firstName = firstMember.innerText;
//       //   let card = document.querySelectorAll("#rightside div.teammembers");
//       let movedName = document
//         .querySelectorAll("#rightside div.teammembers")
//         [Math.floor(Math.random() * numberOfTeams.value)].appendChild(
//           document.createElement("p")
//         );
//       movedName.innerText = firstName;
//       allMembers.firstChild.remove();
//     } else {
//       let allMembers = document.querySelector("#members");
//       let firstMember = allMembers.firstChild;
//       firstName = firstMember.innerText;
//       //   let card = document.querySelectorAll("#rightside div.teammembers");
//       let movedName = document
//         .querySelectorAll("#rightside div.teammembers")
//         [Math.floor(Math.random() * numberOfTeams.value + 1)].appendChild(
//           document.createElement("p")
//         );
//       movedName.innerText = firstName;
//       allMembers.firstChild.remove();
//     }
//   }
let assignEveryone = function () {
  let allMembers = document.querySelector("#members");
  let firstMember = allMembers.firstChild;
  firstName = firstMember.innerText;
  //   let card = document.querySelectorAll("#rightside div.teammembers");
  let movedName = document
    .querySelectorAll("#rightside div.teammembers")
    [Math.floor(Math.random() * numberOfTeams.value)].appendChild(
      document.createElement("p")
    );
  movedName.innerText = firstName;
  allMembers.firstChild.remove();
};
// if ()

assignButton.addEventListener("click", assignEveryone);
window.onload(resetState());
