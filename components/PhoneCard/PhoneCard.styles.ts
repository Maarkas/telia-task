import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
    card: {
        transition: theme.transitions.create(['background', 'color', 'transform', 'opacity'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginTop: theme.spacing(4),
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.main,
            transform: 'scale(1.05)',
            '& $cardMediaOverlay': {
                opacity: 1,
            },
        },
        height: '100%',
    },
    cardHeader: {
        textAlign: 'center',
        fontWeight: 'bolder',
        marginLeft: theme.spacing(6),
        height: theme.spacing(16),
    },
    cardIconButton: {
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    cardContent: {
        textAlign: 'center',
    },
    cardMedia: {
        paddingBottom: theme.spacing(4),
        maxHeight: '270px',
        maxWidth: '135px',
        objectFit: 'cover',
    },
    cardMediaOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        textTransform: 'uppercase',
    },
    priceContainer: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
}));
