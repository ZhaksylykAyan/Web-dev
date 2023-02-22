export interface Product {
  id: number;
  image: string;
  name: string;
  price: number,
  description: string;
  url:string;
  rating: number;
  link: string;
}

export const products = [
  {
    id: 1,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    name: 'iPhone 14 Pro Max 256Gb purple',
    price: 701389,
    description: 'технология NFC: Да\n' +
        'цвет: фиолетовый\n' +
        'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n' +
        'диагональ: 6.7 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 6-ядерный Apple A16 Bionic\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    rating: 5,
    link:'https://api.whatsapp.com/send/?phone=77078162429&text&type=phone_number&app_absent=0',
  },
  {
    id: 2,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
    name: 'iPhone 13 128Gb',
    price:373222,
    description: 'технология NFC: Да\n' +
        'цвет: белый\n' +
        'тип экрана: OLED, Super Retina XDR\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A15 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3095 мАч',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',
    rating: 5,
    link:'https://api.whatsapp.com/send/?phone=77078162429&text&type=phone_number&app_absent=0',
  },
  {
    id: 3,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    name: 'iPhone 11 128Gb',
    price:292950,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD\n' +
        'диагональ: 6.1 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 6-ядерный Apple A13 Bionic\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 3110 мАч',
    url: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
    rating: 5,
    link:'https://api.whatsapp.com/send/?phone=77078162429&text&type=phone_number&app_absent=0',
  },
  {
    id: 4,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    name: 'Xiaomi Redmi Note 10 Pro 256Gb',
    price:128350,
    description: 'технология NFC: Да\n' +
        'цвет: серый\n' +
        'тип экрана: цветной AMOLED, сенсорный\n' +
        'диагональ: 6.67 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Qualcomm Snapdragon 732G\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 5020 мАч',
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    rating: 5,
    link:'https://api.whatsapp.com/send/?phone=77078162429&text&type=phone_number&app_absent=0',
  },
  {
    id: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
    name: 'Samsung Galaxy A13 128 Gb',
    price:90165,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: PLS TFT LCD сенсорный, мультитач\n' +
        'диагональ: 6.6 дюйм\n' +
        'размер оперативной памяти: 4 ГБ\n' +
        'процессор: 8-ядерный Exynos 850\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
    rating: 5,
    link:'https://api.whatsapp.com/send/?phone=77078162429&text&type=phone_number&app_absent=0',
  },
  {
    id: 6,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/hb0/50459865022494/orro-reno-7-8-128gb-cernyj-104705829-1.jpg',
    name: 'OPPO Reno 7 128Gb',
    price:160069,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: AMOLED\n' +
        'диагональ: 6.44 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 680\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 4500 мАч',
    url: 'https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-chernyi-104705829/?c=750000000#!/item',
    rating: 5,
    link:'https://api.whatsapp.com/send/?phone=77078162429&text&type=phone_number&app_absent=0',
  },
  {
    id: 7,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h46/63228133474334/xiaomi-12t-8-gb-256-gb-cernyj-106866405-1.jpg',
    name: 'Xiaomi 12T 256Gb',
    price:245000,
    description: 'технология NFC: Да\n' +
        'цвет: черный\n' +
        'тип экрана: AMOLED, сенсорный, мультитач\n' +
        'диагональ: 6.67 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный MediaTek Dimensity 8100 Ultra\n' +
        'объем встроенной памяти: 256 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    url: 'https://kaspi.kz/shop/p/xiaomi-12t-8-gb-256-gb-chernyi-106866405/?c=750000000#!/item',
    rating: 5,
    link:'https://api.whatsapp.com/send/?phone=77078162429&text&type=phone_number&app_absent=0',
  },
  {
    id: 8,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h46/50455778197534/orro-reno7-8-128gb-oranzevyj-104705825-1.jpg',
    name: 'OPPO Reno 7 128Gb',
    price:160405,
    description: 'технология NFC: Да\n' +
        'цвет: оранжевый\n' +
        'тип экрана: сенсорный, мультитач AMOLED\n' +
        'диагональ: 6.44 дюйм\n' +
        'размер оперативной памяти: 8 ГБ\n' +
        'процессор: 8-ядерный Snapdragon 680\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 4500 мАч',
    url: 'https://kaspi.kz/shop/p/oppo-reno-7-8-gb-128-gb-oranzhevyi-104705825/?c=750000000#!/item',
    rating: 5,
    link:'https://api.whatsapp.com/send/?phone=77078162429&text&type=phone_number&app_absent=0',
  },
  {
    id: 9,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/he1/49670961233950/samsung-galaxy-a53-5g-128gb-sm-a536ezodskz-orange-104283492-1.jpg',
    name: ' Samsung Galaxy A53 5G',
    price:157780,
    description: 'технология NFC: Да\n' +
        'цвет: оранжевый\n' +
        'тип экрана: Super AMOLED, сенсорный, мультитач\n' +
        'диагональ: 6.5 дюйм\n' +
        'размер оперативной памяти: 6 ГБ\n' +
        'процессор: 8-ядерный Exynos 1280\n' +
        'объем встроенной памяти: 128 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-6-gb-128-gb-oranzhevyi-104283492/?c=750000000#!/item',
    rating: 4.5,
    link:'https://api.whatsapp.com/send/?phone=77078162429&text&type=phone_number&app_absent=0',
  },
  {
    id: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h41/65588306739230/realme-c30s-2-32gb-stripe-blue-107529381-1.jpg',
    name: 'Realme C30S 32Gb',
    price:39960,
    description: 'технология NFC: Нет\n' +
        'цвет: голубой\n' +
        'тип экрана: IPS, сенсорный\n' +
        'диагональ: 6.5 дюйм\n' +
        'размер оперативной памяти: 2 ГБ\n' +
        'процессор: 8-ядерный Unisoc Tiger T612\n' +
        'объем встроенной памяти: 32 ГБ\n' +
        'емкость аккумулятора: 5000 мАч',
    url: 'https://kaspi.kz/shop/p/realme-c30s-2-gb-32-gb-goluboi-107529381/?c=750000000#!/item',
    rating: 5,
    link:'https://api.whatsapp.com/send/?phone=77078162429&text&type=phone_number&app_absent=0',
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/