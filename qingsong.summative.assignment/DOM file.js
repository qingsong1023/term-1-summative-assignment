document.addEventListener("DOMContentLoaded", function(){
    function hello(){alert("You can click on the names of the works below to get more information.");}
    var funpart = document.querySelector(".fun");
    funpart.addEventListener("mouseover",hello);
    taOver.addEventListener("mouseover",hello);  
  });