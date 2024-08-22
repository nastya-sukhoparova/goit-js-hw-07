function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value.trim());
  
  
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); 
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.'); 
  }
});

destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  boxes.innerHTML = ''; 
  const elements = [];
  let size = 30; 

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    size += 10; 
  }

  boxes.append(...elements); 
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
