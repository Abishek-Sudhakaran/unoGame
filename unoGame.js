var cardNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "w", "R", "S", "+2", "+4"];
var colors = ['red', 'blue', 'green', 'yellow'];
var z = "6";
var y = "6";
var num = "6";
var sysnum = "6";
var clicked = false;
var arrow=false;
var systemRandom=Math.floor(Math.random()*10);
var playerRandom=Math.floor(Math.random()*10);
if(systemRandom>playerRandom){
	arrow=true;
}



for (var i = 0; i < 7; i++) {
  document.getElementById('p' + i).innerHTML =
    cardNumbers[Math.floor(Math.random() * 14)];
  document.getElementById('s' + i).innerHTML =
    cardNumbers[Math.floor(Math.random() * 14)];

  document.getElementById('p0' + i).style.background = colors[Math.floor(Math.random() * 4)];
  document.getElementById('c0' + i).style.background = colors[Math.floor(Math.random() * 4)];
  //document.getElementById("c0"+i).style.backgroundImage = "url('black.jpg')";
  if (document.getElementById('s' + i).innerHTML == "+4" || document.getElementById('s' + i).innerHTML == "w") {
    document.getElementById('c0' + i).style.background = "black";
    //document.getElementById('c0' + i).style.backgroundImage = "url('black.jpg')";
  }
  if (document.getElementById('p' + i).innerHTML == "+4" || document.getElementById('p' + i).innerHTML == "w") {
    document.getElementById('p0' + i).style.background = "black";
  }
}
document.getElementsByClassName('deckNumber')[0].innerHTML =cardNumbers[Math.floor(Math.random() * 9)];
document.getElementsByClassName("cards")[0].style.background = colors[Math.floor(Math.random() * 4)];
    




function system() {
  if (document.getElementsByClassName("innerCards").length == 0) {
    player(a, b);
  } else {
    debugger;
    var len1 = document.getElementsByClassName("innerCards0").length;
    var len = document.getElementsByClassName("innerCards0").length
    for (var i = 0; i < len; i++) {
      if (document.getElementsByClassName("innerCards0")[i].style.backgroundColor == document.getElementById('cc').style.background) {
        document.getElementById("d1").innerHTML = document.getElementsByClassName("SystemNumber")[i].innerHTML;
        var remove = document.getElementsByClassName("innerCards0")[i];
        remove.parentNode.removeChild(remove);
        if (document.getElementsByClassName("deckNumber")[0].innerHTML == "+2") {
          for (var j = 0; j < 2; j++) {
            setTimeout(addToPlayer, 3000);
            //addToPlayer();
          }
          // setTimeout(system,3000);
          arrow=true;
          setTimeout(system, 3000);
        } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "R") {

          setTimeout(system, 3000);


        } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "S") {

          setTimeout(system, 3000);
          //system();

        }
        var len1 = len - 1;
        break;
      } else if (document.getElementsByClassName("SystemNumber")[i].innerHTML == document.getElementById("d1").innerHTML) {
        document.getElementById('cc').style.background = document.getElementsByClassName("innerCards0")[i].style.backgroundColor

        var remove = document.getElementsByClassName("innerCards0")[i]
        remove.parentNode.removeChild(remove);
        if (document.getElementsByClassName("deckNumber")[0].innerHTML == "+2") {
          for (var j = 0; j < 2; j++) {
            setTimeout(addToPlayer, 3000);
            //addToPlayer();
          }
          setTimeout(system, 3000);
        } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "R") {

          setTimeout(system, 3000);
          //system();

        } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "S") {

          setTimeout(system, 3000);
          //system();

        }
        var len1 = len - 1;

        break;
      } else if (document.getElementsByClassName("SystemNumber")[i].innerHTML == "w") {
        document.getElementById('cc').style.background = colors[Math.floor(Math.random() * 4)];
        document.getElementsByClassName("deckNumber")[0].innerHTML = "";
        var remove = document.getElementsByClassName("innerCards0")[i]
        remove.parentNode.removeChild(remove);
        var len1 = len - 1;


        break;
      } else if (document.getElementsByClassName("SystemNumber")[i].innerHTML == "+4") {
        document.getElementById('cc').style.background = colors[Math.floor(Math.random() * 4)]
        document.getElementsByClassName("deckNumber")[0].innerHTML = "";
        var remove = document.getElementsByClassName("innerCards0")[i];
        remove.parentNode.removeChild(remove);

        for (var j = 0; j < 4; j++) {
          setTimeout(addToPlayer, 3000);
          //addToPlayer();

        }
        var len1 = len - 1;
        setTimeout(system, 3000);
        //system();
        break;

      }

    }
    if (len == len1) {
      setTimeout(addToSystem, 3000);
      //addToSystem();
    }
  }
}
if(arrow==true){
	document.getElementById("systemArrow").style.visibility="visible";
	setTimeout(system,3000);
}
else{document.getElementById("playerArrow").style.visibility="visible";}
function player(a, b) {

  debugger;
  if (document.getElementById(a).style.background == document.getElementById('cc').style.background) {
    document.getElementById("d1").innerHTML = document.getElementById(b).innerHTML;
    var remove = document.getElementById(a);
    remove.parentNode.removeChild(remove);
    if (document.getElementsByClassName("deckNumber")[0].innerHTML == "+2") {
      for (var j = 0; j < 2; j++) {
        setTimeout(plusTwo, 3000);
      }
      player(a, b);
    } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "R") {
      player(a, b);
    } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "S") {
      player(a, b);
    }
    setTimeout(system, 3000);
    //system();
  } else if (document.getElementById(b).innerHTML == document.getElementById("d1").innerHTML) {
    document.getElementById('cc').style.background = document.getElementById(a).style.background;
    var remove = document.getElementById(a);
    remove.parentNode.removeChild(remove);
    if (document.getElementsByClassName("deckNumber")[0].innerHTML == "+2") {
      for (var j = 0; j < 2; j++) {
        setTimeout(plusTwo, 3000);
      }
      player(a, b);
    } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "R") {
      player(a, b);
    } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "S") {
      player(a, b);
    } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "r") {
      player(a, b);
    } else if (document.getElementsByClassName("deckNumber")[0].innerHTML == "s") {
      player(a, b);
    }
    setTimeout(system, 3000);
    //system();
  } else if (document.getElementById(b).innerHTML == "w") {
    var remove = document.getElementById(a);
    remove.parentNode.removeChild(remove);
    var x = prompt("choose a color");
    if (x == "y") {
      document.getElementById('cc').style.background = "yellow";
      document.getElementsByClassName("deckNumber")[0].innerHTML = '';
    }
    if (x == "r") {
      document.getElementById('cc').style.background = "red";
      document.getElementsByClassName("deckNumber")[0].innerHTML = '';
    }
    if (x == "g") {
      document.getElementById('cc').style.background = "green";
      document.getElementsByClassName("deckNumber")[0].innerHTML = '';
    }
    if (x == "b") {
      document.getElementById('cc').style.background = "blue";
      document.getElementsByClassName("deckNumber")[0].innerHTML = '';
    }
    setTimeout(system, 3000);

  } else if (document.getElementById(b).innerHTML == "+4") {
    var remove = document.getElementById(a);
    remove.parentNode.removeChild(remove);
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
    for (var j = 0; j < 4; j++) {
      setTimeout(plusTwo, 3000);
      //plusTwo();
    }

  }
  if (document.getElementsByClassName("innerCards").length == 1) {
    if (clicked == false) {
      addToPlayer();
      addToPlayer();
    }
  }
  clicked = false;
  document.getElementById("unoButton").style.background = "red";
}

