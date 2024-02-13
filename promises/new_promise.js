new Promise(() => console.log(1));

new Promise(() => console.log(2)).then(() => console.log(3));

new Promise(() => setTimeout(() => console.log(4)));

new Promise(() => setTimeout(() => console.log(5), 1000));

new Promise(() => new Promise(() => console.log(6)));

new Promise(() => new Promise(() => console.log(7))).then(()=> console.log(8));

new Promise(() => setTimeout(() => console.log(4)));

new Promise(() => setTimeout(() => console.log(5), 1000));

new Promise(() => new Promise(() => setTimeout(() => console.log(9))));

new Promise(() => new Promise(() => setTimeout(() => console.log(10), 1000)));

