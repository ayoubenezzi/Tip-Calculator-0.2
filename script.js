const btn = document.getElementById("calculate");
const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.getElementById("total");

function calcTotal() {
  const billValue = bill.value;
  const tipValue = tip.value;
  const totalValue = billValue * (1 + tipValue / 100);
  if (billValue === "" || tipValue === "") {
    alert("Please Enter a valid Bill/Tip");
  } else {
    total.innerText = `${totalValue.toFixed(2)}$`;
  }
}

btn.addEventListener("click", calcTotal);
