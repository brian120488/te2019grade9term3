$(document).ready(function(){

	$("#randomBtn1").click(getRandomPokemon1);
	$("#randomBtn2").click(getRandomPokemon2);

	function getRandomPokemon1() {
		let id = Math.floor(Math.random() * 800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response) {
			let name = response.name;
			$("#first").empty();
			$("#first").append(`<img src=${response.sprites.front_default} height=100px width=100px>`);
			$("#first").append(`<p>Name: ${name.charAt(0).toUpperCase()}${name.substring(1,name.length)}</p>`);
			
			//types
			let type1 = response.types[0].type.name;
			if(response.types.length == 1) {
				$("#first").append(`<p>Type: ${type1.charAt(0).toUpperCase()}${type1.substring(1,type1.length)}</p>`);
			}
			else {
				let type2 = response.types[1].type.name;
				$("#first").append(`<p>Type: ${type2.charAt(0).toUpperCase()}${type2.substring(1,type2.length)}/${type1.charAt(0).toUpperCase()}${type1.substring(1,type1.length)}`);
			}

			//stats
			for(let i = 5; i >= 0; i--) {
				let statName = response.stats[i].stat.name;
				$("#first").append(`<p>${statName.charAt(0).toUpperCase()}${statName.substring(1,statName.length)}: ${response.stats[i].base_stat}</p>`);
			}
		});
	}

	function getRandomPokemon2() {
		let id = Math.floor(Math.random() * 800);
		$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, function(response) {
			let name = response.name;
			$("#second").empty();
			$("#second").append(`<img src=${response.sprites.front_default} height=100px width=100px>`);
			$("#second").append(`<p>Name: ${name.charAt(0).toUpperCase()}${name.substring(1,name.length)}</p>`);
			
			//types
			let type1 = response.types[0].type.name;
			if(response.types.length == 1) {
				$("#second").append(`<p>Type: ${type1.charAt(0).toUpperCase()}${type1.substring(1,type1.length)}</p>`);
			}
			else {
				let type2 = response.types[1].type.name;
				$("#second").append(`<p>Type: ${type2.charAt(0).toUpperCase()}${type2.substring(1,type2.length)}/${type1.charAt(0).toUpperCase()}${type1.substring(1,type1.length)}`);
			}

			//stats
			for(let i = 5; i >= 0; i--) {
				let statName = response.stats[i].stat.name;
				$("#second").append(`<p>${statName.charAt(0).toUpperCase()}${statName.substring(1,statName.length)}: ${response.stats[i].base_stat}</p>`);
			}
		});
	}

	$("#searchBtn1").click(function(e) {
		let shiny = false;
		e.preventDefault();
		let name;
		let input = $("#search-txt1").val();

		if(input.substring(0,6) == "Shiny " || input.substring(0,6) == "shiny ") {
			name = input.charAt(6).toLowerCase() + input.substring(7,input.length);
			shiny = true;
		}
		else {
			name = input.charAt(0).toLowerCase() + input.substring(1,input.length);
		}

		$.get(`https://pokeapi.co/api/v2/pokemon/${name}/`, function(response) {
			let name = response.name;
			$("#first").empty();

			if(shiny == true) {
				$("#first").append(`<img src=${response.sprites.front_shiny} height=100px width=100px>`);
			}
			else {
				$("#first").append(`<img src=${response.sprites.front_default} height=100px width=100px>`);
			}

			$("#first").append(`<p>Name: ${name.charAt(0).toUpperCase()}${name.substring(1,name.length)}</p>`);

			//types
			let type1 = response.types[0].type.name;
			if(response.types.length == 1) {
				$("#first").append(`<p>Type: ${type1.charAt(0).toUpperCase()}${type1.substring(1,type1.length)}</p>`);
			}
			else {
				let type2 = response.types[1].type.name;
				$("#first").append(`<p>Type: ${type2.charAt(0).toUpperCase()}${type2.substring(1,type2.length)}/${type1.charAt(0).toUpperCase()}${type1.substring(1,type1.length)}`);
			}

			//stats
			for(let i = 5; i >= 0; i--) {
				let name = response.stats[i].stat.name;
				$("#first").append(`<p>${name.charAt(0).toUpperCase()}${name.substring(1,name.length)}: ${response.stats[i].base_stat}</p>`);
			}
		});	
	});	

	$("#searchBtn2").click(function(e) {
		let name = response.name;
		let shiny = false;
		e.preventDefault();
		let name;
		let input = $("#search-txt2").val();

		if(input.substring(0,6) == "Shiny " || input.substring(0,6) == "shiny ") {
			name = input.charAt(6).toLowerCase() + input.substring(7,input.length);
			shiny = true;
		}
		else {
			name = input.charAt(0).toLowerCase() + input.substring(1,input.length);
		}

		$.get(`https://pokeapi.co/api/v2/pokemon/${name}/`, function(response) {
			$("#second").empty();

			if(shiny == true) {
				$("#second").append(`<img src=${response.sprites.front_shiny} height=100px width=100px>`);
			}
			else {
				$("#second").append(`<img src=${response.sprites.front_default} height=100px width=100px>`);
			}

			//types
			let type1 = response.types[0].type.name;
			if(response.types.length == 1) {
				$("#second").append(`<p>Type: ${type1.charAt(0).toUpperCase()}${type1.substring(1,type1.length)}</p>`);
			}
			else {
				let type2 = response.types[1].type.name;
				$("#second").append(`<p>Type: ${type2.charAt(0).toUpperCase()}${type2.substring(1,type2.length)}/${type1.charAt(0).toUpperCase()}${type1.substring(1,type1.length)}`);
			}

			$("#first").append(`<p>Name: ${name.charAt(0).toUpperCase()}${name.substring(1,name.length)}</p>`);
			
			//stats
			for(let i = 5; i >= 0; i--) {
				let name = response.stats[i].stat.name;
				$("#second").append(`<p>${name.charAt(0).toUpperCase()}${name.substring(1,name.length)}: ${response.stats[i].base_stat}</p>`);
			}
		});	
	});	
})