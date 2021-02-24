import React from 'react';
import { Grid } from '@material-ui/core';
import { PhoneDetails } from '../../types/phones.types';
import { PhonesByBrandProps } from './PhonesByBrand.types';
import PhoneCard from '../../components/PhoneCard/PhoneCard';

const PhonesByBrand: React.FunctionComponent<PhonesByBrandProps> = ({ phones }) => {
    return (
        <Grid container spacing={2}>
            {phones.map((phone: PhoneDetails, index: number) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    key={index}
                    onClick={() => (window.location.href = phone.link)}
                >
                    <PhoneCard
                        name={phone.displayName}
                        image={phone.imgUrl}
                        price={`${phone.pricePrefix}: ${phone.price} ${phone.priceSuffix}`}
                        details={`${
                            phone.networkTechnology[phone.networkTechnology.length - 1] ?? '4G'
                        }, ${phone.internalMemoryGB[phone.internalMemoryGB.length - 1] ?? '64'} GB`}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default PhonesByBrand;
