const button = document.querySelector('button');

button.addEventListener('click', () => {
  alert('APRIL FOOLS!');
});

button.style.left = (window.innerWidth / 2 - button.clientWidth / 2) + 'px';
button.style.top = (window.innerHeight / 2 - button.clientHeight / 2) + 'px';

const padding = 30;

function moveButton() {
  button.style.left = Math.floor(Math.random() * (window.innerWidth - button.clientWidth)) + 'px';
  button.style.top = Math.floor(Math.random() * (window.innerHeight - button.clientHeight)) + 'px';
}

document.addEventListener('mousemove', (
  { clientX: mouseX, clientY: mouseY },
) => {
  const rect = button.getBoundingClientRect();
  if (mouseX >= rect.x - padding
    && mouseX <= rect.right + padding
    && mouseY >= rect.y - padding
    && mouseY <= rect.bottom + padding) {
    moveButton();
  }
});

window.addEventListener('resize', moveButton);
