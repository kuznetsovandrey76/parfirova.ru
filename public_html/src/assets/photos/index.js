function linkToPhoto(file, token) {
  return `https://raw.githubusercontent.com/kuznetsovandrey76/parfirova.ru/master/public_html/src/assets/files/${file}?token=${token}`;
}

export const photos = [
  { src: linkToPhoto('1.jpg', 'AEAO754DJC5Y3S4EBCJGAQ3APUCYQ') },
  { src: linkToPhoto('2.jpg', 'AEAO753JT3OZJ5IQEA5TWJTAPUC32') },
];
