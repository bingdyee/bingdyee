import React, { Component } from 'react';
import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, withStyles } from '@material-ui/core';
import styles from './styles';


class EmailList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emails: [
                {id: 1, primary: '苏轼', headerImg: 'assets/2.jpg', secondary: '会挽雕弓如满月，西北望···', time: '15:31 PM'},
                {id: 2, primary: '李白', headerImg: 'assets/5.jpg', secondary: '天生我材必有用,千金散尽···', time: '14:25 PM'},
                {id: 3, primary: '杜甫', headerImg: 'assets/5.jpg', secondary: '会当凌绝顶,一览众山小···', time: '10:43 AM'},
                {id: 4, primary: '诸葛亮', headerImg: 'assets/5.jpg', secondary: '非淡泊无以明志，非宁静无...', time: '09:56 AM'},
                {id: 5, primary: '岳飞', headerImg: 'assets/5.jpg', secondary: '三十功名尘与土，八千里路...', time: '08:47 AM'},
            ]
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div square='true'
                className={classes.root} 
            >
                <Typography className={classes.text} variant="h5" gutterBottom>
                    <div className={classes.header}>
                        <Typography variant="h6">最新消息</Typography>
                    </div>
                    <div className={classes.content}>
                        <List>
                            {
                                this.state.emails.map(item => {
                                    return <ListItem key={item.id} button className={classes.item}>
                                        <ListItemAvatar>
                                            <Avatar alt="Profile Picture" src={item.headerImg} />
                                        </ListItemAvatar>
                                        <ListItemText classes={{secondary: classes.secondary}} primary={item.primary} secondary={item.secondary} />
                                        <Typography className={classes.href}>
                                            <span>{item.time}</span>
                                        </Typography>
                                    </ListItem>
                                })
                            }
                            <ListItem className={classes.footer}>
                                <Button color="primary">查 看 更 多 消 息</Button>
                            </ListItem>
                        </List>
                    </div>
                </Typography>
            </div>
        )
    }

}

export default withStyles(styles)(EmailList);