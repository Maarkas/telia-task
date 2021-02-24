import { Phone, PhoneDetails } from '../types/phones.types';

export const sortPhonesOrBrands = (brands: Phone[] | PhoneDetails[], alphabetically: boolean) => {
    return alphabetically
        ? brands.sort((a: Phone | PhoneDetails, b: Phone | PhoneDetails) =>
              a.displayName.localeCompare(b.displayName)
          )
        : brands.sort((a: Phone | PhoneDetails, b: Phone | PhoneDetails) =>
              b.displayName.localeCompare(a.displayName)
          );
};
