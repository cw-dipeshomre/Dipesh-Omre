var a=23;
b();
function b(){
    var c=42;
    console.log(a);
    console.log(c);
    b_in();
    function b_in(){
        console.log(a+" inside b_in");
        console.log(c+" inside b_in");
    }
}



// console.log(c);
//give error