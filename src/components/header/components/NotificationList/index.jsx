import React, { Component } from 'react';
import { Typography, List, ListItem, ListItemText, IconButton, withStyles } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import GetAppIcon from '@material-ui/icons/GetApp';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SettingsIcon from '@material-ui/icons/Settings';
import styles from './styles';


class NotificationList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: [
                {id: 1, icon: 1, text: '张飞完成了作业'},
                {id: 2, icon: 2, text: '张飞家长上传了作业'},
                {id: 3, icon: 3, text: '诸葛亮家长登录了系统'},
                {id: 4, icon: 4, text: '刘备家长下载了模拟试卷'},
                {id: 5, icon: 2, text: '关羽连做了5张试卷'},
                {id: 6, icon: 4, text: '家长马云完善了孩子的信息'},
                {id: 7, icon: 3, text: '岳飞完成了语文作业并提交了'},
                {id: 8, icon: 1, text: '张飞完成了作业'}
            ]
        };
    }

    render() {
        const { classes } = this.props;
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
                            this.state.notifications.map((item) => {
                                let icon = null;
                                switch(item.icon) {
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
                                    <ListItem key={item.id} className={classes.item}>
                                        {icon}
                                        <ListItemText className={classes.itemText} primary={item.text}></ListItemText>
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


export default withStyles(styles)(NotificationList);
