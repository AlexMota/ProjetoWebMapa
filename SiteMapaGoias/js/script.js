/**
 * @author Alexandre
 */

function mudarCor() {
	var mapaSVG = document.getElementById("mapa").contentDocument;

	var cidades = new Array(246);

	//var cont = 0;
	var estilo;

	for (var i = 0; i < 246; i++) {

		cidades[i] = mapaSVG.getElementById("mun_" + (i + 1));

		cidades[i].addEventListener("mouseover", function() {
			estilo = this.getAttribute("style");
			this.style.fill = "black";
		}, false);
		
		cidades[i].addEventListener("mouseout", function() {
			this.style = estilo;
		}, false);
		

	}

} 