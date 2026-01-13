const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10

const numbers1 = [1, 2, 3, 4, 5];

const even = numbers1.filter(n => n % 2 === 0);

console.log(even); // [2, 4]

const numbers3 = [1, 2, 3, 4];

const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8]

