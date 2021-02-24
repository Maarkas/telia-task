import React from 'react';
import { mount } from 'enzyme';
import PhonesPage from '../pages/phones';

const mockBrands = {
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
    ],
};

describe('Test of Pages', () => {
    describe('<PhonesPage>', () => {
        it('Should render without throwing an error', () => {
            const wrapper = mount(<PhonesPage phoneBrands={mockBrands} />);
            expect(wrapper.find('h4').text()).toBe(mockBrands.headline);
        });
        it('Should render 3 cards through expected fetched data from getStaticProps', () => {
            const wrapper = mount(<PhonesPage phoneBrands={mockBrands} />);
            const cardNodes = wrapper.find('.MuiPaper-root');
            expect(cardNodes).toHaveLength(3);
        });
    });
});
