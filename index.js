let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button'); // CSS SELECTOR
let screenValue = '';

// using for of loop to iterate the array
for (item of buttons) {
    item.addEventListener('click',(e) => {//jo button select kiya wo e se represent ho raha hai

        buttonText = e.target.innerText ;
        // target will point to the element wch was currently targeted by the event and its value will be stored in the button text

        if (buttonText == '=') {
            screen.value = eval(screen.value);
        }
        // eval function executes the given expression 

        else if (buttonText == 'C') {
            screenValue = '' ;
            screen.value = screenValue ;
        }

        else {
            screenValue += buttonText ;
            screen.value = screenValue ;
        }

    })
}