const days = [...document.querySelectorAll('.option')]
const add = document.querySelector('.add-shift');

const getRandomInt = max => 
    Math.floor(Math.random() * Math.floor(max));
  
const makeSelected = e => {
    days.forEach(day => {
        day.classList.remove('selected');
    })
    
    if (e.target != e.currentTarget) {
        e.target.parentNode.classList.toggle("selected");
    } else
        e.target.classList.toggle("selected");
}

days.forEach(element => {
    element.addEventListener('click', e => {
        makeSelected(e);
    })
})

const addShift = () => {
    let selected = document.querySelector('.selected .my-shifts');
    console.log(selected);

    let shift = `<span class="shift">${getRandomInt(23)}:00 - ${getRandomInt(23)}:00</span>`;
    selected.insertAdjacentHTML('beforeend', shift);
}

add.addEventListener('click', () => addShift());
