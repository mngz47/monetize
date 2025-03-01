
	var menu = 
	    [ 
		"F-Snake",
	      "pamel_slots",
	      "travis-slot-machine",
	      "HangMan",
		    "Slot-Machine",
	      "mia-slot-machine",
		    "mega-slot",
		    "amerani-canvas-slots/src",
		    "bieberpong-static",
		    "html5-pong",
		    "html5-asteroids",
		    
		    "Karma-Slots",
	      "Nirvana_Slot_Machine",
	      "tahas-slot-machine",
	      "SnakesLadders",
		    "kasi_nametest",
	      "cv_engine",
		    "business_plan_engine",
		    "games/2048",
		    "games/40963",
		    "games/attackonball",
		    "games/blockdown",

		     "games/bottle3",
	      "games/breaklovers",
	      "games/breakout3",
	      "games/candy",
		    "games/circlepath",
	      "games/eatball",
		    "games/eliminate",
		    "games/fctank",
		    "games/flappybird",
		    "games/fruit",
		    "games/fruitwar",

		    "games/getcockscomb",
	      "games/hitball",
	      "games/hitgraywolf3",
	      "games/jokingyou",
		    "games/kite",
	      "games/knifehit3",
		    "games/kupao",
		    "games/legendofwolf",
		    "games/magicplain",
		    "3D-Maze-Game",
		    "games/maze",

		       "games/memory",
	      "games/minorminer",
	      "games/mota",
	      "games/p2ball",
		    "games/pacman",
	      "games/petparty",
		    "games/pixelstar",
		    "games/plane",
		    "games/planewar",
		    "games/prize",
		    "games/puzzle",

		    "games/quickrush3",
	      "games/quitsmoke",
	      "games/rhythm",
	      "games/run",
		    "games/runrobot",
	      "games/russianblock",
		    "games/shenjingmao",
		    "games/shoot",
		    "games/simplechess",
		    "games/skeletonguard",
		    "games/snap",

		    "games/stardog",
	      "games/starship",
	      "games/susliks",
	      "games/swordart",
		    "games/tacit",
	      "games/tank",
		    "games/timberpig",
		    "games/wipeglass",
		    "memory-game",
		    "Nokia3310-Snake",
		    "chrome-trex-game",
		    "candy-crush",
		    "pac-man-2",
		    "Tetris-Basic",
		    "space-invaders",
		    "HexGL-Racing",
		    "HTML5-Games/audio-game",
		    "HTML5-Games/ball-shooting",
		    "HTML5-Games/box2d-car-game",
		    "HTML5-Games/canvas-untangle-game",
		    "HTML5-Games/count-99",
		    "HTML5-Games/css3-matching-game",
		    "HTML5-Games/multiply-defense",
		    "HTML5-Games/pingpoing",
		    "HTML5-Games/rush"
	    ];


var menu_index = 15;

if(getCookie("menu_index")){
menu_index = parseInt(getCookie("menu_index"));
}


console.log("Menu Index ("+menu_index+") Menu Size("+menu.length+")");

				function serve_menu(name){
				var res = sendreq(name+"/meta.json");
					res.onload = function(){

					if(res.responseText){
				if(!res.responseText.includes("<!DOCTYPE")){
			let jsonData = JSON.parse(res.responseText);

						if(menu_index%2==0){
e('menu').innerHTML += '<a class=block href='+jsonData["run"]+' style="animation: 20s slider infinite;" ><img src='+jsonData["cover_image"]+' width=200px />'+jsonData["title"]+'</a>';
						}else{
e('menu-text').innerHTML += '<a href='+jsonData["run"]+' style="display:block;font-size:2em; text-decoration: none;" >'+jsonData["title"]+'</a>';
						}

if(menu_index%8==0){
		menu_index+=1; 
		setCookie("menu_index", menu_index, 30);
}else{
	if(menu_index<menu.length){
		menu_index+=1; 
		setCookie("menu_index", menu_index, 30);
		serve_menu( menu[menu_index]);
	}else{
		menu_index=0;
		setCookie("menu_index", menu_index, 30);
	}
}
					}
					}	
					};
			
	}
	
serve_menu(menu[menu_index]);

//ux

var content;

var logo = ne("img");
var preLoad = ne("div");

function splash(){

  logo.src = "https://raw.githubusercontent.com/mngz47/productlists-resources/main/p_logo.jpg";
  logo.style.width = "200px";
  logo.style.position = "absolute";
	logo.style.transition = "width 2s, height 3s";
  logo.style.left = Math.round(screen.width/2)+"px";
  logo.style.top = Math.round(screen.height/2)+"px";

    
  setInterval(toggleEnlarge(logo),1000);

	//document.body
window.onload = function(){

    content = document.body.innerHTML;

	
	preLoad.style.position = "absolute";
	preLoad.style.left= "0px";
	preLoad.style.top= "0px";
	preLoad.style.width= "100%";
	preLoad.style.height= "100%";
	preLoad.style.zIndex= "10000";
	preLoad.style.backgroundColor= "black";

//	document.body.innerHTML = "";

//document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/mngz47/productlists-resources/main/p_logo.jpg)";
//document.body.style.backgroundRepeat = "no-repeat";
//document.body.style.backgroundPosition = Math.round(window.offsetWidth/2)+" "+Math.round(window.offsetHeight/2);
//document.body.style.backgroundSize = "200px";
	
	preLoad.appendChild(logo);
    document.body.appendChild(preLoad);
    setInterval(toggleEnlarge,2000);

    setTimeout(function(){  welcome();  },10000);
  
};    
}

splash();

function toggleEnlarge(){	
if(logo.style.width == "70px"){
   logo.style.width = "200px";
}else if(logo.style.width == "200px"){
   logo.style.width = "150px";
}else if(logo.style.width == "150px"){
   logo.style.width = "100px";
}else{
   logo.style.width = "70px";
}
}

var welcome_message = ne("p");

function welcome(){

	welcome_message.style.display = "block";
	welcome_message.style.backgroundColor = "white";
    welcome_message.innerHTML = "The project is non-profit for the purpose to preserve classic games. Search slots to win free credits, you will also access 600 free monthly lifetime credits. <a href=# onclick='confirm_welcome();return false;' >Confirm</a>";
    preLoad.appendChild(welcome_message);
    
}

function confirm_welcome(){
    freeMonthlyQuota();
 //   document.body.innerHTML=content;
	  document.body.removeChild(preLoad);
	
}

//build customer relationship

function freeMonthlyQuota(){

    if(getCookie("CreditFreeQuota")){

        var lastQuota = new Date(getCookie("CreditFreeQuota"));

        if((lastQuota+60*60*24*30)> Date.now()){ //time for more free credits
		
		if(getCookie("price")){
 			setCookie("price", this.credits+600 , 30);
		}else{
			setCookie("price", 600 , 30);
		}
	}else{
			alert("Buy credits or wait till the end of 30 days for more free credits.");
	}

    }else{ //first free credits
	    	if(getCookie("price")){
 			setCookie("price", this.credits+600 , 30);
		}else{
			setCookie("price", 600 , 30);
		}
	    setCookie("CreditFreeQuota", Date.now().toString()  , 30);
	    alert("Success - You have loaded your first 600 free credits. Your next free credits will load in 30 days");
    }

}
