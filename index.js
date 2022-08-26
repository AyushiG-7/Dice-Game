document.querySelector("body").addEventListener("click", function(){

  var rn1= Math.floor(Math.random() * 6 +1);
  var rn2= Math.floor(Math.random() * 6 +1);

  var rsource1 = "images/" + "dice" + rn1 + ".png";
  var rsource2 = "images/" + "dice" + rn2 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", rsource1);
  document.querySelectorAll("img")[1].setAttribute("src", rsource2);

  if(rn1==rn2)
    document.querySelector("h1").innerHTML="Draw";

  else if (rn1>rn2)
    document.querySelector("h1").innerHTML="Player 1 Wins";

  else document.querySelector("h1").innerHTML="Player 2 Wins";
});
