setTimeout(function () {
  console.log(1);
}, 0);

function delay(duration) {
  var start = Date.now();
  console.log(start);
  while (Date.now() - start < duration) {
    console.log(Date.now());
  }
}
delay(3000);
console.log(2);
