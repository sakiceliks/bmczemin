import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';

const WidgetGetinTouchData = [
    {
        id: uuidv4(),
        icon: <AiOutlinePhone />,
        heading: 'Telefon No',
        text: '+90 531 281 29 58',
    },

    {
        id: uuidv4(),
        icon: <AiOutlineMail />,
        heading: 'Email',
        text: 'info@bmczemin.com.tr',
    },

    {
        id: uuidv4(),
        icon: <BiMap />,
        heading: 'Adres',
        text: 'Sancaktepe / İstanbul',
    },
];

export default WidgetGetinTouchData;
