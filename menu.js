
	var menu = 
	    [ 
		"F-Snake",
	      "pamel_slots",
	      "travis-slot-machine",
	      "HangMan",
		    "Slot-Machine",
	      "mia-slot-machine",
		    "mega-slot",
		    "avatar-slots",
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
		    "games/wipeglass"
		    
	    ];


var menu_index = 0;

				function serve_menu(name){
				var res = sendreq(name+"/meta.json");
					res.onload = function(){

					if(res.responseText){
			let jsonData = JSON.parse(res.responseText);

						if(menu_index<(menu_index+4)){
e('menu').innerHTML += '<a class=block href='+jsonData["run"]+' style="animation: 20s slider infinite;" ><img src='+jsonData["cover_image"]+' width=200px />'+jsonData["title"]+'</a>';
						}else{
e('menu-text').innerHTML += '<a href='+jsonData["run"]+' style="display:block;font-size:2em; text-decoration: none;" >'+jsonData["title"]+'</a>';

						}
						
if(menu_index<(menu_index+8)){
serve_menu( menu[menu_index]);
menu_index+=1;
}
					}	
					};
			
	}
	
serve_menu(menu[menu_index]);
		
