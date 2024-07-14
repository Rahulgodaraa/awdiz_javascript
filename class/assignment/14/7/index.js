const submit = document.getElementById('submit');
const display = document.getElementById('display');
 
 
    submit.addEventListener('click' , () => {
var inputs = document.getElementById('input').value;
if (inputs > 18 && inputs <= 60) {
    display.innerHTML = '<p>User is elligible for Driving Liscense</p>';

  } else if (inputs <= 17 || inputs > 60) {
    display.innerHTML = '<p>User is Not elligible for Driving Liscense</p>';

  } else {
    display.innerHTML = '<p>User is elligible for Learning license</p>';

  }
            
})
        
