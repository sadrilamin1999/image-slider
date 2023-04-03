// photos
const photos = ["img/nature.jpg", "img/flower.jpg", "img/moon.jpg"];

// finging element
const imgTag = document.getElementsByTagName("img")[0];

let count = 0;
// click handler
const prev = () => {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
};

const next = () => {
  count++;
  if (count == photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
};
