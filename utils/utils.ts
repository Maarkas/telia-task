import { Phone, PhoneDetails } from '../types/phones.types';

export const sortPhonesOrBrands = (brands: {}, alphabetically: boolean) => {
    return alphabetically
        ? brands.sort((a, b) => a.displayName.localeCompare(b.displayName))
        : brands.sort((a, b) => b.displayName.localeCompare(a.displayName));
};
