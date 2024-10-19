


var num = prompt("Enter your number:");
let tableDiv = document.getElementById('table');

for (let i = 1; i <= 10; i++) {
    tableDiv.innerHTML += `<div class="table-row">${num} x ${i} = ${num * i}</div>`;
}