let options = document.querySelectorAll('.option');

const makeSelected = (e) => {    
    (e.target != e.currentTarget) ?
    e.target.parentNode.classList.toggle("selected")
    : e.target.classList.toggle("selected")
}

[].map.call(options, (element) => {
    element.addEventListener("click", makeSelected, false);
});