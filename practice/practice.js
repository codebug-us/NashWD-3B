document.addEventListener('DOMContentLoaded', function() {
console.log("the page has loaded!");
function sayCodingRocks(name){
	var response = "Hey, " + name + " coding rocks!";
	return response;
}
console.log("invoking sayCodingRocks() returns:", sayCodingRocks("Sarah"))
});
