import {
    FaCity,
    FaDraftingCompass,
    FaHardHat,
    FaRegBuilding,
    FaTruckMoving,
} from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'
import thumb1 from '../../assets/img/service1.jpg'
import thumb2 from '../../assets/img/service2.jpg'
import thumb3 from '../../assets/img/service3.jpg'
import thumb4 from '../../assets/img/service4.jpg'
import thumb5 from '../../assets/img/service5.jpg'
import thumb6 from '../../assets/img/service6.jpg'

const servicesTwoData = [
    {
        id: uuidv4(),
        thumbnail:
            'https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d839fd22c59d8e120/view?project=654d24a6efcad9eb4ff2&mode=admin',
        icon: <FaDraftingCompass />,
        cover1:'https://bmczemin.com.tr/wp-content/uploads/2023/09/5e302fc0528764.21709733.jpg',
        cover2:'https://bmczemin.com.tr/wp-content/uploads/2023/09/terrazzo-zemin-tas-kaplama-1-2-1024x751-1.jpg',

        heading: 'Taş Halı | Stone Carpet',
        slug: 'tas-hali-stone-carpet',
        slogan:
            'Taş halı kaplama, mekanlara sıcak bir dokunuş ve doğal bir atmosfer katmak isteyenler için ideal bir zemin kaplama çözümüdür. Geleneksel halılardan farklı olarak, taş halı kaplama özgün desen ve renk seçenekleriyle mekanınıza estetik bir şıklık sunar.',
        content:
            'Taş Halı Kaplama, doğallığı ve estetiğiyle dikkat çeken bir zemin kaplama çözümüdür. Her bir taşın özel bir şekilde yerleştirilip sertleştirilmesi, ortaya görsel açıdan çekici ve dayanıklı bir yüzey çıkarır. Projelerin gereksinimlerine göre özelleştirilebilen uygulama süreci, her mekanın benzersizliğini vurgular. Taş Halı Kaplamalar, otellerden konutlara, ticari alanlardan açık hava peyzaj düzenlemelerine kadar birçok alanda kullanılmaktadır.Bu zemin kaplaması, doğal taşın güzelliklerini vurgulayarak mekanlara sıcaklık ve şıklık katar. Aynı zamanda, özel bağlayıcı maddesi sayesinde yüksek dayanıklılık sağlar, böylece yoğun kullanıma dayanabilir. Renk seçenekleri geniş bir yelpazede sunulduğu için müşteriler, projelerine ve tasarımlarına en uygun tonları seçme özgürlüğüne sahiptirler.Taş Halı Kaplama, sadece bir zemin kaplaması değil, aynı zamanda bir sanat eseri olarak da görülebilir. Her bir taşın yerleştirilmesindeki özen, mekanın karakterini vurgular. Bu zemin kaplaması, sadece görsel olarak çekici olmakla kalmaz, aynı zamanda uzun ömürlü ve bakımı kolay bir çözüm sunar. Her detayın titizlikle düşünüldüğü Taş Halı Kaplama, doğayla iç içe olan ve estetiği ön planda tutan mekanlar için ideal bir tercihtir.',
        areause:
            'Taş Halı Kaplamalar, estetik bir dokunuş ve doğal taşın sağlamlığı arayanlar için ideal bir seçenektir. Otel lobileri, alışveriş merkezleri, lüks konutlar ve dış mekan peyzaj projelerinde sıklıkla tercih edilir. Doğal taşın çeşitliliği ve dayanıklılığı, bu kaplamayı ticari ve konut projelerinde benzersiz kılar.',
        question1: 'Taş halı kaplama nasıl temizlenir?',
        question2: 'Hangi tür taşlar kullanılıyor?',
        question3: 'Uygulama süreci ne kadar sürer?',
        question4: ' Dayanıklılığı nedir?',
        question5: 'Renk seçenekleri nelerdir?',
        answer1:
            'Temizlik için hafif deterjanlar ve su kullanılabilir, ayrıca düzenli süpürme önerilir.',
        answer2:
            'Genellikle mermer, granit ve kuvars gibi doğal taş türleri tercih edilir.',
        answer3:
            'Uygulama süresi proje büyüklüğüne bağlı olarak değişir, ancak genellikle birkaç gün sürebilir.',
        answer4:
            'Taş halı kaplamalar, uzun ömürleri ve aşınmaya karşı dirençleri ile bilinir.',
        answer5:
            'Geniş renk yelpazesi sunulur, böylece müşteriler zevklerine uygun seçim yapabilirler.',
    },

    {
        id: uuidv4(),
        thumbnail:
            'https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d83aaf35b8dce7a58/view?project=654d24a6efcad9eb4ff2&mode=admin',
        icon: <FaRegBuilding />,
        cover1:'https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/65b71efe30397fa473f1/view?project=654d24a6efcad9eb4ff2&mode=admin',
        cover2:'https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/65b71f045f6cba54fe04/view?project=654d24a6efcad9eb4ff2&mode=admin',

        heading: 'Mikro Beton',
        slug: 'mikro-beton',
        slogan:
            'Mikro beton, ince bir tabaka halinde uygulanan modern bir zemin kaplama çözümüdür. Estetik görünümü, hafifliği ve çeşitli renk seçenekleri ile mikro beton, iç mekanlara özgün bir dokunuş katar.',
        content:
            'Mikro Beton, iç mekanlara çağdaş bir estetik ve özgünlük katmak isteyenler için mükemmel bir zemin kaplama çözümüdür. Her bir uygulama özel olarak tasarlandığı için her Mikro Beton yüzeyi, projenin karakterine ve kullanıcının beklentilerine uygun bir şekilde özelleştirilebilir. Bu zemin kaplaması, özel kalıplar ve renklendiricilerle uygulandığı için her projede benzersiz desenler ve dokular ortaya çıkarır. Mikro Beton, özellikle modern mağaza tasarımları, restoran iç mekanları ve lüks konutlarda sıklıkla tercih edilen bir zemin kaplamasıdır. Geniş renk paleti, kullanıcılara iç mekan tasarımlarında kendi kişisel tarzlarını yaratma özgürlüğü verir. Dayanıklılığı ve düşük bakım gereksinimi, Mikro Betonu ticari ve konut projeleri için ideal bir seçenek haline getirir. Uygulama süreci, deneyimli ekipler tarafından özenle gerçekleştirilir. Özel karışımlar ve kalıplar kullanılarak zemin üzerine uygulanan Mikro Beton, ardından özel maddelerle işlenir ve sertleştirilir. Sonuç, estetik ve dayanıklı bir zemin yüzeyidir. Temizlik için nötr pH değerli temizleyiciler kullanmak, zeminin uzun ömürlü olmasına yardımcı olur ve düzenli silme işlemi ile bakımı kolaydır. Mikro Beton, sadece bir zemin kaplaması olmanın ötesine geçerek, iç mekan tasarımına sanatsal bir dokunuş ekler. Özelleştirilebilir desenleri ve geniş renk seçenekleri ile her mekanı kişiselleştirir, estetik ve fonksiyonu bir araya getirerek kullanıcılara çağdaş ve özgün iç mekanlar sunar.',
        areause:
            'Mikro Beton, iç mekan tasarım projelerinde kullanıcılara geniş bir yelpaze sunar. Mağazalar, restoranlar, ofisler ve lüks konutlar gibi alanlarda estetik ve dayanıklı bir zemin kaplaması arayanlar için ideal bir çözümdür. Geniş renk paleti ve özelleştirilebilir desenlerle Mikro Beton, her projeye uygun kişiselleştirme imkanı sunar.',
        question1: 'Mikro beton renk seçenekleri nelerdir?',
        answer1:
            'Mikro beton, geniş bir renk paleti sunar, böylece kullanıcılar tasarım tercihlerine uygun seçim yapabilirler.',

        question2: 'Uygulama süreci nasıl işler?',
        answer2:
            'Mikro beton, özel kalıplar kullanılarak yüzeye uygulanır ve ardından özel maddelerle işlenir.',

        question3: 'Mikro beton zemin ne kadar dayanıklıdır?',
        answer3:
            'Mikro beton, yüksek dayanıklılığı ile bilinir ve uzun ömürlü bir zemin çözümü sunar.',

        question4: 'Bakımı nasıl yapılır?',
        answer4:
            'Temizlik için nötr pH değerli temizleyiciler ve düzenli silme önerilir.',

        question5: 'Hangi yüzeylerde kullanılabilir?',
        answer5:
            'Mikro beton, iç mekanlarda genellikle zeminlerde ve duvarlarda kullanılır.',
    },

    {
        id: uuidv4(),
        thumbnail:
            'https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d839a343228334179/view?project=654d24a6efcad9eb4ff2&mode=admin',
        icon: <FaTruckMoving />,
        cover1:'https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/65b720bc6cecf47d6be6/view?project=654d24a6efcad9eb4ff2&mode=admin',
        cover2:'https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/65b720d7cbb2a112febb/view?project=654d24a6efcad9eb4ff2&mode=admin',
        heading: 'Flake Zemin\r\n',
        slug: 'flake-zemin',
        slogan:
            'Endüstriyel ve ticari mekanlarda tercih edilen flake zemin, çeşitli renk seçenekleri ve çiplerle kişiselleştirilebilir bir zemin kaplama çözümü sunar. Kimyasal dayanıklılığı, uzun ömrü ve estetik görünümü ile bu kaplama, modern mekanlara özgünlük katar.',
        content:
            'Flake Zemin, iç mekanlarda estetik ve dayanıklılığı bir araya getiren özel bir zemin kaplama sistemidir. Bu zemin kaplaması, renkli taş cipsleri ile kaplanan epoksi tabakası sayesinde hem görsel çekiciliği hem de dayanıklılığı birleştirir. Flake Zemin, özellikle ticari alanlarda ve endüstriyel tesislerde geniş kullanım alanlarına sahiptir. Uygulama süreci, profesyonel ekipler tarafından dikkatle gerçekleştirilir. İlk olarak, zemin üzerine özel bir epoksi tabakası uygulanır. Ardından renkli taş cipsleri özenle serilir, istenilen desen ve renk kombinasyonları oluşturulur. Bu adımların tamamlanmasının ardından zemin özel bir işlemle sertleştirilir, böylece dayanıklı ve aşınmaya karşı dirençli bir yüzey ortaya çıkar. Flake Zemin, geniş renk ve desen seçenekleri sunarak müşterilere projelerine uygun kişiselleştirme imkanı tanır. Bu zemin kaplaması, estetik çeşitlilik ve dayanıklılık arayanlar için ideal bir seçenektir. Hem endüstriyel tesislerdeki yoğun kullanım hem de ofislerdeki modern tasarım projeleri için uygundur. Dayanıklı ve kolay bakım gerektiren Flake Zemin, düzenli temizlik ve hafif deterjanlarla temizlikle uzun ömürlü bir çözüm sunar. Bu özellikleriyle, Flake Zemin, estetik ve pratik ihtiyaçları birleştiren ve uzun yıllar boyunca kalitesini koruyan bir zemin kaplama çözümüdür.',
        areause:
            'Flake zemin, endüstriyel tesislerden perakende mağazalarına kadar geniş bir kullanım yelpazesine sahiptir. Estetik ve dayanıklılık arayan müşteriler tarafından tercih edilir.',
            question1:'Flake zemin renk seçenekleri nelerdir?',
            answer1:'Flake zemin, geniş renk ve desen seçenekleri sunar, böylece müşteriler kişisel tercihlerine uygun seçim yapabilirler.',
            question2:'Bu zemin hangi tür yerlerde kullanılabilir?',
            answer2:'Flake zemin, endüstriyel tesislerden perakende mağazalara kadar geniş bir kullanım yelpazesine sahiptir.',
            question3:'Uygulama süreci nasıl işler?',
            answer3:'Flake zemin, epoksi tabakası üzerine renkli taş cipslerinin serilmesiyle uygulanır.',
            question4:'Dayanıklılığı nedir?',
            answer4:'Flake zemin, dayanıklı ve aşınmaya karşı dirençlidir.',
            question5:'Bakımı nasıl yapılır?',
            answer5:' Düzenli temizlik ve hafif deterjanlarla temizlik önerilir.',
    },

    {
        id: uuidv4(),
        thumbnail:
            'https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d8387c6a0ea1a3965/view?project=654d24a6efcad9eb4ff2&mode=admin',
        icon: <FaRegBuilding />,
        cover1:'https://bmczemin.com.tr/wp-content/uploads/2023/09/546eeadd6ade193.jpg',
        cover2:'https://bmczemin.com.tr/wp-content/uploads/2023/09/132d3d05-390c-4dd2-aa60-a9ab2ad0b70e.jpg',
        heading: 'Kauçuk Zemin\r\n',
        slug: 'kaucuk-zemin',
        slogan:
            'Spor salonları, çocuk oyun alanları ve fitness merkezleri için ideal olan kauçuk zemin, şok emici özelliği ile öne çıkar. Kaymaz yapısı ve dayanıklılığı sayesinde güvenli bir zemin sunar. Renk seçenekleriyle mekanınıza enerji katar ve kullanıcılarına konforlu bir deneyim sunar.',
        content: '',
        areause: 'Kauçuk zemin, özellikle spor salonları, okullar ve oyun alanları gibi yerlerde kullanılan dayanıklı, esnek ve ses yalıtımlı bir zemin kaplamasıdır.Tercih Edilme Sebebi ve Kullanım Alanları Kauçuk zemin, darbe emiciliği ve konforuyla bilinir. Bu nedenle, fitness salonları, çocuk oyun alanları ve spor sahalarında tercih edilir.',
        answer1:'',
        question1:'',
        answer2:'',
        question2:'',
        answer3:'',
        question3:'',
        answer4:'',
        question4:'',
        answer5:'',
        question5:'',
    },

    {
        id: uuidv4(),
        thumbnail:
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b0099b184608815.6554f122bb4fd.jpg',
        icon: <FaCity />,
        cover1:'https://bmczemin.com.tr/wp-content/uploads/2023/09/KD2Q1528.jpg',
        cover2:'https://bmczemin.com.tr/wp-content/uploads/2023/09/ideas-of-stamped-concrete-pool-patio-desigFILIGRAN.jpg',
        heading: 'Dekoratif Zemin | Baskı Betonu\r\n',
        slug: 'dekoratif-zemin-baski-betonu',
        slogan:
            'iç ve dış mekanlarda estetik bir görünüm sağlar. Desen ve renk çeşitliliği sayesinde mekanınıza özgü bir atmosfer yaratmanızı sağlar. Dayanıklı yapısı ve kolay bakımı, dekoratif betonu öne çıkaran diğer özelliklerdir.',
        content: '',
        areause: 'Dekoratif baskı betonu, dış mekanlarda yürüyüş yolları, teraslar ve havuz kenarları gibi yerlerde estetik bir dokunuş sağlamak için tercih edilir.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb6,
        icon: <FaHardHat />,
        heading: 'Epoksi Zemin\r\n',
        slug: 'epoksi-zemin',
        slogan:
            'Epoksi kaplama, dayanıklılığıyla bilinen bir malzeme olup kimyasal direnci ve estetik görünümüyle öne çıkar. Bu kaplama, özellikle fabrika zeminleri, otomobil galerileri ve laboratuvar gibi yoğun kullanım alanları için ideal bir tercihtir. Su geçirmez özelliği ve kolay temizlenebilir yapısı, epoksi kaplamayı cazip kılar.',
        content: '',
        areause: ' açık ve kapalı otoparklar, yaya ve taşıt yolları, parklar, ticari bina çevreleri, konut çevreleri, kafe ve restorantlar, kapalı ve açık teşhir alanları',
    },
    {
        id: uuidv4(),
        thumbnail:
            'https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d835f0581c4d38246/view?project=654d24a6efcad9eb4ff2&mode=admin',
        icon: <FaHardHat />,
        cover1:'https://bmczemin.com.tr/wp-content/uploads/2023/09/cyclistoncyclepathperthbikeweek.jpg',
        cover2:'https://bmczemin.com.tr/wp-content/uploads/2023/09/Screenshot_36-Copy.png',
        heading: 'Spor Zemin Sistemleri\r\n',
        slug: 'spor-zemin-sistemleri',
        slogan:
            'Spor zemin sistemleri, çeşitli spor dallarına uygun olarak tasarlanan özel zemin kaplama sistemleridir. Bu sistemler, spor faaliyetlerinin gerçekleştiği alanlarda performansı artırmak, sporcuların güvenliğini sağlamak ve dayanıklılık özellikleriyle uzun ömürlü kullanım imkanı sunmak amacıyla geliştirilmiştir.',
        content: '',
        areause: 'testxd',
    },
    {
        id: uuidv4(),
        thumbnail:
            'https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d835f0581c4d38246/view?project=654d24a6efcad9eb4ff2&mode=admin',
        icon: <FaHardHat />,
        heading: 'Beton Silim Parlatma\r\n',
        slug: 'beton-silim-parlatma',
        slogan:
            'Spor zemin sistemleri, çeşitli spor dallarına uygun olarak tasarlanan özel zemin kaplama sistemleridir. Bu sistemler, spor faaliyetlerinin gerçekleştiği alanlarda performansı artırmak, sporcuların güvenliğini sağlamak ve dayanıklılık özellikleriyle uzun ömürlü kullanım imkanı sunmak amacıyla geliştirilmiştir.',
        content: '',
        areause: 'testxd',
    },
]

export default servicesTwoData
