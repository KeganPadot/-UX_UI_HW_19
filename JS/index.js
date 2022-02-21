console.log("Your index.js file is loaded correctly!");

$(document).ready(function() {

    $(".javascriptArrow").mouseenter(function(){
       $(".javascriptArrow").effect( "bounce", {times:3}, 3000 );
    });

 });