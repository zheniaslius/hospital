const days = [...document.querySelectorAll('.option')]
const add = document.querySelector('.add-shift');
const shifts = [...document.querySelectorAll('.shift')];

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

    if (e.target.classList.contains('close')) {
        e.target.parentNode.remove();
    }
}

days.forEach(element => {
    element.addEventListener('click', e => {
        makeSelected(e);
    })
})

const addShift = () => {
    let selected = document.querySelector('.selected .my-shifts');

    let shift = `<div class="shift"><span>${getRandomInt(23)}:00 - ${getRandomInt(23)}:00</span>
                    <i class="material-icons close">close</i>
                </div>`;
    selected.insertAdjacentHTML('beforeend', shift);
}

add.addEventListener('click', () => addShift());

const shiftRemove = e => {
    
    console.log('clicked');
}

shifts.forEach(shift => {
    shift.addEventListener('click', e => shiftRemove(e));
});
