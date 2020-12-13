var input_fields = document.querySelectorAll(".username");
var login_btn = document.getElementById("btn");
var i;
input_fields.forEach(function(input_item){
    input_item.addEventListener("input",function(){
        if(input_item.value == "dev"){
            console.log(input_item.value);
            var k = true;            
        } else {
            k = false;
        }
    var input_fields_password = document.querySelectorAll(".password");
        input_fields_password.forEach(function(input_item_password){
        input_item_password.addEventListener("input",function(){
            if(input_item_password.value == "123"){
                console.log(input_item_password.value);
                var j = true;
                i = i+1;
            } else {
                j = false;
            }
    
            if (j==true && k == true){
                var loggedIn = true;
                document.getElementById("btn").onclick = function () {
                    location.href = "index.html";
                    }
            }


            if (loggedIn == true){
                
            }
        })
    })
  })
})


    

    

   