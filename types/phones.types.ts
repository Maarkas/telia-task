export interface PhonePageProps {
    phoneBrands: PhoneBrandResponse;
}

export interface PhoneBrandResponse {
    id: string;
    headline: string;
    options: Phone[];
}

export interface Phone {
    id: string;
    displayName: string;
    displayImageUrl: string;
}

export interface PhonesByBrandPageProps {
    phones: PhoneDetails[];
}

export interface PhoneDetails {
    brand: string;
    displayName: string;
    contentKey: string;
    price: string;
    pricePrefix: string;
    priceSuffix: string;
    internalMemoryGB: number[];
    dualSIM: string;
    screenSize: string;
    networkTechnology: string[];
    colorOptions: ColorOption[];
    imgUrl: string;
    link: string;
}

interface ColorOption {
    name: string;
    hex: string;
}
