import { fade } from '@material-ui/core/styles';

export default theme => ({
    root: {
        width: 320,
        borderRadius: 3,
        backgroundColor: fade(theme.palette.common.black, 0.8), 
        color: '#fff',
        
    },
    header: {
        padding: 5,
        backgroundColor: fade(theme.palette.common.black, 0.3), 
    },
    content: {
        padding: 0,
        margin: 0,
    },
    item: {
        padding: '0 0 0 20px',
        margin: 0
    },
    secondary: {
        color: '#aaa',
        fontSize: 13
    },
    href: {
        color: '#aaa',
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 20
    },
    empty: {
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        '& button': {
            color: '#aaa'
        },
        '&:hover': {
            '& button': {
                color: '#fff'
            }
        }
    }
});