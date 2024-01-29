import React from 'react';
import { CgChevronDown, CgChevronLeft } from 'react-icons/cg';

const menuData = [
    {
        title: 'Anasayfa',
        path: '/',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

    },

    {
        title: 'Hakkımızda',
        path: '/hakkimizda',
    },
{  title: 'Blog',
path: '/blogs',

},
    {
        title: 'Projeler',
        path: '/projects',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,
    },

    {
        title: 'Hizmetlerimiz',
        path: '/services',
    },

    {
        title: 'Bülten',
        path: '/news',
    },

    {
        title: 'İletişim',
        path: '/contact',
    },
];

export default menuData;
