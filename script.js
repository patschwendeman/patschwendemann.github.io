// Index Navbar 

var menuItems = document.getElementById('menu-items');
var menuIcon = document.getElementById("menu-icon");

menuItems.style.maxHeight = "0px";

function menutoggle(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px";
        menuIcon.src="assets/graphic/menu_close.svg"
    }
    else {
        menuItems.style.maxHeight = "0px";
        menuIcon.src="assets/graphic/menu.svg"
    }
}
//skill animation

function backend(){
    document.getElementById("backend").style.transform = "translateY(-400px)";
    document.getElementById("frontend").style.transform = "translateY(-500px)";
    document.getElementById("indicator").style.transform = "translateX(0px)";
}
function frontend(){
    document.getElementById("backend").style.transform = "translateY(0px)";
    document.getElementById("frontend").style.transform = "translateY(0px)";
    document.getElementById("indicator").style.transform = "translateX(100px)";
}

//scroll animation

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        document.getElementById("application").style.opacity = "1";
    }
    else{
        document.getElementById("application").style.opacity = "0";
    }
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scroll-icon").style.transform = "translateX(-100px)";
    }
    else{
        document.getElementById("scroll-icon").style.transform = "translateX(100px)";
    }
}