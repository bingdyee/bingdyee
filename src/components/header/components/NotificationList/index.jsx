import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Typography, List, ListItem, ListItemText, IconButton, withStyles } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import GetAppIcon from '@material-ui/icons/GetApp';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SettingsIcon from '@material-ui/icons/Settings';
import styles from './styles';


class NotificationList extends PureComponent {

    render() {
        const { classes, notifications } = this.props;
        return (
            <Typography variant="h5" className={classes.root}>

                <div className={classes.header}>
                    <Typography variant="h6" className={classes.title}>最新通知</Typography>
                    <IconButton color="inherit" className={classes.icon}>
                        <DoneAllIcon/>
                    </IconButton>
                </div>

                <div className={classes.content}>
                    <List>
                        {
                            notifications.map((item) => {
                                let icon = null;
                                switch(item.get('icon')) {
                                    case 1:
                                        icon = <GetAppIcon color="inherit" className={classes.itemIcon}/>;
                                        break;
                                    case 2:
                                        icon = <ThumbUpIcon color="secondary" className={classes.itemIcon}/>;
                                        break;
                                    case 3:
                                        icon = <BookmarksIcon color="primary" className={classes.itemIcon}/>;
                                        break;
                                    case 4:
                                        icon = <SettingsIcon color="error" className={classes.itemIcon}/>;
                                        break;
                                    default:
                                        icon = <DoneAllIcon color="disabled" className={classes.itemIcon}/>;
                                }
                                return (
                                    <ListItem key={item.get('id')} className={classes.item}>
                                        {icon}
                                        <ListItemText className={classes.itemText} primary={item.get('tip')}></ListItemText>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </div>
            </Typography>
        )
    }

}

const mapState = (state) => ({
    notifications: state.getIn(["header", "notifications"])
});

export default connect(mapState, null)(withStyles(styles)(NotificationList));
