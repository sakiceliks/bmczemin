import React from 'react';
import man1 from '../../assets/img/man1.png';
import bgImg from '../../assets/img/map_pattern.png';
import FaqAccordion from '../FaqAccordion';

function Faq() {



    const faqData = [
        {
            id: 1,
            question: "Baskı Beton Nedir ve Nasıl Uygulanır?",
            answer: "Baskı beton, çok çeşitli renk ve desen seçeneklerine sahip, doğal taş görünümü sağlayan bir zemin ve duvar kaplama teknolojisidir. Genellikle granit, kayrak gibi doğal taşların tek tek döşenmiş görünümünü taklit eder. Uygulama süreci, özel kalıpların beton yüzeyine basılması ve ardından renklendirici maddelerin eklenmesini içerir. Bu süreç, estetik ve uzun ömürlü sonuçlar elde etmek için özenle gerçekleştirilir."
        },
        {
            id: 2,
            question: "Dekoratif (Baskı) Betonun Avantajları Nelerdir?",
            answer: "Baskı betonunun avantajları arasında çökmezlik, kaymazlık, leke tutmama, uzun ömürlülük, estetik görünüm, iz bırakmama ve güneş ışınlarına dayanıklılık bulunur. Ayrıca zengin renk seçenekleri sunar, dokuz farklı kalıp dizaynıyla tasarım özgürlüğü sağlar ve ekonomik, hızlı bir kaplama yöntemidir. Projelere estetik ve fonksiyonel katkı sağlar."
        },
        {
            id: 3,
            question: "Baskı Beton ve Geleneksel Zemin Kaplamaları Arasındaki Farklar Nelerdir?",
            answer: "Baskı beton, geleneksel zemin kaplamalarından maliyet, dayanıklılık, tasarım özgürlüğü gibi birçok açıdan farklılık gösterir. Geleneksel kaplamaların aksine, baskı beton özel desenler ve renklendirmelerle benzersiz bir estetik sunar ve uzun ömürlüdür."
        },
        {
            id: 4,
            question: "Hangi Alanlarda Baskı Beton Kullanılabilir?",
            answer: "Baskı beton, iç mekanlar, dış mekanlar, otoparklar, bahçe düzenlemeleri, havuz kenarları, alışveriş merkezleri, turistik tesisler, endüstriyel yapılar gibi birçok alanda kullanılabilir. Esnek yapısı sayesinde çeşitli projelere uygundur."
        },
        {
            id: 5,
            question: "Baskı Betonun Bakımı ve Onarımı Nasıl Yapılır?",
            answer: "Baskı beton yüzeyler, düzenli temizlik ve koruyucu bakım ile uzun ömürlü kalabilir. Onarım gerektiğinde, aynı uygulama yöntemleri kullanılarak kolayca eski haline getirilebilir, renk farklılığı oluşmaz."
        },
        {
            id: 6,
            question: "Baskı Betonun Renk Solmalarına Karşı Direnci Nedir?",
            answer: "Baskı beton, güneş ışınlarına dayanıklıdır ve renk solmalarına karşı dirençlidir. Uygulama sırasında kullanılan renklendiriciler, uzun süre canlı renklerin korunmasına yardımcı olur."
        },
        {
            id: 7,
            question: "Dokuz Farklı Baskı Beton Kalıp Dizaynı Nedir?",
            answer: "Baskı beton, dokuz farklı kalıp dizaynıyla çeşitli desenler ve görünümler elde etmenizi sağlar. Örme taş duvar, döşeme parke, ahşap görünümü gibi seçenekler projelerinize estetik bir çeşitlilik katar."
        },
        {
            id: 8,
            question: "Baskı Betonun Ekonomik ve Hızlı Uygulama Yöntemleri",
            answer: "Baskı beton, ekonomik ve hızlı bir uygulama yöntemi sunar. Diğer zemin kaplama sistemlerine göre daha hızlı kurur ve maliyet etkin bir seçenektir."
        },
        {
            id: 9,
            question: "Baskı Betonun Kullanıldığı Restorasyon Projeleri",
            answer: "Tarihi binaların restorasyonunda baskı beton, geleneksel görünümü koruyarak modern bir dokunuş sağlar. Restorasyon projelerinde, dayanıklılığı ve estetik çeşitliliği nedeniyle tercih edilir."
        },
        {
            id: 10,
            question: "Baskı Beton Onarımları: Renk Farklılığı Nasıl Önlenir?",
            answer: "Baskı betonun hasar görmüş bölgelerinin nasıl onarılabileceği ve onarım sonrasında renk tutarlılığının nasıl sağlandığı konusunda uzman ekipler tarafından özel yöntemler kullanılır. Bu sayede renk farklılığı önlenmiş olur."
        }
    ];
    


    return (
        <section  className="faq-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-12">
                        <div className="content-block">
                            <p></p>
                            <h1>İnce Detaylarda <br /> Büyük Estetik</h1>
                            <div className="bg-img">
                                <img src={bgImg} alt="" />
                                <div
                                    className="man bg-cover man-1"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-2"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                                <div
                                    className="man bg-cover man-3"
                                    style={{
                                        backgroundImage: `url(${man1})`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 mt-4 mt-xl-0">
                        <div className="faq-content">
                        {faqData.slice(0, 5).map((item, index) => (

    <FaqAccordion key={item.id} question={item.question} answer={item.answer} />
))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
