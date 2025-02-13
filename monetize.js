
var credits = 0;

var cost = 1;

function showCredits(){

if(getCookie("price")){
 credits =  parseInt(getCookie("price"));
}
  e("credits").innerHTML = "CREDITS: "+credits;
  e("buy_credits").innerHTML = "BUY CREDITS: ("+credits+")";
}

function syncCredits(credits){
   this.credits += credits;
  setCookie("price", this.credits , 30);
 showCredits();
}

var HOME = location.href;

function monetize_purchase(price){
this.price = price;
this.product = "Game Credits";
this.return_url = HOME+"?pp=1";
this.cancel_url =  HOME+"?pp=0";

setCookie("price", price, 30);

  if(e("credit_card").checked){
payfast2();
  }else if(e("paypal_option").checked){
paypal();
  }else{
alert("select payment option");
  }
}

function monetize_voucher(price){
  this.price = price;
  if(price<100){
  
  setCookie("price", price, 30);
  setCookie("payment", 1, 30);
  setCookie("actions", 0 , 30);

    credits =  parseInt(getCookie("price"));
    showCredits();
   // toggle(e("start"));
    e("start").style.display="none";
    alert("success");
    
  }
}

function monetize_withdraw(credits,paypal_id){


  alert("success");
}

function checkCredits(){
const urlParams = new URLSearchParams(window.location.search);
const payment = urlParams.get('pp');

    if(getCookie("price")!=null){
  if(payment!=null){
if(payment==1){
  setCookie("payment", 1, 30);
  setCookie("actions", 0 , 30);
  alert('Payment Successfull');
}else if(payment==0){
  setCookie("payment", 0, 30);
   setCookie("price", 0 , 30);
    setCookie("actions", 0 , 30);
alert('Payment Cancelled');
}
}
  }
}

function confirmCredits(){
 var activeChallenge = getCookie("payment")==1;

  if(activeChallenge){
if(getCookie("price")){
 credits =  parseInt(getCookie("price"));
}
  }
}

checkCredits();
confirmCredits();
showCredits();


async function track_action(){

    if(e("start").style.display=="none"){
      
  showCredits();
  var actions = 0;
  
  if(getCookie("actions")){
actions = parseInt(getCookie("actions"));
  }

  if(credits>0){

  }else{
if(actions>10){
  //e("start").innerHTML = initCredits();
  toggle(e("start"));
  //auto_play_p_stop();
}
  }

  setCookie("price", (credits-cost) , 30);
   setCookie("actions", (actions+1) , 30);

    }else{
return true;
    }
}

    document.body.onmousedown = track_action;
