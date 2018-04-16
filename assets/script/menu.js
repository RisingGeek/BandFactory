window.onload=function() {
    document.getElementById('menu').addEventListener('click', close);
}
function close() {
    document.getElementById('menu').classList.toggle('change');
    document.querySelector('.overlay').classList.toggle('add');
}