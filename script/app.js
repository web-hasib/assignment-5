// alert();
document.getElementById("date").innerText = new Date().toDateString();

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "../discover.html";
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

// const completedButton1= document.getElementsByClassName('completed-btn')[0]
// console.log(completedButton1)
// if (completedButton1.classList.contains('disabled')){
//     alert('yess')
// }
// else{
//     console.log("noooo")
// }