var thelist = document.getElementById("thelist");
var outputTask = "";
var tickcounter=0;

var p = new Promise((resolve)  => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      var reqData = JSON.parse(this.responseText);
      
      reqData.forEach(function(pick){
          if(pick.completed == true) {
              outputTask += "<li> <input type=\"checkbox\" class=\"form-check-input\" checked disabled /> <label class=\"form-check-label\"> " + pick.title + "</label></li>";
          }
          else{
              outputTask += "<li> <input type=\"checkbox\" class=\"form-check-input\"/> <label class=\"form-check-label\">"+ pick.title + "</label></li>";
          }
          
      });
      thelist.innerHTML = outputTask;
      thelist.classList.add("animate__animated", "animate__fadeInUp");
      document.getElementById("loading").style.display="none";
      resolve("Loaded JSON data");
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
})


p.then((message) => {
  console.log(message);
  var alerted = false; 
  $('input[type="checkbox"]').change(function(){
    if($(this).is(":checked")){
       tickcounter = tickcounter+1;
       console.log("No. of checks : " + tickcounter);
     }
      else{ 
        tickcounter =  tickcounter - 1; 
        console.log("No. of checks : " + tickcounter); 
      }
 
      if(tickcounter == 5 && alerted === false){
        alert("Congrats! 5 tasks done!"); 
        alerted = true;
      }      
})
})
