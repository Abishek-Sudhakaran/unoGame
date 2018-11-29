var cardNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "w", "R", "S", "+2", "+4"];
var colors = ['red', 'blue', 'green', 'yellow'];
var z = "6";
var y = "6";
var num = "6";
var sysnum = "6";
var clicked = false;
var arrow = false;
var systemRandom = Math.floor(Math.random() * 10);
var playerRandom = Math.floor(Math.random() * 10);
var systemScore=0;
var playerScore=0;
var elementPoId = "";
var element2PoId = "";
var names; 
var secScreen=document.getElementById("ss");
var minScreen=document.getElementById("mm");
var hourScreen=document.getElementById("hh");
if (systemRandom > playerRandom) {
  arrow = true;
}
 function setName(){
    if(document.getElementById("name").value==""){
    	alert("please enter name")
    }
    else{
	localStorage.setItem("names", document.getElementById("name").value);
    window.location="file:///home/vhitech/Desktop/html/css%20new/css/materialize/unoGame.html";
    }
}
 function getName(){
	 names=localStorage.getItem("names");
	 names = names.replace(/\s\s+/g, ' ');
	 names=names.trim();
}
for (var i = 0; i < 7 ; i++) {
  document.getElementById('p' + i).innerHTML =cardNumbers[Math.floor(Math.random() * 14)];
  document.getElementById('s' + i).innerHTML =cardNumbers[Math.floor(Math.random() * 14)];
  document.getElementById('p0' + i).style.background = colors[Math.floor(Math.random() * 4)];
  document.getElementById('c0' + i).style.background = colors[Math.floor(Math.random() * 4)];
  document.getElementById("c0" + i).style.backgroundImage = "url('black.jpg')";
  if (document.getElementById('s' + i).innerHTML == "+4" || document.getElementById('s' + i).innerHTML == "w") {
    document.getElementById('c0' + i).style.background = "black";
    document.getElementById('c0' + i).style.backgroundImage = "url('black.jpg')";
  }
  if (document.getElementById('p' + i).innerHTML == "+4" || document.getElementById('p' + i).innerHTML == "w") {
    document.getElementById('p0' + i).style.background = "black";
  }
}
document.getElementsByClassName('deckNumber')[0].innerHTML = cardNumbers[Math.floor(Math.random() * 9)];
document.getElementsByClassName("cards")[0].style.background = colors[Math.floor(Math.random() * 4)];

startTime();

