function outest1() {
    var c = 34;
    function outer(b) {
        function inner() {
            console.log(a,b);
        }
        let a = 100;
        return inner;
    }
    return outer;
}
let a=12;//in global scope
var res = outest1()("kjdhg");
res();

