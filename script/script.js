const revealed_card = document.querySelector('.revealed');
const hidden_card = document.querySelector('.hidden');
let labels = document.querySelectorAll('label');
let inputs = document.querySelector('input');
const chosen_rate = document.querySelector('.chosen');

function getRateValue(){
    const input = this.previousElementSibling;
    const value = input.value;
    chosen_rate.innerHTML = value;
  }
  
  labels.forEach(function(label) {
    label.addEventListener('click', getRateValue);
  });



document.getElementsByClassName("btn")[0].addEventListener("click", function() {
    if(hidden_card.classList.contains("revealed")){
        hidden_card.style.display = 'block';
    }else{
        revealed_card.style.display = 'none';
        hidden_card.style.display = 'block';
    }
  });