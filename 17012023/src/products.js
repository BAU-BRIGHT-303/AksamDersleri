const products = [
    {
        id: 1,
        name: "Apple iPhone 14 Pro",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492",
        price: 39999,
        desc_1: "Her şeyi bir bakışta görmenizi sağlayan Hep Açık özelliğine sahip, daha parlak 6.1 inç Super Retina XDR ekran.",
        desc_2: "Sihirli bir iPhone deneyimi Dynamic Island",
        desc_3: "Trafik Kazası Algılama özelliğiyle iPhone 14 Pro, ciddi bir araba kazası geçirirseniz bunu algılayabiliyor ve siz yardım çağıramadığınızda 112’yi arıyor",
        desc_4: "4 kata kadar daha yüksek çözünürlük için gelişmiş dört pikselli sensöre sahip 48 MP Ana kamera",
        desc_5: "Tüm gün süren pil ömrü için süper hızlı ve süper verimli A16 Bionic çip",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14pro-digitalmat-gallery-1-202209_GEO_EMEA?wid=364&hei=333&fmt=png-alpha&.v=1660830514334"
    },
    {
        id: 2,
        name: "Apple iPhone 14",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958160674",
        price: 30999,
        desc_1: "Net, canlı ve parlak 6.1 inç Super Retina XDR ekran",
        desc_2: "Tüm gün süren muhteşem pil ömrü ile 20 saate kadar video oynatma",
        desc_3: "Trafik Kazası Algılama özelliğiyle iPhone 14, ciddi bir araba kazası geçirirseniz bunu algılayabiliyor ve siz yardım çağıramadığınızda 112’yi arıyor",
        desc_4: "Her türlü aydınlatma düzeyinde daha da etkileyici çekimler için yeni Ana kamera ve gelişmiş görüntü işleme",
        desc_5: "iPhone 13 Pro’dan tanıdığınız süper hızlı çip A15 Bionic",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14-digitalmat-gallery-1-202209?wid=364&hei=333&fmt=png-alpha&.v=1662055813734"
    },
    {
        id: 3,
        name: "Apple iPhone SE",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646415838921",
        price: 16999,
        desc_1: "Parlak, renkli ve keskin 4.7 inç Retina HD ekran",
        desc_2: "iPhone 13’teki süper güçlü çipin aynısı, A15 Bionic",
        desc_3: "Otomatik düzenlemelerle herkesin, her yerin ve her şeyin muhteşem görünmesini sağlayan daha akıllı bir kamera",
        desc_4: "Touch ID özellikli Ana Ekran düğmesiyle güvenli bir şekilde iPhone’unuzun kilidini açın ve uygulamalara giriş yapın.",
        desc_5: " ",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphonese-digitalmat-gallery-1-202203_GEO_EMEA?wid=364&hei=333&fmt=png-alpha&.v=1645574660944"
    },
    {
        id: 4,
        name: "Apple iPhone 13",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958176452",
        price: 27999,
        desc_1: "6.1 inç Super Retina XDR ekran",
        desc_2: "Loş ışıkta olağanüstü fotoğraflar ve videolar çekmek için gelişmiş çift kamera sistemi",
        desc_3: "4 çekirdekli GPU’ya sahip A15 Bionic çip ile ışık hızında performans",
        desc_4: "Tüm akıllı telefon camlarından daha sağlam bir materyal olan Ceramic Shield ve suya dayanıklı tasarım",
        desc_5: " ",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone13-digitalmat-gallery-1-202203_GEO_EMEA?wid=364&hei=333&fmt=png-alpha&.v=1645574659471"
    },
    {
        id: 5,
        name: "Apple iPhone 12",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone12-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958189616",
        price: 24999,
        desc_1: "Mükemmel kontrast ve olağanüstü renk doğruluğu özelliklerine sahip 6.1 inç Super Retina XDR ekran",
        desc_2: "Gece modu ve Dolby Vision HDR video kaydı özelliklerine sahip gelişmiş çift kamera sistemi",
        desc_3: "Süper güçlü A14 Bionic çip",
        desc_4: "Tüm akıllı telefon camlarından daha sağlam bir materyal olan Ceramic Shield ve suya dayanıklı tasarım.",
        desc_5: " ",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone12-digitalmat-gallery-1-202111?wid=364&hei=333&fmt=png-alpha&.v=1635980933000"
    },
    {
        id: 6,
        name: "Apple Watch Ultra",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra-202209_GEO_TR?wid=340&hei=264&fmt=png-alpha&.v=1664212622175",
        price: 27999,
        desc_1: "Yeni Eylem Düğmesi’ne sahip ultra sağlam 49 mm titanyum kasa ağırlık, sağlamlık ve aşınmaya dayanıklılık arasında mükemmel bir denge kuruyor",
        desc_2: "En zorlu koşullarda bile okunaklı, en büyük ve en parlak Hep Açık Retina ekran",
        desc_3: "Mesafe, hız ve rota verilerini hesaplayarak doğru konumu belirleyen çift frekanslı hassas GPS",
        desc_4: "Normal kullanımda 36 saate kadar; düşük güç ayarlarıyla 60 saate kadar pil ömrü",
        desc_5: "Açık hava maceraları, su sporları ve dayanıklılık antrenmanları için özel olarak tasarlanmış üç yeni kayışla eşleştirin.",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-ultra-digitalmat-gallery-1-202209?wid=364&hei=333&fmt=jpeg&qlt=95&.v=1661728311855"
    },
    {
        id: 7,
        name: "Apple Watch Series 8",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-s8-202209_GEO_TR?wid=340&hei=264&fmt=jpeg&qlt=95&.v=1662494025847",
        price: 9299,
        desc_1: "Büyük tam ekran tasarıma sahip parlak Hep Açık Retina ekran",
        desc_2: "Genel zindelik durumunuz hakkında ipuçları sunan sıcaklık algılama özelliğiyle tanışın",
        desc_3: "Dilediğiniz zaman, dilediğiniz yerde EKG çekerek Atriyal fibrilasyon kontrolü yapın",
        desc_4: "Düşme Algılama, Acil SOS ve şimdi Trafik Kazası Algılama dahil yenilik dolu güvenlik ayarları",
        desc_5: "Gelişmiş Antrenman uygulamasıyla egzersiz yapmanın yepyeni yollarını keşfedin",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s8-digitalmat-gallery-1-202209_GEO_TR?wid=364&hei=333&fmt=png-alpha&.v=1661542755500"
    },
    {
        id: 8,
        name: "Apple Watch SE",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-se-202209_GEO_TR?wid=340&hei=264&fmt=png-alpha&.v=1661812053222",
        price: 5999,
        desc_1: "Yeni S8 SiP ile 1. nesil Apple Watch SE’ye göre yaklaşık %20 daha hızlı",
        desc_2: "Düşme Algılama ve Acil SOS² ve şimdi Trafik Kazası Algılama dahil yenilik dolu güvenlik ayarları",
        desc_3: "Gelişmiş Antrenman uygulamasıyla egzersiz yapmanın yepyeni yollarını keşfedin",
        desc_4: "Uyku uygulamasıyla uyku evrelerinizi takip edin; dilediğiniz her an kalp atış hızınızı kontrol edin",
        desc_5: "Bileğinizden mesaj gönderin, arama yapın ve müzik dinleyin",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-se-digitalmat-gallery-1-202209_GEO_TR?wid=364&hei=333&fmt=png-alpha&.v=1661540310370"
    },
    {
        id: 9,
        name: "Apple 11 inç iPad Pro",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-card-40-pro-202210?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1664578794100",
        price: 20499,
        desc_1: "Apple M2 çip, profesyonel iş akışlarında olağanüstü bir performans artışı ve tüm gün süren pil ömrü sağlıyor",
        desc_2: "ProMotion, True Tone ve P3 geniş renk yelpazesi özelliklerine sahip 11 inç Liquid Retina ekran",
        desc_3: "LiDAR Tarayıcısı’na sahip Pro kameralar ve Ana Sahne özelliğine sahip Ultra Geniş ön kamera",
        desc_4: "En hızlı Wi-Fi bağlantıları için Wi-Fi 6E",
        desc_5: "Apple Pencil (2. nesil), Magic Keyboard ve Smart Keyboard Folio ile uyumluluk",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=364&hei=333&fmt=png-alpha&.v=1664477161220"
    },
    {
        id: 10,
        name: "Apple iPad (10.Nesil)",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-card-40-ipad-202210?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1665519729404",
        price: 11299,
        desc_1: "A14 Bionic çip, farklı uygulamaları aynı anda çalıştırmanıza ve bu uygulamalar arasında sorunsuzca çalışmanıza imkan veriyor",
        desc_2: "Tam ekran tasarımıyla 10.9 inç Liquid Retina ekran¹ olağanüstü bir görüntüleme deneyimi sunuyor",
        desc_3: "Uzun kenarda konumlandırılmış Ana Sahne özellikli 12 MP Ultra Geniş ön kamera muhteşem bir görüntülü arama deneyimi sağlıyor",
        desc_4: "Süper hızlı Wi-Fi 6 ile teknolojileriyle bağlantıda kalın",
        desc_5: "Apple Pencil (1. nesil), Magic Keyboard Folio ve Smart Folio ile uyumluluk",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-digitalmat-gallery-1-202210_GEO_TR?wid=364&hei=333&fmt=png-alpha&.v=1664810633362"
    }
    ,
    {
        id: 11,
        name: "Apple M2 çipli MacBook Air",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1653499620093",
        price: 25999,
        desc_1: "Dilediğiniz yerde çalışmanıza, oyun oynamanıza ve yaratıcılığınızı göstermenize imkan veren inanılmaz ince yepyeni tasarım",
        desc_2: "Çok daha fazlasını çok daha hızlı şekilde yapmanızı sağlayan yeni nesil Apple M2 çip ve aygıtınızı tüm gün boyunca kullanmanıza olanak veren 18 saate kadar pil ömrü",
        desc_3: "Capcanlı detaylarla dolu göz alıcı metinler ve görseller için 500 nit parlaklığa sahip 13.6 inç Liquid Retina ekran",
        desc_4: "Olağanüstü net görüntüler ve muhteşem ses kalitesi için 1080p FaceTime HD kamera, üçlü mikrofon dizilimi ve Uzamsal Ses teknolojisine sahip dört hoparlörlü ses sistemi",
        desc_5: "En zorlu görevlerde bile MacBook Air’in tamamen sessiz çalışmasına imkan veren fansız tasarım",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-digitalmat-gallery-1-202206?wid=364&hei=333&fmt=png-alpha&.v=1652827325377"
    }
    ,
    {
        id: 12,
        name: "Apple 24 inç iMac",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=490&hei=500&fmt=jpeg&qlt=95&.v=1625868688000",
        price: 26999,
        desc_1: "Apple M1 çip ile güçlü bir CPU, GPU ve yapay öğrenme performansı",
        desc_2: "Büyüleyici 4.5K Retina ekran",
        desc_3: "İnanılmaz ince 11,5 mm tasarım ve capcanlı yedi renk seçeneği",
        desc_4: "1080p FaceTime HD kamera, yüksek bir ses kalitesi sunan altı hoparlörlü ses sistemi ve stüdyo kalitesinde mikrofon dizilimi",
        desc_5: "Uyumlu renklerde Magic Mouse ve Magic Keyboard",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac24-digitalmat-gallery-1-202111_GEO_TR?wid=364&hei=333&fmt=png-alpha&.v=1635529700000"
    }
    ,
    {
        id: 13,
        name: "Apple AirPods Pro (2.Nesil)",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1660803972361",
        price: 5399,
        desc_1: "Dinamik kafa izleme özellikli Kişiselleştirilmiş Uzamsal Ses",
        desc_2: "Aktif Gürültü Engelleme ve Adaptif Şeffaf Mod",
        desc_3: "Tere ve suya dayanıklı AirPods ve şarj kutusu",
        desc_4: "Tek şarjla 6 saate kadar dinleme süresi",
        desc_5: "Hoparlöre ve askıya sahip MagSafe Şarj Kutusu",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1660803972361"
    }
    ,
    {
        id: 14,
        name: "Apple AirPods (3.Nesil)",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632861342000",
        price: 4199,
        desc_1: "Dinamik kafa izleme özellikli Kişiselleştirilmiş Uzamsal Ses",
        desc_2: "Tere ve suya dayanıklı AirPods ve şarj kutusu",
        desc_3: "Tek şarjla 6 saate kadar dinleme süresi ",
        desc_4: "Lightning Şarj Kutusu veya MagSafe Şarj Kutusu",
        desc_5: "Mükemmel bir kulaklık",
        desc_img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632861342000"
    }
]

export default products;