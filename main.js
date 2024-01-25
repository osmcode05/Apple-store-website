// < ================= Menu ================ >
let Menu = document.getElementById('menu'),
    Spans = document.querySelectorAll('#menu span'),
    List = document.querySelector('nav ul');
Menu.onclick = () => {
    Spans.forEach(span => span.classList.toggle('active'));
    List.classList.toggle('active');
};
// < ================== Change Phone And Color ================ >
let homeImg = document.getElementById('home__img');
function change(src,color) {
    document.body.style.background = color;
    homeImg.src = src;
}