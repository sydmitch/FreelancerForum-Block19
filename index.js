// initial freelancers
const freelancers = [
  {
    name: 'Alice',
    occupation: 'Writer',
    price: 30,
  },
  {
    name: 'Bob',
    occupation: 'Teacher',
    price: 50,
  },
]

// possible random freelancers
const possibleFreelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];


// function to calculate average starting price
function calculateAverageStartingPrice() {
  const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  return (totalPrice / freelancers.length).toFixed(2);
};


// function to add random freelancer to existing array
function addFreelancer() {
  const randomFreelancer = possibleFreelancers[Math.floor(Math.random() * possibleFreelancers.length)];
  freelancers.push(randomFreelancer);
}

// iterate thru freelancers to create an element for each one
// and add info to the element and render element to DOM
function renderFreelancer() {
  const freelancerContainer = document.getElementById('freelancerContainer');
  freelancerContainer.innerHTML = '';
  // iterates thru array
  freelancers.forEach((freelancer) => {
    const freelancerDiv = document.createElement('div');
    freelancerDiv.className = 'freelancer';
    freelancerDiv.innerHTML = `
      Name: ${freelancer.name}<br>
      Occupation: ${freelancer.occupation}<br>
      Starting Price: $${freelancer.price}<br>
      <br>
      `;
    freelancerContainer.appendChild(freelancerDiv);
  })
}

// function to update starting price into the DOM
function renderAveragePrice() {
  const averagePriceElement = document.getElementById('averagePrice');
  averagePriceElement.textContent = calculateAverageStartingPrice();
}

// function that renders items into the DOM
// updates the DOM to reflect the current state
function render() {
  renderFreelancer();
  renderAveragePrice();
}

// intial render to DOM
render();

// add freelancer to render to page every 5 seconds
setInterval(() => {
  addFreelancer();
  render();
}, 5000)

