// Simulate live jewelry prices (you can replace this with API calls)
const goldPriceElement = document.getElementById("goldPrice");
const platinumPriceElement = document.getElementById("platinumPrice");

function updatePrices() {
    const goldPrice = (Math.random() * 5000 + 50000).toFixed(2);
    const platinumPrice = (Math.random() * 7000 + 70000).toFixed(2);

    goldPriceElement.innerText = `₹${goldPrice}`;
    platinumPriceElement.innerText = `₹${platinumPrice}`;
}

// Update prices every 5 seconds
setInterval(updatePrices, 5000);
updatePrices();

// Handle survey form submission
document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your feedback! We appreciate your input.");
});
