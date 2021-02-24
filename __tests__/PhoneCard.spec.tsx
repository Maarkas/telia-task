import React from 'react';
import { mount, shallow } from 'enzyme';
import PhoneCard from '../components/PhoneCard/PhoneCard';

const mockPhone = {
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
};

describe('Test of Components', () => {
    describe('<PhoneCard>', () => {
        it('Should render without throwing an error', () => {
            const wrapper = shallow(<PhoneCard name={mockPhone.brand} image={mockPhone.imgUrl} />);
            expect(wrapper.find('img').prop('src')).toEqual(mockPhone.imgUrl);
        });
        it('Should render without throwing an error', () => {
            const wrapper = mount(
                <PhoneCard name={mockPhone.brand} image={mockPhone.imgUrl} />
            ).simulate('mouseover');
            expect(wrapper.find('p')).toBeTruthy();
        });
    });
});
