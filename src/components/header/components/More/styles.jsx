import { fade } from '@material-ui/core/styles';


export default theme => ({
    root: {
        backgroundColor: fade(theme.palette.common.black, 0.9), 
        color: '#bbb',
    }
});