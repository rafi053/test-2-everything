const USER_SOLDIER = document.querySelector(".user-soldier"); 
const tableBody = document.querySelector("#table-body");
const soldiers = getFromLocalStorage();
const deleteButton = document.querySelector(".delete");
const missionTime = document.querySelector("#mission-Time");


USER_SOLDIER.addEventListener("submit", addSoldier);



window.onload = displaySoldiers;

function addSoldier(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const rank = document.querySelector("#rank").value;
    const position = document.querySelector("#position").value;
    const platoon = document.querySelector("#platoon").value;
    const missionTime = document.querySelector("#mission-Time").value;
    const status = document.querySelector("#status").value;
    const soldier = {
        name,
        rank,
        position,
        platoon,
        missionTime,
        status
    };
    saveToLocalStorage(soldier);
    displaySoldiers();
}


// שמירה ב local storage
function saveToLocalStorage(soldier) {
    let soldiers;
    if(localStorage.getItem("soldiers") === null) {
        soldiers = [];
    } else {
        soldiers = JSON.parse(localStorage.getItem("soldiers"));
    }
    soldiers.push(soldier);
    localStorage.setItem("soldiers", JSON.stringify(soldiers));
}


// משיכה מ local storage
function getFromLocalStorage() {
    let soldiers;
    if(localStorage.getItem("soldiers") === null) {
        soldiers = [];
    } else {
        soldiers = JSON.parse(localStorage.getItem("soldiers"));
    }
    return soldiers;
}






function displaySoldiers() {
    tableBody.innerHTML = "";
    for(let i = 0; i < soldiers.length; i++) {
        const tr = document.createElement("tr");
        const name = document.createElement("td");
        const rank = document.createElement("td");
        const position = document.createElement("td");
        const platoon = document.createElement("td");
        const status = document.createElement("td");
        const action = document.createElement("td");
        name.textContent = soldiers[i].name;
        name.classList.add("name");
        rank.textContent = soldiers[i].rank;
        rank.classList.add("rank");
        position.textContent = soldiers[i].position;
        position.classList.add("position");
        platoon.textContent = soldiers[i].platoon;
        platoon.classList.add("platoon");
        status.textContent = soldiers[i].status;
        status.classList.add("status");
        action.innerHTML = `<button onclick="edit(${i})" class="edit">Edit</button>
        <button onclick="deleteSoldier(${i})" class="delete ">Delete</button>
        <button onclick="displayMissionTime(${i})"  class="mission ">Mission</button>`;
        tr.appendChild(name);
        tr.appendChild(rank);
        tr.appendChild(position);
        tr.appendChild(platoon);
        tr.appendChild(status);
        tr.appendChild(action);
        tableBody.appendChild(tr);
    }
    
}

// מחיקת כל החיילים 
function deleteAll() {
    localStorage.clear();
    tableBody.innerHTML = "";
}
// deleteAll();


 


// function displayMissionTime() {
    // const missionTime = document.querySelector("#mission-Time").value;
    // const mission = setInterval(() => {
    //     if(missionTime > 0) {
    //         missionTime--;
    //         document.querySelector("#mission-Time").value = missionTime;
    //     } else {
    //         clearInterval(mission);
    //     }
    // }, 1000);
//     console.log(missionTime.value);
    
    
    
// }