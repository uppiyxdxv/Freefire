// Firebase Configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXFvX60p4H2-84fd0xM7WX_gUCIBQ0NIo",
  authDomain: "freefirewebsite-59234.firebaseapp.com",
  databaseURL: "https://freefirewebsite-59234-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "freefirewebsite-59234",
  storageBucket: "freefirewebsite-59234.firebasestorage.app",
  messagingSenderId: "683223451817",
  appId: "1:683223451817:web:86bbbbeb0213a8d76201b8",
  measurementId: "G-PFLY3DHEXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Database Reference

const database = firebase.database();

// Alert Message

function showMessage() {
    alert("Welcome to Free Fire!");
}

// Contact Form

document.getElementById("contactForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message").value;

    let error =
    document.getElementById("error");

    let emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation

    if(name === "" || email === "" || message === ""){

        error.style.color = "red";

        error.innerHTML =
        "All fields are required!";
    }

    else if(!email.match(emailPattern)){

        error.style.color = "red";

        error.innerHTML =
        "Enter valid email!";
    }

    else{

        // Store Data in Firebase

        database.ref("contacts").push({
            name: name,
            email: email,
            message: message
        });

        error.style.color = "lightgreen";

        error.innerHTML =
        "Form Submitted Successfully!";

        // Clear Form

        document.getElementById("contactForm").reset();
    }

});

// To-Do List

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


