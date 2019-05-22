const colors = ['white', 'red', 'blue', 'yellow', 'black'];
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

    return colors[randomNumberBetween(0, 4)];
}

function refresh() {

    document.location.reload();

}

function addDiv() {


    let div1;
    let flexDiv = document.createElement('DIV');
    let newFlexDiv;
    let flex = document.getElementById('flex');


    for (let b = 0; b <= randomNumberBetween(1, 7); b++) {
        newFlexDiv = document.createElement('DIV');
        newFlexDiv.style.backgroundColor = 'black';
        newFlexDiv.style.display = 'flex';
        newFlexDiv.style.height = '250px';
        newFlexDiv.style.alignContent = 'flex-start';
        newFlexDiv.style.backgroundColor = 'black';
        newFlexDiv.style.flexDirection = 'row';
        if (randomNumberBetween(1, 10) % 2 === 0) {

            newFlexDiv.style.flexDirection = 'column';
        }
        for (let a = 0; a <= randomNumberBetween(1, 7); a++) {

            for (let i = 0; i <= randomNumberBetween(1, 7); i++) {

                div1 = document.createElement('DIV');
                div1.style.margin = '1.5px';
                div1.style.backgroundColor = getColor();
                div1.style.flexGrow = randomNumberBetween(0, 10);

                document.body.appendChild(newFlexDiv);


                newFlexDiv.appendChild(div1);
            }
            document.body.appendChild(newFlexDiv);
        }



        document.body.appendChild(newFlexDiv);
    }



}