function system() {
  arrow = true;
    scoreCard();
 
 if (document.getElementsByClassName("innerCards0").length == 2) {
       	alert("unoClicked");
       }
    debugger;
    var nul = 3;
    var len1 = document.getElementsByClassName("innerCards0").length;
    var len = document.getElementsByClassName("innerCards0").length
    for (var i = 0; i < len; i++) {
      if (document.getElementsByClassName("innerCards0")[i].style.backgroundColor == document.getElementById('cc').style.background || document.getElementsByClassName("SystemNumber")[i].innerHTML == document.getElementById("d1").innerHTML) {
        document.getElementById("d1").innerHTML = document.getElementsByClassName("SystemNumber")[i].innerHTML;
        document.getElementById('cc').style.background = document.getElementsByClassName("innerCards0")[i].style.backgroundColor
        var remove = document.getElementsByClassName("innerCards0")[i];
        remove.parentNode.removeChild(remove);

        if (document.getElementsByClassName("deckNumber")[0].innerHTML == "+2") {
          for (var j = 0; j < 2; j++) {
            setTimeout(addToPlayer, 1000);
          }
          document.getElementById("container").style.pointerEvents = "none";
          document.getElementById("playerArrow").style.visibility = "hidden";
          document.getElementById("systemArrow").style.visibility = "visible";
          setTimeout(system, 1000);
        } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "R") {
          document.getElementById("container").style.pointerEvents = "none";
          document.getElementById("playerArrow").style.visibility = "hidden";
          document.getElementById("systemArrow").style.visibility = "visible";
          setTimeout(system, 1000);


        } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "S") {
          document.getElementById("container").style.pointerEvents = "none";
          document.getElementById("playerArrow").style.visibility = "hidden";
          document.getElementById("systemArrow").style.visibility = "visible";
          setTimeout(system, 1000);
        }
        var len1 = len - 1;
        break;
      } else if (document.getElementsByClassName("SystemNumber")[i].innerHTML == "w") {
        document.getElementById('cc').style.background = colors[Math.floor(Math.random() * 4)];
        document.getElementsByClassName("deckNumber")[0].innerHTML = "";
        var remove = document.getElementsByClassName("innerCards0")[i]
        remove.parentNode.removeChild(remove);
        var len1 = len - 1;
        document.getElementById("container").style.pointerEvents = "auto";
        document.getElementById("playerArrow").style.visibility = "visible";
        document.getElementById("systemArrow").style.visibility = "hidden";
        break;
      } else if (document.getElementsByClassName("SystemNumber")[i].innerHTML == "+4") {
        var nul = 5;
        document.getElementById('cc').style.background = colors[Math.floor(Math.random() * 4)]
        document.getElementsByClassName("deckNumber")[0].innerHTML = "";
        var remove = document.getElementsByClassName("innerCards0")[i];
        remove.parentNode.removeChild(remove);
        for (var j = 0; j < 4; j++) {
          setTimeout(addToPlayer, 1000);
        }
        var len1 = len - 1;
        document.getElementById("container").style.pointerEvents = "none";
        document.getElementById("playerArrow").style.visibility = "hidden";
        document.getElementById("systemArrow").style.visibility = "visible";
        setTimeout(system, 1000);
        break;
      }

    }
    if (len == len1) {
      document.getElementById("container").style.pointerEvents = "none";
      document.getElementById("playerArrow").style.visibility = "hidden";
      document.getElementById("systemArrow").style.visibility = "visible";
      setTimeout(addToSystem, 1000);
    }
 
  if (nul != 5 && document.getElementsByClassName("deckNumber")[0].innerHTML != "+2" && document.getElementsByClassName("deckNumber")[0].innerHTML != "R" && document.getElementsByClassName("deckNumber")[0].innerHTML != "S" && len != len1) {
    document.getElementById("container").style.pointerEvents = "auto";
    document.getElementById("playerArrow").style.visibility = "visible";
    document.getElementById("systemArrow").style.visibility = "hidden";
  }
  document.getElementById("drawButton").style.pointerEvents = "auto";
  if(document.getElementsByClassName("innerCards0").length<1){
  	system();
  }  
}


if (arrow == true) {
  document.getElementById("systemArrow").style.visibility = "visible";  //this checking is for beginning of game
  setTimeout(system, 1000);
} else {
  document.getElementById("playerArrow").style.visibility = "visible";
}

