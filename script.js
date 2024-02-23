const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();

img.src = "./IMG_1256.JPG";

img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < imgData.height; y++) {
    for (let x = 0; x < imgData.width; x++) {
      const index = (y * imgData.width + x) * 4;
      const r = imgData.data[index];
      const g = imgData.data[index + 1];
      const b = imgData.data[index + 2];

      const avg = (r + g + b) / 3;

      ctx.beginPath();
      ctx.moveTo(x, y);

      if (x % 8 === 0 && y % 8 === 0) {
        ctx.lineTo(x / avg, y - avg);
      } else {
        ctx.lineTo(x + avg, y - avg);
      }

      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.5)`;
      ctx.stroke();
    }
  }
};
