const images = [
  "https://cdn.betterttv.net/emote/618c4f1b1f8ff7628e6d56ab/3x.webp",
  "https://cdn.betterttv.net/emote/62043b5306fd6a9f5be3f8fe/3x.webp",
  "https://cdn.betterttv.net/emote/61f03cb606fd6a9f5be2201d/3x.webp",
  "https://cdn.betterttv.net/emote/61deabc606fd6a9f5be05fcd/3x.webp",
  "https://cdn.betterttv.net/emote/61f4bda806fd6a9f5be290bf/3x.webp",
  "https://cdn.7tv.app/emote/603caa69faf3a00014dff0b1/4x.webp",
  "https://cdn.7tv.app/emote/6327150c2a65ac720df6e2c6/4x.webp",
  "https://cdn.7tv.app/emote/6134bc74f67d73ea27e44b0f/4x.webp",
  "https://cdn.7tv.app/emote/62371c1eb88633b42c0c524a/4x.webp",
  "https://cdn.7tv.app/emote/614100fa962a6090486472f5/4x.webp",
  "https://cdn.betterttv.net/emote/61d4fc5c06fd6a9f5bdf64a6/3x.webp",
  "https://cdn.betterttv.net/emote/6212d52606fd6a9f5be52323/3x.webp",
  "https://cdn.betterttv.net/emote/61d4fa4306fd6a9f5bdf6429/3x.webp",
  "https://cdn.betterttv.net/emote/61d4fa7206fd6a9f5bdf6433/3x.webp",
  "https://cdn.betterttv.net/emote/61d4fa7206fd6a9f5bdf6433/3x.webp",
  "https://cdn.7tv.app/emote/60b5917d22b0373436c28ac0/4x.webp",
  "https://cdn.7tv.app/emote/61f2f0bb170449495611354f/4x.webp",
  "https://cdn.7tv.app/emote/6148ee6245d00846a86edb6b/4x.webp",
  "https://cdn.7tv.app/emote/60b4f45b1819f05f734f046c/4x.webp",
  "https://cdn.7tv.app/emote/60afc5e012f90fadd6c74e5e/4x.webp",
  "https://cdn.betterttv.net/emote/61f4bbfc06fd6a9f5be29097/3x.webp",
  "https://cdn.betterttv.net/emote/61f4bc1906fd6a9f5be2909c/3x.webp",
  "https://cdn.betterttv.net/emote/61f4bb7706fd6a9f5be29083/3x.webp",
  "https://cdn.betterttv.net/emote/61f4bbb006fd6a9f5be29088/3x.webp",
  "https://cdn.betterttv.net/emote/61d4fa9106fd6a9f5bdf6442/3x.webp",
  "https://cdn.7tv.app/emote/60b2654203982475b83b1346/4x.webp",
  "https://cdn.7tv.app/emote/60b4c6458852fc26565c2b5d/4x.webp",
  "https://cdn.7tv.app/emote/60af7e3935c50a7792de4db7/4x.webp",
  "https://cdn.7tv.app/emote/60aeb46de90f445e4393d908/4x.webp",
  "https://cdn.7tv.app/emote/60ae8a704b1ea4526d94272b/4x.webp",
  "https://cdn.betterttv.net/emote/61d4faa406fd6a9f5bdf6447/3x.webp",
  "https://cdn.betterttv.net/emote/61f4bdea06fd6a9f5be290c7/3x.webp",
  "https://cdn.betterttv.net/emote/62d4aa1dd991a3e26c12b7e2/3x.webp",
  "https://cdn.betterttv.net/emote/62d4a9abd991a3e26c12b7d2/3x.webp",
  "https://cdn.betterttv.net/emote/62d60eaed991a3e26c12cbc7/3x.webp",
  "https://cdn.7tv.app/emote/60aea7fdf6a2c3b332895974/4x.webp",
  "https://cdn.7tv.app/emote/60ae6b2c86fc40d488cf5b80/4x.webp",
  "https://cdn.7tv.app/emote/60ae378eaee2aa553807e9d3/4x.webp",
  "https://cdn.7tv.app/emote/603ea0df284626000d06887e/4x.webp",
  "https://cdn.7tv.app/emote/62f424b0ea941a22a1f03268/4x.webp",
  "https://cdn.betterttv.net/emote/61f4bd7506fd6a9f5be290b5/3x.webp",
  "https://cdn.betterttv.net/emote/61f4bd4b06fd6a9f5be290ae/3x.webp",
  "https://cdn.betterttv.net/emote/61f6af6306fd6a9f5be2bd7d/3x.webp",
  "https://cdn.betterttv.net/emote/61f4bd4b06fd6a9f5be290ae/3x.webp",
  "https://cdn.betterttv.net/emote/61ae2c11002cdeedc21e73a0/3x.webp",
  "https://cdn.7tv.app/emote/60b056f5b254a5e16b929707/4x.webp",
  "https://cdn.7tv.app/emote/613937fcf7977b64f644c0d2/4x.webp",
  "https://cdn.7tv.app/emote/60b14a737a157a7f3360fb32/4x.webp",
  "https://cdn.7tv.app/emote/60ae3e54259ac5a73e56a426/4x.webp",
  "https://cdn.7tv.app/emote/6102a37ba57eeb23c0e3e5cb/4x.webp",
  "https://cdn.betterttv.net/emote/61f4bd2506fd6a9f5be290a9/3x.webp",
  "https://cdn.betterttv.net/emote/61f422f406fd6a9f5be27eb6/3x.webp",
  "https://cdn.betterttv.net/emote/61f6af3b06fd6a9f5be2bd73/3x.webp",
  "https://cdn.betterttv.net/emote/61f4410c06fd6a9f5be28204/3x.webp",
  "https://cdn.7tv.app/emote/60ae958e229664e8667aea38/4x.webp",
  "https://cdn.7tv.app/emote/638767f24cc489ef45239272/4x.webp",
  "https://cdn.7tv.app/emote/60ae4ec30e35477634988c18/4x.webp",
  "https://cdn.7tv.app/emote/639df002d38d94c8697b2881/4x.webp",
  "https://cdn.7tv.app/emote/64fb05659524349b3b8b3294/4x.webp",
  "https://cdn.7tv.app/emote/61b5c32c8ffada6c4baf9fb8/4x.webp",
  "https://cdn.7tv.app/emote/63b37fe6f25c41366e404e1e/4x.webp",
  "https://cdn.7tv.app/emote/646dd022577dcd2c80ef1e75/4x.webp",
  "https://cdn.7tv.app/emote/64253d31b1a586a0f499c4fd/4x.webp",
  "https://cdn.7tv.app/emote/634ec530a873441a4933f87c/4x.webp",
  "https://cdn.7tv.app/emote/625eb327133eb2a16b041ffb/4x.webp",
  "https://cdn.7tv.app/emote/61b9654c112f39cb68afe61c/4x.webp",
  "https://cdn.7tv.app/emote/609ef45c4c18609a1d9a6cbe/4x.webp",
  "https://cdn.7tv.app/emote/60de619ce03c0b978d5f0386/4x.webp",
  "https://cdn.7tv.app/emote/64674a7358d599a0419f49d7/4x.webp",
  "https://cdn.7tv.app/emote/629fa7bb2b24f7ba48b6e6c4/4x.webp",
  "https://cdn.7tv.app/emote/663f00825d4259f9c789e744/4x.webp",
  "https://cdn.7tv.app/emote/6309f329cc3590037679ba9e/4x.webp",
];

let currentImageIndex = 0;
const imageElement = document.getElementById("bouncing-image");
const speed = 3; // Speed of movement
let x = 0;
let y = 0;
let dx = speed;
let dy = speed;

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageElement.src = images[currentImageIndex];
}

function moveImage() {
  const imgWidth = imageElement.offsetWidth;
  const imgHeight = imageElement.offsetHeight;
  const maxWidth = window.innerWidth - imgWidth;
  const maxHeight = window.innerHeight - imgHeight;

  x += dx;
  y += dy;

  if (x <= 0 || x >= maxWidth) {
    dx = -dx;
    changeImage();
  }

  if (y <= 0 || y >= maxHeight) {
    dy = -dy;
    changeImage();
  }

  imageElement.style.left = x + "px";
  imageElement.style.top = y + "px";

  requestAnimationFrame(moveImage);
}

// Initialize
imageElement.src = images[currentImageIndex];
moveImage();
