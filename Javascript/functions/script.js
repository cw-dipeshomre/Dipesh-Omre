function a(){
    var t=78;
    console.log('Hello World');
}
var b=function (z){
    console.log('Hello from b');
    console.log(z);
    
}
a();
b(()=>{
    console.log('Hello from dsffscallbackhjjj');
});
// xyz(); 
//error: xyz is not defined