import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        minHeight: '100vh',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
}));
