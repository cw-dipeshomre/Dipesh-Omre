


// Closure
// function f1(){
//     var a=22;
//     function f2(){
//         console.log(a);
//     }
//     a=34;
//     return f2;
// }
// var res=f1();
// res();
// console.log(res);



// var a=10;
// {
//     let a=20;
//     console.log(a);
// }

// function f1(){
//     var i=1;
//     for(var i=1;i<=5;i++){

//         setTimeout(() => {
//             console.log(i);
// pointing to same i variable refrecence
//         }, i*1000);
//     }
//     console.log('dshfalh');
    
// }

// function f1(){
//     for(let i=1;i<=5;i++){

//         setTimeout(() => {
//             console.log(i);
//             // separate copy of i for each iteration because of let
//         }, i*1000);
//     }
//     console.log('dshfalh');
    
// }


function f1(){
    for(let i=1;i<=5;i++){
        // close(i);//also we can use this approach
        function close(i){
// new copy of i is created for each iteration because of closure
            setTimeout(() => {
                console.log(i);
            }, i*1000);
        }
        close(i);
    }
    console.log('dshfalh');
    
}
f1();