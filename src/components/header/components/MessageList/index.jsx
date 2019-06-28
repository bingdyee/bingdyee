import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, withStyles } from '@material-ui/core';
import styles from './styles';


class MessageList extends PureComponent {

    render() {
        const { classes, messages } = this.props;
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
                                messages.map(item => {
                                    return  (
                                        <ListItem key={item.get('id')} button className={classes.item}>
                                            <ListItemAvatar>
                                                <Avatar alt="Profile Picture" src={item.get('headerImg')} />
                                            </ListItemAvatar>
                                            <ListItemText classes={{secondary: classes.secondary}} primary={item.get('username')} secondary={item.get('message')} />
                                            <Typography className={classes.href}>
                                                <span>{item.get('time')}</span>
                                            </Typography>
                                        </ListItem>
                                    )
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

const mapState = (state) => ({
    messages: state.getIn(["header", "messages"])
});

export default connect(mapState, null)(withStyles(styles)(MessageList));