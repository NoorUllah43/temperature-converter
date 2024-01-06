let c_btn = document.getElementById('C-btn');
let f_btn = document.getElementById('F-btn');
let k_btn = document.getElementById('K-btn');
let clr = document.getElementById('clear');

let c_input = document.getElementById('celius-input');
let f_input = document.getElementById('faranhit-input');
let k_input = document.getElementById('kilven-input');


c_btn.addEventListener('click', onCBtn);
f_btn.addEventListener('click', onFBtn);
k_btn.addEventListener('click', onkBtn);
clr.addEventListener('click', clear)


function onCBtn(){
    
    f_input.value = c_input.value * 1.8 + 32;
    k_input.value = c_input.value * 1 + 273.15;
}
function onFBtn(){
    c_input.value = (f_input.value - 32) * (5/9);
    k_input.value = (f_input.value - 32) * (5/9) + 273.15;
}

function onkBtn(){
    c_input.value = k_input.value - 273.15;
    f_input.value = (k_input.value - 273.15) * 1.8 + 32;

}

function clear(){
    c_input.value = ''
    f_input.value = ''
    k_input.value = ''
}



