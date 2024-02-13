Promise.resolve(() => console.log(1));

Promise.resolve(() => console.log(2)).then( x => x());

Promise.resolve(() => console.log(3)).then( x => setTimeout(x)); +

Promise.resolve(() => console.log(4)).then( x => setTimeout(x, 1000)); 

Promise.resolve().then(() => console.log(5));

Promise.resolve().then(() => setTimeout(() => console.log(6)));

Promise.resolve().then(() => setTimeout(() => console.log(7), 1000));


