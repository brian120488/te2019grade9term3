$(document).ready(function(){

	$("#btn1").click(getPokemon1);
	$("#btn2").click(getPokemon2);

	function getPokemon1() {
		let id = Math.floor(Math.random() * 800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response) {
			console.log(response);
			$("#first").empty();
			$("#first").append(`<img src=${response.sprites.front_default} height=100px width=100px>`);
			for(let i = 5; i >= 0; i--) {
				let name = response.stats[i].stat.name;
				$("#first").append(`<p>${name.charAt(0).toUpperCase()}${name.substring(1,name.length)}: ${response.stats[i].base_stat}</p>`);
			}
		});
	}

	function getPokemon2() {
		let id = Math.floor(Math.random() * 800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response) {
			$("#second").empty();
			$("#second").append(`<img src=${response.sprites.front_default} height=100px width=100px>`);
			for(let i = 5; i >= 0; i--) {
				let name = response.stats[i].stat.name;
				$("#second").append(`<p>${name.charAt(0).toUpperCase()}${name.substring(1,name.length)}: ${response.stats[i].base_stat}</p>`);
			}
		});
	}
})