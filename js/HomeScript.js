function popShow() {
    document.getElementById("pop").style.right = "2%";
}

function popClose() {
    document.getElementById("pop").style.right = "-70vw";
}

const buttonRight0 = document.getElementById('slideRight0');
const buttonLeft0 = document.getElementById('slideLeft0');

buttonRight0.onclick = function () {
    document.getElementById('Recent').scrollLeft += 500;
};
buttonLeft0.onclick = function () {
    document.getElementById('Recent').scrollLeft -= 500;
};