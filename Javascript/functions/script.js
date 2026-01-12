function a(){
    console.log('Hello World');
}
var b=function (z){
    console.log('Hello from b');
    console.log(z);
    
}
a();
b(()=>{
    console.log('Hello from callback');
});
// xyz(); 
//error: xyz is not defined