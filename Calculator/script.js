let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// for result storing
let buttonsArray = Array.from(buttons);
let string = '';
buttonsArray.forEach(btn => {
  btn.addEventListener('click', (e) => {

    //for equal functionality
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }

    //for AC(all clear) functionality
    else if (e.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('input').value = string;
    }

    //for DEL functionality
    else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      document.querySelector('input').value = string;
    } 

    else {
      string += e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
