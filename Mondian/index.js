const colors = ['white', 'red', 'blue', 'white', 'yellow', 'black', 'white', 'white'];
const minR = 0;
const maxR = 100;
let min;
let max;
let random;
let randomR;

function randomNumber() {
    randomR = Math.floor(Math.random() * (+maxR - +minR)) + +minR;
    document.getElementById("number").innerHTML = randomR;
}

function randomNumberBetween(low, hi) {
    min = low;
    max = hi;
    random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}

function getColor() {

    return colors[randomNumberBetween(0, 8)];
}

function refresh() {

    document.location.reload();

}

function addDiv() {

    let div1;
    let newFlexDiv;

    for (let b = 0; b <= randomNumberBetween(3, 7); b++) {
        newFlexDiv = document.createElement('DIV');
        newFlexDiv.style.backgroundColor = 'black';
        newFlexDiv.style.display = 'flex';
        newFlexDiv.style.width = '100%';
        newFlexDiv.style.height = randomNumberBetween(10, 250) + 'px';
        for (let a = 0; a <= randomNumberBetween(0, 7); a++) {
            for (let i = 0; i <= randomNumberBetween(0, 7); i++) {

                div1 = document.createElement('DIV');
                div1.style.margin = '1.5px';
                div1.style.backgroundColor = getColor();
                div1.style.flexGrow = randomNumberBetween(0, 10);
                document.body.appendChild(newFlexDiv);
                newFlexDiv.appendChild(div1);
            }
            document.body.appendChild(newFlexDiv);
        }

    }
}