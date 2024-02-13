new Promise(() => console.log(1));

console.log(2);

new Promise(() => console.log(3)).then( x => console.log(4));

console.log(5);