function player(a, b) {
  var playerCardId=document.getElementById(a);
  var playerNumberId=document.getElementById(b);
 scoreCard();
  debugger;
  if (playerCardId.style.background == document.getElementById('cc').style.background || playerNumberId.innerHTML == document.getElementById("d1").innerHTML) {
    document.getElementById("d1").innerHTML = playerNumberId.innerHTML;
    document.getElementById('cc').style.background = playerCardId.style.background;
    var remove = playerCardId;
    remove.parentNode.removeChild(remove);
    if (document.getElementsByClassName("deckNumber")[0].innerHTML == "+2") {
      for (var j = 0; j < 2; j++) {
        setTimeout(plusTwo, 1000);
    }
      document.getElementById("container").style.pointerEvents = "auto";
      document.getElementById("playerArrow").style.visibility = "visible";
      player(a, b);
    } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "R") {
      document.getElementById("container").style.pointerEvents = "auto";
      document.getElementById("playerArrow").style.visibility = "visible";
      player(a, b);
    } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "S") {
      document.getElementById("playerArrow").style.visibility = "visible";
      document.getElementById("container").style.pointerEvents = "auto";
      player(a, b);
    }
    document.getElementById("playerArrow").style.visibility = "hidden";
    document.getElementById("systemArrow").style.visibility = "visible";
    document.getElementById("container").style.pointerEvents = "none";
    setTimeout(system, 1000);
    //system();
  } else if (playerNumberId.innerHTML == "w") {
    var remove = playerCardId;
    remove.parentNode.removeChild(remove);
    chooseColorOf();
    document.getElementById("playerArrow").style.visibility = "hidden";
    document.getElementById("systemArrow").style.visibility = "visible";
    document.getElementById("container").style.pointerEvents = "none";
    setTimeout(system, 1000);

  } else if (playerNumberId.innerHTML == "+4") {
    var remove = playerCardId;
    remove.parentNode.removeChild(remove);
     chooseColorOf();
    for (var j = 0; j < 4; j++) {
      setTimeout(plusTwo, 1000);
    }
    document.getElementById("container").style.pointerEvents = "auto";
    document.getElementById("systemArrow").style.visibility = "hidden";
    document.getElementById("playerArrow").style.visibility = "visible";
  }
  else if(playerCardId.style.background != document.getElementById('cc').style.background && playerNumberId.innerHTML != document.getElementById("d1").innerHTML && playerNumberId.innerHTML != "+4" && playerNumberId.innerHTML != "w"){
  	document.getElementById("drawArrow").style.visibility="visible"
  }
  if (document.getElementsByClassName("innerCards").length==1 && clicked == false) {
    addToPlayer();
    addToPlayer();
  }
  clicked = false;
  document.getElementById("drawButton").style.pointerEvents = "auto";
  document.getElementById("unoButton").style.background = "red";
}
function chooseColorOf(){
	   var x = prompt("choose a color");
    if (x == "y") {
      document.getElementById('cc').style.background = "yellow";
      document.getElementsByClassName("deckNumber")[0].innerHTML = '';
    } else if (x == "r") {
      document.getElementById('cc').style.background = "red";
      document.getElementsByClassName("deckNumber")[0].innerHTML = '';
    } else if (x == "g") {
      document.getElementById('cc').style.background = "green";
      document.getElementsByClassName("deckNumber")[0].innerHTML = '';
    } else if (x == "b") {
      document.getElementById('cc').style.background = "blue";
      document.getElementsByClassName("deckNumber")[0].innerHTML = '';
    }
    else if(x!="y" || x!="r" || x!="g" || x!="b"){
     var x = alert("please choose a valid color");	
     chooseColorOf();
    }
}
function draw() {
  debugger;
  ++z;
  ++y;
  var element = document.createElement("div");
  element.classList.add("innerCards");
  element.id = "p0" + z;
  elementPoId = "p0" + z;

  var element1 = document.createElement("div");
  element1.classList.add("squareBox");

  var element2 = document.createElement("div");
  element2.classList.add("playerNumber");

  element2.id = "p" + y;
  element2PoId = "p" + y;

  element2.innerHTML = cardNumbers[Math.floor(Math.random() * 14)];

  element1.appendChild(element2);
  element.appendChild(element1);
  element.style.background = colors[Math.floor(Math.random() * 4)];
  document.getElementById("container").appendChild(element);
  
  if (document.getElementById("p" + y).innerHTML == "+4" || document.getElementById("p" + y).innerHTML == "w") {
    document.getElementById("p0" + z).style.background = "black";
    document.getElementById("p0" + z).style.backgroundImage = "url('black.jpg')";
    document.getElementById("keep").style.visibility = "visible";
    document.getElementById("place").style.visibility = "visible";
    document.getElementById("container").style.pointerEvents = "none";
    document.getElementById("drawButton").style.pointerEvents = "none";
  } else if (document.getElementById("p" + y).innerHTML != document.getElementById("d1").innerHTML && document.getElementById("p0" + z).style.background != document.getElementById('cc').style.background && document.getElementById("p0" + z).style.background != "black") {
    element.setAttribute("onclick", "player('p0" + z + "','p" + y + "')");
    document.getElementById("systemArrow").style.visibility = "visible";
    document.getElementById("playerArrow").style.visibility = "hidden";
    document.getElementById("container").style.pointerEvents = "none";
    setTimeout(system, 1000); 
  } else if (document.getElementById("p" + y).innerHTML == document.getElementById("d1").innerHTML || document.getElementById("p0" + z).style.background == document.getElementById('cc').style.background || document.getElementById("p0" + z).style.background == "black") {
    document.getElementById("keep").style.visibility = "visible";
    document.getElementById("place").style.visibility = "visible";
    document.getElementById("container").style.pointerEvents = "none";
    document.getElementById("drawButton").style.pointerEvents = "none";
  }

  element.setAttribute("onclick", "player('p0" + z + "','p" + y + "')");
  document.getElementById("drawButton").style.pointerEvents = "none";
}

function keepTheCard() {
  document.getElementById("keep").style.visibility = "hidden";
  document.getElementById("place").style.visibility = "hidden";
  document.getElementById("drawButton").style.pointerEvents = "auto";
  document.getElementById("systemArrow").style.visibility = "visible";
  document.getElementById("playerArrow").style.visibility = "hidden";	
  setTimeout(system, 2000);
}

