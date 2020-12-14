document .querySelector(".wave") .addEventListener("click", toggleDivDisplay);
document .querySelector(".låt2") .addEventListener("click", toggleDivDisplayTwo);
function toggleDivDisplay() {
    var y = document.querySelector(".ljud2");
    var x = document.querySelector(".ljud1");  
    var waveImg = document.querySelector(".songPicWave");
    var tramaImg = document.querySelector(".songPicTrama");
    var aboutWaveImg = document.querySelector(".aboutPicWave");
    var aboutTramaImg = document.querySelector(".aboutPicTrama");
    var box = document.querySelector(".box");
   if(x.clicked == true){
    x.style.display = "block";
    y.style.display = "none"  
    waveImg.style.display = "block";
    tramaImg.style.display = "none";
    infoSongName.innerHTML = "MicroWAVE";
    infoArtistName.innerHTML = "Theo Lindblad";
    infoSongLength.innerHTML = "4 minutes 14 seconds";
    aboutTramaImg.style.display = "none";
    aboutWaveImg.style.display = "block";
    box.style.display = "block";


   } else {
      x.style.display = "block";
      y.style.display = "none"  
      waveImg.style.display = "block";
      tramaImg.style.display = "none";
      infoSongName.innerHTML = "MicroWAVE";
      infoArtistName.innerHTML = "Theo Lindblad";
      infoSongLength.innerHTML = "4 minutes 14 seconds";
      aboutTramaImg.style.display = "none";
      aboutWaveImg.style.display = "block";
      box.style.display = "block";


   }   
}

function toggleDivDisplayTwo() {
    var y = document.querySelector(".ljud2");
    var x = document.querySelector(".ljud1");
    var waveImg = document.querySelector(".songPicWave");
    var tramaImg = document.querySelector(".songPicTrama");
    var aboutTramaImg = document.querySelector(".aboutPicTrama");
    var aboutWaveImg = document.querySelector(".aboutPicWave");
    var o = document.querySelector(".btn");
    var container = document.querySelector(".artistContainer");

    if(y.clicked == true){
     y.style.display = "block" 
     x.style.display = "none";
     tramaImg.style.display = "block";
     waveImg.style.display = "none";
     infoSongName.innerHTML = "Tramadolium";
     infoArtistName.innerHTML = "Theo Lindblad";
     infoSongLength.innerHTML = "4 minutes 26 seconds";
     aboutWaveImg.style.display = "none";
     aboutTramaImg.style.display = "block";


    } else {
       y.style.display = "block";
       x.style.display = "none";
       tramaImg.style.display = "block";
       waveImg.style.display = "none";
       infoSongName.innerHTML = "Tramadolium";
       infoArtistName.innerHTML = "Theo Lindblad";
       infoSongLength.innerHTML = "4 minutes 26 seconds";
       aboutWaveImg.style.display = "none";
       aboutTramaImg.style.display = "block";
       container.style.display = "none";

    }
 }

document .querySelector(".btn") .addEventListener("click", showArtistInfo);
function showArtistInfo() {
    var o = document.querySelector(".btn");
    var container = document.querySelector(".artistContainer");
    var y = document.querySelector(".ljud2");
    var x = document.querySelector(".ljud1");
    var box = document.querySelector(".box");
    var waveImg = document.querySelector(".songPicWave");
    var tramaImg = document.querySelector(".songPicTrama");
    var aboutTramaImg = document.querySelector(".aboutPicTrama");
    var aboutWaveImg = document.querySelector(".aboutPicWave");
   if(o.clicked == true && container.style.display=="none"){
    container.style.display = "none"; 
   } else {
    container.style.display = "flex";
    y.style.display = "none";
       x.style.display = "none";
       tramaImg.style.display = "none";
       waveImg.style.display = "none";
       infoSongName.innerHTML = "";
       infoArtistName.innerHTML = "";
       infoSongLength.innerHTML = "";
       aboutWaveImg.style.display = "none";
       aboutTramaImg.style.display = "none"; 
       box.style.display = "none";

    console.log("h");
   }
}

document .querySelector(".hide") .addEventListener("click", hideArtistInfo);
function hideArtistInfo(){
    var f = document.querySelector(".hide");
    var container = document.querySelector(".artistContainer");
    if (f.clicked == true){
        container.style.display = "none";
    } else {
        container.style.display = "none";
    }
}


 //------- GÖM LOGIN KNAPPEN IFALL MAN ÄR INLOGGAD ----//
function test(){
    var t = document.getElementById("accessAccount");
    var n = document.getElementById("name");

    if (!document.referrer) {
        k= false;
    } else {
        var referer = document.referrer;
        k = true;
    }
        if (k == true){
            t.style.display = "none";
            n.style.display = "block";
        } else {
            n.style.display = "none";
        }
    console.log("ayey");
    }