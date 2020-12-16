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

   alert(document.cookie);
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


function logIn() {
    var a = getCookie("userName");
    var b = getCookie("passWord");
    var inputVal = document.querySelector(".username").value;
    var inputValPw= document.querySelector(".password").value;

    var pw = document.querySelector("password");
    var x = document.forms["myForm"]["fname"].value;
    if(inputVal==a && inputValPw == b){
    console.log("login successful");
    } else {
    console.log("username / password incorrect!")
    }


}

