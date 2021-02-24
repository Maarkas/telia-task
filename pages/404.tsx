import React from 'react';
import Link from 'next/link';
import { Button, Grid, Typography } from '@material-ui/core';
import useStyles from '../styles/404.styles';
import { locale } from '../src/locale';

const Custom404 = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.container} direction='column'>
                <Typography variant='h3' color='primary'>
                    {locale.routes.error}
                </Typography>
                <Link href='/'>
                    <Button variant='outlined' color='primary' className={classes.errorButton}>
                        <Typography>{locale.buttons.home}</Typography>
                    </Button>
                </Link>
            </Grid>
        </>
    );
};

export default Custom404;