function draw() {
  debugger;
  ++z;
  ++y;
  var element = document.createElement("div");
  element.classList.add("innerCards");
  element.id = "p0" + z;


  var element1 = document.createElement("div");
  element1.classList.add("squareBox");

  var element2 = document.createElement("div");
  element2.classList.add("playerNumber");

  element2.id = "p" + y;
  element2.innerHTML = cardNumbers[Math.floor(Math.random() * 14)];

  element1.appendChild(element2);
  element.appendChild(element1);
  element.style.background = colors[Math.floor(Math.random() * 4)];
  document.getElementById("container").appendChild(element);

  if (document.getElementById("p" + y).innerHTML == "+4" || document.getElementById("p" + y).innerHTML == "w") {
    document.getElementById("p0" + z).style.background = "black";
    //document.getElementById("p0" + z).style.backgroundImage = "url('black.jpg')";
  } else if (document.getElementById("p" + y).innerHTML != document.getElementById("d1").innerHTML && document.getElementById("p0" + z).style.background != document.getElementById('cc').style.background && document.getElementById("p0" + z).style.background != "black") {
    element.setAttribute("onclick", "player('p0" + z + "','p" + y + "')");
    setTimeout(system, 3000);
    //system(); 
  }

  element.setAttribute("onclick", "player('p0" + z + "','p" + y + "')");
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
    //document.getElementById('c0'+num+'').style.backgroundImage = "url('black.jpg')";
    document.getElementById('s' + sysnum + '').innerHTML = cardNumbers[Math.floor(Math.random() * 14)];
    if (document.getElementById("s" + sysnum).innerHTML == "+4" || document.getElementById("s" + num).innerHTML == "w") {
      document.getElementById("c0" + num).style.background = "black";
      //document.getElementById("c0" + num).style.backgroundImage = "url('black.jpg')";
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
    // document.getElementById('c0'+num+'').style.backgroundImage = "url('black.jpg')";
    document.getElementById('pp' + sysnum + '').innerHTML = cardNumbers[Math.floor(Math.random() * 14)];
    if (document.getElementById("pp" + sysnum).innerHTML == "+4" || document.getElementById("pp" + sysnum).innerHTML == "w") {
      document.getElementById("pp0" + num).style.background = "black";
      //document.getElementById("pp0" + num).style.backgroundImage = "url('black.jpg')";
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
    //document.getElementById('cc0'+num+'').style.backgroundImage = "url('black.jpg')";
    document.getElementById('ss' + sysnum + '').innerHTML = cardNumbers[Math.floor(Math.random() * 14)];
    if (document.getElementById("ss" + sysnum).innerHTML == "+4" || document.getElementById("ss" + num).innerHTML == "w") {
      document.getElementById("cc0" + num).style.background = "black";
      //document.getElementById("cc0" + num).style.backgroundImage = "url('black.jpg')";
      setTimeout(system, 1000);
    } else if (document.getElementById("ss" + sysnum).innerHTML == document.getElementById("d1").innerHTML || document.getElementById("cc0" + num).style.background == document.getElementById('cc').style.background) {
      //system()  
      setTimeout(system, 1000);
    }

  }

}


function uno() {
  clicked = true;
  if (clicked == true) {
    document.getElementById("unoButton").style.background = "green";
  }
}
