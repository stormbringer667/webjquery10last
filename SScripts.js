console.log("Welcome to the Digital RC CLINIC Website!");

console.log("Our services include neurological rehabilitation, post-operative care, and more.");

// i use bigInt, precedence, and calculation, my evil genius scares me sometimes
let cost = 5000000000/1000000+0.0000000;
let count = 3;
let totalCost = cost * count;
console.log("Total cost for three sessions: " + totalCost + " Tenge");

let patientName = "Azamat Raissov";
document.getElementById("patientName").innerText = patientName;

var patientAGE = 69;

let remainingsSessions = 3;
remainingsSessions -= 1;
console.log("Remaining sessions: " + remainingsSessions);

const centerName = "MCS Rehabilitation Center";
document.getElementById("centerName").innerText = centerName;

let discount = 0.2; //20% discount
let discountedCost = totalCost - (totalCost * discount);
console.log("Discounted cost: " + discountedCost);

function changeBackground() {
    document.head.style.backgroundColor = "#000000";
} //dodelay potom

const patient = {
    firstName: "Azamat",
    lastName: "Raissov",
    age: 69,
    serviceName: "Neurological Rehabilitation"
};
document.getElementById("obj").innerHTML = `${patient.firstName} is ${patient.age} years old.`;

// Destructuring
let {firstName, lastName} = patient;

// Display Primitive Values
document.getElementById("obj").innerHTML =
firstName + " " + lastName;

patient.name = function() {
    return this.firstName + " " + this.lastName;
  };
  // Display Object Data
  document.getElementById("obj").innerHTML =
  ` The love of my life ${patient.name()}`; 

// Constructor Function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  // Create a Person object
  const woman = new Person("Paris", "Hilton", 30, "blue");
  // Display age
  document.getElementById("woman").innerHTML =
  `This woman is ${woman.age}.`; 

function bookAppointment() {
    alert("Appointment booked successfully!");
}
document.getElementById("bookBtn").addEventListener("click", bookAppointment);

let lowerText = document.getElementById("low").innerHTML;
document.getElementById("low").innerHTML =
lowerText.toUpperCase();

let searchText = "Please locate where 'Stories' occurs!";
let index = searchText.indexOf("Stories");
document.getElementById("stor").innerHTML = index; 

//array work
const d = new Date();
document.getElementById("date").innerHTML = d;

const free = new Date();
d.setDate(d.getDate() + 7);
document.getElementById("demo").innerHTML = d; //date sdelat svobodnoe vremya dodelat'

//from 40 to the end

let consultationID = Math.floor(Math.random() * 100000);
console.log("Consultation ID: " + consultationID);

let serviceList = ["Post-operative Rehabilitation", "Sports injury Recovery", "Pediatric Rehabilitation"];
for (let i = 0; i < serviceList.length; i++) {
    console.log("Service: " + serviceList[i]);
}

document.getElementById("demo").innerHTML = Boolean(2 > 1); //boolean nado sdelat v modal booking form

function agememe() {
    let voteable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
      voteable = "Input is not a number";
    } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("demo").innerHTML = voteable + " to book";
  } //nado sdelat v modal booking form

  let bookingText;
  if (phonenumber.length < 1) {
    bookingText = "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Oops... you're too... Nevermind, better use this website</a>";
  } else {
    bookingText = "<a>Booked successfully</a>";
  }
  document.getElementById("demo").innerHTML = bookingText; //nado sdelat v modal booking form

function showDay() {
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Unknown";
    }
    document.getElementById("ddd").innerHTML = "Today is " + day;
}

const patientother = {fname:"Azamat", lname:"Raissov", age:25}; 

let txt = "";
for (let x in patient) {
  txt += patient[x] + " ";
}

document.getElementById("demo").innerHTML = txt;

const serviceArray = ["Post-operative Rehabilitation", "Sports injury Recovery", "Pediatric Rehabilitation"];
let text = "";
for (let x of serviceArray) {
  text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;//dodelat'

function popalsya() {
    const message = document.getElementById("nameError");
    message.innerHTML = "";
    let x = document.getElementById("name").value;
    try { 
      if(x.trim() == "")  throw "is empty";
      if(isNaN(x)) throw "is not a name";
      x = String(x);
      if(x.length > 30 )   throw "is tooooooo loooooong";
      if(x.length < 5)  throw "is too short";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
    finally {
      document.getElementById("demo").value = "";
    }
  } //some problems with this function