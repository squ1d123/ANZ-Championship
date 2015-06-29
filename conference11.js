var body = document.body, html = document.documentElement;				
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );



var svg = d3.select("body")
				.append("svg")
				.attr("width",width)
				.attr("height",height).attr("id","svg");	
				
				
	
	var pageImg = svg.append("svg:image").attr("x",20).attr("y",-70).attr("width",1800).attr("height",1000)
		.attr("xlink:href","images/newHomepage.jpg").attr("id","home");
	svg.append("rect").attr("x",70).attr("y",260).attr("width",1800).attr("height",700).attr("fill","white");
		
	svg.append("circle").attr("cx",165).attr("cy",120).attr("r",125).attr("fill","blue").style("opacity",0).on("click",function(){
			window.location = "index.html";
	});
		
		var gr = svg.append("g").attr("id","gr");
		
		
		var rct = svg.append("rect").attr("x",95).attr("y",310).attr("width",250).attr("height",215).attr("fill","red").style("opacity",0);
		
		
		var teamsTxt = gr.append("text").attr("x",340).attr("y",180).style("font-size","33px").text("Teams").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					window.location = "index.html";
				});
				
		var fixResTxt = gr.append("text").attr("x",550).attr("y",180).style("font-size","33px").text("Fixtures & Results").attr("id","fix").on("mouseover",function () {
			
			}).on("mouseout",function () {
				
			}).on("click", function () {
					
					window.location = "fixtures.html";	
				});
				
		var confTxt = gr.append("text").attr("x",960).attr("y",180).style("font-size","33px").text("Conference").on("mouseover",function () {
			
			}).on("mouseout",function () {
				
			}).on("click", function () {
					// svg.append("rect").attr("x",70).attr("y",260).attr("width",1800).attr("height",700).attr("fill","white");
				});
				
				
		var ladderTxt = gr.append("text").attr("x",1260).attr("y",180).style("font-size","33px").text("Ladder").on("mouseover",function () {
			
			}).on("mouseout",function () {
				
			}).on("click", function () {
					// svg.append("rect").attr("x",70).attr("y",260).attr("width",1800).attr("height",700).attr("fill","white");
					window.location = "ladder.html";	
				});

		//gr.select("#fix").on("click")();

		svg.append("rect").attr("x",70).attr("y",260).attr("width",1800).attr("height",700).attr("fill","white");

		var nz = true;

		var matches = function(roundArray) {
			svg.append("rect").attr("x",130).attr("y",332).attr("width",1800).attr("height",700).attr("fill","white");
			var nzTeams = ['Central Pulse', 'Waikato Bay of Plenty Magic', 'Southern Steel', 'Canterbury Tactix', 'Northern Mystics'];
			var ausTeams = ['Queensland Firebirds', 'Adelaide Thunderbirds', 'New South Wales Swifts', 'Melbourne Vixens', 'West Coast Fever'];

			var xHome = 200;
			var y = 350;
			var xAway = 450;
			var wdth = 400;
			var ht = 100;
			for (i = 0; i < roundArray.length; i++) {
				if (roundArray[i].HomeTeam === "") break;

				for(j=0; j<nzTeams.length; j++){
					for(k=0; k<nzTeams.length; k++){
						if(nz){
						if(roundArray[i].HomeTeam === nzTeams[j] && roundArray[i].AwayTeam === nzTeams[k]){

							var scores = roundArray[i].Score.split(" ");
							var score1 = parseInt(scores[0]);
							var score2 = parseInt(scores[2]);
							
							if (score1 > score2) {
								svg.append("text").attr("x",xHome+185).attr("y",y+120).style("font-size","22px").text(score1).style("fill","blue");
								svg.append("text").attr("x",xAway+185).attr("y",y+120).style("font-size","22px").text(score2);
							}
							else if (score1 < score2) {
								svg.append("text").attr("x",xHome+185).attr("y",y+120).style("font-size","22px").text(score1);
								svg.append("text").attr("x",xAway+185).attr("y",y+120).style("font-size","22px").text(score2).style("fill","blue");
							}
							else {
								svg.append("text").attr("x",xHome+185).attr("y",y+120).style("font-size","22px").text(score1);	
								svg.append("text").attr("x",xAway+185).attr("y",y+120).style("font-size","22px").text(score2);
							}

							svg.append("svg:image").attr("x",xHome).attr("y",y).attr("width",wdth).attr("height",ht)
								.attr("xlink:href","images/" + roundArray[i].HomeTeam + ".jpg");

							svg.append("text").attr("x",xHome+300).attr("y",y+60).style("font-size","30px").text("vs");

							svg.append("svg:image").attr("x",xAway).attr("y",y).attr("width",wdth).attr("height",ht)
								.attr("xlink:href","images/" + roundArray[i].AwayTeam + ".jpg");

								var date = roundArray[i].Date;
								svg.append("text").attr("x",xHome+150).attr("y",y+180).style("font-size","15px").text(date).attr("id","date");
								if (roundArray[i].hasOwnProperty('Time')) {
									svg.append("text").attr("x",xHome+220).attr("y",y+180).style("font-size","15px").text(roundArray[i].Time).attr("id","time");;
								} 
								var venue = roundArray[i].Venue;
								svg.append("text").attr("x",xHome+150).attr("y",y+210).style("font-size","15px").text(venue).attr("id","venue");


							xHome += 500;
							xAway += 500;

							// if (i == 2) {
							// 	y += 300;
							// 	xHome = 200;
							// 	xAway = 450;
							// }

						}
					}
					else{

						if(roundArray[i].HomeTeam === ausTeams[j] && roundArray[i].AwayTeam === ausTeams[k]){

							var scores = roundArray[i].Score.split(" ");
							var score1 = parseInt(scores[0]);
							var score2 = parseInt(scores[2]);
							
							if (score1 > score2) {
								svg.append("text").attr("x",xHome+185).attr("y",y+120).style("font-size","22px").text(score1).style("fill","blue");
								svg.append("text").attr("x",xAway+185).attr("y",y+120).style("font-size","22px").text(score2);
							}
							else if (score1 < score2) {
								svg.append("text").attr("x",xHome+185).attr("y",y+120).style("font-size","22px").text(score1);
								svg.append("text").attr("x",xAway+185).attr("y",y+120).style("font-size","22px").text(score2).style("fill","blue");
							}
							else {
								svg.append("text").attr("x",xHome+185).attr("y",y+120).style("font-size","22px").text(score1);	
								svg.append("text").attr("x",xAway+185).attr("y",y+120).style("font-size","22px").text(score2);
							}

							svg.append("svg:image").attr("x",xHome).attr("y",y).attr("width",wdth).attr("height",ht)
								.attr("xlink:href","images/" + roundArray[i].HomeTeam + ".jpg");

							svg.append("text").attr("x",xHome+300).attr("y",y+60).style("font-size","30px").text("vs");

							svg.append("svg:image").attr("x",xAway).attr("y",y).attr("width",wdth).attr("height",ht)
								.attr("xlink:href","images/" + roundArray[i].AwayTeam + ".jpg");

								var date = roundArray[i].Date;
								svg.append("text").attr("x",xHome+150).attr("y",y+180).style("font-size","15px").text(date).attr("id","date");
								if (roundArray[i].hasOwnProperty('Time')) {
									svg.append("text").attr("x",xHome+220).attr("y",y+180).style("font-size","15px").text(roundArray[i].Time).attr("id","time");;
								} 
								var venue = roundArray[i].Venue;
								svg.append("text").attr("x",xHome+150).attr("y",y+210).style("font-size","15px").text(venue).attr("id","venue");


							xHome += 500;
							xAway += 500;

							// if (i == 2) {
							// 	y += 300;
							// 	xHome = 200;
							// 	xAway = 450;
							// }

					}
				}
				}
			}
				

				
			}
		}

		
	d3.csv("csv/2011-Table1.csv", function (data) {
		var round1 = [];
		var round2 = [];
		var round3 = [];
		var round4 = [];
		var round5 = [];
		var round6 = [];
		var round7 = [];
		var round8 = [];
		var round9 = [];
		var round10 = [];
		var round11 = [];
		var round12 = [];
		var round13 = [];
		var round14 = [];
		var round15 = [];
		var round16 = [];
		var round17 = [];
		for (i = 0; i < data.length; i++) {
			if (data[i].Round === "1") round1.push(data[i]);
			if (data[i].Round === "2") round2.push(data[i]);
			if (data[i].Round === "3") round3.push(data[i]);
			if (data[i].Round === "4") round4.push(data[i]);
			if (data[i].Round === "5") round5.push(data[i]);
			if (data[i].Round === "6") round6.push(data[i]);
			if (data[i].Round === "7") round7.push(data[i]);
			if (data[i].Round === "8") round8.push(data[i]);
			if (data[i].Round === "9") round9.push(data[i]);
			if (data[i].Round === "10") round10.push(data[i]);
			if (data[i].Round === "11") round11.push(data[i]);
			if (data[i].Round === "12") round12.push(data[i]);
			if (data[i].Round === "13") round13.push(data[i]);
			if (data[i].Round === "14") round14.push(data[i]);
			if (data[i].Round === "15") round15.push(data[i]);
			if (data[i].Round === "16") round16.push(data[i]);
			if (data[i].Round === "17") round17.push(data[i]);
		}

		console.log(data);
		console.log(round17[0].HomeTeam);
		//console.log(round2[0]);

		matches(round1);

		


		
		var seasons = svg.append("text").attr("x",340).attr("y",280).style("font-size","33px").text("SEASON").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					
				});
				
	var year13 = svg.append("text").attr("x",510).attr("y",280).style("font-size","33px").text("2013").attr("id","year13").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					window.location = "conference.html";
				});
				
	var year12 = svg.append("text").attr("x",610).attr("y",280).style("font-size","33px").text("2012").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					window.location = "conference12.html";
				});
				
	var year11 = svg.append("text").attr("x",710).attr("y",280).style("font-size","33px").text("2011").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					// window.location = "conference11.html";
				});
				
	var year10 = svg.append("text").attr("x",810).attr("y",280).style("font-size","33px").text("2010").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					window.location = "conference10.html";
				});
				
	var year09 = svg.append("text").attr("x",910).attr("y",280).style("font-size","33px").text("2009").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					window.location = "conference09.html";
				});
				
	var year08 = svg.append("text").attr("x",1010).attr("y",280).style("font-size","33px").text("2008").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					window.location = "conference08.html";
				});
				
	var earlyS = svg.append("text").attr("x",340).attr("y",330).style("font-size","27px").text("Early-Season").attr("id","early").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
			svg.append("rect").attr("x",55).attr("y",405).attr("width",50).attr("height",400).attr("fill","white");				
				
			var first = svg.append("text").attr("x",60).attr("y",450).style("font-size","30px").text("1").attr("id","first").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round1);
				});
				
				var second = svg.append("text").attr("x",60).attr("y",500).style("font-size","30px").text("2").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round2);
				});
				
				var third = svg.append("text").attr("x",60).attr("y",550).style("font-size","30px").text("3").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round3);
				});
				
				var fourth = svg.append("text").attr("x",60).attr("y",600).style("font-size","30px").text("4").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round4);
				});
				
				var fifth = svg.append("text").attr("x",60).attr("y",650).style("font-size","30px").text("5").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round5);
				});
				
				var sixth = svg.append("text").attr("x",60).attr("y",700).style("font-size","30px").text("6").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round6);
				});

			svg.select("#first").on("click")();
				
				});

