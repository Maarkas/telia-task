import React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../pages/index';
import { locale } from '../src/locale';

describe('Pages', () => {
    describe('Index', () => {
        it('Should render without throwing an error', () => {
            const wrap = mount(<IndexPage />);
            expect(wrap.find('h5').text()).toBe(locale.routes.phones);
        });
    });
});
