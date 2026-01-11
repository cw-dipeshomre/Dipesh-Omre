a();
function a(){
    var a1=10;
    b();
    function b(){
        var b1=20;
        console.log("inside b" +b1);//debug point in the browser to check the scope chain and lexical environment
        console.log("accessing a1 inside b: " +a1);
    }

}