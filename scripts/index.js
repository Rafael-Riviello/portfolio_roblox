const tax_input = document.getElementById("tax-calculator_input");
const tax_button = document.getElementById("tax-calculator_calculate");
const tax_output = document.getElementById("tax-calculator_output");

function calculateTax(event){
    event.preventDefault();

    const input = tax_input.value || 0
    const output = input * 1.43

    tax_output.innerHTML = `R\$${input} + 43% = R\$${output}`
}

tax_button.addEventListener("click", calculateTax);