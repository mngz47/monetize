
var search_index = 0;
  
  function search(txt){

	  if(search_index<menu.length){
		 if(txt.length>4){
	  if(menu[search_index].toLowerCase().includes(txt.toLowerCase())){

		  e('menu').innerHTML = '';
		   menu_index = search_index;
		  serve_menu(menu[search_index]);
		 
		  
	  }else{
		  search(txt);
		  search_index+=1;
	  }
	  
		 } 
  }else{
	          search_index=0;
  }
  }
