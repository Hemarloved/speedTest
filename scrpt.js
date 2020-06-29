const testWrapper = document.querySelector('.test-box')
const tabText = document.querySelector("#tab p").innerHTML;
const testArea = document.querySelector("#test-area");
const timer = document.querySelector('.set');
const  starterButton = document.querySelector('#starter');

var set = [0,0,0,0];
var interval; 
var timerRunning = false;


function leadingZero (set){
    if (set <= 9){
        set = "0" + set;
    }
    return set;
}


function runTimer(){
    let currentTime = leadingZero(set[0]) + ":" + leadingZero(set[1]) + ":" + leadingZero(set[2]);
    timer.innerHTML = currentTime;
    set[3]++ ; 

    set[0] = Math.floor((set[3]/100)/60);
    set[1] = Math.floor((set[3]/100)) - (set[0] *60)
    set[2] = Math.floor(set[3] -(set[1] *100)- (set[0]*6000))
}

function spellCheck(){
    let textEntered = testArea.value;
    let tabTextMatch = tabText.substring(0,textEntered.length);

    if (textEntered == tabText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == tabTextMatch) {
            testWrapper.style.borderColor = "#429890"; 
        } else{
            testWrapper.style.borderColor = "#E95D0F";
        }
    }
 
    
}

 function start(){ 
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer,10);
    }
    console.log(textEnteredLength);
}

function reset() {
    clearInterval(interval);
    interval = null;
    set = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "indigo";

}


 


//event listener for keyboard function
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
starterButton.addEventListener("click", reset, false);