setTimeout(() => console.log(1), 0);

console.log(2);

new Promise(() => console.log(3)).then( x => console.log(4));

new Promise(() => new Promise(() => console.log(5)));

Promise.resolve().then(() => console.log(6));

console.log(7);
