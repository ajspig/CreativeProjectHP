
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 40.2338, lng: -111.6585},
  });
  const marker = new google.maps.Marker({
    position: { lat: 40.23588788246661, lng: -111.64235127379332, },
    map: map,
  });

  google.maps.event.addListener(map, "click", (event) => {
    addMarker(event.latLng, map);
  });
  // Add a marker at the center of the map.
  addMarker(bangalore, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
  });
}

//For JS quiz
const Questions = [{
  id: 0,
  q: "When was Provo first settled?",
  a: [{ text: "1839", isCorrect: false },
      { text: "1860", isCorrect: false },
      { text: "1849", isCorrect: true },
      { text: "1863", isCorrect: false }
  ]

},
{
  id: 1,
  q: "How big is Provo?",
  a: [{ text: "44.19 mi²", isCorrect: true},
      { text: "42.3 mi²", isCorrect: false },
      { text: "40.73 mi²", isCorrect: false },
      { text: "60.89 mi²", isCorrect: false }
  ]

},
{
  id: 2,
  q: "What state is Provo in?",
  a: [{ text: "WA", isCorrect: false },
      { text: "VA", isCorrect: false },
      { text: "NV", isCorrect: false },
      { text: "UT", isCorrect: true }
  ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
  op1.style.backgroundColor = "#2CA58D";
  op2.style.backgroundColor = "#C29979";
  op3.style.backgroundColor = "#C29979";
  op4.style.backgroundColor = "#C29979";
  selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
  op1.style.backgroundColor = "#C29979";
  op2.style.backgroundColor = "#2CA58D";
  op3.style.backgroundColor = "#C29979";
  op4.style.backgroundColor = "#C29979";
  selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
  op1.style.backgroundColor = "#C29979";
  op2.style.backgroundColor = "#C29979";
  op3.style.backgroundColor = "#2CA58D";
  op4.style.backgroundColor = "#C29979";
  selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
  op1.style.backgroundColor = "#C29979";
  op2.style.backgroundColor = "#C29979";
  op3.style.backgroundColor = "#C29979";
  op4.style.backgroundColor = "#2CA58D";
  selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
  if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
  } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
  }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
  id++;
  iterate(id);
  console.log(id);
}

})