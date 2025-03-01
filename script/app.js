// alert();
document.getElementById("date").innerText = new Date().toDateString();

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "discover.html";
});

// const time = new Date().toDateString();
// console.log(time);

function time() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

// main section

// card 1

document
  .getElementById("completed-btn-1")
  .addEventListener("click", function (event) {
    const taskTitle =
      document.getElementsByClassName("card-title")[0].innerText;
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

    //    alert("Task count: " + taskCount);
    console.log(activityContainer.innerText);
    
  });
// 2nd card

document
  .getElementById("completed-btn-2")
  .addEventListener("click", function (event) {
    const taskTitle =
      document.getElementsByClassName("card-title")[1].innerText;
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

    //    alert("Task count: " + taskCount);
    console.log(activityContainer.innerText);
  });

// 3rd card
document
  .getElementById("completed-btn-3")
  .addEventListener("click", function (event) {
    const taskTitle =
      document.getElementsByClassName("card-title")[2].innerText;
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

    //    alert("Task count: " + taskCount);
    console.log(activityContainer.innerText);
  });

// 4th card
document
  .getElementById("completed-btn-4")
  .addEventListener("click", function (event) {
    const taskTitle =
      document.getElementsByClassName("card-title")[3].innerText;
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

    //    alert("Task count: " + taskCount);
    console.log(activityContainer.innerText);
  });

// 5th card

document
  .getElementById("completed-btn-5")
  .addEventListener("click", function (event) {
    const taskTitle =
      document.getElementsByClassName("card-title")[4].innerText;
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

    //    alert("Task count: " + taskCount);
    console.log(activityContainer.innerText);
  });

// 6th card

document
  .getElementById("completed-btn-6")
  .addEventListener("click", function (event) {
    const taskTitle =
      document.getElementsByClassName("card-title")[5].innerText;
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

    //    alert("Task count: " + taskCount);
    console.log(activityContainer.innerText);
  });


//   recheck buttons 

// const completedButton1= document.getElementsByClassName('completed-btn')
// // console.log(completedButton1[0].innerText);

// for (let i = 0; i < completedButton1.length; i++) {
// const recent = completedButton1[i];
// if(recent.classList.contains('disabled')){
// console.log('yes');
// }
// else{
//   console.log('no');
// }
// console.log(recent);
// }
  

// if (completedButton1.classList.contains('disabled')){
//     alert('yess')
// }
// else{
//     console.log("noooo")
// }

// const allDisabled = document.querySelectorAll('.completed-btn');

// // classList.contains('disabled');
// console.log(allDisabled);
// for (let i = 0; i < allDisabled.length; i++) {
//   const recent = allDisabled[i];
//   if(recent.classList.contains('disabled')){
//     // recent.classList.remove('disabled');
//     alert('yess');
//   }
//   else{
//     // recent.classList.add('disabled');
//   }
// }
                // if (allDisabled.classList.contains('disabled')) {
                //     alert('All buttons are disabled!');
                // }



// Activity section 

document.getElementById('clear-history-btn').addEventListener('click',function(){
  document.getElementById('activity-container').innerHTML = '';
});

// adding theme button to random color 

const button = document.getElementById('theme-btn');
        function getRandomColor() {
            const red = Math.random() * 200; 
            const green = Math.random() * 200; 
            const blue = Math.random() * 200;
            const convertedRed = Math.floor(red);
            const convertedGreen = Math.floor(green);
            const convertedBlue = Math.floor(blue);
            let color = "rgb(" + convertedRed + "," + convertedGreen + "," + convertedBlue + ")";
            console.log(color);

            return color; 
        }
        button.addEventListener('click', function() {
            document.body.style.backgroundColor = getRandomColor();
        });


