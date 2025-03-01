// alert();
document.getElementById("date").innerText = new Date().toDateString();

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "discover.html";
});


function time() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

// main section
const completedButtons = document.querySelectorAll(".completed-btn");
for (let i = 0; i < completedButtons.length; i++) {
  // console.log(completedButtons[i]);
  completedButtons[i].addEventListener("click", function (event) {
    const taskTitle =
      document.getElementsByClassName("card-title")[i].innerText;
    alert(taskTitle + " is Completed");

    const taskCount = parseInt(document.getElementById("task-count").innerText);
    document.getElementById("task-count").innerText = taskCount - 1;
    const completedTask = parseInt(
      document.getElementById("completed-task").innerText
    );
    document.getElementById("completed-task").innerText = completedTask + 1;

    const activityContainer = document.getElementById("activity-container");
    const p = document.createElement("p");
    p.classList.add("comment");
    p.innerText = `
       You have completed the task ${taskTitle}, at ${time()}
    
       `;
    activityContainer.appendChild(p);

    event.target.classList.add("disabled");

    checkAllTasksCompleted();

  });
}

//   recheck buttons

function checkAllTasksCompleted() {
  let allCompleted = true;
  for (let button of completedButtons) {
    if (!button.classList.contains("disabled")) {
      allCompleted = false;
      break;
    }
  }
  if (allCompleted) {
    alert("Congratulations! You have completed all tasks.");
  }
}




// ---------------------------------------------

// if (completedButtons.classList.contains("disabled")){
// alert("You have completed");  
// }


// if (0===0){

//   for (const button of completedButtons){
//     // console.log();
//     if (button.classList.contains("disabled") == true){
//       console.log('yes')
//     }
//     else{
//       console.log('no')
//     }
//   }
  
// }




// Activity section

document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    document.getElementById("activity-container").innerHTML = "";
  });

// adding theme button to random color

const button = document.getElementById("theme-btn");
function getRandomColor() {
  const red = Math.random() * 200;
  const green = Math.random() * 200;
  const blue = Math.random() * 200;
  const convertedRed = Math.floor(red);
  const convertedGreen = Math.floor(green);
  const convertedBlue = Math.floor(blue);
  let color =
    "rgb(" + convertedRed + "," + convertedGreen + "," + convertedBlue + ")";
  console.log(color);

  return color;
}
button.addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});
