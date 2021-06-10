

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

var next1 = document.getElementById("next2");
var next2 = document.getElementById("next3");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");

var progress = document.getElementById('progress');

const forms = document.getElementById('forms');
const fnameValue = document.getElementById('fname');


forms.addEventListener('next2', (e) => {
    e.preventDefault;

    checkInput();
});
function checkInput(params) {
    const fnameValue = fname.value.trim();
}

next1.onclick = function () {

    form1.style.left = "450px";
    form2.style.left = "40px";
    progress.style.width = "240px";

}




back1.onclick = function () {
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "100px";
}
next2.onclick = function () {
    form2.style.left = "450px";
    form3.style.left = "40px";
    progress.style.width = "360px";
}
back2.onclick = function () {
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px";
}

