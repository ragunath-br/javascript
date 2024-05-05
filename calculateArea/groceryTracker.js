
function calculate_total(){

    let groceryAmount1 = parseFloat(document.getElementById("grocery1Amount").value);
    let groceryAmount2 = parseFloat(document.getElementById("grocery2Amount").value);
    let groceryAmount3 = parseFloat(document.getElementById("grocery3Amount").value);

    let total_amount = groceryAmount1 + groceryAmount2 + groceryAmount3;
    console.log(total_amount);
    document.getElementById("total_amount").innerText = `The total amount is :$ ${total_amount}`;
}
