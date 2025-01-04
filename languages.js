;
const languageData = {
    englishTexts :{
        menu: {
            home: "Home",
            destinations: "Destinations",
            hotels: "Hotels",
            prices: "Prices",
            contact: "Contact",
            ratings: "Ratings"
        },
        destinations: {
            greatWall: "Great wall of china",
            egyptPyramids: "Egypt pyramids",
            paris: "Paris",
            portugal: "Portugal",
            newYork: "New york"
        },
        hotels: {
            buttons: {
                china: "china",
                egypt: "Egypt",
                france: "France",
                portugal: "Portugal",
                newYork: "New york"
            },
            details: [
                {
                    name: "Dragon Palace Room",
                    description: "Indulge in a room adorned with luxurious Chinese decor and breathtaking views of the Great Wall.",
                    price: "Price: ¥500/night",
                    action: "Book a room"
                },
                {
                    name: "Sakura Suite",
                    description: "Relax in a tranquil Japanese-inspired suite with a view of beautiful cherry blossoms.",
                    price: "Price: ¥600/night",
                    action: "Book a room"
                },
                {
                    name: "Tropical Haven Room",
                    description: "Escape to a sunny, tropical paradise with a room designed to evoke beach vibes and relaxation.",
                    price: "Price: ¥450/night",
                    action: "Book a room"
                },
                {
                    name: "Zen Garden Retreat Room",
                    description: "Experience serenity and peace with a room inspired by the calming elements of Japanese Zen gardens.",
                    price: "Price: ¥600/night",
                    action: "Book a room"
                }
            ]
        },
        plans: {
            basic: {
                name: "Basic Plan",
                features: [
                    "Daily breakfast",
                    "1 Local guided city tour (half-day)",
                    "Access to hotel pool and fitness center",
                    "A week trip"
                ],
                price: "499$/◐"
            },
            vivid: {
                name: "Vivid Plan",
                features: [
                    "Daily breakfast",
                    "1 Local guided city tour (half-day)",
                    "Access to hotel pool and fitness center",
                    "5 Nights at a 4-star hotel",
                    "1 Full-day guided city and cultural tour",
                    "Private access to a luxury spa for one treatment"
                ],
                price: "699$/◐"
            },
            prime: {
                name: "Prime Plan",
                features: [
                    "24/7 concierge service for personalized",
                    "1 Local guided city tour (half day)",
                    "Access to hotel pool and fitness center",
                    "A week at a 5-star hotel",
                    "1 Full-day guided city and cultural tour",
                    "Private access to a luxury spa for one treatment",
                    "Spa day included"
                ],
                price: "1199$/◐"
            }
        },
        contact: {
            nameLabel: "NAME",
            emailLabel: "EMAIL",
            messageLabel: "MESSAGE",
            namePlaceholder: "Enter your name",
            emailPlaceholder: "Enter your email",
            messagePlaceholder: "Write your message",
            submitButton: "SUBMIT"
        }
    },

    chineseTexts : {
        menu: {
            home: "首页",
            destinations: "目的地",
            hotels: "酒店",
            prices: "价格",
            contact: "联系",
            ratings: "评分"
        },
        destinations: {
            greatWall: "长城",
            egyptPyramids: "埃及金字塔",
            paris: "巴黎",
            portugal: "葡萄牙",
            newYork: "纽约"
        },
        hotels: {
            buttons: {
                china: "中国",
                egypt: "埃及",
                france: "法国",
                portugal: "葡萄牙",
                newYork: "纽约"
            },
            details: [
                {
                    name: "龙宫套房",
                    description: "享受豪华的中国风装饰和壮丽的长城景色。",
                    price: "价格：¥500/晚",
                    action: "预订房间"
                },
                {
                    name: "樱花套房",
                    description: "在宁静的日本风格套房中放松，享受美丽的樱花景色。",
                    price: "价格：¥600/晚",
                    action: "预订房间"
                },
                {
                    name: "热带天堂套房",
                    description: "逃离到阳光明媚的热带天堂，房间设计营造海滩氛围和放松感。",
                    price: "价格：¥450/晚",
                    action: "预订房间"
                },
                {
                    name: "禅意花园套房",
                    description: "体验宁静与平和，房间灵感来源于日本禅意花园的宁静元素。",
                    price: "价格：¥600/晚",
                    action: "预订房间"
                }
            ]
        },
        plans: {
            basic: {
                name: "基础计划",
                features: [
                    "每日早餐",
                    "1次本地半天城市导览",
                    "使用酒店游泳池和健身中心",
                    "一周行程"
                ],
                price: "499$/◐"
            },
            vivid: {
                name: "生动计划",
                features: [
                    "每日早餐",
                    "1次本地半天城市导览",
                    "使用酒店游泳池和健身中心",
                    "4星级酒店5晚住宿",
                    "1次全日城市与文化导览",
                    "私人豪华水疗中心一次治疗"
                ],
                price: "699$/◐"
            },
            prime: {
                name: "高级计划",
                features: [
                    "24/7礼宾服务",
                    "1次本地半天城市导览",
                    "使用酒店游泳池和健身中心",
                    "五星级酒店一周住宿",
                    "1次全日城市与文化导览",
                    "私人豪华水疗中心一次治疗",
                    "包含水疗日"
                ],
                price: "1199$/◐"
            }
        },
        contact: {
            nameLabel: "姓名",
            emailLabel: "电子邮件",
            messageLabel: "留言",
            namePlaceholder: "请输入您的姓名",
            emailPlaceholder: "请输入您的电子邮件",
            messagePlaceholder: "写下您的留言",
            submitButton: "提交"
        }
    },
    indianTexts: {
        menu: {
            home: "होम",
            destinations: "गंतव्य",
            hotels: "होटल",
            prices: "कीमतें",
            contact: "संपर्क करें",
            ratings: "रेटिंग्स"
        },
        destinations: {
            greatWall: "चीन की दीवार",
            egyptPyramids: "मिस्र के पिरामिड",
            paris: "पेरिस",
            portugal: "पुर्तगाल",
            newYork: "न्यू यॉर्क"
        },
        hotels: {
            buttons: {
                china: "चीन",
                egypt: "मिस्र",
                france: "फ्रांस",
                portugal: "पुर्तगाल",
                newYork: "न्यू यॉर्क"
            },
            details: [
                {
                    name: "ड्रैगन पैलेस रूम",
                    description: "एक कमरा जिसमें शानदार चीनी सजावट और चीन की दीवार का दृश्य है।",
                    price: "मूल्य: ₹500/रात",
                    action: "कमरा बुक करें"
                },
                {
                    name: "सकुरा सुइट",
                    description: "एक शांतिपूर्ण जापानी प्रेरित सुइट में आराम करें और खूबसूरत चेरी ब्लॉसम का दृश्य लें।",
                    price: "मूल्य: ₹600/रात",
                    action: "कमरा बुक करें"
                },
                {
                    name: "ट्रॉपिकल हेवन रूम",
                    description: "एक धूप वाले उष्णकटिबंधीय स्वर्ग में भाग जाएं, जिसमें समुद्र तट के माहौल और विश्राम को प्रेरित करने वाला कमरा है।",
                    price: "मूल्य: ₹450/रात",
                    action: "कमरा बुक करें"
                },
                {
                    name: "ज़ेन गार्डन रिट्रीट रूम",
                    description: "एक कमरे का अनुभव करें जो जापानी ज़ेन गार्डन के शांतिपूर्ण तत्वों से प्रेरित है।",
                    price: "मूल्य: ₹600/रात",
                    action: "कमरा बुक करें"
                }
            ]
        },
        plans: {
            basic: {
                name: "बेसिक प्लान",
                features: [
                    "दैनिक नाश्ता",
                    "1 स्थानीय गाइडेड सिटी टूर (आधा दिन)",
                    "होटल स्विमिंग पूल और फिटनेस सेंटर की सुविधा",
                    "एक सप्ताह यात्रा"
                ],
                price: "499$/◐"
            },
            vivid: {
                name: "विविड प्लान",
                features: [
                    "दैनिक नाश्ता",
                    "1 स्थानीय गाइडेड सिटी टूर (आधा दिन)",
                    "होटल स्विमिंग पूल और फिटनेस सेंटर की सुविधा",
                    "4 स्टार होटल में 5 रातों का ठहराव",
                    "1 पूर्ण दिन का गाइडेड सिटी और सांस्कृतिक टूर",
                    "एक लक्जरी स्पा में निजी उपचार"
                ],
                price: "699$/◐"
            },
            prime: {
                name: "प्राइम प्लान",
                features: [
                    "24/7 कंसीयज सेवा",
                    "1 स्थानीय गाइडेड सिटी टूर (आधा दिन)",
                    "होटल स्विमिंग पूल और फिटनेस सेंटर की सुविधा",
                    "5 स्टार होटल में एक सप्ताह का ठहराव",
                    "1 पूर्ण दिन का गाइडेड सिटी और सांस्कृतिक टूर",
                    "एक लक्जरी स्पा में निजी उपचार",
                    "स्पा दिवस शामिल है"
                ],
                price: "1199$/◐"
            }
        },
        contact: {
            nameLabel: "नाम",
            emailLabel: "ईमेल",
            messageLabel: "संदेश",
            namePlaceholder: "अपना नाम दर्ज करें",
            emailPlaceholder: "अपना ईमेल दर्ज करें",
            messagePlaceholder: "अपना संदेश लिखें",
            submitButton: "सबमिट करें"
        }
    },
    spanishTexts: {
        menu: {
            home: "Inicio",
            destinations: "Destinos",
            hotels: "Hoteles",
            prices: "Precios",
            contact: "Contacto",
            ratings: "Valoraciones"
        },
        destinations: {
            greatWall: "Gran Muralla China",
            egyptPyramids: "Pirámides de Egipto",
            paris: "París",
            portugal: "Portugal",
            newYork: "Nueva York"
        },
        hotels: {
            buttons: {
                china: "China",
                egypt: "Egipto",
                france: "Francia",
                portugal: "Portugal",
                newYork: "Nueva York"
            },
            details: [
                {
                    name: "Sala Palacio Dragón",
                    description: "Disfruta de una habitación decorada con lujo chino y vistas impresionantes de la Gran Muralla.",
                    price: "Precio: ¥500/noche",
                    action: "Reservar habitación"
                },
                {
                    name: "Suite Sakura",
                    description: "Relájate en una suite inspirada en Japón con vistas a hermosas flores de cerezo.",
                    price: "Precio: ¥600/noche",
                    action: "Reservar habitación"
                },
                {
                    name: "Habitación Paraíso Tropical",
                    description: "Escapa a un paraíso tropical soleado con una habitación diseñada para evocar la atmósfera de la playa y la relajación.",
                    price: "Precio: ¥450/noche",
                    action: "Reservar habitación"
                },
                {
                    name: "Habitación Jardín Zen",
                    description: "Experimenta serenidad y paz con una habitación inspirada en los elementos calmantes de los jardines zen japoneses.",
                    price: "Precio: ¥600/noche",
                    action: "Reservar habitación"
                }
            ]
        },
        plans: {
            basic: {
                name: "Plan Básico",
                features: [
                    "Desayuno diario",
                    "1 tour guiado local de medio día",
                    "Acceso a la piscina y gimnasio del hotel",
                    "Viaje de una semana"
                ],
                price: "499$/◐"
            },
            vivid: {
                name: "Plan Vivo",
                features: [
                    "Desayuno diario",
                    "1 tour guiado local de medio día",
                    "Acceso a la piscina y gimnasio del hotel",
                    "5 noches en un hotel de 4 estrellas",
                    "1 tour guiado completo por la ciudad y la cultura",
                    "Acceso privado a un spa de lujo para un tratamiento"
                ],
                price: "699$/◐"
            },
            prime: {
                name: "Plan Premium",
                features: [
                    "Servicio de conserjería 24/7",
                    "1 tour guiado local de medio día",
                    "Acceso a la piscina y gimnasio del hotel",
                    "Una semana en un hotel de 5 estrellas",
                    "1 tour guiado completo por la ciudad y la cultura",
                    "Acceso privado a un spa de lujo para un tratamiento",
                    "Día de spa incluido"
                ],
                price: "1199$/◐"
            }
        },
        contact: {
            nameLabel: "Nombre",
            emailLabel: "Correo electrónico",
            messageLabel: "Mensaje",
            namePlaceholder: "Introduce tu nombre",
            emailPlaceholder: "Introduce tu correo electrónico",
            messagePlaceholder: "Escribe tu mensaje",
            submitButton: "Enviar"
        }
    },
    portugueseTexts : {
        menu: {
            home: "Início",
            destinations: "Destinos",
            hotels: "Hotéis",
            prices: "Preços",
            contact: "Contato",
            ratings: "Avaliações"
        },
        destinations: {
            greatWall: "Grande Muralha da China",
            egyptPyramids: "Pirâmides do Egito",
            paris: "Paris",
            portugal: "Portugal",
            newYork: "Nova York"
        },
        hotels: {
            buttons: {
                china: "China",
                egypt: "Egito",
                france: "França",
                portugal: "Portugal",
                newYork: "Nova York"
            },
            details: [
                {
                    name: "Sala Palácio do Dragão",
                    description: "Desfrute de um quarto decorado com luxo chinês e vistas impressionantes da Grande Muralha.",
                    price: "Preço: ¥500/noite",
                    action: "Reservar quarto"
                },
                {
                    name: "Suíte Sakura",
                    description: "Relaxe em uma suíte inspirada no Japão com vista para belas flores de cerejeira.",
                    price: "Preço: ¥600/noite",
                    action: "Reservar quarto"
                },
                {
                    name: "Quarto Paraíso Tropical",
                    description: "Escape para um paraíso tropical ensolarado com um quarto projetado para evocar a atmosfera da praia e relaxamento.",
                    price: "Preço: ¥450/noite",
                    action: "Reservar quarto"
                },
                {
                    name: "Quarto Jardim Zen",
                    description: "Experimente serenidade e paz com um quarto inspirado nos elementos calmantes dos jardins zen japoneses.",
                    price: "Preço: ¥600/noite",
                    action: "Reservar quarto"
                }
            ]
        },
        plans: {
            basic: {
                name: "Plano Básico",
                features: [
                    "Café da manhã diário",
                    "1 tour local guiado (meio dia)",
                    "Acesso à piscina e academia do hotel",
                    "Viagem de uma semana"
                ],
                price: "499$/◐"
            },
            vivid: {
                name: "Plano Vivo",
                features: [
                    "Café da manhã diário",
                    "1 tour local guiado (meio dia)",
                    "Acesso à piscina e academia do hotel",
                    "5 noites em um hotel 4 estrelas",
                    "1 tour completo guiado pela cidade e cultura",
                    "Acesso privado a um spa de luxo para um tratamento"
                ],
                price: "699$/◐"
            },
            prime: {
                name: "Plano Premium",
                features: [
                    "Serviço de concierge 24/7",
                    "1 tour local guiado (meio dia)",
                    "Acesso à piscina e academia do hotel",
                    "Uma semana em um hotel 5 estrelas",
                    "1 tour completo guiado pela cidade e cultura",
                    "Acesso privado a um spa de luxo para um tratamento",
                    "Dia de spa incluído"
                ],
                price: "1199$/◐"
            }
        },
        contact: {
            nameLabel: "Nome",
            emailLabel: "E-mail",
            messageLabel: "Mensagem",
            namePlaceholder: "Digite seu nome",
            emailPlaceholder: "Digite seu e-mail",
            messagePlaceholder: "Escreva sua mensagem",
            submitButton: "Enviar"
        }
    },
    arabicTexts : {
        menu: {
            home: "الصفحة الرئيسية",
            destinations: "وجهات",
            hotels: "فنادق",
            prices: "الأسعار",
            contact: "اتصل",
            ratings: "التقييمات"
        },
        destinations: {
            greatWall: "سور الصين العظيم",
            egyptPyramids: "أهرامات مصر",
            paris: "باريس",
            portugal: "البرتغال",
            newYork: "نيويورك"
        },
        hotels: {
            buttons: {
                china: "الصين",
                egypt: "مصر",
                france: "فرنسا",
                portugal: "البرتغال",
                newYork: "نيويورك"
            },
            details: [
                {
                    name: "غرفة قصر التنين",
                    description: "استمتع بغرفة مزينة بزخارف صينية فاخرة مع إطلالات رائعة على سور الصين العظيم.",
                    price: "السعر: ¥500/ليلة",
                    action: "احجز غرفة"
                },
                {
                    name: "جناح ساكورا",
                    description: "استرخِ في جناح مستوحى من اليابان مع إطلالة على زهور الكرز الجميلة.",
                    price: "السعر: ¥600/ليلة",
                    action: "احجز غرفة"
                },
                {
                    name: "غرفة جنة استوائية",
                    description: "اهرب إلى جنة استوائية مشمسة مع غرفة مصممة لإثارة جو الشاطئ والاسترخاء.",
                    price: "السعر: ¥450/ليلة",
                    action: "احجز غرفة"
                },
                {
                    name: "غرفة حديقة زن",
                    description: "اختبر الهدوء والسلام مع غرفة مستوحاة من العناصر المهدئة لحدائق الزن اليابانية.",
                    price: "السعر: ¥600/ليلة",
                    action: "احجز غرفة"
                }
            ]
        },
        plans: {
            basic: {
                name: "الخطة الأساسية",
                features: [
                    "إفطار يومي",
                    "جولة محلية مع مرشد (نصف يوم)",
                    "الوصول إلى حمام السباحة وصالة الألعاب الرياضية بالفندق",
                    "رحلة لمدة أسبوع"
                ],
                price: "499$/◐"
            },
            vivid: {
                name: "الخطة الحية",
                features: [
                    "إفطار يومي",
                    "جولة محلية مع مرشد (نصف يوم)",
                    "الوصول إلى حمام السباحة وصالة الألعاب الرياضية بالفندق",
                    "5 ليالٍ في فندق 4 نجوم",
                    "جولة كاملة مع مرشد في المدينة والثقافة",
                    "الوصول الخاص إلى منتجع صحي فاخر لجلسة علاجية"
                ],
                price: "699$/◐"
            },
            prime: {
                name: "الخطة المميزة",
                features: [
                    "خدمة الكونسيرج 24/7",
                    "جولة محلية مع مرشد (نصف يوم)",
                    "الوصول إلى حمام السباحة وصالة الألعاب الرياضية بالفندق",
                    "أسبوع في فندق 5 نجوم",
                    "جولة كاملة مع مرشد في المدينة والثقافة",
                    "الوصول الخاص إلى منتجع صحي فاخر لجلسة علاجية",
                    "يوم في السبا متضمن"
                ],
                price: "1199$/◐"
            }
        },
        contact: {
            nameLabel: "الاسم",
            emailLabel: "البريد الإلكتروني",
            messageLabel: "الرسالة",
            namePlaceholder: "أدخل اسمك",
            emailPlaceholder: "أدخل بريدك الإلكتروني",
            messagePlaceholder: "اكتب رسالتك",
            submitButton: "إرسال"
        }
    }




};

