let num = document.getElementById('num')
let send = document.querySelector('button')
let h1 = document.querySelector('h1')
let count = 0

send.addEventListener("click", () => {
    count = num.value
    h1.innerHTML = num.value
});

let plus = document.getElementById('plus')

plus.addEventListener('click', () => {
    count++
    h1.innerHTML = count
})

let minus = document.getElementById('minus')

minus.addEventListener('click', () => {
    count--
    h1.innerHTML = count
})

let color = document.getElementById('color')

color.addEventListener('change', () => {
    h1.style.color = color.value
})