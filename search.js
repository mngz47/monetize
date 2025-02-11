
var search_index = 0;
  
  function search(game){

	  if(search_index<menu.length){
		// if(game.length>4){
	  if(menu[search_index].toLowerCase().includes(game.toLowerCase())){

		  e('menu').innerHTML = '';
		   menu_index = search_index;
		  serve_menu(menu[search_index]);
		 
		  
	  }else{
		  search(game);
		  search_index+=1;
	  }
	  
		// } 
  }else{
	          search_index=0;
  }
  }
