
var search_index = 0;
 
  function search2(game){

	  if(search_index<menu.length){
		 if(game.length>4){

		var menu_item = menu[search_index].toLowerCase();	
		var search_item = game.toLowerCase();;
			 
	  if(menu_item.includes(search_item)){

		  e('menu').innerHTML = '';
		   menu_index = search_index;
		  serve_menu(menu[search_index]);
	
	  }else{
		  search(game);
		  search_index+=1;
	  }
	  
		 } 
  }else{
	          search_index=0;
  }
  }

 function search(game){

	  for(var a=0;a<menu.length;a++){
		 if(game.length>3){

		var menu_item = menu[a].toLowerCase();	
		var search_item = game.toLowerCase();;
			 
	  if(menu_item.includes(search_item)){

		  e('menu').innerHTML = '';
		  menu_index = a;
		  serve_menu(menu[a]);
			break;
	  }
	  } 
  	  }
  }
