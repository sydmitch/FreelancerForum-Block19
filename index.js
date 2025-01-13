// initial freelancers
const freelancers = [
  { name: 'Alice', occupation: 'Writer', price: 30 },
  { name: 'Bob', occupation: 'Teacher', price: 50 },
  { name: 'Carol', occupation: 'Programmer', price: 70 },
];

// possible freelancers
const possibleFreelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
];

// calculate average starting price of freelancers
function calculateAverageStartingPrice() {
  const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  return (totalPrice / freelancers.length).toFixed(2);
};

// render freelancers
function renderFreelancer() {
  // select container using document.querySelector
  const freelancerContainer = document.querySelector('#freelancerContainer');
  freelancerContainer.innerHTML = '';
 
  freelancers.forEach((freelancer) => {
    const freelancerDiv = document.createElement('div');
    freelancerDiv.className = 'freelancer';

    const nameElement = document.createElement('div');
    nameElement.textContent = `Name: ${freelancer.name}`
    freelancerDiv.appendChild(nameElement);

    const occupationElement = document.createElement('div');
    occupationElement.textContent = `Occupation: ${freelancer.occupation}`;
    freelancerDiv.appendChild(occupationElement);

    const priceElement = document.createElement('div');
    priceElement.textContent = `Starting Price: $${freelancer.price}`;
    freelancerDiv.appendChild(priceElement);

    // add line break between freelancers
    const lineBreak = document.createElement('br');
    freelancerDiv.append(lineBreak);

    freelancerContainer.appendChild(freelancerDiv);
  })
}

// render average price
function renderAveragePrice() {
  const averagePriceElement = document.getElementById('averagePrice');
  averagePriceElement.textContent = calculateAverageStartingPrice();
}

// render all
function render() {
  renderFreelancer();
  renderAveragePrice();
}

// intial render
render();

// add freelancer to render to page every 5 seconds w/ updated average price
setInterval(() => {
  const newFreelancer = possibleFreelancers[Math.floor(Math.random() * possibleFreelancers.length)];
  freelancers.push(newFreelancer);
  renderFreelancer();
  renderAveragePrice();
}, 5000)