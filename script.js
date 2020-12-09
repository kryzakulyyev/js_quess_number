//1
const randomNumber=Math.floor(Math.random()*51)

//2
let checkButton = document.getElementById("btn-check");
let guess = document.getElementsByClassName("guess")[0];
let tryButton = document.getElementsByClassName("again")[0];

//7
let point = 10
//3
checkButton.onclick=()=>{
  console.log(guess.value, randomNumber);
  if(point>1){
    if(Number(guess.value)<=0 || Number(guess.value)>51  ){
      document.getElementsByClassName("message")[0].innerHTML="Enter Number 1-50"
      point--;
      document.getElementsByClassName("score")[0].innerHTML=point;
     }
    else if(Number(guess.value)>randomNumber){ 
     document.getElementsByClassName("message")[0].innerHTML="It is high"
     point--;
     document.getElementsByClassName("score")[0].innerHTML=point;
    }else if(Number(guess.value)<randomNumber){
      document.getElementsByClassName("message")[0].innerHTML="It is low"
      point--;
      document.getElementsByClassName("score")[0].innerHTML=point;
     }else if(Number(guess.value)===randomNumber){    //5
      document.getElementsByClassName("message")[0].innerHTML="You are Winner!!!"
      document.getElementsByClassName("number")[0].innerHTML=randomNumber;
      document.querySelector("body").style.backgroundColor = "Green" 
      document.getElementsByClassName("score")[0].innerHTML=point;
     }
    }else if(point<=0){
      document.getElementsByClassName("score")[0].innerHTML=point;
      document.getElementsByClassName("message")[0].innerHTML="You are loser"
     }

  }
  //4
  tryButton.onclick=()=>{
    console.log(randomNumber)
    point = 10;
    document.getElementsByClassName('score')[0].innerHTML = point;
    randomNumber =  Math.floor(Math.random() * 25 + 1);
    document.querySelector('body').style.backgroundColor = "#222";
    document.getElementsByClassName('number')[0].innerHTML = '?';
    guess.value = ' ';
    document.querySelector('.message').innerHTML = "Start guessing...";
    guess.focus();
  if(document.getElementsByClassName('highscore')[0].innerHTML<highScore){
    document.getElementsByClassName('highscore')[0].innerHTML = highScore;
  }
  }
 
  
  
  
  