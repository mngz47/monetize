function splash(){

    var logo = ne("img");

  logo.src = "https://raw.githubusercontent.com/mngz47/productlists-resources/main/p_logo.jpg";
  logo.width = "200px";
  logo.style.position = "absolute";
  logo.style.left = "50%";
  logo.style.top = "50%";
  setInterval(toggleEnlarge(logo),1000);
  
    document.body.appendChild(logo);
   setInterval(toggleEnlarge(logo),1000);
  
}

funtion toggleEnlarge(logo){

if(logo.class){
 logo.class = "";
}else{
 logo.class = "img-enlarge";
}
  
}

function welcome(){

}

function freeMonthlyQuota(){

}

