// Cada 10 segundos comprobar si está el botón del cofre y hacer clic si esta
setInterval(function() {
	if (document.querySelector("div.Layout-sc-nxg1ff-0.krJuwP button > div")){
		document.querySelector("div.Layout-sc-nxg1ff-0.krJuwP button > div").click()
	}
}, 10000);