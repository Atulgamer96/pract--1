const video = document.getElementById("video");

async function startVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    video.srcObject = stream;
    console.log("✅ Camera started");
  } catch (err) {
    console.error("❌ Error accessing camera:", err);
  }
}

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("models/tiny_face_detector"),
  faceapi.nets.faceExpressionNet.loadFromUri("models/face_expression")
])

  .then(() => {
    console.log("✅ Models loaded");
    startVideo();
  })
  .catch((err) => {
    console.error("❌ Model loading failed:", err);
  });

let emotionCounts = {
  happy: 0,
  sad: 0,
  angry: 0,
  surprised: 0,
  disgusted: 0,
  fearful: 0,
  neutral: 0,
};

video.addEventListener("playing", () => {
  console.log("🎥 Video playing, starting detection...");

  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  const startTime = Date.now();
  const observeDuration = 10 * 1000; // 10 seconds

  const interval = setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

    if (detections.length > 0) {
      const expressions = detections[0].expressions;
      const topEmotion = Object.entries(expressions).reduce((a, b) =>
        a[1] > b[1] ? a : b
      )[0];
      emotionCounts[topEmotion]++;
      console.log("📍 Detected:", topEmotion);
    }

    if (Date.now() - startTime >= observeDuration) {
      clearInterval(interval);
      console.log("⏱️ 10 seconds over. Calculating most frequent emotion...");

      const finalEmotion = Object.entries(emotionCounts).reduce((a, b) =>
        a[1] > b[1] ? a : b
      )[0];

      console.log("✅ Final Detected Emotion:", finalEmotion);
      alert("Final Detected Emotion: " + finalEmotion);
    }
  }, 500); // detect every 500ms
});
