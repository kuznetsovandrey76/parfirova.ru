import { PupilSvg, AchievementSvg, HomeSvg, GallerySvg, TeacherSvg } from '@assets/svg';

const urls = [
  {
    to: '/',
    logo: HomeSvg,
    title: 'Главная',
  },
  {
    to: '/courses',
    logo: AchievementSvg,
    title: 'Достижения',
    items: [
      {
        to: '/courses',
        logo: AchievementSvg,
        title: 'Курсы',
      },
      {
        to: '/contests',
        logo: AchievementSvg,
        title: 'Конкурсы',
      },
      {
        to: '/achievements',
        logo: AchievementSvg,
        title: 'Ученики',
      },
    ],
  },
  {
    to: '/5th-grade',
    logo: TeacherSvg,
    title: 'Ученикам',
    items: [
      {
        to: '/5th-grade',
        logo: TeacherSvg,
        title: '5 класс',
      },
      {
        to: '/5th-grade',
        logo: TeacherSvg,
        title: '6 класс',
      },
    ],
  },
  {
    to: '/gallery',
    logo: GallerySvg,
    title: 'Галерея',
    items: [
      { to: '/eighteen-school', logo: GallerySvg, title: '18 Школа' },
      { to: '/third-school', logo: GallerySvg, title: '3 Школа' },
      { to: '/gallery', logo: GallerySvg, title: 'Test' },
    ],
  },
  {
    to: '/about',
    logo: PupilSvg,
    title: 'Обо мне',
  },
];

export default urls;
