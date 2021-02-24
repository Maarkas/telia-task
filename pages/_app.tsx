import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { DEFAULT_SEO } from '../src/seo.config';
import Layout from '../components/Layout/Layout';
import useStyles from '../styles/_app.styles';

const TeliaTaskApp: ({ Component, pageProps }: AppProps) => JSX.Element = ({
    Component,
    pageProps,
}: AppProps) => {
    const classes = useStyles();

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles?.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <div className={classes.root}>
            <DefaultSeo {...DEFAULT_SEO} />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </div>
    );
};

export default TeliaTaskApp;
