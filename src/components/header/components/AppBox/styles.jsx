import { fade } from '@material-ui/core/styles';


export default theme => ({
    root: {
        width: 300,
        maxWidth: '100%',
        borderRadius: 3,
        display: 'flex',
        backgroundColor: fade(theme.palette.common.black, 0.9), 
        color: '#fff',
        padding: 10,
        boxSizing: 'inherit'
    },
    item: {
        margin: '0 auto',
        float: 'left',
        width: 100,
        height: 100,
        textAlign: 'center',
        '& h6': {
            fontSize: 16,
            color: '#aaa'
        },
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.05), 
        }
    }
});