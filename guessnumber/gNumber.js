// 隨機取得一個數字
function getRandom() {
  return parseInt(Math.random()*100);
}

// 呼叫一個數字
var answer = getRandom();

// 比較數字大小
function compare(guessNumber){
  var rel="";
  if(guessNumber>answer) rel="Too Big";
  else if(guessNumber<answer) rel="Too Small";
  else rel="Congratulations!~"
  return rel;
}

// 開始遊戲
function startGame(){
  var result ="";
  while(true){
    var guessNumber=prompt("猜一個數字"+result+"?")
    var result=compare(guessNumber);
    //alert(result);
    if(result=="Congratulations!~"){
        break;
    }
  }
}

function getNumber(){
  var guessNumber= document.getElementById("guess_number").value;
  var showNumber= document.getElementById("show_number");
  var showText= document.getElementById("show_text");
  showNumber.innerHTML= guessNumber;
  showText.innerHTML= compare(guessNumber);
  
  var result = compare(guessNumber, answer);
  showText.innerHTML = result;
  if (result == "Congratulations!~") {
      $("#show_text").css("color", "pink");
      $("#show_number").css("color", "pink");
  }
}

// var result=compare(guessNumber);
// if(result=="猜對了!~");{
//   i=1;
//   alert(result);
// }


// var luckyNumber= getRandom();
// guessNumber= prompt("請猜一個數字~");
// if(guessNumber==luckyNumber){console.log("bingo~");}
// else if(guessNumber<luckyNumber){console.log("繼續猜，太小了~");}
// else{console.log("繼續猜，超過了~")}