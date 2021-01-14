var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); 

  function setCookie(name, value)
  {
    document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
  }
function putCookie(form)
  {
   setCookie("userName", form[0].usrname.value);
   setCookie("passWord", form[0].psword.value);
   window.location.href = "/index.html";
   return true;
}


    
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

//------------ Login -----------//
function hide(){
    loggedIn = false;
    
    var k = document.getElementById("login");
    var l = document.getElementById("signup");
    var icon = document.getElementById("account");
    var name = document.getElementById("name");
    console.log("hide");
    if(loggedIn == false){
    l.style.display = "block";
    k.style.display = "block";
    icon.style.display = "none";
    name.style.display = "none";
    console.log("loggedIn == false");
} else if (loggenId == true){
    l.style.display = "none";

    k.style.display = "none";
    icon.style.display = "block";
    name.style.display = "block";
}

    
}


function logIn() {   
    var a = getCookie("userName");
    var b = getCookie("passWord");
    var k = document.getElementById("login");
    var l = document.getElementById("signup");
    var icon = document.getElementById("account");
    var name = document.getElementById("name");
    var loggedIn;
    var j = document.querySelectorAll("logout");
    var pw = document.querySelector("password");
    let element = document.querySelector(".minH4tag");
    element.innerHTML = a;
    
    
    var inputVal = document.querySelector(".username").value;
    var inputValPw= document.querySelector(".password").value;
    var x = document.forms["myForm"]["fname"].value;
    if(inputVal==a && inputValPw == b){
        console.log("login successful");
        loggedIn = true;
        element.innerHTML = a;
        window.location.href = "/index.html";

   // confirm();
} else {
    console.log("username / password incorrect!")
    loggedIn = false;

}



}

function notLoggedIn(){

    loggedIn = false;
    console.log("not logged in");
    if(loggedIn == false){
        k.style.display = "block";
        l.style.display = "block";
        icon.style.display = "none";
        name.style.display = "none";
        console.log("loggedIn == false");
        window.location.href = "/index.html";
        
    } else{
        return true;
    }
}


/*
function confirm() {
    var j = document.getElementById("accessAccount");
    loggedIn=true;
    if (loggedIn == true) {
        j.style.display = "none";
        console.log("funkar")
    } else {
        j.style.display = "block";
    }
}

function notLoggedIn(){
    var ka = document.getElementById("login");
    var lb = document.getElementById("signup");
    var iconc = document.getElementById("account");
    var named = document.getElementById("name");
    loggedIne = false;
    console.log("nog logged in");
    if(loggedIne == false){
        ka.style.display = "block";
        lb.style.display = "block";
        iconc.style.display = "none";
        named.style.display = "none";
        console.log("loggedIn == false");
        window.location.href = "/index.html";
    } else{
        return true;
    }
}*/