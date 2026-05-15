// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDXFvX60p4H2-84fd0xM7WX_gUCIBQ0NIo",
  authDomain: "freefirewebsite-59234.firebaseapp.com",
  databaseURL: "https://freefirewebsite-59234-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "freefirewebsite-59234",
  storageBucket: "freefirewebsite-59234.firebasestorage.app",
  messagingSenderId: "683223451817",
  appId: "1:683223451817:web:86bbbbeb0213a8d76201b8"
};

// Initialize Firebase (v8 style)
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Alert
function showMessage() {
    alert("Welcome to Free Fire!");
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name === "" || email === "" || message === ""){
        error.style.color = "red";
        error.innerHTML = "All fields are required!";
        return;
    }

    if(!email.match(emailPattern)){
        error.style.color = "red";
        error.innerHTML = "Enter valid email!";
        return;
    }

    // Save to Firebase
    database.ref("contacts").push({
        name: name,
        email: email,
        message: message
    });

    error.style.color = "green";
    error.innerHTML = "Form Submitted Successfully!";

    document.getElementById("contactForm").reset();
});

// To-Do List
function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if(taskInput.value === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = taskInput.value + " <button onclick='removeTask(this)'>Delete</button>";

    taskList.appendChild(li);

    taskInput.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}