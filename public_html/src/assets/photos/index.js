function linkToPhoto(file) {
  return `https://parfirova.s3.eu-west-3.amazonaws.com/images/gallery/${file}`;
}

export const photos = [
  { src: linkToPhoto('1.jpg'), caption: 'Мы за ЗОЖ! 5 класс' },
  { src: linkToPhoto('2.jpg'), caption: 'Волковский театр. 5 класс' },
  { src: linkToPhoto('3.jpg'), caption: 'Новогоднее поздравление. 6 класс' },
  { src: linkToPhoto('4.jpg'), caption: '7 класс' },
  { src: linkToPhoto('5.jpg'), caption: 'Учитель года.' },
  { src: linkToPhoto('6.jpg'), caption: 'Поездка в Карабиху.' },
  { src: linkToPhoto('7.jpg'), caption: 'Лосиная ферма. Кострома.' },
  { src: linkToPhoto('8.jpg'), caption: 'Новогодняя Москва.' },
  { src: linkToPhoto('9.jpg'), caption: 'Спортивный класс. Соревнования.' },
  { src: linkToPhoto('12.jpg'), caption: 'Новогодняя представление.' },
  { src: linkToPhoto('13.jpg'), caption: 'Конкурс "Дружба народов". Греция' },
  { src: linkToPhoto('14.jpg'), caption: 'К нам пришли Снегурочка с Дедом Морозом.' },
  { src: linkToPhoto('15.jpg'), caption: 'КВН.' },
  { src: linkToPhoto('16.jpg'), caption: 'Карабиха.' },
  { src: linkToPhoto('17.jpg'), caption: 'КВН.' },
  { src: linkToPhoto('11.jpg'), caption: 'Зарница.' },
];
