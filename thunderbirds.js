var body = document.body, html = document.documentElement;				
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );


var svg = d3.select("body")
				.append("svg")
				.attr("width",width)
				.attr("height",height).attr("id","svg");

	var pageImg = svg.append("svg:image").attr("x",20).attr("y",-24).attr("width",1800).attr("height",300)
		.attr("xlink:href","images/bannertest.jpg").attr("id","home");
		
	svg.append("circle").attr("cx",165).attr("cy",120).attr("r",125).attr("fill","blue").style("opacity",0).on("click",function(){
			window.location = "index.html";
	});
	

	var teamlogo = svg.append("svg:image").attr("x",50).attr("y",270).attr("width",500).attr("height",500)
		.attr("xlink:href","images/Adelaide Thunderbirds2.jpg")//.attr("id","home");


			var gr = svg.append("g").attr("id","gr");

					var seasons = svg.append("text").attr("x",810).attr("y",700).style("font-size","33px").text("Home");
		var seasons = svg.append("text").attr("x",1210).attr("y",700).style("font-size","33px").text("Away");
		var seasons = svg.append("text").attr("x",1510).attr("y",700).style("font-size","33px").text("Total");
		
		
	//	var rct = svg.append("rect").attr("x",95).attr("y",310).attr("width",250).attr("height",215).attr("fill","red").style("opacity",0);
		
		
		var teamsTxt = gr.append("text").attr("x",340).attr("y",180).style("font-size","33px").text("Teams").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					window.location.reload(true);
				});
				
		var fixResTxt = gr.append("text").attr("x",550).attr("y",180).style("font-size","33px").text("Fixtures & Results").on("mouseover",function () {
			
			}).on("mouseout",function () {
				
			}).on("click", function () {
					
					window.location = "fixtures.html";
				});
				
		var confTxt = gr.append("text").attr("x",960).attr("y",180).style("font-size","33px").text("Conference").on("mouseover",function () {
			
			}).on("mouseout",function () {
				
			}).on("click", function () {
					svg.append("rect").attr("x",70).attr("y",260).attr("width",1800).attr("height",700).attr("fill","white");
					window.location = "conference.html";
				});
				
				
		var ladderTxt = gr.append("text").attr("x",1260).attr("y",180).style("font-size","33px").text("Ladder").on("mouseover",function () {
			
			}).on("mouseout",function () {
				
			}).on("click", function () {
					svg.append("rect").attr("x",70).attr("y",260).attr("width",1800).attr("height",700).attr("fill","white");
					window.location = "ladder.html";	
				});


	//Team logos in blue banner
		var tbirds = svg.append("rect").attr("x",337).attr("y",36).attr("width",90).attr("height",85).attr("fill","blue").style("opacity",0).on("click",function(){
			thunderBTeam();
	});

		var vix = svg.append("rect").attr("x",475).attr("y",36).attr("width",85).attr("height",85).attr("fill","blue").style("opacity",0).on("click",function(){
			vixenTeam();
	});

		var nsw = svg.append("rect").attr("x",615).attr("y",36).attr("width",110).attr("height",85).attr("fill","blue").style("opacity",0).on("click",function(){
			newSWTeam();
	});

		var fbirds = svg.append("rect").attr("x",770).attr("y",36).attr("width",100).attr("height",85).attr("fill","blue").style("opacity",0).on("click",function(){
			fireBTeam();
	});

		var wcf = svg.append("rect").attr("x",915).attr("y",36).attr("width",85).attr("height",85).attr("fill","blue").style("opacity",0).on("click",function(){
			westFeverTeam();
	});

		var tac = svg.append("rect").attr("x",1030).attr("y",36).attr("width",160).attr("height",85).attr("fill","blue").style("opacity",0).on("click",function(){
			tactixTeam();
	});
		var pul = svg.append("rect").attr("x",1230).attr("y",36).attr("width",140).attr("height",85).attr("fill","blue").style("opacity",0).on("click",function(){
			pulseTeam();
	});
		var mys = svg.append("rect").attr("x",1410).attr("y",36).attr("width",85).attr("height",85).attr("fill","blue").style("opacity",0).on("click",function(){
			mysticsTeam();
	});
		var ste = svg.append("rect").attr("x",1535).attr("y",36).attr("width",100).attr("height",85).attr("fill","blue").style("opacity",0).on("click",function(){
			steelTeam();
	});
		var mgc = svg.append("rect").attr("x",1660).attr("y",36).attr("width",110).attr("height",85).attr("fill","blue").style("opacity",0).on("click",function(){
			magicTeam();
	});


	/* Season Stuff */
	var seasons = svg.append("text").attr("x",810).attr("y",280).style("font-size","33px").text("SEASON").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					
				});

		
	var year13 = svg.append("text").attr("x",980).attr("y",280).style("font-size","33px").text("2013").attr("id","year13").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/thunderbirds13.jpg")
					d3.csv("csv/2013-Table1.csv", function (data) {
						processAll(data);

					});
				});
				
	var year12 = svg.append("text").attr("x",1080).attr("y",280).style("font-size","33px").text("2012").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/thunderbirds12.jpg")
					d3.csv("csv/2012-Table1.csv", function (data) {
						processAll(data);

					});
				});
				
	var year11 = svg.append("text").attr("x",1180).attr("y",280).style("font-size","33px").text("2011").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/thunderbirds11.jpg")
					d3.csv("csv/2011-Table1.csv", function (data) {
						processAll(data);

					});
				});
				
	var year10 = svg.append("text").attr("x",1280).attr("y",280).style("font-size","33px").text("2010").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/thunderbirds10.jpg")
					d3.csv("csv/2010-Table1.csv", function (data) {
						processAll(data);

					});
				});
				
	var year09 = svg.append("text").attr("x",1380).attr("y",280).style("font-size","33px").text("2009").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/thunderbirds09.jpg")
					d3.csv("csv/2009-Table1.csv", function (data) {
						processAll(data);

					});
				});
				
	var year08 = svg.append("text").attr("x",1480).attr("y",280).style("font-size","33px").text("2008").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/thunderbirds10.jpg")
					d3.csv("csv/2008-Table1.csv", function (data) {
						processAll(data);

					});
				}); 

		d3.csv("csv/2013-Table1.csv", function (data) {
			processAll(data);
		});

