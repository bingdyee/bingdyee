import React, {Component} from 'react';
import { List, withStyles  } from '@material-ui/core';
import styles from './styles';
import { ProfileBox } from './components';

class Sidebar extends Component { 

    render() {
        const { classes } = this.props;
        return (
            <nav className={classes.root}>
                <div className={classes.profile}>
                    <ProfileBox/>
                </div>

                <div className={classes.menu}>
                    <List>
                        
                    </List>
                </div>
            </nav>
        )
    }

}

export default withStyles(styles)(Sidebar);