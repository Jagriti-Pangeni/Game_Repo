let newHit;
let score=0;

function makeBubble(){
    let clutter="";

for(i=1; i<=200; i++){
    let a= Math.floor(Math.random()*100)+1;
    clutter+=`<div class="bg-green-800 h-10 w-10 rounded-full mt-2 ml-3 text-center pt-1 hover:bg-green-950 cursor-pointer">${a}</div>`;
}

document.querySelector("#btm").innerHTML=clutter 
}

function Timer(){
    var timer=60;
    var runtime=setInterval(function(){
        if(timer>=1){
            document.querySelector("#settime").innerHTML=timer;
            timer--;
        }
        else{
            clearInterval(runtime);
            document.querySelector("#btm").innerHTML=`<h1>Game Over</h1><br>`
            document.querySelector("#btm").innerHTML=`<h1>Your score is:</h1>${score}`

        }
    },1000);
}

function increaseScore(){
    score+=10;
    document.querySelector("#getscore").textContent=score;
    
}
function decreaseScore(){
    score-=10;
    document.querySelector("#getscore").textContent=score;
    
}
function getNewHit(){
    newHit=Math.floor(Math.random()*100)+1
    document.querySelector("#hit").innerHTML=newHit;
}

document.querySelector("#btm").addEventListener("click",function(data1){
    data=Number(data1.target.textContent);
    
    if(newHit==data){
        increaseScore();
        getNewHit();
    }
    else{
        decreaseScore();
        getNewHit();
    }
})

makeBubble();
Timer();
getNewHit();

