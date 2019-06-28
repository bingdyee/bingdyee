import { fade } from '@material-ui/core/styles';

export default theme => ({
    root: {
        width: 320,
        maxWidth: '100%',
        borderRadius: 3,
        backgroundColor: fade(theme.palette.common.black, 0.8), 
        color: '#fff',
        border: '1px solid black',
        padding: 0
    },
    header: {
        backgroundColor: fade(theme.palette.common.black, 0.3), 
        overflow: 'hidden',
        alignSelf: 'center'
    },
    title: {
        float: 'left',
        margin: 10,
    },
    icon: {
        marginRight: 10,
        float: 'right'
    },
    content: {
        color: '#aaa',
    },
    item: {
        padding: 0,
        color: '#ccc',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.3), 
            color: '#fff'
        }
    },
    itemIcon: {
        marginLeft: 15,
        marginRight: 18,
    },
    itemText: {

    }

});
