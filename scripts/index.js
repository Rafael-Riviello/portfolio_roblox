const tax_input = document.getElementById("tax-calculator_input");
const tax_button = document.getElementById("tax-calculator_calculate");
const tax_output = document.getElementById("tax-calculator_output");

function calculateTax(event){
    event.preventDefault();
    
    const creator_earnings = 0.7;
    const input =  parseInt(tax_input.value) || 0;
    let tax = Math.floor((input-(input*creator_earnings))/creator_earnings);
    
    if((input+tax)*creator_earnings < input){
        tax++
    };

    tax_output.innerHTML = `R$${input+tax}`;
}

tax_button.addEventListener("click", calculateTax);