function placeTheCard() {
  document.getElementById("keep").style.visibility = "hidden";
  document.getElementById("place").style.visibility = "hidden";
  document.getElementById("drawButton").style.pointerEvents = "auto";
  player(elementPoId, element2PoId);
  system(setTimeout,1000);
}

function plusTwo() {
  ++num;
  ++sysnum;
  document.getElementById("container0").innerHTML =
    document.getElementById("container0").innerHTML +
    '<div class="innerCards0" id="c0' + num + '"><div class="SystemNumber" id="s' + sysnum + '"></div><div class="squareBox"><div class="box" style="background-color: red;"></div><div class="box" style="background-color: blue;"></div><div class="box" style="background-color: green;"></div><div class="box" style="background-color: yellow;"></div></div></div>';

  colorCard();

  function colorCard() {
    document.getElementById('c0' + num + '').style.background = colors[Math.floor(Math.random() * 4)];
    document.getElementById('c0' + num + '').style.backgroundImage = "url('black.jpg')";
    document.getElementById('s' + sysnum + '').innerHTML = cardNumbers[Math.floor(Math.random() * 14)];
    if (document.getElementById("s" + sysnum).innerHTML == "+4" || document.getElementById("s" + num).innerHTML == "w") {
      document.getElementById("c0" + num).style.background = "black";
      document.getElementById("c0" + num).style.backgroundImage = "url('black.jpg')";
    }

  }
}

function addToPlayer() {
  debugger;
  ++num;
  ++sysnum;
  document.getElementById("container").innerHTML =
    document.getElementById("container").innerHTML +
    '<div class="innerCards" id="pp0' + num + '"><div class="squareBox"><div class="playerNumber" id="pp' + sysnum + '"></div></div></div>';

  document.getElementById('pp0' + num + '').setAttribute("onclick", "player('pp0" + num + "','pp" + sysnum + "')");
  colorCard();

  function colorCard() {
    document.getElementById('pp0' + num + '').style.background = colors[Math.floor(Math.random() * 4)];
    document.getElementById('pp' + sysnum + '').innerHTML = cardNumbers[Math.floor(Math.random() * 14)];
    if (document.getElementById("pp" + sysnum).innerHTML == "+4" || document.getElementById("pp" + sysnum).innerHTML == "w") {
      document.getElementById("pp0" + num).style.background = "black";
    }

  }

}

function addToSystem() {
  debugger
  ++num;
  ++sysnum;
  document.getElementById("container0").innerHTML =
    document.getElementById("container0").innerHTML +
    '<div class="innerCards0" id="cc0' + num + '"><div class="SystemNumber" id="ss' + sysnum + '"></div><div class="squareBox"><div class="box" style="background-color: red;"></div><div class="box" style="background-color: blue;"></div><div class="box" style="background-color: green;"></div><div class="box" style="background-color: yellow;"></div></div></div>';

  colorCard();

  function colorCard() {
    debugger;
    document.getElementById('cc0' + num + '').style.background = colors[Math.floor(Math.random() * 4)];
    document.getElementById('cc0' + num + '').style.backgroundImage = "url('black.jpg')";
    document.getElementById('ss' + sysnum + '').innerHTML = cardNumbers[Math.floor(Math.random() * 14)];
    if (document.getElementById("ss" + sysnum).innerHTML == "+4" || document.getElementById("ss" + num).innerHTML == "w") {
      document.getElementById("cc0" + num).style.background = "black";
      document.getElementById("playerArrow").style.visibility = "hidden";
      document.getElementById("container").style.pointerEvents = "none";
      document.getElementById("systemArrow").style.visibility = "visible";
      setTimeout(system, 1000);
    } else if (document.getElementById("ss" + sysnum).innerHTML == document.getElementById("d1").innerHTML || document.getElementById("cc0" + num).style.background == document.getElementById('cc').style.background) {
      document.getElementById("container").style.pointerEvents = "none";
      document.getElementById("playerArrow").style.visibility = "hidden";
      document.getElementById("systemArrow").style.visibility = "visible";
      setTimeout(system, 1000);
    } else if (document.getElementById("ss" + sysnum).innerHTML != document.getElementById("d1").innerHTML && document.getElementById("cc0" + num).style.background != document.getElementById('cc').style.background && document.getElementById("ss" + sysnum).innerHTML != "+4" && document.getElementById("ss" + num).innerHTML != "w") {
      document.getElementById("container").style.pointerEvents = "auto";
      document.getElementById("playerArrow").style.visibility = "visible";
      document.getElementById("systemArrow").style.visibility = "hidden";
    }

  }

}

