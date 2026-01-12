// function a(b){
//     console.log("Function a called");
//     b();
// }
// a(() => {
//     console.log("Callback executed");
// })
function f1(){
    let count=0;
    document.getElementsByClassName("btn")[0].addEventListener("click", function abc(){
        count++;
        console.log("Button clicked " + count + " times");
    });
}
f1();