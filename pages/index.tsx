import React from 'react';
import Link from 'next/link';
import { Button, Typography } from '@material-ui/core';
import useStyles from '../styles/index.styles';
import { locale } from '../src/locale';

const IndexPage: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link href='/phones'>
                <Button variant='outlined' color='primary'>
                    <Typography variant='h5'>{locale.routes.phones}</Typography>
                </Button>
            </Link>
        </div>
    );
};

export default IndexPage;
