import React from 'react';
import { mount } from 'enzyme';
import PhonesByBrandPage from '../pages/phones/[brand]';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            query: { brand: 'Apple' },
        };
    },
}));

const mockPhones = [
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

describe('Test of Pages', () => {
    describe('<PhonesByBrandPage>', () => {
        it('Should render without throwing an error', () => {
            const wrapper = mount(<PhonesByBrandPage brandPhones={mockPhones} />);
            expect(wrapper.find('h4').first().text()).toBe(mockPhones[0].brand);
        });
        it('Should render 2 cards through expected fetched data from getStaticProps', () => {
            const wrapper = mount(<PhonesByBrandPage brandPhones={mockPhones} />);
            const cardNodes = wrapper.find('.MuiPaper-root');
            expect(cardNodes).toHaveLength(2);
        });
        it('Data card should have data represented on it', () => {
            const wrapper = mount(<PhonesByBrandPage brandPhones={mockPhones} />);
            const cardNode = wrapper.find('.MuiPaper-root').first();
            expect(cardNode.find('.MuiCardHeader-title').first().text()).toBe(
                mockPhones[0].displayName
            );
            expect(cardNode.find('img').prop('src')).toEqual(mockPhones[0].imgUrl);
        });
    });
});
