
$(document).ready(function(){

$(".submit-btn").click(function(){
event.preventDefault();
let burger = $(".form-control").val();

addBurger(burger)
location.reload();
});

$(".dev-btn").click(function(){
event.preventDefault();
id = this.id;
console.log(id)
devourBurger(id)
location.reload();
});

let addBurger = function(burger){
return $.ajax({
url: "/api/burgers",
data: burger,
method: "POST"
});
}

let devourBurger = function(id){
return $.ajax({
url: "/api/burgers/" + id,
method: "PUT"
});
}



});