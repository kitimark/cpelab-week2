let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').onclick = () => {
    counter++;
    document.querySelector('p').innerHTML = counter.toString();
  }
});
