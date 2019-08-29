var navBar = $('#navbar')
var navBarItem = $('.navbar-item')
window.addEventListener('load',function(){
    navBarItem.mouseenter(function(){$( this ).animate({backgroundColor: "#9c9c9c",color:"#fff5eb",fontSize:"24.5px"},'fast');});
    navBarItem.mouseleave(function(){$( this ).animate({backgroundColor: "#f6e0b3",color:"#4e4e4e",fontSize:"24px"});});
})