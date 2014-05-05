/**
 * @author Alexandre
 */

 function mudarCorMunicipio(){ 
 var mapaSVG = document.getElementById("mapa").contentDocument;
  var municipio = mapaSVG.getElementById("path298");
  municipio.setAttribute("style","none");
  //municipio.style.fill = "#00CC00";
} 