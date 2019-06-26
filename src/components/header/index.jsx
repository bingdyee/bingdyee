import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, withStyles  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AppsIcon from '@material-ui/icons/Apps';
import MoreIcon from '@material-ui/icons/MoreVert';
import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';
import { Link } from 'react-router-dom';
import { NotificationList, EmailList } from './components';
import styles from './styles';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: this.formatTime()
        };
    }

    formatTime() {
        const time = new Date();
        const hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        const minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        const second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
        return hour + ' : ' + minute + ' : ' + second;
    }

    componentDidMount() {
        setInterval(() => this.setState({time: this.formatTime()}), 1000);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.grow}>
                <AppBar position="static" className={classes.header}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <Link to='/' className={classes.logoA}>IColab Chaos 1.0</Link>
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search for people, files, documents..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'Search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton 
                                aria-label="Show 6 new mails" 
                                color="inherit" 
                            >
                                <Badge badgeContent={6} color="secondary"><MailIcon/></Badge>
                            </IconButton>
                            <IconButton 
                                aria-label="Show 17 new notifications" 
                                color="inherit"
                                aria-controls='notifications'
                            >
                                <Badge badgeContent={17} color="secondary"><NotificationsIcon/></Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <CheckCircleIcon/>
                            </IconButton>
                            <IconButton color="inherit">
                                <AppsIcon/>
                            </IconButton>
                            <IconButton color="inherit">
                                <MoreIcon/>
                            </IconButton>
                            <IconButton color="inherit" edge="end">
                                <SettingsInputSvideoIcon/>
                            </IconButton>
                            <Typography variant='h6' className={classes.time} noWrap>{this.state.time}</Typography>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <EmailList/>
            </div>
        )
    }

}

const mapState = (state) => ({
});
    
export default connect(mapState, null)(withStyles(styles)(Header));