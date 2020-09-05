const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;
let totalCost = 0;

//Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +movieSelect.value;
  updateSelectedCount();
});

//Calculate total
function calculate(theSeat) {
  if (theSeat.parentNode.classList.contains("premium")) {
    totalCost += ticketPrice + ticketPrice * (15 / 100);
  } else {
    totalCost += ticketPrice;
  }
}

//Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  totalCost = 0;
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;

  selectedSeats.forEach(calculate);

  total.innerText = totalCost;
}

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});
