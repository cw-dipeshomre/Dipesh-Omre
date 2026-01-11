var x=200;
// line below will throw error
a();
b();
console.log(x);
var a=()=>{
    var x=10;
    console.log(x);
}
var b=()=>{
    var x=100;
    console.log(x);
}