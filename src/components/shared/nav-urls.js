import React from 'react';
import { PupilSvg, AchievementSvg, HomeSvg, GallerySvg, TeacherSvg } from '@assets/svg';

const className = 'services-item__image';

const wrap = (Component, haveItems) => {
  return (
    <div className='services-item__image'>
      {haveItems ? <Component data-nav-items /> : <Component />}
    </div>
  );
};

const urls = [
  {
    to: '/',
    logo: wrap(HomeSvg),
    title: 'Главная',
  },
  {
    to: '/courses',
    logo: wrap(AchievementSvg, true),
    title: 'Достижения',
    items: [
      {
        to: '/courses',
        logo: wrap(AchievementSvg),
        title: 'Курсы',
      },
      {
        to: '/contests',
        logo: wrap(AchievementSvg),
        title: 'Конкурсы',
      },
      {
        to: '/achievements',
        logo: wrap(AchievementSvg),
        title: 'Ученики',
      },
    ],
  },
  {
    to: '/5th-grade',
    logo: wrap(TeacherSvg, true),
    title: 'Ученикам',
    items: [
      {
        to: '/5th-grade',
        logo: wrap(TeacherSvg),
        title: '5 класс',
      },
      {
        to: '/5th-grade',
        logo: wrap(TeacherSvg),
        title: '6 класс',
      },
    ],
  },
  {
    to: '/gallery',
    logo: wrap(GallerySvg, true),
    title: 'Галерея',
    items: [
      {
        to: '/eighteen-school',
        logo: wrap(GallerySvg),
        title: '18 Школа',
      },
      { to: '/third-school', logo: wrap(GallerySvg), title: '3 Школа' },
      { to: '/gallery', logo: wrap(GallerySvg), title: 'Test' },
    ],
  },
  {
    to: '/about',
    logo: wrap(PupilSvg),
    title: 'Обо мне',
  },
];

export default urls;
