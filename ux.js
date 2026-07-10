//ux
var content;

var logo = ne("img");

function splash(){

  logo.src = "https://raw.githubusercontent.com/mngz47/productlists-resources/main/p_logo.jpg";
  logo.style.width = "200px";
  logo.style.position = "absolute";
  logo.style.left = Math.round(screen.width/2)+"px";
  logo.style.top = Math.round(screen.height/2)+"px";

    
  setInterval(toggleEnlarge(logo),1000);

	//document.body
window.onload = function(){

    content = document.body.innerHTML;

	document.body.innerHTML = "";

//document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/mngz47/productlists-resources/main/p_logo.jpg)";
//document.body.style.backgroundRepeat = "no-repeat";
//document.body.style.backgroundPosition = Math.round(window.offsetWidth/2)+" "+Math.round(window.offsetHeight/2);
//document.body.style.backgroundSize = "200px";
	

    document.body.appendChild(logo);
    setInterval(toggleEnlarge,2000);

    setTimeout(function(){  welcome();  },10000);
  
};    
}

splash();

function toggleEnlarge(){	
if(logo.style.width == "70px"){
   logo.style.width = "200px";
}else{
   logo.style.width = "70px";
}
}

var welcome_message = ne("p");

function welcome(){

    welcome_message.innerHTML = "The project is non-profit for the purpose to preserve classic games. Search slots to win free credits, you will also access 600 free monthly lifetime credits. <a href=# onclick='confirm_welcome();return false;' >Confirm</a>";
    document.body.appendChild(welcome_message);
    
}

function confirm_welcome(){
    freeMonthlyQuota();
    document.body.innerHTML=content;
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
			//alert("Buy credits or wait till the end of 30 days for more free credits.");
			show_m_surface_object(new_m_object("Buy credits or wait till the end of 30 days for more free credits.","url(https://raw.githubusercontent.com/mngz47/productlists-resources/main/p_logo.jpg)"));
	}

    }else{ //first free credits
	    	if(getCookie("price")){
 			setCookie("price", this.credits+600 , 30);
		}else{
			setCookie("price", 600 , 30);
		}
	    setCookie("CreditFreeQuota", Date.now().toString()  , 30);
	    //alert("Success - You have loaded your first 600 free credits. Your next free credits will load in 30 days");
		show_m_surface_object(new_m_object("Success - You have loaded your first 600 free credits. Your next free credits will load in 30 days","url(https://raw.githubusercontent.com/mngz47/productlists-resources/main/p_logo.jpg)"));
    }

}



function show_m_surface_object(object){

e('start').appendChild(object);

object_m_expand(object);

}

var expand_index = 0;

function object_m_expand(object){

if(expand_index<e('start').offsetWidth){

	var x = e('start').offsetWidth/2-expand_index;
var y = e('start').offsetHeight/2-expand_index;

		object.style.left = x+"px";
		object.style.top = y+"px";
		object.style.width = expand_index+"px";
		object.style.height = expand_index+"px";


 		expand_index+=150;


var expanding = function(){
	
	object_expand(object);

    
};

setTimeout(expanding, 1000);

}else{
	
	//if(expand_index>e('canvas_dimension_2').offsetWidth){
		expand_index = 0;
		e('start').removeChild(object);
		e('start').value += " object removed <br>";
	//}
	
}



}


// change background when direction changes
// left - right - top - bottom





function new_m_object(text,gbImg){
var object = ne("span");
object.innerHTML = text;
object.style.backgroundImage = gbImg;
object.style.color = "white";
object.style.width = "wrap";
object.style.backgroundColor = "black";
object.style.display = "block";
object.style.border = "solid black 2px";
object.style.fontSize = "1em";
object.style.position = "relative";
return object;
}




