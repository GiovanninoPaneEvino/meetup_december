var a = 1;
var array_example = [1,2,3];
array_example[2]

var object_example ={maciej:10,miron:20,janek:5};
object_example.miron
//chaining
array_example
	.map(function(x){return x*2;})
	.filter(function(x){return x>3;})
	.reduce(function(a, b) { return a + b; });
	
var outer = function(x){
	var internal = x // Function Environment
	var inner = function(y) {
		return internal+y;
	}
	return inner;
}
var sum_by_two = outer(2);
sum_by_two(3)

//methods of function
var outer = function(x){
	var internal = x; // Function Environment
	var inner = function(y) {
		return internal+y;
	}
	inner.set_inside = function(new_x) {internal = new_x}
	inner.get_inside = function() {return internal;}
	return inner;
}
var sum_by_mutable = outer(3);
sum_by_mutable.set_inside(4) //configurable function
sum_by_mutable.get_inside()
sum_by_mutable(1)

////////////////

d3.select("body")
  .append("svg")
    .attr("width", 960)
    .attr("height", 500)
  .append("g")
    .attr("transform", "translate(20,20)")
  .append("rect")
    .attr("width", 920)
    .attr("height", 460);