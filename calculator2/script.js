let buttons = document.querySelectorAll('button')
const displayOutput = document.getElementById("display");

buttons.forEach(function(button) {
    button.addEventListener('click', calculate)
});


function calculate(button) {


    const clickedButton = button.target.value;

    if (clickedButton === '=') {


        if (displayOutput.value !== '') {

            displayOutput.value = eval(displayOutput.value)
        }
    } else {

        displayOutput.value += clickedButton
    }
}