function uno() {
  clicked = true;
  document.getElementById("unoButton").style.background = "green";
}


function startTime() {
  secScreen.value--;
  if(secScreen.value<10){
    secScreen.value="0"+secScreen.value;
  }
   if (secScreen.value==0) {
    secScreen.value="59";
    minScreen.value--;
    if(minScreen.value=="-1"){scoreCard();}
  }
runState = setTimeout(startTime, 1000);
}

function displayScore(){
systemScore=0;
playerScore=0;
var finalLength=document.getElementsByClassName("innerCards0").length;

for(l=0;l<finalLength;l++){
	
		switch (document.getElementsByClassName("SystemNumber")[l].innerHTML){
			case "1":
			systemScore=systemScore+1;
			break;
			case "2":
			systemScore=systemScore+2;
			break;
			case "3":
			systemScore=systemScore+3;
			break;
			case "4":
			systemScore=systemScore+4;
			break;
			case "5":
			systemScore=systemScore+5;
			break;
			case "6":
			systemScore=systemScore+6;
			break;
			case "7":
			systemScore=systemScore+7;
			break;
			case "8":
			systemScore=systemScore+8;
			break;
            case "9":
			systemScore=systemScore+9;
			break;
			case "+2":
			systemScore=systemScore+20;
			break;
			case "S":
			systemScore=systemScore+20;
			break;
			case "R":
			systemScore=systemScore+20;
			break;
			case "w":
			systemScore=systemScore+50;
			break;
			case "+4":
			systemScore=systemScore+50;
			break;
		}
	}

var finalLength1=document.getElementsByClassName("innerCards").length;
for(l=0;l<finalLength1;l++){
	    switch (document.getElementsByClassName("playerNumber")[l].innerHTML){
			case "1":
			playerScore=playerScore+1;
			break;
			case "2":
			playerScore=playerScore+2;
			break;
			case "3":
			playerScore=playerScore+3;
			break;
			case "4":
			playerScore=playerScore+4;
			break;
			case "5":
			playerScore=playerScore+5;
			break;
			case "6":
			playerScore=playerScore+6;
			break;
			case "7":
			playerScore=playerScore+7;
			break;
			case "8":
			playerScore=playerScore+8;
			break;
            case "9":
			playerScore=playerScore+9;
			break;
			case "+2":
			playerScore=playerScore+20;
			break;
			case "S":
			playerScore=playerScore+20;
			break;
			case "R":
			playerScore=playerScore+20;
			break;
			case "w":
			playerScore=playerScore+50;
			break;
			case "+4":
			playerScore=playerScore+50;
			break;
		}
	}

}
function scoreCard(){
	displayScore();
	debugger;
 if (document.getElementsByClassName("innerCards").length == 0) {
    displayScore();
    document.getElementById("wrapper").style.display="none";
    document.getElementById("resultBox").style.visibility="visible";
    document.getElementById("result").innerHTML=names+ "WON";
    document.getElementById("score").innerHTML=names+" "+"Score<br>"+0;
    document.getElementById("loserScore").innerHTML="systemScore<br>"+systemScore;
}
else if (document.getElementsByClassName("innerCards0").length == 0) {
 	displayScore();
 	document.getElementById("wrapper").style.display="none";
    document.getElementById("resultBox").style.visibility="visible";
    document.getElementById("result").innerHTML="system WON";
    document.getElementById("score").innerHTML=names+" "+"Score<br>"+playerScore;
    document.getElementById("loserScore").innerHTML="systemScore<br>"+0;
    }
 	
 else if(minScreen.value==-1){
    displayScore();
  if(playerScore<systemScore){
    document.getElementById("wrapper").style.display="none";
    document.getElementById("resultBox").style.visibility="visible";
    document.getElementById("result").innerHTML=names+" "+"WON";
     document.getElementById("score").innerHTML=names+" "+"Score<br>"+playerScore;
      document.getElementById("loserScore").innerHTML="System Score<br>"+systemScore;}
 if(systemScore<playerScore){
 	  displayScore();
  	document.getElementById("wrapper").style.display="none";
    document.getElementById("resultBox").style.visibility="visible";
    document.getElementById("result").innerHTML="SYSTEM WON";
    document.getElementById("score").innerHTML="System Score<br>"+systemScore;
    document.getElementById("loserScore").innerHTML=names+" "+"Score<br>"+playerScore;}
  }

 }   
  