function changeLanguage(language) {
    const texts = languageData[language];
    if (!texts) {
        console.error(`Language '${language}' not supported.`);
        return;
    }


    document.querySelector("#home_button").textContent = texts.menu.home;
    document.querySelector("#destination_button").textContent = texts.menu.destinations;
    document.querySelector("#hotel_button").textContent = texts.menu.hotels;
    document.querySelector("#prices_button").textContent = texts.menu.prices;
    document.querySelector("#contacts_button").textContent = texts.menu.contact;


    const destinationElements = document.querySelectorAll(".destination_text");
    const destinations = Object.values(texts.destinations);
    destinationElements.forEach((element, index) => {
        if (destinations[index]) {
            element.textContent = destinations[index];
        }
    });

    const hotelButtons = document.querySelectorAll(".buttons_hotels_buttons");
    const hotelButtonLabels = Object.values(texts.hotels.buttons);
    hotelButtons.forEach((button, index) => {
        if (hotelButtonLabels[index]) {
            button.textContent = hotelButtonLabels[index];
        }
    });


    const hotelDetails = document.querySelectorAll(".hotel-info");
    texts.hotels.details.forEach((hotel, index) => {
        if (hotelDetails[index]) {
            const hotelCard = hotelDetails[index].querySelector(".hotel-card");
            hotelCard.querySelector("h3").textContent = hotel.name;
            hotelCard.querySelector(".hotel-description").textContent = hotel.description;
            hotelCard.querySelector(".hotel-price").textContent = hotel.price;
            hotelCard.querySelector(".btn-details").textContent = hotel.action;
        }
    });

    // Update plans
    const plans = ["basic", "vivid", "prime"];
    plans.forEach(planKey => {
        const plan = texts.plans[planKey];
        const planSection = document.querySelector(`section#prices div:nth-child(${plans.indexOf(planKey) + 1})`);
        if (planSection) {
            planSection.querySelector("h3").textContent = plan.name;
            const featuresList = planSection.querySelector("ol");
            featuresList.innerHTML = ""; 
            plan.features.forEach(feature => {
                const li = document.createElement("li");
                li.textContent = feature;
                featuresList.appendChild(li);
            });
            planSection.querySelector(".price").textContent = plan.price;
        }
    });


    document.querySelector("label[for='name']").textContent = texts.contact.nameLabel;
    document.querySelector("label[for='email']").textContent = texts.contact.emailLabel;
    document.querySelector("label[for='message']").textContent = texts.contact.messageLabel;
    document.querySelector("#name").placeholder = texts.contact.namePlaceholder;
    document.querySelector("#email").placeholder = texts.contact.emailPlaceholder;
    document.querySelector("#message").placeholder = texts.contact.messagePlaceholder;
    document.querySelector(".submit-btn").value = texts.contact.submitButton;

    console.log(`Language changed to '${language}'.`);
    openLanguages();
}
