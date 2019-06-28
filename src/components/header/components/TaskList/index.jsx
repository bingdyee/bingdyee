import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Typography, List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import styles from './styles';


class TaskList extends PureComponent {

    render() {
        const { classes, tasks } = this.props;
        return (
            <Typography variant="h5" className={classes.root}>
                <div className={classes.header}>
                    <Typography variant="h6">任务</Typography>
                </div>
                <div className={classes.content}>
                    <List>
                        {
                            tasks.map(item => {
                                const color = item.get('progress') > 50 ? 'primary' : 'secondary';
                                return (
                                    <ListItem key={item.get('id')} className={classes.progress}>
                                        <ListItemText>
                                            <Typography gutterBottom>{item.get('title')}</Typography>
                                            <LinearProgress variant="determinate" color={color} value={item.get('progress')} />
                                        </ListItemText>
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
    tasks: state.getIn(["header", "tasks"])
});

export default connect(mapState, null)(withStyles(styles)(TaskList));
