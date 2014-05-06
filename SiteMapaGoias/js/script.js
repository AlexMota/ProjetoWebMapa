/**
 * @author Alexandre
 */

 function mudarCor(){ 
 var mapaSVG = document.getElementById("mapa").contentDocument;
  var municipio = mapaSVG.getElementById("path44");
  municipio.onmouseover = function () {
    alert("Ha!");
   //municipio.style.fill = "lime";
  }; 
} 