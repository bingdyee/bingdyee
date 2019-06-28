import React, { Component } from 'react';
import { List, ListItem, Typography, withStyles } from '@material-ui/core';

import styles from './styles';

class More extends Component {

    fullScreen() {
        let el = document.documentElement;
        el.requestFullscreen();
    }

    render() {
        const { classes } = this.props
        return (
            <List className={classes.root}>
               <ListItem button onClick={this.fullScreen}>
                   <Typography>全屏</Typography>
                </ListItem>
               <ListItem button>
                   <Typography>清空本地缓存</Typography>
                </ListItem>
               <ListItem button>
                   <Typography>设置</Typography>
               </ListItem>
            </List>
        )
    }

}

export default withStyles(styles)(More);