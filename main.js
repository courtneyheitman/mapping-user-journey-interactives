Array.prototype.forEach.call(document.querySelectorAll('.EM-input'), function(input) {
  input.addEventListener('input', function() {
    if (input.value.length) {
      input.classList.add('EM-input--dirty');
    } else {
      input.classList.remove('EM-input--dirty');
    }
  });
});

var ujmClear = document.querySelector('.UJM-clearBtn');
if (ujmClear) {
  ujmClear.addEventListener('click', function() {
    Array.prototype.forEach.call(document.querySelectorAll('.UJM-input'), function(input) {
      input.innerHTML = '';
    });
  });
}
