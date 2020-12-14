var input_fields = document.querySelectorAll(".username");
var login_btn = document.getElementById("btn");
var i;
var k;

function check(){
input_fields.forEach(function(input_item){
    input_item.addEventListener("input",function(){
        if(input_item.value == "dev"){ // här kan man ändra till en variabel istället för "dev"
            console.log(input_item.value);
            k = true;     
            localStorage.setItem("trueORFalse ", k);         
        } else {
            k = false;
        }
    var input_fields_password = document.querySelectorAll(".password");
        input_fields_password.forEach(function(input_item_password){
        input_item_password.addEventListener("input",function(){
            if(input_item_password.value == "123"){ // här kan man ha en PW variabel istället för "123"
                console.log(input_item_password.value);
                var j = true;
            } else {
                j = false;
            }
    
            if (j==true && k == true){
                var loggedIn = true;
                
                console.log(k)
                document.getElementById("btn").onclick = function () {
                location.href = "index.html";
                test();
                
                
                }
                    
                }

            
        })
    })
  })
})


    

}   

   