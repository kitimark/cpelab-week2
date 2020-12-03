var counter = 0;
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = function () {
        counter++;
        document.querySelector('p').innerHTML = counter;
    };
});
