const colors = ['red', 'blue', 'yellow', 'white', 'black'];

function randomNumber() {
    const minR = 0;
    const maxR = 5;
    let randomR = Math.floor(Math.random() * (+maxR - +minR)) + +minR;
    document.getElementById("number").innerHTML = randomR;
}

function randomNumberBetween(low, hi) {
    let min = low;
    let max = hi;
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}

function getColor() {

    return colors[randomNumberBetween(0, 4)];
}

function addDiv() {

    let div1;
    let flexDiv;
    let flex = document.getElementById('flex');

    for (let a = 0; a <= randomNumberBetween(0, 10); a++) {

        // flexDiv = document.createElement('DIV');
        // flexDiv.style.display = 'flex';
        // flexDiv.style.alignContent = 'flex-start';
        // flexDiv.style.backgroundColor = 'black';

        // document.body.appendChild(flex);
        // flex.style.height = randomNumberBetween(20, 250);
        // flex.style.alignItems = 'stretch';

        for (let i = 0; i <= randomNumberBetween(0, 10); i++) {

            div1 = document.createElement('DIV');
            div1.style.backgroundColor = getColor();
            div1.style.flexGrow = randomNumberBetween(0, 10);
            div1.style.height = randomNumberBetween(20, 350);
            div1.style.width = randomNumberBetween(20, 250);
            div1.style.lineBreak = 'after';



        }
        flex.appendChild(div1);

    }



}