var NZ = svg.append("text").attr("x",1150).attr("y",280).style("font-size","27px").text("NZ").attr("id","nz").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				nz = true;
				matches(round1);
			});

var AUS = svg.append("text").attr("x",1250).attr("y",280).style("font-size","27px").text("AUS").attr("id","nz").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				nz = false;
				matches(round1);
			});

				
	var midS = svg.append("text").attr("x",600).attr("y",330).style("font-size","27px").text("Mid-Season").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				svg.append("rect").attr("x",55).attr("y",405).attr("width",50).attr("height",400).attr("fill","white");				
				
					var seventh = svg.append("text").attr("x",60).attr("y",450).style("font-size","30px").text("7").attr("id","seventh").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round7);
				});
				
				var eighth = svg.append("text").attr("x",60).attr("y",500).style("font-size","30px").text("8").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round8);
				});
				
				var ninth = svg.append("text").attr("x",60).attr("y",550).style("font-size","30px").text("9").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round9);
				});
				
				var tenth = svg.append("text").attr("x",60).attr("y",600).style("font-size","30px").text("10").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round10);
				});
				
				var eleventh = svg.append("text").attr("x",60).attr("y",650).style("font-size","30px").text("11").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round11);
				});
				
				var twelth = svg.append("text").attr("x",60).attr("y",700).style("font-size","30px").text("12").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round12);
				});

			svg.select("#seventh").on("click")();
				
				});
				
	var endS = svg.append("text").attr("x",820).attr("y",330).style("font-size","27px").text("End of Regular Season").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				svg.append("rect").attr("x",55).attr("y",405).attr("width",50).attr("height",400).attr("fill","white");				
				
					var f13 = svg.append("text").attr("x",60).attr("y",450).style("font-size","30px").text("13").attr("id","f13").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round13);
				});
				
				var f14 = svg.append("text").attr("x",60).attr("y",500).style("font-size","30px").text("14").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round14);
				});

			var f15 = svg.append("text").attr("x",60).attr("y",550).style("font-size","30px").text("15").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round15);
				});

			var f16 = svg.append("text").attr("x",60).attr("y",600).style("font-size","30px").text("16").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round16);
				});

			var f17 = svg.append("text").attr("x",60).attr("y",650).style("font-size","30px").text("17").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					matches(round17);
				});

			svg.select("#f13").on("click")();
				});
				
	var round = svg.append("text").attr("x",30).attr("y",400).style("font-size","30px").text("Round").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
					
				});

		svg.select("#early").on("click")();
			
		});

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