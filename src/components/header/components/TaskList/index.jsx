import React, { Component } from 'react';
import { Typography, List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import styles from './styles';


class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: [
                {id: 1, title: '作业完成进度', progress: 10, color: 'secondary'},
                {id: 2, title: '作业完成进度', progress: 88, color: 'primary'},
                {id: 3, title: '作业完成进度', progress: 49, color: 'secondary'},
                {id: 4, title: '作业完成进度', progress: 99, color: 'primary'},
                {id: 5, title: '作业完成进度', progress: 75, color: 'primary'},
            ]
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <Typography variant="h5" className={classes.root}>
                <div className={classes.header}>
                    <Typography variant="h6">任务</Typography>
                </div>
                
                <List className={classes.content}>
                    {
                        this.state.progress.map(item => {
                            return (
                                <ListItem key={item.id} className={classes.progress}>
                                    <ListItemText>
                                        <Typography gutterBottom>{item.title}</Typography>
                                        <LinearProgress variant="determinate" color={item.color} value={item.progress} />
                                    </ListItemText>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Typography>
        )
    }
}

export default withStyles(styles)(TaskList);