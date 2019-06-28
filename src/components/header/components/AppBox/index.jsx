import React, { Component } from 'react';
import { List, ListItem, ListItemText, Typography, withStyles,  } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ImageIcon from '@material-ui/icons/Image';
import ShareIcon from '@material-ui/icons/Share';
import styles from './styles';


class AppBox extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List>
                    <ListItem className={classes.item}>
                        <ListItemText>
                            <TrendingUpIcon />
                            <Typography variant="h6">报告</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemText>
                            <MailIcon />
                            <Typography variant="h6">邮件</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemText>
                            <InsertDriveFileIcon />
                            <Typography variant="h6">文件</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemText>
                            <DateRangeIcon />
                            <Typography variant="h6">日历</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemText>
                            <ImageIcon />
                            <Typography variant="h6">图片</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemText>
                            <ShareIcon />
                            <Typography variant="h6">分享</Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
        )
    }

}

export default withStyles(styles)(AppBox);
