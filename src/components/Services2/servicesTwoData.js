import { FaCity, FaDraftingCompass, FaHardHat, FaRegBuilding, FaTruckMoving } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/service1.jpg';
import thumb2 from '../../assets/img/service2.jpg';
import thumb3 from '../../assets/img/service3.jpg';
import thumb4 from '../../assets/img/service4.jpg';
import thumb5 from '../../assets/img/service5.jpg';
import thumb6 from '../../assets/img/service6.jpg';



const servicesTwoData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        icon: <FaDraftingCompass />,
        heading: 'Taş Halı | Stone Carpet',
        slug:'tas-hali-stone-carpet',
        text: 'Taş halı kaplama, mekanlara sıcak bir dokunuş ve doğal bir atmosfer katmak isteyenler için ideal bir zemin kaplama çözümüdür. Geleneksel halılardan farklı olarak, taş halı kaplama özgün desen ve renk seçenekleriyle mekanınıza estetik bir şıklık sunar.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        icon: <FaRegBuilding />,
        heading: 'Mikro Beton',
        slug:'mikro-beton',
        text: 'Mikro beton, ince bir tabaka halinde uygulanan modern bir zemin kaplama çözümüdür. Estetik görünümü, hafifliği ve çeşitli renk seçenekleri ile mikro beton, iç mekanlara özgün bir dokunuş katar.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb3,
        icon: <FaTruckMoving />,
        heading: "Flake Zemin\r\n",
        slug:'flake-zemin',
        text: "Endüstriyel ve ticari mekanlarda tercih edilen flake zemin, çeşitli renk seçenekleri ve çiplerle kişiselleştirilebilir bir zemin kaplama çözümü sunar. Kimyasal dayanıklılığı, uzun ömrü ve estetik görünümü ile bu kaplama, modern mekanlara özgünlük katar."
    },

    {
        id: uuidv4(),
        thumbnail: thumb4,
        icon: <FaRegBuilding />,
        heading: "Kauçuk Zemin\r\n",
        slug:'kaucuk-zemin',
        text: "Spor salonları, çocuk oyun alanları ve fitness merkezleri için ideal olan kauçuk zemin, şok emici özelliği ile öne çıkar. Kaymaz yapısı ve dayanıklılığı sayesinde güvenli bir zemin sunar. Renk seçenekleriyle mekanınıza enerji katar ve kullanıcılarına konforlu bir deneyim sunar."
    },

    {
        id: uuidv4(),
        thumbnail: thumb5,
        icon: <FaCity />,
        heading: "Dekoratif Zemin | Baskı Betonu\r\n",
        slug:'dekoratif-zemin-baski-betonu',
        text: "iç ve dış mekanlarda estetik bir görünüm sağlar. Desen ve renk çeşitliliği sayesinde mekanınıza özgü bir atmosfer yaratmanızı sağlar. Dayanıklı yapısı ve kolay bakımı, dekoratif betonu öne çıkaran diğer özelliklerdir."
    },

    {
        id: uuidv4(),
        thumbnail: thumb6,
        icon: <FaHardHat />,
        heading: "Epoksi Zemin\r\n",
        slug:'epoksi-zemin',
        text: "Epoksi kaplama, dayanıklılığıyla bilinen bir malzeme olup kimyasal direnci ve estetik görünümüyle öne çıkar. Bu kaplama, özellikle fabrika zeminleri, otomobil galerileri ve laboratuvar gibi yoğun kullanım alanları için ideal bir tercihtir. Su geçirmez özelliği ve kolay temizlenebilir yapısı, epoksi kaplamayı cazip kılar."
    },
];

export default servicesTwoData;
