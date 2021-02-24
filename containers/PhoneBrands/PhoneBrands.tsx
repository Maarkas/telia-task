import React from 'react';
import Link from 'next/link';
import { Grid } from '@material-ui/core';
import { PhoneBrandsProps } from './PhoneBrands.types';
import { Phone } from '../../types/phones.types';
import PhoneCard from '../../components/PhoneCard/PhoneCard';

const PhoneBrands: React.FunctionComponent<PhoneBrandsProps> = ({ phoneBrands }) => {
    return (
        <Grid container spacing={2}>
            {phoneBrands.map((phone: Phone, index: number) => (
                <Link href={`/phones/${encodeURIComponent(phone.id)}`} key={index}>
                    <Grid item xs={12} sm={6} md={3}>
                        <PhoneCard name={phone.displayName} image={phone.displayImageUrl} />
                    </Grid>
                </Link>
            ))}
        </Grid>
    );
};

export default PhoneBrands;
