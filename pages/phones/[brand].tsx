import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Fade, Grid, Typography } from '@material-ui/core';
import useStyles from '../../styles/phones.styles';
import { PhoneBrandResponse, PhoneDetails, PhonesByBrandPageProps } from '../../types/phones.types';
import PhonesByBrand from '../../containers/PhonesByBrand/PhonesByBrand';
import { locale } from '../../src/locale';
import { sortPhonesOrBrands } from '../../utils/utils';

const PhonesByBrandPage: React.FunctionComponent<PhonesByBrandPageProps> = ({ brandPhones }) => {
    const classes = useStyles();
    const router = useRouter();
    const [sortOrder, setSortOrder] = React.useState<boolean>(false);
    const [sortedPhones, setSortedPhones] = React.useState<PhoneDetails[]>(brandPhones);
    const { brand } = router.query;

    useEffect(() => {
        setSortedPhones(brandPhones.filter(phone => phone.brand === brand));
    }, []);

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
                    <Grid item xs={12} className={classes.actionContainer}>
                        <Button
                            variant='outlined'
                            color='primary'
                            onClick={() => {
                                setSortOrder(!sortOrder);
                                setSortedPhones(sortPhonesOrBrands(sortedPhones, sortOrder));
                            }}
                        >
                            {locale.buttons.sort}
                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.phones}>
                        <PhonesByBrand phones={sortedPhones} />
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
    const brandPhones: PhoneBrandResponse = await response.json();

    if (!brandPhones) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            brandPhones,
        },
    };
};
