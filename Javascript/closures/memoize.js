function memoizedSquare() {
    let cache = {};   // closure variable

    return function(n) {
        if (cache[n]) {
            console.log("From cache");
            console.log(cache[n]);
            return cache[n];
        }

        console.log("Calculating...");
        cache[n] = n * n;
        console.log(cache[n]);
        return cache[n];
    }
}

const square = memoizedSquare();

square(5); // Calculating...
square(5); // From cache
square(6); // Calculating...
