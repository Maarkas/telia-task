export const brands = {
    id: 'phones',
    headline: 'Mobiltelefoner',
    options: [
        {
            id: 'Alcatel',
            displayName: 'Alcatel',
            displayImageUrl:
                'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/brands/alcatel_front_270x540.png',
        },
        {
            id: 'Apple',
            displayName: 'Apple',
            displayImageUrl:
                'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/brands/iPhone_11_Pro_Max_Green_Front_270x540.png',
        },
        {
            id: 'Doro',
            displayName: 'Doro',
            displayImageUrl:
                'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/brands/Doro_8080_white_front_270x540.png',
        },
        {
            id: 'Huawei',
            displayName: 'Huawei',
            displayImageUrl:
                'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/brands/Huawei-P30-Vogue_Blue_Front-251x540.png',
        },
        {
            id: 'Nokia',
            displayName: 'Nokia',
            displayImageUrl:
                'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/brands/Nokia-7.2-Front-Black-270x540.png',
        },
        {
            id: 'Samsung',
            displayName: 'Samsung',
            displayImageUrl:
                'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/brands/GalaxyFold_Back115_Silver-270x540.png',
        },
        {
            id: 'Sony',
            displayName: 'Sony',
            displayImageUrl:
                'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/brands/xperia_1_front_black_270x540 .png',
        },
        {
            id: 'Xiaomi',
            displayName: 'Xiaomi',
            displayImageUrl:
                'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/brands/xiaomi_black_front_270x540.png',
        },
    ],
};

export const phones = [
    {
        brand: 'Apple',
        displayName: 'Apple iPhone 7',
        contentKey: 'apple-iphone-7',
        price: '449.0',
        pricePrefix: 'Pris',
        priceSuffix: 'kr/mån',
        internalMemoryGB: [32, 128, 256],
        dualSIM: '',
        screenSize: '',
        networkTechnology: ['2g', '3g', '4g'],
        colorOptions: [
            {
                name: 'Rymdgrå',
                hex: '#44464a',
            },
        ],
        imgUrl:
            'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/phones/iPhone7_Black_Front_270x540.png',
        link: 'https://www.telia.se/privat/telefoni/telefoner/produkt/apple-iphone-7',
    },
    {
        brand: 'Apple',
        displayName: 'Apple iPhone 8',
        contentKey: 'apple-iphone-8',
        price: '529.0',
        pricePrefix: 'Pris',
        priceSuffix: 'kr/mån',
        internalMemoryGB: [32, 64, 128, 256],
        dualSIM: '',
        screenSize: '',
        networkTechnology: ['2g', '3g', '4g'],
        colorOptions: [
            {
                name: 'Rymdgrå',
                hex: '#444446',
            },
            {
                name: 'Guld',
                hex: '#f8e9df',
            },
        ],
        imgUrl:
            'https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/images/phones/iPhone8_spacegrey_front_270x540.png',
        link: 'https://www.telia.se/privat/telefoni/telefoner/produkt/apple-iphone-8',
    },
];
