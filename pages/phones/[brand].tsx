import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Fade, Grid, Typography } from '@material-ui/core';
import useStyles from '../../styles/phones.styles';
import { PhoneBrandResponse, PhoneDetails, PhonesByBrandPageProps } from '../../types/phones.types';
import PhonesByBrand from '../../containers/PhonesByBrand/PhonesByBrand';
import { locale } from '../../src/locale';

const PhonesByBrandPage: React.FunctionComponent<PhonesByBrandPageProps> = ({ phones }) => {
    const classes = useStyles();
    const router = useRouter();
    const { brand } = router.query;

    const phonesByBrand: PhoneDetails[] = phones.filter(phone => phone.brand === brand);

    return (
        <div className={classes.root}>
            <Fade in timeout={750}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography
                            variant='h4'
                            color='primary'
                            align='center'
                            className={classes.headerText}
                        >
                            {brand}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h4' color='primary' align='center'>
                            <Link href='/phones'>
                                <Button variant='outlined' color='primary'>
                                    {locale.buttons.goBack}
                                </Button>
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.phones}>
                        <PhonesByBrand phones={phonesByBrand} />
                    </Grid>
                </Grid>
            </Fade>
        </div>
    );
};

export default PhonesByBrandPage;

export const getStaticPaths = async () => {
    return {
        paths: [
            '/phones/Alcatel',
            '/phones/Apple',
            '/phones/Doro',
            '/phones/Huawei',
            '/phones/Nokia',
            '/phones/Samsung',
            '/phones/Sony',
            '/phones/Xiaomi',
        ],
        fallback: false,
    };
};

export const getStaticProps = async () => {
    const response = await fetch(
        `https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/phones.json`
    );
    const phones: PhoneBrandResponse = await response.json();

    if (!phones) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            phones,
        },
    };
};
