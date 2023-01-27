const veri = [
  {
    id: 1,
    title: "Trangle Enamel Bileklik",
    price: 1.345,
    description:
      "Ürünlerimiz bronz, gümüş, 14k altın, pırlanta ve diğer çeşitli kıymetli taşlarla üretilmektedir.Günlük kullanımda su ve deniz suyu ile temas edebilir ancak havuz, parfüm, krem, deodorant gibi kimyasal etkenlerden ne kadar uzak tutarsanız ürünleriniz rengini ve parlaklığını o kadar uzun süre koruyacaktır.",
    category: "bileklik",
    image:
      "https://images.jujumood.com/1613332146018-1.jpg?format=webp&quality=90&width=441&height=441&fit=contain&trim=25&bg=ffffff&extend=20",
  },
  {
    id: 2,
    title: "Leaf Bracelet with Stones",
    price: 1.745,
    description:
      "Taşlı bileklik koleksiyonu daha fazla ışıltı arayanlar için hazırlandı. Sade bilekliklerinizin arasında parlaması için, akşam davetlerinde tarzınızı öne çıkarmak için, veya sevdiğiniz taşlarla dekore edildiği için seçeceğiniz taşlı bileklikler kişisel stilinizi tamamlayacak.",
    category: "bileklik",
    image:
      "https://images.jujumood.com/1613325293066-ccb-508-4.jpg?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=0",
  },
  {
    id: 3,
    title: "White Gold Plated Princess",
    price: 1.235,
    description:
      "Taşlı bileklik koleksiyonu daha fazla ışıltı arayanlar için hazırlandı. Sade bilekliklerinizin arasında parlaması için, akşam davetlerinde tarzınızı öne çıkarmak için, veya sevdiğiniz taşlarla dekore edildiği için seçeceğiniz taşlı bileklikler kişisel stilinizi tamamlayacak.",
    category: "bileklik",
    image:
      "https://images.jujumood.com/1613319733469-CCB-357%20yan.jpg?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=0",
  },
  {
    id: 4,
    title: "Half Enameled Rhythm Bracelet",
    price: 1.625,
    description:
      "Alıştığınız sade ve taşlı bileklik modelleriniz şimdi mineli versiyonları ile size rengarenk bir dünyanın kapısını aralıyor ve geniş bir seçim alanı sunuyor. Eğlenceli, şık, farklı ve iddialı bir tarz istiyorsanız mineli kadın ve erkek bileklikleri sizi bekliyor.",
    category: "bileklik",
    image:
      "https://images.jujumood.com/1613341549546-cbm-867-2.jpg?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=0",
  },
  {
    id: 5,
    title: "Summer Kolye",
    price: 2.565,
    description:
      "Taşlı kolye koleksiyonu ışıltıyıla dikkatleri üzerine çekmek isteyenler için hazırlandı. Sade kolyelerinizin arasında parlaması için, özel bir davete giderken, tarzınızı öne çıkarmak için, veya sevdiğiniz taşlarla dekore edildiği için seçeceğiniz taşlı kolyeler kişisel stilinizi tamamlayacak.",
    category: "kolye",
    image:
      "https://images.jujumood.com/1633291209594-10.png?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=0",
  },
  {
    id: 6,
    title: "Flair Kolye",
    price: 1.985,
    description:
      "Mineli kolye modelleri her tarza uyum sağlar ve özellikle canlı renkleriyle yaz aylarında vazgeçilmez olurlar. Elbiselerle, rahat tişörtlerle veya plajda kullanmanız için bir çok renk alternatifiyle size geniş bir seçim alanı sunar.",
    category: "kolye",
    image:
      "https://images.jujumood.com/1613388153842-ccn-777-1.jpg?format=webp&quality=90&width=441&height=441&fit=contain&trim=25&bg=ffffff&extend=20",
  },
  {
    id: 7,
    title: "Half Enameled Rhythm Bracelet",
    price: 1.945,
    description:
      "Mineli kolye modelleri her tarza uyum sağlar ve özellikle canlı renkleriyle yaz aylarında vazgeçilmez olurlar. Elbiselerle, rahat tişörtlerle veya plajda kullanmanız için bir çok renk alternatifiyle size geniş bir seçim alanı sunar.",
    category: "kolye",
    image:
      "https://images.jujumood.com/1635776478565-CCN-1139.jpg?format=webp&quality=90&width=441&height=441&fit=contain&trim=25&bg=ffffff&extend=20",
  },
  {
    id: 8,
    title: "Paper-Clip Kolye",
    price: 1.745,
    description:
      "Sıra dışı tarzını bilekliklerinden sonra kolye koleksiyonuna da taşıdı. Benzersiz modelleri ile hem kadın hem erkek kolyelerinde farklı bir tarza imza atan kolyelerini de metal, ip, taş ve mine renklerini seçerek kendi zevkinize göre yorumlamanız mümkün. Ömür boyu garanti sunduğumuz bronz kolyelerimizin dinamik, asi ve şık dünyasına hoşgeldiniz.",
    category: "kolye",
    image:
      "https://images.jujumood.com/1613368326512-ccn-496-1.jpg?format=webp&quality=90&width=441&height=441&fit=contain&trim=25&bg=ffffff&extend=20",
  },
  {
    id: 9,
    title: "Earrings with Stone Detail",
    price: 695,
    description:
      "Farklı renklerde taş alternatifleri arasından seçimi kendi eşsiz zevkinize göre yapabilirsiniz. Küpe seçimi sırasında taş renginin diğer JUJU takılarınızla uyumunu da göz önünde bulundurarak seçimler yapabilirsiniz. Taşlı modellerimizin ışıltısı yüzünüze de yansıyacak ve güzelliğinizi ortaya çıkaracak.",
    category: "kupe",
    image:
      "https://images.jujumood.com/1613400481268-cce-390-1.jpg?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=150",
  },
  {
    id: 10,
    title: "Triology Küpe",
    price: 595,
    description:
      "Farklı renklerde taş alternatifleri arasından seçimi kendi eşsiz zevkinize göre yapabilirsiniz. Küpe seçimi sırasında taş renginin diğer JUJU takılarınızla uyumunu da göz önünde bulundurarak seçimler yapabilirsiniz. Taşlı modellerimizin ışıltısı yüzünüze de yansıyacak ve güzelliğinizi ortaya çıkaracak.",
    category: "kupe",
    image:
      "https://images.jujumood.com/1613404418054-cem-603-2.jpg?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=150",
  },
  {
    id: 11,
    title: " Single Drop Flow Küpe",
    price: 785,
    description:
      "Farklı renklerde taş alternatifleri arasından seçimi kendi eşsiz zevkinize göre yapabilirsiniz. Küpe seçimi sırasında taş renginin diğer JUJU takılarınızla uyumunu da göz önünde bulundurarak seçimler yapabilirsiniz. Taşlı modellerimizin ışıltısı yüzünüze de yansıyacak ve güzelliğinizi ortaya çıkaracak.",
    category: "kupe",
    image:
      "https://images.jujumood.com/1648626481700-2.png?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=150",
  },
  {
    id: 12,
    title: " Skull Küpe",
    price: 925,
    description:
      "Farklı renklerde taş alternatifleri arasından seçimi kendi eşsiz zevkinize göre yapabilirsiniz. Küpe seçimi sırasında taş renginin diğer JUJU takılarınızla uyumunu da göz önünde bulundurarak seçimler yapabilirsiniz. Taşlı modellerimizin ışıltısı yüzünüze de yansıyacak ve güzelliğinizi ortaya çıkaracak.",
    category: "kupe",
    image:
      "https://images.jujumood.com/1618367776530-CEM-939.jpg?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=150",
  },
  {
    id: 13,
    title: " Enameled Dot Yüzük",
    price: 845,
    description:
      "Ürünlerimiz bronz, gümüş, 14k altın, pırlanta ve diğer çeşitli kıymetli taşlarla üretilmektedir.Günlük kullanımda su ve deniz suyu ile temas edebilir ancak havuz, parfüm, krem, deodorant gibi kimyasal etkenlerden ne kadar uzak tutarsanız ürünleriniz rengini ve parlaklığını o kadar uzun süre koruyacaktır.",
    category: "yuzuk",
    image:
      "https://images.jujumood.com/1618367776530-CEM-939.jpg?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=150",
  },
  {
    id: 14,
    title: " Enameled Dot Yüzük",
    price: 985,
    description:
      "Ürünlerimiz bronz, gümüş, 14k altın, pırlanta ve diğer çeşitli kıymetli taşlarla üretilmektedir. Günlük kullanımda su ve deniz suyu ile temas edebilir ancak havuz, parfüm, krem, deodorant gibi kimyasal etkenlerden ne kadar uzak tutarsanız ürünleriniz rengini ve parlaklığını o kadar uzun süre koruyacaktır.",
    category: "yuzuk",
    image:
      "https://images.jujumood.com/1613407851155-crm-484-2.jpg?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=150",
  },
  {
    id: 15,
    title: " Sultan Yüzük",
    price: 925,
    description:
      "Ürünlerimiz bronz, gümüş, 14k altın, pırlanta ve diğer çeşitli kıymetli taşlarla üretilmektedir. Günlük kullanımda su ve deniz suyu ile temas edebilir ancak havuz, parfüm, krem, deodorant gibi kimyasal etkenlerden ne kadar uzak tutarsanız ürünleriniz rengini ve parlaklığını o kadar uzun süre koruyacaktır.",
    category: "yuzuk",
    image:
      "https://images.jujumood.com/1630324340474-IMG_3948.jpg?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=150",
  },
  {
    id: 16,
    title: " Baton Yüzük",
    price: 995,
    description:
      "Ürünlerimiz bronz, gümüş, 14k altın, pırlanta ve diğer çeşitli kıymetli taşlarla üretilmektedir. Günlük kullanımda su ve deniz suyu ile temas edebilir ancak havuz, parfüm, krem, deodorant gibi kimyasal etkenlerden ne kadar uzak tutarsanız ürünleriniz rengini ve parlaklığını o kadar uzun süre koruyacaktır.",
    category: "yuzuk",
    image:
      "https://images.jujumood.com/1613407165624-crm-546-2.jpg?format=webp&width=363&height=363&quality=75&trim=25&fit=contain&bg=ffffff&extend=150",
  },
];
export default veri;
