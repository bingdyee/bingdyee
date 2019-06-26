import { fade } from '@material-ui/core/styles';

export default theme => ({
    grow: {
        flexGrow: 1,
        height: 72,
    },
    header: {
        alignItems: 'center',
        display: 'flex',
        height: 72,
        backgroundColor: 'rgba(0,0,0,.3)'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.13),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.13),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: 740,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
        display: 'none',
        },
    },
    logoA: {
        color: '#fff',
        backgroundColor: 'transparent',
        textDecoration: 'none',
    },
    time: {
        padding: 6,
        borderRadius: 3,
        marginLeft: 18,
        marginTop: 8,
        height: '100%',
        lineHeight: '100%',
        fontSize: 20,
        backgroundColor: fade(theme.palette.common.white, 0.15), 
    },
});