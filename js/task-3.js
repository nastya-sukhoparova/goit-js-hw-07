const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
 
    const trimmedInputValue = nameInput.value.trim();
    
  nameOutput.textContent = trimmedInputValue === '' ? 'Anonymous' : trimmedInputValue;
});