import React from 'react';
import { sortPhonesOrBrands } from '../utils/utils';
import { brands, phones } from './utilts.test-data';
import { Phone, PhoneDetails } from '../types/phones.types';

describe('Test of utils', () => {
    describe('Util fn: sortPhonesOrBrands', () => {
        it('Should sort phone brands alphabetically desc if parameter is set to true', () => {
            const sorted = sortPhonesOrBrands(brands.options, true);
            expect(sorted[0].displayName).toBe(brands.options[0].displayName);
        });
        it('Should sort phone brands alphabetically asc if parameter is set to false', () => {
            const lastBrand = brands.options[brands.options.length - 1];
            const sorted = sortPhonesOrBrands(brands.options, false);
            expect(sorted[0].displayName).toBe(lastBrand.displayName);
        });
        it('Should sort phones alphabetically desc if parameter is set to true', () => {
            const sorted = sortPhonesOrBrands(phones, true);
            expect(sorted[0].displayName).toBe(phones[0].displayName);
        });
        it('Should sort phones alphabetically asc if parameter is set to false', () => {
            const lastBrand = phones[phones.length - 1];
            const sorted = sortPhonesOrBrands(phones, false);
            expect(sorted[0].displayName).toBe(lastBrand.displayName);
        });
    });
});
