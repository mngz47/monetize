# monetize
<h4 onclick="toggle(e('start'));" id=credits style='position:absolute;float:right;margin:4px;background:rgba(0,0,0,0.7);color:white;' ></h4>

	<script src=https://mngz47.github.io/F-Snake/rr/cookie.js ></script>
   <script src=https://mngz47.github.io/F-Snake/rr/challenge.js ></script>
   <script src=https://mngz47.github.io/F-Snake/rr/payfast.js ></script>
       <script src=https://mngz47.github.io/pamel_slots/rr/monetize.js ></script>

<div id=start style="position: absolute;background-color:rgba(0,0,0,0.7);width:100%;height:100%;z-index:1000;" >
   <h4>Credits:</h4>
   <div style='margin-top:10px;' ><input type=number id=credits value=40 placeholder=credits /><button onclick='monetize_purchase(e("credits").value);return false;' >buy</button></div>

	 <div style='float:right;' ><input type=text id=credits placeholder=games /><button onclick='search(e("credits").value);return false;' >search</button></div>
          <div id=search_results style="position:absolute;float:right;" ></div>
<script>

var search_index = 0;
  
  function search(txt){

   var games =  e('contents').getElementsByTagName('p');

	  if(search_index<games.length){
		 if(txt.length>4){
	  if(games[search_index].innerHTML.toLowerCase().includes(txt.toLowerCase())){
			e('search_results').appendChild(games[search_index]);
	  }else{
		  search(txt);
		  search_index+=1;
	  }
	  
		 } 
  }else{
	          search_index=0;
  }
  }
  
</script>
	
   <div id=menu style="overflow-x:auto;overflow:hidden;height:200px;width:100%;"></div>

<script>

	var menu = 
	    [ 
		"F-Snake",
	      "pamel_slots",
	      "travis-slot-machine",
	      "HangMan",
		    "Slot-Machine",
	      "mia-slot-machine"
	    ];


var menu_index = 0;

				function serve_menu(name){
				var res = sendreq(name+"/meta.json");
					res.onload = function(){

					if(res.responseText){
			let jsonData = JSON.parse(res.responseText);
			
e('menu').innerHTML += '<a class=block href='+jsonData["run"]+' style="animation: 20s slider infinite;" ><img src='+jsonData["cover_image"]+' width=200px />'+jsonData["title"]+'</a>';

//e('slider').getElementsByTagName('figure')[0].innerHTML += '<img src="'+jsonData["cover_image"]+'" />';
						
if(menu_index<menu.length){
serve_menu( menu[menu_index]);
menu_index+=1;
}
					}	
					};
			
	}
serve_menu(menu[menu_index]);
				
</script>


</div>
   <script>
      toggle(e("start"));
   </script>
