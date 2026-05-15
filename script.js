// Alert Button

function showMessage(){
    alert("Welcome to Free Fire!");
}

// Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let error =
    document.getElementById("error");

    let emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name === "" || email === ""){
        error.innerHTML =
        "All fields are required!";
    }

    else if(!email.match(emailPattern)){
        error.innerHTML =
        "Enter valid email!";
    }

    else{
        error.style.color = "lightgreen";
        error.innerHTML =
        "Form Submitted Successfully!";
    }

});

// DOM Manipulation To-Do List

function addTask(){

    let taskInput =
    document.getElementById("taskInput");

    let taskList =
    document.getElementById("taskList");

    if(taskInput.value === ""){
        alert("Enter a task");
        return;
    }

    let li =
    document.createElement("li");

    li.innerHTML =
    taskInput.value +
    " <button onclick='removeTask(this)'>Delete</button>";

    taskList.appendChild(li);

    taskInput.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}