import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        minHeight: '100vh',
        paddingBottom: theme.spacing(8),
    },
    headerText: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    phones: {
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
    },
}));
