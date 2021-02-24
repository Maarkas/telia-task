import React from 'react';
import { Fade, Grid, Typography } from '@material-ui/core';
import useStyles from '../styles/phones.styles';
import { PhoneBrandResponse, PhonePageProps } from '../types/phones.types';
import PhoneBrands from '../containers/PhoneBrands/PhoneBrands';

const PhonesPage: React.FunctionComponent<PhonePageProps> = ({ phoneBrands }) => {
    const classes = useStyles();
    const { headline, options } = phoneBrands;
    return (
        <div className={classes.root}>
            <Fade in timeout={750}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography
                            variant='h4'
                            color='primary'
                            align='center'
                            className={classes.headerText}
                        >
                            {headline}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.phones}>
                        {phoneBrands ? <PhoneBrands phoneBrands={options} /> : null}
                    </Grid>
                </Grid>
            </Fade>
        </div>
    );
};

export default PhonesPage;

export const getStaticProps = async () => {
    const response = await fetch(
        `https://raw.githubusercontent.com/TeliaSweden/frontend-interview-api/master/brands.json`
    );
    const phoneBrands: PhoneBrandResponse = await response.json();

    if (!phoneBrands) {
        return {
            notFound: true,
            redirect: {
                destination: '/error',
            },
        };
    }

    return {
        props: {
            phoneBrands,
        },
    };
};
