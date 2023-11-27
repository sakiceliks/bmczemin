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
        path: '/about',
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
        title: 'News',
        path: '/news',
    },

    {
        title: 'İletişim',
        path: '/contact',
    },
];

export default menuData;
