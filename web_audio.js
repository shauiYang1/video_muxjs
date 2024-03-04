var audioCtx, analyser, bufferLength, dataArray;

const canvas = document.getElementById("audioCanvas");
const ctx = canvas.getContext("2d");
document.querySelector('.start').addEventListener('click', initCanvas);
document.querySelector('.close').addEventListener('click', () => {
  audioCtx.close();
});
function initCanvas() {
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = (window.innerHeight / 2) * devicePixelRatio;
  // initAudioContext();
  initMediaElSource();
}


// 将麦克风数据绘制
function initAudioContext() {
  // 初始化AudioContext
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  console.log("audioCtx", audioCtx)
  if (!audioCtx) {
    console.error('Web Audio API is not supported in this brower');
    return;
  }
  //  获取麦克风数据
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    // 创建 MediaStreamSource
    const source = audioCtx.createMediaStreamSource(stream);
    // 创建 AnalyserNode
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2 ** 10;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    // 连接到 audioCtx
    source.connect(analyser);
    source.connect(audioCtx.destination);
    draw();
  }).catch(err => {
    console.log('获取麦克风数据失败', err)
  })
}

// 通过 audio/video dom标签输入的音频数据
function initMediaElSource() {
  const audioEl = document.querySelector('#audio_element');
  audioEl.src = './4162417522.mp3';
  audioEl.load();
  audioEl.mute = false;
  audioEl.play();
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioCtx.createMediaElementSource(audioEl);
  // 获取分析对象
  analyser = audioCtx.createAnalyser()
  // 设置fftSize
  analyser.fftSize = 2 ** 10
  bufferLength = analyser.frequencyBinCount
  // 因为这里analyser返回的数据js不能直接使用，所以要通过Uint8Array来转换一下，让js认识一下
  dataArray = new Uint8Array(bufferLength)
  // 连接解析器
  source.connect(analyser)
  // 输出音频
  source.connect(audioCtx.destination)
  draw();
}


// 创建动画循环
function draw() {
  requestAnimationFrame(draw);

  // 获取音频数据
  analyser.getByteFrequencyData(dataArray);

  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 设置样式
  ctx.fillStyle = "#282828";

  // 绘制频谱图
  const len = dataArray.length;
  console.log('len', len)
  const barWidth = canvas.width / len;  // 计算出每个柱状图的宽度

  for (let i = 0; i < len; i++) {
    const data = dataArray[i];
    const barHeight = (data / 2 ** 9) * canvas.height;
    const x = i * barWidth;
    const y = canvas.height - barHeight;

    // 绘制矩形
    ctx.fillRect(x, y, barWidth, barHeight);
  }
}




