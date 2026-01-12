// function inccount(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = inccount();
// counter1();
// counter1();
// counter1();

function counter(){
    var count=0;
    this.inccount=function(){
        count++;
        console.log(count);
    }
    this.deccount=function(){
        count--;
        console.log(count);
    }
}
var counter1 = new counter();
counter1.inccount();
counter1.inccount();
counter1.deccount();
var counter2 = new counter();
counter2.inccount();
counter2.deccount();
counter2.deccount();