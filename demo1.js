// console.log('script start')

// async function async1() {
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2 end')
// }
// async1()

// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)

// new Promise(resolve => {
//   console.log('Promise')
//   resolve()
// })
//   .then(function () {
//     console.log('promise1')
//   })
//   .then(function () {
//     console.log('promise2')
//   })

// console.log('script end')


console.log('1');

setTimeout(function () {
  console.log('2');
}, 0);

Promise.resolve().then(function () {
  console.log('3');
});

requestAnimationFrame(function () {
  console.log('4');
});

console.log('5');


// 14532