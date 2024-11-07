var start = false;
var random;

document.onkeydown = GetKeyPress;

function GetRandom() {
    return Math.floor(Math.random() * 4) + 1;
  }

function GetKeyPress(e) {

    if (!start){
        return;
    }

    e = e || window;

    if (e.keyCode == 38) {
        // up arrow
        ChecKey(3);
    }
    else if (e.keyCode == 40) {
        // down arrow
        ChecKey(4);
    }
    else if (e.keyCode == 37) {
        // left arrow
        ChecKey(1);
    }
    else if (e.keyCode == 39) {
        // right arrow
        ChecKey(2);
    }

}

function UpdateGame(){
    random = GetRandom();
    ChangeScreen(random);
}

function StartGame(){
    UpdateGame();
    start = true;
}

function StopGame(){
    start = false;
}

function ChangeScreen(direction){

    const elem = document.getElementById("display-text");
    
    switch (direction){
        case 1:
            elem.innerHTML = "LEFT";
            break;
            
            case 2:
            elem.innerHTML = "RIGHT";
            break;
            
            case 3:
            elem.innerHTML = "UP";
            break;
            
            case 4:
            elem.innerHTML = "DOWN";
            break;
    }
}

function ChecKey(number){
    const elem = document.getElementById("display-text");
    
    if (number == random){
        console.log("jo");
        elem.style.color = "green";
        myMove();
    }
    else{
        console.log("rossz");
        elem.style.color = "red";
    }

    delay(1000).then(() => console.log('ran after 1 second1 passed'));
    UpdateGame();
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }