//ux

var content;

var logo = ne("img");

function splash(){

  logo.src = "https://raw.githubusercontent.com/mngz47/productlists-resources/main/p_logo.jpg";
  logo.width = "200px";
  logo.style.position = "absolute";
  logo.style.left = window.offsetWidth/2;
  logo.style.top = window.offsetHeight/2;
    
  setInterval(toggleEnlarge(logo),1000);

	//document.body
window.onload = function(){

    content = document.body.innerHTML;

	document.body.innerHTML = "";
	
    document.body.appendChild(logo);
    setInterval(toggleEnlarge,1000);

    setTimeout(function(){  welcome();  },10000);
  
};    
}

splash();

function toggleEnlarge(){

if(logo.class){
 logo.class = "";
}else{
 logo.class = "img-enlarge";
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


function freeMonthlyQuota(){

    if(getCookie("CreditFreeQuota")){

        var lastQuota = new Date(getCookie("CreditFreeQuota"));

        if(){

        }

    }

}

