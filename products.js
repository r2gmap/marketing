/* =====================================================================
   ملف التحكم الوحيد — أي تعديل في الموقع بيتم من هنا بس
   ===================================================================== */

const SITE = {
  name: "متجر العروض",                 // اسم الموقع
  telegram: "hazem_py",           // يوزر تيليجرام بتاعك من غير @
  currency: "ج.م",                     // العملة
  markup: 1.25,                        // هامش الربح: 1 = نفس السعر، 1.25 = زيادة 25% على كل الأسعار والعروض
  heroTitle: "خصومات حقيقية تصل إلى 50%",
  heroSub: "اختيارات منتقاة بعناية بأسعار وعروض مميزة — اطلب الآن في خطوة واحدة عبر تيليجرام",
  hotTitle: "🔥 خصومات 50% — لفترة محدودة",
  oldPriceLabel: "بدلاً من",           // الكلمة اللي جنب السعر القديم
  orderBtn: "اطلب الآن",
  footText: "الأسعار والعروض قابلة للتغيير دون إشعار مسبق، وتتوفر الكميات حتى نفاد المخزون.",

  /* مميزات الثقة — زود أو امسح براحتك */
  perks: [
    { icon: "⚡", title: "طلب سريع",       text: "خطوة واحدة عبر تيليجرام" },
    { icon: "🏷️", title: "عروض مميزة",     text: "خصومات تصل إلى 50%" },
    { icon: "💬", title: "دعم مباشر",      text: "نجيب على استفساراتك فوراً" },
    { icon: "🎯", title: "اختيارات منتقاة", text: "منتجات تم اختيارها بعناية" }
  ],

  /* الأسئلة الشائعة — زود أو امسح براحتك */
  faq: [
    { q: "كيف أقوم بالطلب؟",               a: "اضغط على «اطلب الآن» وستفتح لك محادثة على تيليجرام تحتوي على اسم المنتج وسعره، وسنكمل معك باقي التفاصيل." },
    { q: "هل يمكنني الاستفسار قبل الطلب؟", a: "بالتأكيد، تواصل معنا على تيليجرام وسنجيبك على أي سؤال بخصوص المنتج." }
  ]
};

/* ---------------------------------------------------------------------
   الأقسام: زوّد قسم جديد بإضافة سطر هنا (id بالإنجليزي من غير مسافات)
   --------------------------------------------------------------------- */
const CATEGORIES = [
  { id: "acc", name: "شواحن وإكسسوارات" },
  { id: "aud", name: "سماعات ومكبرات صوت" },
  { id: "gad", name: "أجهزة وهدايا" },
  { id: "clothes", name: "ملابس" },
  { id: "fun", name: "منتجات ترفيهية" },
  { id: "beauty", name: "الصحة والجمال" },
  { id: "home", name: "المنزل" }
];

/* ---------------------------------------------------------------------
   المنتجات — لإضافة منتج جديد: انسخ أي كارت (من { لـ },) والصقه في آخر القايمة.

   category : id القسم
   title    : وصف المنتج
   image    : "images/اسم.jpg" أو رابط الصورة المباشر
   price    : سعر القطعة الواحدة (اكتب هنا سعر البيع للعميل)
   oldPrice : (اختياري) السعر قبل الخصم — يظهر معاه label «بدلاً من» ونسبة الخصم
   offers   : (اختياري) عروض الكمية، كل عرض [عدد القطع, السعر الإجمالي, نسبة التوفير%]
              مثال: offers: [[2, 510, 15], [3, 730, 19]]
   hot      : true = يظهر في قايمة خصومات 50% في أول الموقع
   link     : (اختياري) رابط بديل لزرار الطلب بدل تيليجرام
   --------------------------------------------------------------------- */
