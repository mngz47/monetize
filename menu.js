
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
		    "space-invaders"
		    
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

function splash(){

    var logo = ne("img");

  logo.src = "https://raw.githubusercontent.com/mngz47/productlists-resources/main/p_logo.jpg";
  logo.width = "200px";
  logo.style.position = "absolute";
  logo.style.left = "50%";
  logo.style.top = "50%";
  setInterval(toggleEnlarge(logo),1000);

document.body.onload = function(){

    document.body.appendChild(logo);
    setInterval(toggleEnlarge(logo),1000);

    setTimeout(funtion(){   document.body.removeChild(logo);  };,6000)
  
};
    
    
}

splash();

funtion toggleEnlarge(logo){

if(logo.class){
 logo.class = "";
}else{
 logo.class = "img-enlarge";
}
  
}
