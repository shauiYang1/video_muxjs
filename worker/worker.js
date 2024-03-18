// onmessage = function (e) {
//   console.log('Worker: Message received from main script', e.data);
//   let result = '';
//   let charsReceived = 0;
//   const decoder = new TextDecoder();
//   const readableStream = file.stream().getReader();


//   postMessage('Please write two numbers');
//   /* readableStream.read().then(function processText({ done, value }) {
//     console.log('done, value', done, value)
//     // 结果包含两个属性：
//     // done  - 如果为 true，表示流已经返回所有的数据。
//     // value - 一些数据，done 为 true 时，其值始终为 undefined。
//     if (done) {
//       postMessage(result);
//       return
//     }
//     // 从流中获取的数据是一个 Uint8Array
//     charsReceived += value.length;
//     const chunk = decoder.decode(value);
//     result += chunk;
//     // 再次调用该函数以读取更多数据
//     return readableStream.read().then(processText);
//   }) */
// }



// worker.js（worker线程）


// worker.js（worker线程）

let result = '23232';
let charsReceived = 0;
const decoder = new TextDecoder();



self.addEventListener('message', e => {
  if (Object.prototype.toString.call(e.data) === '[object File]') {
    const file = e.data;
    const readableStream = file.stream().getReader();
    readableStream.read().then(function processText({ done, value }) {
      // 结果包含两个属性：
      // done  - 如果为 true，表示流已经返回所有的数据。
      // value - 一些数据，done 为 true 时，其值始终为 undefined。
      if (done) {
        postMessage(result);
        return
      }
      // 从流中获取的数据是一个 Uint8Array
      charsReceived += value.length;
      const chunk = decoder.decode(value);
      result += chunk;
      // 再次调用该函数以读取更多数据
      return readableStream.read().then(processText);
    })
  } else {
    postMessage('Greeting from Promise 非文件');
  }

});
self.addEventListener('error', err => {
  console.log(err.message);
});
self.addEventListener('messageerror', err => {
  console.log(err.message);
});

