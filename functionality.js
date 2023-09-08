let score = document.querySelectorAll(".score");

let dice = document.querySelectorAll(".dice");

let onDice = document.querySelectorAll('.onDice');

for (let i = 0; i < dice.length; i++) {

    dice[i].onclick = () => {

        let value = random();
        console.log(value)
        onDice[i].innerHTML = value
        if (value == 6 && score[i].innerHTML == 0) {
            score[i].innerHTML = 1;
        }
        else if (score[i].innerHTML != 0) {
            if (+score[i].innerHTML + +value >= 101) {
                score[i].innerHTML = +score[i].innerHTML
            }
            else {
                score[i].innerHTML = +score[i].innerHTML + value;

            }
        }

        if(score[i].innerHTML == 3){
            score[i].innerHTML = 37;
        }else if(score[i].innerHTML == 8){
            score[i].innerHTML = 48;
        }else if(score[i].innerHTML == 65){
            score[i].innerHTML = 97;
        }else if(score[i].innerHTML == 43){
            score[i].innerHTML = 20;
        }else if(score[i].innerHTML == 74){
            score[i].innerHTML = 45;
        }else if(score[i].innerHTML == 99){
            score[i].innerHTML = 59;
        }

         if (i == 3) {
            dice[0].disabled = false;
            dice[3].disabled = true;
        }
        else {
            dice[i].disabled = true
            dice[i + 1].disabled = false;
        }
    }
}


function random() {
    let num = Math.floor((Math.random() * 6) + 1);
    return num;
}




