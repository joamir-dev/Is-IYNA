
const buttonRight1 = document.getElementById('slideRight1');
const buttonLeft1 = document.getElementById('slideLeft1');

buttonRight1.onclick = function () {
    document.getElementById('subs1').scrollLeft += 700;
};
buttonLeft1.onclick = function () {
    document.getElementById('subs1').scrollLeft -= 700;
};


const buttonRight2 = document.getElementById('slideRight2');
const buttonLeft2 = document.getElementById('slideLeft2');

buttonRight2.onclick = function () {
    document.getElementById('subs2').scrollLeft += 500;
};
buttonLeft2.onclick = function () {
    document.getElementById('subs2').scrollLeft -= 500;
};


const buttonRight3 = document.getElementById('slideRight3');
const buttonLeft3 = document.getElementById('slideLeft3');

buttonRight3.onclick = function () {
    document.getElementById('subs3').scrollLeft += 500;
};
buttonLeft3.onclick = function () {
    document.getElementById('subs3').scrollLeft -= 500;
};
