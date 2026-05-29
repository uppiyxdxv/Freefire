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
// SIGNUP
function signup(){

    const username = document.getElementById("username").value;

    const email = document.getElementById("loginEmail").value;

    const password = document.getElementById("loginPassword").value;

    if(username === "" || email === "" || password === ""){

        alert("Please fill all login fields");

        return;
    }

    database.ref("users").push({

        username: username,

        email: email,

        password: password

    });

    alert("Signup Successful");
}


// LOGIN
function login(){

    const email = document.getElementById("loginEmail").value;

    const password = document.getElementById("loginPassword").value;

    database.ref("users").once("value", function(snapshot){

        let found = false;

        snapshot.forEach(function(childSnapshot){

            const data = childSnapshot.val();

            if(data.email === email && data.password === password){

                found = true;
            }
        });

        if(found){

            alert("Login Successful");

        } else {

            alert("Invalid Email or Password");
        }

    });
}


// EVENT REGISTRATION
document.getElementById("eventForm").addEventListener("submit", function(e){

    e.preventDefault();

    const playerName = document.getElementById("playerName").value;

    const freefireId = document.getElementById("freefireId").value;

    const email = document.getElementById("eventEmail").value;

    const phone = document.getElementById("phoneNumber").value;

    database.ref("eventRegistrations").push({

        playerName: playerName,

        freefireId: freefireId,

        email: email,

        phone: phone,

        eventName: "MARC HUB Free Fire Event",

        prizePool: "1000"

    });

    document.getElementById("eventSuccess").innerHTML =
    "Congratulations you're registered MARC HUB Free Fire Event.";

    sendMail(email);

    document.getElementById("eventForm").reset();

});


// EMAIL FUNCTION
function sendMail(userEmail){

    emailjs.send("service_63ztzjj","template_0qqkrax",{

        to_email: userEmail,

        message:
        "Congratulations you're registered MARC HUB Free Fire Event."

    }).then(function(response){

        console.log("Mail Sent");

    }, function(error){

        console.log("Mail Failed", error);

    });

}