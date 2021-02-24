import React from 'react';
import { LayoutPropTypes } from './Layout.types';
import useStyles from './Layout.styles';

const Layout: React.FunctionComponent<LayoutPropTypes> = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
};

export default Layout;
