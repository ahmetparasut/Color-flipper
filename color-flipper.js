const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const colorBtn = document.querySelector('#btn');
const color = document.querySelector('.color');

colorBtn.addEventListener('click',() => {
    let hexColor = '#';
    for(let i = 0; i<6; i++) {
        const randomNumber = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomNumber]
    }

    color.innerText = hexColor
    document.body.style.backgroundColor = hexColor
    

    
})