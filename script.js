// Array of possible names and occupations
const names = ['Alice', 'Bob', 'Carol', 'Dave'];
const occupations = ['Web Developer', 'Graphic Designer', 'Content Writer', 'SEO Specialist'];

// Initial array of freelancers
let freelancers = [
    { name: 'Alice', occupation: 'Web Developer', startingPrice: 500 },
    { name: 'Bob', occupation: 'Graphic Designer', startingPrice: 300 }
];

// Function to render freelancers onto the page
function renderFreelancers() {
    const freelancerList = document.querySelector('#freelancer-list');
    freelancerList.innerHTML = ''; // Clear existing list
    freelancers.forEach(freelancer => {
        const div = document.createElement('div');
        div.textContent = `${freelancer.name} - ${freelancer.occupation} - Starting Price: $${freelancer.startingPrice}`;
        freelancerList.appendChild(div);
    });

    updateAveragePrice(); // Update the average price every time the list is rendered
}

// Function to calculate and display the average starting price
function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const average = (total / freelancers.length).toFixed(2);
    document.querySelector('#average-price').textContent = `Average Starting Price: $${average}`;
}

// Function to generate a new random freelancer
function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 500) + 100; // Random price between 100 and 600

    return { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
}

// Initial render of freelancers
renderFreelancers();

// Interval to add a new freelancer every few seconds
setInterval(() => {
    freelancers.push(generateRandomFreelancer());
    renderFreelancers();
}, 5000); // Adjust the interval time as needed
