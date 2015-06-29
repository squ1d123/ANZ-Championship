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
		.attr("xlink:href","images/Queensland Firebirds2.jpg")//.attr("id","home");

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
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/firebirds13.jpg")
					d3.csv("csv/2013-Table1.csv", function (data) {
						processAll(data);

					});
				});
				
	var year12 = svg.append("text").attr("x",1080).attr("y",280).style("font-size","33px").text("2012").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/firebirds12.jpg")
					d3.csv("csv/2012-Table1.csv", function (data) {
						processAll(data);

					});
				});
				
	var year11 = svg.append("text").attr("x",1180).attr("y",280).style("font-size","33px").text("2011").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/firebirds11.jpg")
					d3.csv("csv/2011-Table1.csv", function (data) {
						processAll(data);

					});
				});
				
	var year10 = svg.append("text").attr("x",1280).attr("y",280).style("font-size","33px").text("2010").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/firebirds10.jpg")
					d3.csv("csv/2010-Table1.csv", function (data) {
						processAll(data);

					});
				});
				
	var year09 = svg.append("text").attr("x",1380).attr("y",280).style("font-size","33px").text("2009").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/firebirds09.jpg")
					d3.csv("csv/2009-Table1.csv", function (data) {
						processAll(data);

					});
				});
				
	var year08 = svg.append("text").attr("x",1480).attr("y",280).style("font-size","33px").text("2008").on("mouseover",function () {
				
			}).on("mouseout",function () {
				
			}).on("click", function () {
				var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/firebirds09.jpg")
					d3.csv("csv/2008-Table1.csv", function (data) {
						processAll(data);

					});
				}); 

			var teamlogo = svg.append("svg:image").attr("x",830).attr("y",100).attr("width",800).attr("height",800).attr("xlink:href","images/rivalry/firebirds13.jpg")
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

