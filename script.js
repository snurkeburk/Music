document .querySelector(".wave") .addEventListener("click", toggleDivDisplay);
document .querySelector(".låt2") .addEventListener("click", toggleDivDisplayTwo);

function toggleDivDisplay() {
    var y = document.querySelector(".ljud2");
    var x = document.querySelector(".ljud1");

   if(x.clicked == true){
    x.style.display = "block";
    y.style.display = "none"  
   } else {
      x.style.display = "block";
      y.style.display = "none"   
   }   
}

function toggleDivDisplayTwo() {
    var y = document.querySelector(".ljud2");
    var x = document.querySelector(".ljud1");

    if(y.clicked == true){
     y.style.display = "block" 
     x.style.display = "none";

    } else {
       y.style.display = "block";
       x.style.display = "none";

    }
 }


 //------- GÖM LOGIN KNAPPEN IFALL MAN ÄR INLOGGAD ----//
function test(){
    var t = document.getElementById("accessAccount");
    if (!document.referrer) {
        k= false;
    } else {
        var referer = document.referrer;
        k = true;
    }
        if (k == true){
            t.style.display = "none";
        }
    console.log("ayey");
        }