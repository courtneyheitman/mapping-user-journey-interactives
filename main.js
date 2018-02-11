function handleInput() {
  if (this.value.length) {
    this.classList.add('EM-input--dirty');
  } else {
    this.classList.remove('EM-input--dirty');
  }
}

var inputs = document.querySelectorAll('.EM-input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', handleInput);
}
