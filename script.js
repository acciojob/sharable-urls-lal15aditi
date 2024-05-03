function changeHeading(){
  var inputElement1 = document.getElementById("name").value;
  var inputElement2 = document.getElementById("year").value;
  var changeUrl = document.getElementById("url")
  
  var innerHtml = `?name=${inputElement1}&year=${inputElement2} ` 
  
  changeUrl.innerHTML += innerHtml ;
  
}