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
