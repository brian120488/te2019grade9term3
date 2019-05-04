$(document).ready(function(){
	$("#btn1").click(getPokemon1);

	function getPokemon1() {
		let id = Math.floor(Math.random() * 800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response) {
			console.log(response);
			$("#first").empty();
			$("#first").append(`<img src=${response.sprites.front_default} height=100px width=100px>`);
			for(let i = 0; i < 6; i++) {
				$("#first").append(`<p>${response.stats[i].stat.name.charAt(0).toUpperCase} + ${response.stats[i].stat.name.substring(0,).toUpperCase}: ${response.stats[0].base_stat}</p>`);
			}

		});

	}

	$("#btn2").click(getPokemon2);

	function getPokemon2() {
		let id = Math.floor(Math.random() * 800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response) {
			$("#second").empty();
			$("#second").append(`<img src=${response.sprites.front_default} height=100px width=100px>
								 <p>Speed: ${response.stats[0].base_stat}</p>`);
		});
	}
})