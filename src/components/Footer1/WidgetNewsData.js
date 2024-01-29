import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/blog/b1.jpg';
import thumb2 from '../../assets/img/blog/b2.jpg';
import thumb3 from '../../assets/img/blog/b3.jpg';

const WidgetNewsData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        meta: '02 Şubat 2024',
        heading: 'Modern Tasarımın İnceliği: Mikro Betonun Estetik ve Dayanıklılığı',
        link: '/modern-tasarimin-inceligi-mikro-betonun-estetik-ve-dayanikliligi',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        meta: '04 Şubat 2024',
        heading: 'Taş Halı Kaplama Stone Carpet',
        link: '/tas-hali-kaplama-stone-carpet',
    },

    {
        id: uuidv4(),
        thumbnail: thumb3,
        meta: '04 Şubat 2024',
        heading: 'Renkli Taşların Dansı: Flake Zeminin Modern ve Dayanıklı Dokusu',
        link: '/renkli-taslarin-dansi-flake-zeminin-modern-ve-dayanikli-dokusu',
    },
];

export default WidgetNewsData;
