import { fade } from '@material-ui/core/styles';

export default theme => ({
    root: {
        width: 320,
        maxWidth: '100%',
        borderRadius: 3,
        backgroundColor: fade(theme.palette.common.black, 0.8), 
        color: '#aaa',
        padding: 0
    },
    header: {
        backgroundColor: fade(theme.palette.common.black, 0.3), 
        padding: 10,
        color: '#fff'
    },
    content: {
        
    },
    progress: {
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.3), 
            color: '#fff'
        }
    }
    
});