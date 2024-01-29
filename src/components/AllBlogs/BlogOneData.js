import { v4 as uuidv4 } from 'uuid';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomMonth = () => {
    const months = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
    const randomIndex = getRandomInt(0, 11);
    return months[randomIndex];
};
const blogOneData = [
    {
        id: uuidv4(),
        thumbnail: "https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d8387c6a0ea1a3965/view?project=654d24a6efcad9eb4ff2&mode=admin",
        date: getRandomInt(1, 30),
        month: getRandomMonth(),
        category: "KAUÇUK ZEMİN KAPLAMA (SBR EPDM)",
        author: "Mustafa Çelik",
        title: "Kauçuk Zemin Kaplamaları: Sürdürülebilir ve Dayanıklı Çözümler",
        content: "Kauçuk zemin kaplamaları, spor salonlarından oyun alanlarına kadar birçok alanda popüler bir tercih haline gelmiştir. Bu blog yazısında, SBR ve EPDM kauçuk zemin kaplamalarının özellikleri, avantajları ve kullanım alanları hakkında detaylı bilgiler bulacaksınız. Ayrıca, çevre dostu özellikleriyle dikkat çeken bu malzemelerin bakım ipuçlarına ve uzun ömürlü kullanım avantajlarına odaklanacağız.",
        slug: "kaucuk-zemin-kaplama-sbr-epdm"
    },
    {
        id: uuidv4(),
        thumbnail: "https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d835f0581c4d38246/view?project=654d24a6efcad9eb4ff2&mode=admin",
        date: getRandomInt(1, 30),
        month: getRandomMonth(),
        category: "SPOR ZEMİN KAPLAMA",
        author: "Mustafa Çelik",
        title: "Spor Zemin Kaplamalarında Kalite ve Performans: İdeal Seçim Nasıl Yapılır?",
        content: "Spor salonları, fitness merkezleri ve spor sahalarında kullanılan zemin kaplamalarının seçimi, performans ve güvenlik açısından kritiktir. Bu yazıda, spor zemin kaplamalarının çeşitleri, dayanıklılık özellikleri, zeminin sporcu performansına etkileri ve doğru seçim yaparken dikkat edilmesi gereken faktörler hakkında detaylı bilgilere ulaşacaksınız.",
        slug: "spor-zemin-kaplama"
    },
    {
        id: uuidv4(),
        thumbnail: "https://www.helloprojectusa.com/wp-content/uploads/2022/08/Epoxy-floor-banner.png",
        date: getRandomInt(1, 30),
        month: getRandomMonth(),
        category: "EPOKSİ ZEMİN KAPLAMA",
        author: "Mustafa Çelik",
        title: "Epoksi Zemin Kaplamaları: Güçlü, Estetik ve Dayanıklı Yüzeyler",
        content: "Epoksi zemin kaplamaları endüstriyel tesislerden garajlara kadar geniş bir uygulama yelpazesine sahiptir. Bu blog yazısında, epoksi kaplamaların özellikleri, avantajları ve estetik çözümleri hakkında derinlemesine bilgiler bulacaksınız. Ayrıca, epoksi kaplamaların uygulama süreçleri, bakım ipuçları ve uzun ömürlü kullanım avantajları ele alınacaktır.",
        slug: "epoksi-zemin-kaplama"
    },
    {
        id: uuidv4(),
        thumbnail: "https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d83a7894c172ca5ed/view?project=654d24a6efcad9eb4ff2&mode=admin",
        date: getRandomInt(1, 30),
        month: getRandomMonth(),
        category: "BASKI BETON",
        author: "Mustafa Çelik",
        title: "Baskı Beton: Dış Mekanlara Estetik ve Dayanıklılık Katın",
        content: "Baskı beton, dış mekanlarda estetik bir dokunuş ve dayanıklı bir zemin çözümü sunar. Bu blog yazısında, baskı betonun uygulama alanları, desen ve renk seçenekleri, bakım ipuçları ve uzun ömürlü kullanım avantajları hakkında detaylı bilgiler bulacaksınız. Ayrıca, baskı betonun peyzaj tasarımında nasıl kullanılabileceği konusunda ilham alacaksınız.",
        slug: "baski-beton"
    },
    {
        id: uuidv4(),
        thumbnail: "https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/65641cdbf200a4d9edd2/view?project=654d24a6efcad9eb4ff2&mode=admin",
        date: getRandomInt(1, 30),
        month: getRandomMonth(),
        category: "BETON SİLİMİ",
        author: "Mustafa Çelik",
        title: "Beton Silimi: Modern ve Şık İç Mekan Tasarımlar İçin Ideal Çözüm",
        content: "Beton silimi, iç mekanlarda modern ve şık bir görünüm sağlayan popüler bir zemin kaplama seçeneğidir. Bu yazıda, beton siliminin özellikleri, uygulama alanları, renk ve desen seçenekleri hakkında bilgi edineceksiniz. Beton silimi zeminlerin bakımı, temizliği ve uzun vadeli kullanım avantajlarına odaklanan bir rehber de sunulacaktır.",
        slug: "beton-silimi"
    },
    {
        id: uuidv4(),
        thumbnail: "https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d83a3a35bf52da249/view?project=654d24a6efcad9eb4ff2&mode=admin",
        date: getRandomInt(1, 30),
        month: getRandomMonth(),
        category: "ENDÜSTRİYEL ZEMİN BETONU",
        author: "Mustafa Çelik",
        title: "Endüstriyel Zemin Betonu: Güçlü Temeller İçin Güvenilir Seçim",
        content: "Endüstriyel tesislerde dayanıklı bir zemin çözümü arıyorsanız, endüstriyel zemin betonlarına bir göz atmalısınız. Bu blog yazısında, endüstriyel zemin betonlarının dayanıklılığı, kimyasal direnci ve ağır yüklerle başa çıkma yetenekleri hakkında bilgiler bulacaksınız. Ayrıca, endüstriyel zemin betonlarının uygulama süreçleri ve maliyet-etkin avantajları ele alınacaktır.",
        slug: "endustriyel-zemin-betonu"
    },
    {
        id: uuidv4(),
        thumbnail: "https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d83aaf35b8dce7a58/view?project=654d24a6efcad9eb4ff2&mode=admin",
        date: getRandomInt(1, 30),
        month: getRandomMonth(),
        category: "MİKRO BETON",
        author: "Mustafa Çelik",
        title: "Mikro Beton: İnce ve Estetik Kaplamalarla Modern İç Mekanlar",
        content: "Mikro beton, ince bir yüzey kaplamasıyla modern iç mekan tasarımlarına şıklık katan bir malzemedir. Bu yazıda, mikro betonun özellikleri, renk seçenekleri, uygulama alanları ve estetik avantajları hakkında detaylı bilgiler bulacaksınız. Mikro betonun bakımı, temizliği ve iç mekan tasarımındaki yaratıcı kullanım örnekleri de paylaşılacaktır.",
        slug: "mikro-beton"
    },
    {
        id: uuidv4(),
        thumbnail: "https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d83aaf35b8dce7a58/view?project=654d24a6efcad9eb4ff2&mode=admin",
        date: getRandomInt(1, 30),
        month: getRandomMonth(),
        category: "FLAKE ZEMİN",
        author: "Mustafa Çelik",
        title: "Flake Zemin Kaplamalar: Renkli ve Dayanıklı Zemin Çözümleri",
        content: "Flake zemin kaplamaları, renk seçenekleri ve dekoratif tasarımlarıyla dikkat çeken dayanıklı zemin çözümleridir. Bu blog yazısında, flake zemin kaplamalarının özellikleri, uygulama süreçleri, renk seçenekleri ve avantajları hakkında detaylı bilgiler bulacaksınız.",
        slug: "flake-zemin"
    },
    {
        id: uuidv4(),
        thumbnail: "https://cloud.appwrite.io/v1/storage/buckets/654d8330461412b1b65a/files/654d839fd22c59d8e120/view?project=654d24a6efcad9eb4ff2&mode=admin",
        date: getRandomInt(1, 30),
        month: getRandomMonth(),
        category: "TAŞ HALI KAPLAMA (STONE CARPET)",
        author: "Mustafa Çelik",
        title: "Taş Halı Kaplama (Stone Carpet): Doğal Görünüm ve Dayanıklı Yüzeyler",
        content: "Taş halı kaplama, iç mekanlarda ve dış mekanlarda kullanılan estetik bir zemin kaplama çözümüdür. Bu yazıda, taş halı kaplamanın özellikleri, uygulama alanları, renk ve taş seçenekleri hakkında bilgi edineceksiniz. Taş halı kaplamanın dayanıklılığı, bakımı ve mekan tasarımındaki kullanım örnekleri de ele alınacaktır.",
        slug: "tas-hali-kaplama-stone-carpet"
    },
];

export default blogOneData;