var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/thunderbirds13.jpg")





//--------------------------------------------------------------------          ------------------------------------------------------        --------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Analysing data

	var processAll = function(data){
		var teams = {
			firebirds: {'played':0, 'wins':0, 'draws': 0, 'loss':0, 'points':0, 'name' : 'Queensland Firebirds' }
		,	thunderbirds: {'played':0, 'wins':0, 'draws': 0, 'loss':0, 'points':0, 'name' : 'Adelaide Thunderbirds' }
		,	tactix: {'played':0, 'wins':0, 'draws': 0, 'loss':0, 'points':0 , 'name' : 'Canterbury Tactix'}
		,	mystics: {'played':0, 'wins':0, 'draws': 0, 'loss':0, 'points':0 , 'name' : 'Northern Mystics'}
		,	swifts: {'played':0, 'wins':0, 'draws': 0, 'loss':0, 'points':0 , 'name' : 'New South Wales Swifts'}
		,	vixens: {'played':0, 'wins':0, 'draws': 0, 'loss':0, 'points':0 , 'name' : 'Melbourne Vixens'}
		,	fever: {'played':0, 'wins':0, 'draws': 0, 'loss':0, 'points':0 , 'name' : 'West Coast Fever'}
		,	magic: {'played':0, 'wins':0, 'draws': 0, 'loss':0, 'points':0 , 'name' : 'Waikato Bay of Plenty Magic'}
		,	pulse: {'played':0, 'wins':0, 'draws': 0, 'loss':0, 'points':0 , 'name' : 'Central Pulse'}
		,	steel: {'played':0, 'wins':0, 'draws': 0, 'loss':0, 'points':0 , 'name' : 'Southern Steel'}

		};

		var sortedTeams = [];


		var x = calculateWins(data, teams);
		calculateLoss(data, teams);
		calculatePlayed(teams);

		//pushing to array
		for (var item in teams) {
			if (teams.hasOwnProperty(item)) {
			  var obj = teams[item];
			  sortedTeams.push(obj);
			}
		}
	}

	var compar = function(a, b){
		return b.points - a.points;
	}

	var updateValues = function(teams, sortedTeams){
		var table = document.getElementById("ladderTable");
		var rows = table.rows;
		console.log(rows.length);
		for (i=0; i < rows.length-1; i++){
			rows[i+1].cells[1].innerHTML = sortedTeams[i].name;
			rows[i+1].cells[2].innerHTML = sortedTeams[i].played;
			rows[i+1].cells[3].innerHTML = sortedTeams[i].wins;
			rows[i+1].cells[4].innerHTML = sortedTeams[i].draws;
			rows[i+1].cells[5].innerHTML = sortedTeams[i].loss;
			rows[i+1].cells[6].innerHTML = sortedTeams[i].points;
		}
	}

	var calculatePlayed = function(teams){
		for (var item in teams) {
			if (teams.hasOwnProperty(item)) {
			  var obj = teams[item];
			  obj.played = obj.wins + obj.loss;
			}
		}

	}

	var calculateLoss = function(data, teams){
		for (i = 0; i < data.length; i++) {
			if (data[i].HomeTeam === "") continue;
			var scores = data[i].Score.split(" ");
			var score1 = parseInt(scores[0]);
			var score2 = parseInt(scores[2]);
			 if(score1 < score2){
			 	if (data[i].HomeTeam === "Queensland Firebirds"){
			 		teams.firebirds.loss += 1;
			 		
			 	}
				if(data[i].HomeTeam === "Adelaide Thunderbirds"){
					teams.thunderbirds.loss += 1;
			 	}
			 	if(data[i].HomeTeam === "Southern Steel"){
					teams.steel.loss += 1;
			 	}
			 	if(data[i].HomeTeam === "Melbourne Vixens"){
					teams.vixens.loss += 1;
			 	}
			 	if(data[i].HomeTeam === "Central Pulse"){
					teams.pulse.loss += 1;
			 	}
			 	if(data[i].HomeTeam === "Waikato Bay of Plenty Magic"){
					teams.magic.loss += 1;
			 	}
			 	if(data[i].HomeTeam === "Northern Mystics"){
					teams.mystics.loss += 1;
			 	}
			 	if(data[i].HomeTeam === "West Coast Fever"){
					teams.fever.loss += 1;
			 	}
			 	if(data[i].HomeTeam === "Canterbury Tactix"){
					teams.tactix.loss += 1;
			 	}
			 	if(data[i].HomeTeam === "New South Wales Swifts"){
					teams.swifts.loss += 1;
			 	}
			 }
			 else{
			 	if (data[i].AwayTeam === "Queensland Firebirds"){
			 		teams.firebirds.loss += 1;
			 		
			 	}
				if(data[i].AwayTeam === "Adelaide Thunderbirds"){
					teams.thunderbirds.loss += 1;
			 	}
			 	if(data[i].AwayTeam === "Southern Steel"){
					teams.steel.loss += 1;
			 	}
			 	if(data[i].AwayTeam === "Melbourne Vixens"){
					teams.vixens.loss += 1;
			 	}
			 	if(data[i].AwayTeam === "Central Pulse"){
					teams.pulse.loss += 1;
			 	}
			 	if(data[i].AwayTeam === "Waikato Bay of Plenty Magic"){
					teams.magic.loss += 1;
			 	}
			 	if(data[i].AwayTeam === "Northern Mystics"){
					teams.mystics.loss += 1;
			 	}
			 	if(data[i].AwayTeam === "West Coast Fever"){
					teams.fever.loss += 1;
			 	}
			 	if(data[i].AwayTeam === "Canterbury Tactix"){
					teams.tactix.loss += 1;
			 	}
			 	if(data[i].AwayTeam === "New South Wales Swifts"){
					teams.swifts.loss += 1;
			 	}
			 }
		}
	}


	var calculateWins = function(data, teams){
		for (i = 0; i < data.length; i++) {
			if (data[i].HomeTeam === "") continue;
			var scores = data[i].Score.split(" ");
			var score1 = parseInt(scores[0]);
			var score2 = parseInt(scores[2]);
			 if(score1 > score2){
			 	if (data[i].HomeTeam === "Queensland Firebirds"){
			 		teams.firebirds.wins += 1;
			 		
			 	}
				if(data[i].HomeTeam === "Adelaide Thunderbirds"){
					teams.thunderbirds.wins += 1;
			 	}
			 	if(data[i].HomeTeam === "Southern Steel"){
					teams.steel.wins += 1;
			 	}
			 	if(data[i].HomeTeam === "Melbourne Vixens"){
					teams.vixens.wins += 1;
			 	}
			 	if(data[i].HomeTeam === "Central Pulse"){
					teams.pulse.wins += 1;
			 	}
			 	if(data[i].HomeTeam === "Waikato Bay of Plenty Magic"){
					teams.magic.wins += 1;
			 	}
			 	if(data[i].HomeTeam === "Northern Mystics"){
					teams.mystics.wins += 1;
			 	}
			 	if(data[i].HomeTeam === "West Coast Fever"){
					teams.fever.wins += 1;
			 	}
			 	if(data[i].HomeTeam === "Canterbury Tactix"){
					teams.tactix.wins += 1;
			 	}
			 	if(data[i].HomeTeam === "New South Wales Swifts"){
					teams.swifts.wins += 1;
			 	}
			 }
			 else{
			 	if (data[i].AwayTeam === "Queensland Firebirds"){
			 		teams.firebirds.wins += 1;
			 		
			 	}
				if(data[i].AwayTeam === "Adelaide Thunderbirds"){
					teams.thunderbirds.wins += 1;
			 	}
			 	if(data[i].AwayTeam === "Southern Steel"){
					teams.steel.wins += 1;
			 	}
			 	if(data[i].AwayTeam === "Melbourne Vixens"){
					teams.vixens.wins += 1;
			 	}
			 	if(data[i].AwayTeam === "Central Pulse"){
					teams.pulse.wins += 1;
			 	}
			 	if(data[i].AwayTeam === "Waikato Bay of Plenty Magic"){
					teams.magic.wins += 1;
			 	}
			 	if(data[i].AwayTeam === "Northern Mystics"){
					teams.mystics.wins += 1;
			 	}
			 	if(data[i].AwayTeam === "West Coast Fever"){
					teams.fever.wins += 1;
			 	}
			 	if(data[i].AwayTeam === "Canterbury Tactix"){
					teams.tactix.wins += 1;
			 	}
			 	if(data[i].AwayTeam === "New South Wales Swifts"){
					teams.swifts.wins += 1;
			 	}
			 }
		}
	}



function thunderBTeam() {
	window.location = "thunderbirds.html";
}

function vixenTeam() {
	window.location = "vixens.html";
}

function newSWTeam() {
	window.location = "swifts.html";
}

function fireBTeam() {
	window.location = "firebirds.html";
}

function westFeverTeam() {
	window.location = "fever.html";
}

function tactixTeam() {
	window.location = "tactix.html";
}

function pulseTeam() {
	window.location = "pulse.html";
}

function mysticsTeam() {
	window.location = "mystics.html";
}

function steelTeam() {
	window.location = "steel.html";
}

function magicTeam() {
	window.location = "magic.html";
}

