var body = document.body, html = document.documentElement;				
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );



var svg = d3.select("body")
				.append("svg")
				.attr("width",width)
				.attr("height",height).attr("id","svg");	
				
				
				
	
	var pageImg = svg.append("svg:image").attr("x",20).attr("y",-70).attr("width",1800).attr("height",1000)
		.attr("xlink:href","images/newHomepage.jpg").attr("id","home");
		
	svg.append("circle").attr("cx",165).attr("cy",120).attr("r",125).attr("fill","blue").style("opacity",0).on("click",function(){
			window.location.reload(true);
	});
		
		var gr = svg.append("g").attr("id","gr");
		
		
		//var rct = svg.append("rect").attr("x",95).attr("y",310).attr("width",250).attr("height",215).attr("fill","red").style("opacity",0);
		
		
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




	//Australian Teams					
		
	var thunderBirds = svg.append("rect").attr("x",95).attr("y",310).attr("width",250).attr("height",215).attr("fill","blue").style("opacity",0).on("click",function(){
			thunderBTeam();
			d3.transition().select("#svg").remove();	
	});
	
	var vixens = svg.append("rect").attr("x",425).attr("y",310).attr("width",250).attr("height",215).attr("fill","blue").style("opacity",0).on("click",function(){
			vixenTeam();
			d3.transition().select("#svg").remove();	
	});
	
	var newSW = svg.append("rect").attr("x",755).attr("y",310).attr("width",250).attr("height",215).attr("fill","blue").style("opacity",0).on("click",function(){
			newSWTeam();
			d3.transition().select("#svg").remove();	
	});
	
	var firebirds = svg.append("rect").attr("x",1085).attr("y",310).attr("width",250).attr("height",215).attr("fill","blue").style("opacity",0).on("click",function(){
			fireBTeam();
			d3.transition().select("#svg").remove();	
	});
	
	var westFever = svg.append("rect").attr("x",1415).attr("y",310).attr("width",250).attr("height",215).attr("fill","blue").style("opacity",0).on("click",function(){
			westFeverTeam();
			d3.transition().select("#svg").remove();	
	});
		
		
				
	//NZ Teams			
	
	var tactix = svg.append("rect").attr("x",95).attr("y",600).attr("width",250).attr("height",215).attr("fill","blue").style("opacity",0).on("click",function(){
			tactixTeam();
			d3.transition().select("#svg").remove();	
	});
	
	var pulse = svg.append("rect").attr("x",425).attr("y",600).attr("width",250).attr("height",215).attr("fill","blue").style("opacity",0).on("click",function(){
			pulseTeam();
			d3.transition().select("#svg").remove();	
	});
	
	var mystics = svg.append("rect").attr("x",755).attr("y",600).attr("width",250).attr("height",215).attr("fill","blue").style("opacity",0).on("click",function(){
			mysticsTeam();
			d3.transition().select("#svg").remove();	
	});
	
	var steel = svg.append("rect").attr("x",1085).attr("y",600).attr("width",250).attr("height",215).attr("fill","blue").style("opacity",0).on("click",function(){
			steelTeam();
			d3.transition().select("#svg").remove();	
	});
	
	var magic = svg.append("rect").attr("x",1415).attr("y",600).attr("width",250).attr("height",215).attr("fill","blue").style("opacity",0).on("click",function(){
			magicTeam();
			d3.transition().select("#svg").remove();	
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


	
	

				
	
				



