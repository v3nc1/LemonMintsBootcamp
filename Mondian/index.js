const colors = ['red', 'blue', 'yellow', 'white', 'black'];

function randomNumber() {
    const min = 0;
    const max = 5;
    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    document.getElementById("number").innerHTML = random;
}

function randomNumberBetween(low, hi) {
    const min = low;
    const max = hi;
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

    for (let a = 0; a <= 3; a++) {

        flexDiv = document.createElement('DIV');
        flexDiv.style.display = 'flex';
        flexDiv.style.alignContent = 'flex-start';
        flexDiv.style.backgroundColor = 'black';

        document.body.appendChild(flex);

        for (let i = 0; i <= 5; i++) {

            div1 = document.createElement('DIV');
            div1.style.backgroundColor = getColor();
            div1.style.flexGrow = 2;

            // flexDiv.appendChild(div1)
            document.body.appendChild(div1);
        }

        flex.appendChild(div1);
    }
    // let flex=document.createElement('div')


}