// const apple = x => Math.pow(+x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';

// let x = 'two';
// console.log(Math.pow(+x, 2));
// console.log(typeof +x)

// console.log(typeof parseInt('two'))
// console.log(parseInt('two', 10))

// console.log(0 +x)

// console.log(+'4')

// let x = '4';
// console.log(+x);

const arr = ["Help yourself to a honeycomb Yorkie for the glovebox.","It's hotter than the sun!!"];
// const apple = x => arr[+(Math.pow(x, 2) > 1000)];
const apple = x => arr[+(x**2 > 1000)];