const PRODUCTS = [
  {
    category: "acc",
    title: "شاحن ذكي بفصل تلقائي للطاقة + كيبل شحن 2 في 1 مع حامل غير مرئي + كيبل شحن سريع 240 واط بطول 1.5 متر",
    image: "https://media.taager.com/360x360/3bb4b946-454d-4c37-b6a4-4009feb2342b.webp",
    price: 570
  },
  {
    category: "gad",
    title: "طقم لعبة واكي توكي للتواصل بالفيديو للأطفال (قطعتين)",
    image: "https://media.taager.com/360x360/1c234cc7-558c-4450-9d5c-f627a6989ba7.jpg",
    price: 975
  },
  {
    category: "aud",
    title: "مكبر صوت بلوتوث لاسلكي محمول WSJAR",
    image: "https://media.taager.com/360x360/b9a3674e-695e-4ed8-a66e-d965b91ec262.png",
    price: 300,
    offers: [[2, 510, 15], [3, 730, 19], [4, 960, 20]]
  },
  {
    category: "aud",
    title: "سماعة بلوتوث لاسلكية F9 Pro Plus",
    image: "https://media.taager.com/360x360/52b1da08-ccee-4589-b667-eaee4c354ed7.jpg",
    price: 470,
    offers: [[2, 708, 25], [3, 978, 31]]
  },
  {
    category: "gad",
    title: "عرض قطعتين كاميرا مراقبة واي فاي",
    image: "https://media.taager.com/360x360/ca3f9461-9a47-41fb-b004-ac6f05790647.jpg",
    price: 1954
  },
  {
    category: "acc",
    title: "كيبل شحن سريع 65 واط 3 في 1 بطول 15 سم (Lightning وType-C وMicro USB)",
    image: "https://media.taager.com/360x360/d5951036-9c40-4b89-a581-151c161a7e8f.jpg",
    price: 242,
    offers: [[2, 255, 47], [3, 346, 52]],
    hot: true
  },
  {
    category: "gad",
    title: "عرض شنطة الترند ضد السرقة مع باور بانك",
    image: "https://media.taager.com/360x360/32fbfc22-9b32-48ce-8f4c-c52f148adb62.png",
    price: 650
  },
  {
    category: "acc",
    title: "حامل موبايل للمكتب",
    image: "https://media.taager.com/360x360/7b4a32f5-2c5f-4945-afe3-bbbdcf747480.jpg",
    price: 190
  },
  {
    category: "acc",
    title: "شاحن حائط سريع بمنفذ USB-C",
    image: "https://media.taager.com/360x360/ca8d28cf-f51d-4197-bc8f-08b53bbd1ca8.png",
    price: 365,
    offers: [[2, 450, 38], [3, 651, 41]]
  },
  {
    category: "acc",
    title: "باور بانك لاسلكي مغناطيسي ماجنتك MJ-35",
    image: "https://media.taager.com/360x360/7df31621-2320-4d9f-b619-eba147351e88.jpg",
    price: 972,
    offers: [[2, 1820, 6], [3, 2706, 7]]
  },
  {
    category: "gad",
    title: "هاتف بزراير بشريحتين بتصميم كلاسيكي",
    image: "https://media.taager.com/360x360/73f206ab-36e8-4dbc-9cb8-7308b80632c7.jpg",
    price: 820,
    offers: [[2, 1400, 15], [3, 2076, 16]]
  },
  {
    category: "aud",
    title: "سماعة إيربودز رينو - أسود ذهبي",
    image: "https://media.taager.com/360x360/02854b23-d53a-46db-9f4b-fc0a996460bf.png",
    price: 680,
    offers: [[2, 1100, 19], [3, 1626, 20]]
  },
  {
    category: "aud",
    title: "سماعة إيربودز رينو - أسود",
    image: "https://media.taager.com/360x360/de53cbf0-1802-4465-b59a-4a0855b5b795.png",
    price: 680,
    offers: [[2, 1100, 19], [3, 1626, 20]]
  },
  {
    category: "aud",
    title: "سماعة أذن لاسلكية بتصميم عصري",
    image: "https://media.taager.com/360x360/8c8f1757-ba98-4f63-a81f-c30a578993aa.jpeg",
    price: 405
  },
  {
    category: "aud",
    title: "سماعة جيمنج Iron Pods",
    image: "https://media.taager.com/360x360/ca198c4b-676b-4187-9ac7-788ee5ec222f.jpg",
    price: 760,
    offers: [[2, 1300, 14], [3, 1926, 16]]
  },
  {
    category: "acc",
    title: "باور بانك ماجنتك 20 ألف أمبير",
    image: "https://media.taager.com/360x360/021faf9f-1630-4e9a-907f-f341c1fa1323.jpg",
    price: 845,
    offers: [[2, 1500, 11], [3, 2226, 12]]
  },
  {
    category: "gad",
    title: "عرض شنطة ضد السرقة مع موبايل إيس FE4",
    image: "https://media.taager.com/360x360/89e15067-82c5-4746-87dc-47d4ef90105f.jpg",
    price: 920
  },
  {
    category: "aud",
    title: "سبيكر الدبدوب الكيوت",
    image: "https://media.taager.com/360x360/a3b4751f-f182-4f90-b53f-a13c11dbb3bd.jpg",
    price: 300,
    offers: [[2, 510, 15], [3, 730, 19], [4, 960, 20]]
  },
  {
    category: "aud",
    title: "مكبر صوت بلوتوث رائد الفضاء",
    image: "https://media.taager.com/360x360/6ac098d5-ebd5-48c0-8858-af2ae1a5dd8b.png",
    price: 300,
    offers: [[2, 510, 15], [3, 730, 19], [4, 960, 20]]
  },
  {
    category: "aud",
    title: "سماعة ساوند كور",
    image: "https://media.taager.com/360x360/6f13400d-7bde-4d01-92af-46f34ecb03e1.png",
    price: 428,
    offers: [[2, 766, 11], [3, 1114, 13], [4, 1472, 14]]
  },
  {
    category: "aud",
    title: "سماعة بلوتوث وراديو (5 في 1)",
    image: "https://media.taager.com/360x360/772ea305-95e0-4eb1-aea2-d555718433e0.png",
    price: 450,
    offers: [[2, 700, 22], [3, 1026, 24]]
  },
  {
    category: "gad",
    title: "ساعة ذكية بتصميم عصري",
    image: "https://media.taager.com/360x360/1d2804f0-b380-4a1e-a088-dddb4ca9c516.png",
    price: 800,
    offers: [[2, 1500, 6], [3, 2226, 7]]
  },
  {
    category: "aud",
    title: "سبيكر الحديث المغناطيسي الترند",
    image: "https://media.taager.com/360x360/22cef3fc-dae6-48de-a598-64cc8c907195.png",
    price: 370,
    offers: [[2, 650, 12], [3, 940, 15], [4, 1240, 16]]
  },
  {
    category: "gad",
    title: "موبايل إيس FE4 ثنائي الشريحة",
    image: "https://media.taager.com/360x360/c206aca9-1efa-46dd-9b49-c699730f5c67.png",
    price: 600,
    offers: [[2, 1110, 7], [3, 1630, 9], [4, 2160, 10]]
  },
  {
    "category": "clothes",
    "title": "تيشيرت برجندي سمر ميلتون - مقاس 2XL",
    "image": "https://media.taager.com/360x360/4570f7e3-5204-4259-a224-db85fbe4b0de.jpg",
    "price": 238,
    "offers": [
      [
        2,
        386,
        19
      ],
      [
        3,
        544,
        24
      ],
      [
        4,
        712,
        25
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "تيشيرت ميلتون كاجوال برجندي ساده ومريح - مقاس L",
    "image": "https://media.taager.com/360x360/cc9c46a9-3988-4e12-b318-f34062babcff.png",
    "price": 265
  },
  {
    "category": "clothes",
    "title": "تيشيرت نيفي سمر ميلتون - مقاس 2XL",
    "image": "https://media.taager.com/360x360/b0307371-59f1-4cfd-ae55-aae01a5b068b.png",
    "price": 238,
    "offers": [
      [
        2,
        386,
        19
      ],
      [
        3,
        544,
        24
      ],
      [
        4,
        712,
        25
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "تيشيرت نيفي سمر ميلتون - مقاس XL",
    "image": "https://media.taager.com/360x360/667db228-e417-4b78-ae2f-1c87e1247b6f.png",
    "price": 265
  },
  {
    "category": "clothes",
    "title": "تيشيرت نيفي سمر ميلتون - مقاس L",
    "image": "https://media.taager.com/360x360/ed5b5518-5b15-4cb1-bc15-9f5f8cf73da9.jpg",
    "price": 265
  },
  {
    "category": "clothes",
    "title": "ترنج بولو شورت أبيض - مقاس L",
    "image": "https://media.taager.com/360x360/2f982523-494f-417a-9983-f3d2fd0da193.png",
    "price": 260,
    "offers": [
      [
        2,
        430,
        17
      ],
      [
        3,
        610,
        22
      ],
      [
        4,
        800,
        23
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "ترنج بولو شورت أسود - مقاس 2XL",
    "image": "https://media.taager.com/360x360/1fd36f84-6251-48a4-90ee-38573ca9ce74.png",
    "price": 260,
    "offers": [
      [
        2,
        430,
        17
      ],
      [
        3,
        610,
        22
      ],
      [
        4,
        800,
        23
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "ترنج بولو شورت أسود - مقاس M",
    "image": "https://media.taager.com/360x360/4f6b9794-fe01-4cae-9c62-f925603b1874.png",
    "price": 260,
    "offers": [
      [
        2,
        430,
        17
      ],
      [
        3,
        610,
        22
      ],
      [
        4,
        800,
        23
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "تيشيرت بني سمر ميلتون - مقاس 2XL",
    "image": "https://media.taager.com/360x360/0567a3e6-441c-4e27-a232-249f08bff05e.jpg",
    "price": 238,
    "offers": [
      [
        2,
        386,
        19
      ],
      [
        3,
        544,
        24
      ],
      [
        4,
        712,
        25
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "تيشيرت بني سمر ميلتون - مقاس XL",
    "image": "https://media.taager.com/360x360/df2f480d-8f70-484f-b913-dacf16d3c576.jpg",
    "price": 265
  },
  {
    "category": "clothes",
    "title": "تيشيرت بني سمر ميلتون - مقاس L",
    "image": "https://media.taager.com/360x360/1245ebd3-af75-4125-800e-8ff9de4a52ca.jpg",
    "price": 265
  },
  {
    "category": "clothes",
    "title": "تيشيرت أبيض سمر ميلتون - مقاس 2XL",
    "image": "https://media.taager.com/360x360/34006081-35ff-4d87-ba78-dedfede23199.jpg",
    "price": 238,
    "offers": [
      [
        2,
        386,
        19
      ],
      [
        3,
        544,
        24
      ],
      [
        4,
        712,
        25
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "تيشيرت أبيض سمر ميلتون - مقاس XL",
    "image": "https://media.taager.com/360x360/d67f530a-ca9a-4329-bcd2-6f7109b8a273.jpg",
    "price": 238,
    "offers": [
      [
        2,
        386,
        19
      ],
      [
        3,
        544,
        24
      ],
      [
        4,
        712,
        25
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "تيشيرت أسود سمر ميلتون - مقاس 2XL",
    "image": "https://media.taager.com/360x360/4024c35f-6f36-4059-8938-65b67820d26f.jpg",
    "price": 238,
    "offers": [
      [
        2,
        386,
        19
      ],
      [
        3,
        544,
        24
      ],
      [
        4,
        712,
        25
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "تيشيرت أزرق نيفي - مقاس L",
    "image": "https://media.taager.com/360x360/1d5a73d8-491b-4d6e-8862-958628130a2a.jpg",
    "price": 250,
    "offers": [
      [
        2,
        380,
        24
      ],
      [
        3,
        500,
        33
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "تيشيرت بيزك بني - مقاس L",
    "image": "https://media.taager.com/360x360/0714841c-de83-4e57-82d7-b3b7f0b60853.jpg",
    "price": 250,
    "offers": [
      [
        2,
        435,
        13
      ],
      [
        3,
        580,
        23
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "تيشيرت بيزك كاجوال أبيض ساده ومريح - مقاس 2XL",
    "image": "https://media.taager.com/360x360/22c68513-85a8-4063-b2b7-6cc2fa1ba205.jpg",
    "price": 250,
    "offers": [
      [
        2,
        380,
        24
      ],
      [
        3,
        500,
        33
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "تيشيرت بيزك كاجوال أبيض ساده ومريح للاستخدام اليومي - مقاس XL",
    "image": "https://media.taager.com/360x360/26fc54ec-d24e-4b74-9d02-886a937ecd41.jpg",
    "price": 250
  },
  {
    "category": "clothes",
    "title": "تيشيرت بيزك أسود - مقاس XL",
    "image": "https://media.taager.com/360x360/040123b1-ebe5-4175-a862-61b257a23b6d.jpg",
    "price": 231,
    "offers": [
      [
        2,
        380,
        18
      ],
      [
        3,
        500,
        28
      ],
      [
        4,
        684,
        26
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "تيشيرت بيزك كاجوال أسود ساده ومريح - مقاس L",
    "image": "https://media.taager.com/360x360/e5feb472-941e-4d3e-969f-f92b1bf53c22.jpg",
    "price": 231,
    "offers": [
      [
        2,
        380,
        18
      ],
      [
        3,
        500,
        28
      ],
      [
        4,
        684,
        26
      ]
    ]
  },
  {
    "category": "clothes",
    "title": "شنطة السفر الترند",
    "image": "https://media.taager.com/360x360/2321077f-27c7-462e-b4d3-7f1a2e9a301e.jpg",
    "price": 949
  },
  {
    "category": "clothes",
    "title": "عرض قطعتين بنطلون جينز أزرق + بنطلون جينز أسود",
    "image": "https://media.taager.com/360x360/fd0b2d6a-6097-46f7-b432-38bed2633a59.png",
    "price": 530
  },
  {
    "category": "clothes",
    "title": "عرض قطعتين بنطلون جينز أزرق + بنطلون جينز أسود",
    "image": "https://media.taager.com/360x360/90291381-dff9-4b75-86d9-581d233616c7.png",
    "price": 530
  },
  {
    "category": "clothes",
    "title": "عرض قطعتين بنطلون جينز أزرق + بنطلون جينز أسود",
    "image": "https://media.taager.com/360x360/cfc0dafb-128b-44d6-a317-6c4765512fa6.png",
    "price": 530
  },
  {
    "category": "clothes",
    "title": "بنطلون جينز",
    "image": "https://media.taager.com/360x360/dbbf09b4-80e3-477b-9dd8-26b6d5415815.png",
    "price": 285
  },
  {
    "category": "fun",
    "title": "عرض مقلمة وساعة رقمية + 4 كراسات تدريب للأطفال + 10 عبوات إعادة تعبئة + قلم + مقبض",
    "image": "https://media.taager.com/360x360/1172c350-d58f-4abb-8f63-71c1aab67a12.png",
    "price": 520
  },
  {
    "category": "fun",
    "title": "عرض مفتاح تشغيل على شكل فتيس + منظم السيارة الشبك + أقوى سفنجة لتنظيف الزجاج",
    "image": "https://media.taager.com/360x360/f7e1871b-da58-4678-a2a2-1aa05001f6a1.jpg",
    "price": 306
  },
  {
    "category": "fun",
    "title": "عرض كفر دريكسيون كاربون + منظم السيارة الشبك + مفتاح تشغيل على شكل فتيس",
    "image": "https://media.taager.com/360x360/a739d477-8b06-4080-adaf-2b1067ccf5ed.jpg",
    "price": 460
  },
  {
    "category": "fun",
    "title": "عرض قارئ الكروت التعليمي عربي وإنجليزي + مقلمة بشاشة نوت باد + مكعبات بناء 60 قطعة",
    "image": "https://media.taager.com/360x360/3ea02b51-1484-486a-9f99-ed8da196c3cb.jpg",
    "price": 461
  },
  {
    "category": "fun",
    "title": "عرض قطعتين معجون التنظيف السحري",
    "image": "https://media.taager.com/360x360/93757b17-4b3b-4991-82db-cf481bdb037f.jpg",
    "price": 230
  },
  {
    "category": "fun",
    "title": "ترابيزة سفر للأطفال داخل السيارة",
    "image": "https://media.taager.com/360x360/09ded5ae-d9d8-4ccd-b203-af3d9358d28a.png",
    "price": 700
  },
  {
    "category": "fun",
    "title": "مقلمة وساعة رقمية",
    "image": "https://media.taager.com/360x360/03173bb8-997d-4b0e-a725-8c30f2cef111.png",
    "price": 470
  },
  {
    "category": "fun",
    "title": "مضارب تنس شاطئي ملونة مع كرة",
    "image": "https://media.taager.com/360x360/8fa39a1c-2c79-48c5-a6f3-41442d2f4c5b.jpg",
    "price": 193
  },
  {
    "category": "fun",
    "title": "مسدس جيل يدوي M416",
    "image": "https://media.taager.com/360x360/958e6be0-9d82-40a4-aded-8eb67cdec3a6.png",
    "price": 380,
    "offers": [
      [
        2,
        684,
        10
      ],
      [
        3,
        969,
        15
      ]
    ]
  },
  {
    "category": "fun",
    "title": "فرش كراسي السيارة",
    "image": "https://media.taager.com/360x360/29bc2ecb-36ae-4805-a5e9-d67bfe63aff3.png",
    "price": 630
  },
  {
    "category": "fun",
    "title": "خيمة تغيير الملابس المحمولة",
    "image": "https://media.taager.com/360x360/8b83a59f-623a-4335-98e5-f18e3318fc8a.png",
    "price": 850
  },
  {
    "category": "fun",
    "title": "سيف فأس مع إضاءة وصوت",
    "image": "https://media.taager.com/360x360/bbcc2673-f3eb-4085-b7ce-b29e7b0d3185.png",
    "price": 600
  },
  {
    "category": "fun",
    "title": "سيف دوار مزدوج مع إضاءة وصوت",
    "image": "https://media.taager.com/360x360/09f58e03-9dc8-40be-9d94-9d01281f4308.png",
    "price": 645,
    "offers": [
      [
        4,
        2340,
        9
      ]
    ]
  },
  {
    "category": "fun",
    "title": "سيف نينجا تفاعلي مع إضاءة LED وتأثير الضباب، شحن Type-C، للأطفال والكبار",
    "image": "https://media.taager.com/360x360/646f2fad-16bc-4a2a-873c-be9aab58ff78.jpg",
    "price": 600
  },
  {
    "category": "fun",
    "title": "عجلة البطن الرياضية",
    "image": "https://media.taager.com/360x360/797c8851-15d8-4e80-880f-88f5b0966696.jpg",
    "price": 610,
    "offers": [
      [
        2,
        1130,
        7
      ],
      [
        3,
        1660,
        9
      ],
      [
        4,
        2200,
        10
      ]
    ]
  },
  {
    "category": "fun",
    "title": "قفاز إطلاق الشبكة العنكبوتية",
    "image": "https://media.taager.com/360x360/f074597a-2cff-4406-b5b9-d46598a4cbc7.jpg",
    "price": 165,
    "offers": [
      [
        2,
        240,
        27
      ],
      [
        3,
        325,
        34
      ],
      [
        4,
        420,
        36
      ]
    ]
  },
  {
    "category": "fun",
    "title": "مروحة سيارة مزدوجة الرأس بـ USB",
    "image": "https://media.taager.com/360x360/c4ad9aea-7af7-4cbe-93fb-bd89c14da39a.jpg",
    "price": 245,
    "offers": [
      [
        2,
        400,
        18
      ],
      [
        3,
        565,
        23
      ],
      [
        4,
        740,
        24
      ]
    ]
  },
  {
    "category": "fun",
    "title": "فواحة على شكل سفينة بخارية وإضاءة هادئة مناسبة للمنزل والمكتب",
    "image": "https://media.taager.com/360x360/3d699734-2099-43d7-ae04-49e3a7ab0375.jpg",
    "price": 760,
    "offers": [
      [
        4,
        2800,
        8
      ]
    ]
  },
  {
    "category": "fun",
    "title": "طقم شنيور وعدة مكون من 166 قطعة Total",
    "image": "https://media.taager.com/360x360/a29d5bf7-654e-41dd-951f-2121a4011b6b.png",
    "price": 3300,
    "offers": [
      [
        2,
        6317,
        4
      ],
      [
        3,
        9397,
        5
      ]
    ]
  },
  {
    "category": "fun",
    "title": "مرجيحة كهربائية متعددة الوظائف للأطفال",
    "image": "https://media.taager.com/360x360/94785db9-42ea-404a-b5dc-c3342279fea6.png",
    "price": 2572,
    "offers": [
      [
        2,
        5029,
        2
      ],
      [
        3,
        7482,
        3
      ]
    ]
  },
  {
    "category": "fun",
    "title": "مجموعة ألوان - 86 قطعة للبنات",
    "image": "https://media.taager.com/360x360/ae8d1c80-d370-4f3f-9265-f7b0a8997b00.png",
    "price": 224
  },
  {
    "category": "fun",
    "title": "لعبة بنج بونج البطة المعلقة",
    "image": "https://media.taager.com/360x360/cdaa278b-686d-44f3-adfd-ee34a2755bea.png",
    "price": 225,
    "offers": [
      [
        2,
        360,
        20
      ],
      [
        3,
        505,
        25
      ],
      [
        4,
        660,
        27
      ]
    ]
  },
  {
    "category": "beauty",
    "title": "جهاز مساج ونحت الوجه الإلكتروني",
    "image": "https://media.taager.com/360x360/7d262b7c-4813-4c53-a819-a734ef1c14c8.png",
    "price": 620
  },
  {
    "category": "beauty",
    "title": "عرض 2 قطعة i hair serum",
    "image": "https://media.taager.com/360x360/613561d0-3867-4ab5-9b8e-a24f5e89739f.webp",
    "price": 530
  },
  {
    "category": "beauty",
    "title": "مشبك شعر مغناطيسي بشكل D",
    "image": "https://media.taager.com/360x360/75b44ded-8bbf-4d6c-8596-e1bde55389d3.jpg",
    "price": 200
  },
  {
    "category": "beauty",
    "title": "عرض منظم السيارة العبقري الجديد + مخدة مساج للمنزل والسيارة",
    "image": "https://media.taager.com/360x360/b995384d-fe3f-47d6-8a68-9e91ee7a8334.webp",
    "price": 540
  },
  {
    "category": "beauty",
    "title": "مجموعة العناية الشخصية: تنظيف البشرة + برد الأظافر + إزالة الجلد الميت",
    "image": "https://media.taager.com/360x360/1973fdce-eab4-4b4c-9776-9f1109efcfb7.png",
    "price": 460
  },
  {
    "category": "beauty",
    "title": "فرشاة مساج الشعر لتوزيع الزيوت + i hair serum هدية",
    "image": "https://media.taager.com/360x360/0bcc1927-a69f-4abb-b0c2-68830926bbdd.jpg",
    "price": 1000
  },
  {
    "category": "beauty",
    "title": "مجموعة صابون 40 جم (شاي - لافندر - شوفان - قهوة)",
    "image": "https://media.taager.com/360x360/bf50eb4d-2f1d-4c0a-a226-448ca200a9eb.jpg",
    "price": 336
  },
  {
    "category": "beauty",
    "title": "عرض عجلة البطن الرياضية + مشد الكيرفي لتشكيل الجسم XL",
    "image": "https://media.taager.com/360x360/2b5b5b4b-8eb7-4cd0-b2a6-3debf8b2cbe1.webp",
    "price": 840
  },
  {
    "category": "beauty",
    "title": "جهاز برد الأظافر الكهربائي مع شحن USB",
    "image": "https://media.taager.com/360x360/456c95e4-dab7-4ae1-8f7c-0c839591ab14.png",
    "price": 200
  },
  {
    "category": "beauty",
    "title": "مجموعة مسك 3 مل (2 مسك أبيض - 1 مسك رومان - 1 مسك فراولة)",
    "image": "https://media.taager.com/360x360/9ab080cb-f14d-405e-9d1c-29ad05d64896.webp",
    "price": 255
  },
  {
    "category": "beauty",
    "title": "شنطة الرحلات لتبريد الإنسولين وعرض درجة الحرارة",
    "image": "https://media.taager.com/360x360/e15cac95-5cc0-4320-b91b-e534d4b9c038.png",
    "price": 620
  },
  {
    "category": "beauty",
    "title": "فرشاة الأسنان السيليكون الكهربائية",
    "image": "https://media.taager.com/360x360/e1c2da3a-edb3-4305-8c1d-7c1d59b6a233.png",
    "price": 540,
    "offers": [
      [
        2,
        990,
        8
      ],
      [
        3,
        1450,
        10
      ],
      [
        4,
        1920,
        11
      ]
    ]
  },
  {
    "category": "beauty",
    "title": "فرش الجل الطبي لامتصاص الصدمات والكعب العالي",
    "image": "https://media.taager.com/360x360/3621213b-2c8f-40c0-888a-321bd2bbd3a5.png",
    "price": 170,
    "offers": [
      [
        2,
        260,
        24
      ],
      [
        3,
        360,
        29
      ],
      [
        4,
        470,
        31
      ]
    ]
  },
  {
    "category": "beauty",
    "title": "جهاز خيط الأسنان المائي",
    "image": "https://media.taager.com/360x360/50969555-3e46-415e-adfb-e33cd6734b04.png",
    "price": 455
  },
  {
    "category": "beauty",
    "title": "مسك الطهارة بالرمان",
    "image": "https://media.taager.com/360x360/b635da70-b255-486c-bd36-81e5b137b1d3.jpg",
    "price": 120
  },
  {
    "category": "beauty",
    "title": "بروكاب حراري",
    "image": "https://media.taager.com/360x360/e3e7992f-03f6-4bf4-b4ca-b25060be4908.jpg",
    "price": 193,
    "offers": [
      [
        2,
        296,
        23
      ],
      [
        3,
        409,
        29
      ],
      [
        4,
        532,
        31
      ]
    ]
  },
  {
    "category": "beauty",
    "title": "مكواة ميني",
    "image": "https://media.taager.com/360x360/3ecfa106-8262-43bd-8efb-29f96f4e158c.png",
    "price": 156,
    "offers": [
      [
        2,
        222,
        29
      ],
      [
        3,
        298,
        36
      ],
      [
        4,
        384,
        38
      ]
    ]
  },
  {
    "category": "beauty",
    "title": "جهاز ضغط المعصم",
    "image": "https://media.taager.com/360x360/eeb0dbef-9c06-44da-874c-d4c87909fdca.jpg",
    "price": 475,
    "offers": [
      [
        2,
        870,
        8
      ],
      [
        3,
        1275,
        11
      ],
      [
        4,
        1690,
        11
      ]
    ]
  },
  {
    "category": "beauty",
    "title": "مدلك السيلوليت الكهربائي",
    "image": "https://media.taager.com/360x360/5e57e72f-8563-4b41-aa71-4b538bc51d24.png",
    "price": 860,
    "offers": [
      [
        2,
        1630,
        5
      ],
      [
        3,
        2410,
        7
      ],
      [
        4,
        3200,
        7
      ]
    ]
  },
  {
    "category": "beauty",
    "title": "معالج بهتان الملابس",
    "image": "https://media.taager.com/360x360/1ae15979-2a5b-48a5-8e83-67dc9cae2ab3.jpg",
    "price": 210
  },
  {
    "category": "beauty",
    "title": "بخاخ لفرد الملابس في 30 ثانية",
    "image": "https://media.taager.com/360x360/8b3dc254-f2b0-4e0a-9df8-0c4fe84be9a3.jpg",
    "price": 205,
    "offers": [
      [
        2,
        380,
        7
      ],
      [
        3,
        570,
        7
      ],
      [
        4,
        750,
        9
      ]
    ]
  },
  {
    "category": "home",
    "title": "الخلاط المحمول الترند + شنطة زجاجة مغناطيسية للجيم",
    "image": "https://media.taager.com/360x360/3d76b9d5-9f5e-42b3-b1f8-cf01c2538e09.webp",
    "price": 732
  },
  {
    "category": "home",
    "title": "ليد زينة يعمل بالطاقة الشمسية + بابا نويل بجيتار",
    "image": "https://media.taager.com/360x360/8120b0da-b4d7-43a8-8777-7bf24ecc7ccb.jpg",
    "price": 541
  },
  {
    "category": "home",
    "title": "عرض 3 اسبراي التنظيف الجبار Multipurpose Bubble Cleaner + معجون التنظيف السحري + فرشة 5 في 1",
    "image": "https://media.taager.com/360x360/0ab9be2c-ed7a-499d-a9d3-61a615d62f04.png",
    "price": 668
  },
  {
    "category": "home",
    "title": "عرض مساحة وبخاخة 2×1 + معجون التنظيف السحري + 3 اسبراي التنظيف الجبار Multipurpose Bubble Cleaner",
    "image": "https://media.taager.com/360x360/1142c719-a341-4cea-8c6c-74edce81920f.png",
    "price": 470
  },
  {
    "category": "home",
    "title": "عرض معجون التنظيف السحري + 3 اسبراي التنظيف الجبار Multipurpose Bubble Cleaner + 2 أقوى سفنجة لتنظيف الزجاج",
    "image": "https://media.taager.com/360x360/d5aaa7a1-40fe-417f-9644-40fe49862c98.jpg",
    "price": 399
  },
  {
    "category": "home",
    "title": "عرض بوتجاز الرحلات مع مسدس لهب للمعادن يعمل بالغاز",
    "image": "https://media.taager.com/360x360/eb7c6242-640d-4ed0-a76c-857766fc57b2.jpg",
    "price": 580
  },
  {
    "category": "home",
    "title": "منظف الأحذية مع فرشة وفوطة للتنظيف",
    "image": "https://media.taager.com/360x360/6e85dea4-3778-46f0-a1d7-f3f731133d4d.png",
    "price": 290
  },
  {
    "category": "home",
    "title": "شازلونج شاطئ إسفنج بظهر خشب قماش ترابروف مقاس 60×200 سم - طباعة صيفية بينك",
    "image": "https://media.taager.com/360x360/9723d28e-70a9-4072-b3e7-eabd5d7d3fd5.jpg",
    "price": 799
  },
  {
    "category": "home",
    "title": "شازلونج شاطئ إسفنج بظهر خشب قماش ترابروف مقاس 60×200 سم - طباعة صيفية كحلي",
    "image": "https://media.taager.com/360x360/196c78ad-aa78-4133-8636-5b799b4dde17.png",
    "price": 799
  },
  {
    "category": "home",
    "title": "جارف ومساحة سيليكون",
    "image": "https://media.taager.com/360x360/7fe1fa54-02f7-483b-8821-a58dab726e3b.png",
    "price": 160
  },
  {
    "category": "home",
    "title": "عرض 3 قطع Cool Clean منظف تكييف السيارة والمنزل",
    "image": "https://media.taager.com/360x360/736664e2-31aa-437b-bbbd-190ae7690ce4.png",
    "price": 290
  },
  {
    "category": "home",
    "title": "عرض قطعتين DSP سكين الأيرو",
    "image": "https://media.taager.com/360x360/b83c250c-5039-45ca-9fa3-bae33c854d31.jpg",
    "price": 280
  },
  {
    "category": "home",
    "title": "عرض قطعتين أباجورة كريستال وفواحة الترند",
    "image": "https://media.taager.com/360x360/b2ba37ba-a892-48a1-8fed-92a5756becc7.jpg",
    "price": 640
  },
  {
    "category": "home",
    "title": "مساحة سهلة العصر",
    "image": "https://media.taager.com/360x360/e85c524a-32f8-4a78-a489-38333c77e0bc.jpg",
    "price": 194,
    "offers": [
      [
        2,
        298,
        23
      ],
      [
        3,
        412,
        29
      ],
      [
        4,
        536,
        31
      ]
    ]
  },
  {
    "category": "home",
    "title": "DSP سكين الأيرو",
    "image": "https://media.taager.com/360x360/462f9d71-46ce-4a4c-8d0c-57317672827d.jpg",
    "price": 149,
    "offers": [
      [
        2,
        208,
        30
      ],
      [
        3,
        277,
        38
      ],
      [
        4,
        356,
        40
      ]
    ]
  },
  {
    "category": "home",
    "title": "مروحة الرقبة السحرية قابلة للشحن",
    "image": "https://media.taager.com/360x360/ed511592-dc37-48e6-a3ba-ce69968edb65.jpg",
    "price": 213,
    "offers": [
      [
        2,
        336,
        21
      ],
      [
        3,
        469,
        27
      ],
      [
        4,
        612,
        28
      ]
    ]
  },
  {
    "category": "home",
    "title": "صاعق ناموس إلكتروني Nova",
    "image": "https://media.taager.com/360x360/631fb58c-9d77-4f7e-a6a0-39ade7d80a2d.jpg",
    "price": 185,
    "offers": [
      [
        2,
        330,
        11
      ],
      [
        3,
        466,
        16
      ]
    ]
  },
  {
    "category": "home",
    "title": "عرض قطعتين Cool Clean منظف تكييف السيارة والمنزل",
    "image": "https://media.taager.com/360x360/27ea68d6-3d2d-46bf-9714-fd623c27febc.jpg",
    "price": 165
  },
  {
    "category": "home",
    "title": "مروحة ديجيتال بفواحة",
    "image": "https://media.taager.com/360x360/cbd67c76-ce01-411b-b53f-cd9c6e4a4230.jpg",
    "price": 365,
    "offers": [
      [
        2,
        640,
        12
      ],
      [
        3,
        925,
        16
      ],
      [
        4,
        1220,
        16
      ]
    ]
  },
  {
    "category": "home",
    "title": "مروحة ديجيتال بفواحة",
    "image": "https://media.taager.com/360x360/79ae4356-b87d-4b5b-a196-448d3ab728a0.jpg",
    "price": 365,
    "offers": [
      [
        2,
        640,
        12
      ],
      [
        3,
        925,
        16
      ],
      [
        4,
        1220,
        16
      ]
    ]
  },
  {
    "category": "home",
    "title": "مروحة وأباجورة",
    "image": "https://media.taager.com/360x360/4ad3f434-82d5-402d-87bf-7469bc7e427f.jpg",
    "price": 295,
    "offers": [
      [
        2,
        500,
        15
      ],
      [
        3,
        715,
        19
      ],
      [
        4,
        940,
        20
      ]
    ]
  }
  /* ← الصق كارت المنتج الجديد هنا */
];
