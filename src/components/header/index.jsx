import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Popover, withStyles  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AppsIcon from '@material-ui/icons/Apps';
import MoreIcon from '@material-ui/icons/MoreVert';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import { Link } from 'react-router-dom';
import { NotificationList, MessageList, TaskList, AppBox, More } from './components';
import styles from './styles';
import * as actions from './actions';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: this.formatTime(),
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
        const { 
            classes, messagesEl, notificationsEl, 
            tasksEl, appsEl, moreEl, 
            handleShowMessageList, handleCloseMessageList, 
            handleShowNotificationsList, handleCloseNotificationsList,
            handleShowTaskList, handleCloseTaskList,
            handleShowAppBox, handleCloseAppBox,
            handleShowMore, handleCloseMore
        } = this.props;

        const showMessageList = Boolean(messagesEl);
        const showNotificationList = Boolean(notificationsEl);
        const showTasksList = Boolean(tasksEl);
        const showAppBox = Boolean(appsEl);
        const showMore = Boolean(moreEl);

        return (
            <Fragment>
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
                                    onClick={handleShowMessageList}
                                >
                                    <Badge badgeContent={6} color="secondary"><MessageIcon/></Badge>
                                </IconButton>
                                <IconButton 
                                    aria-label="Show 8 new notifications" 
                                    color="inherit"
                                    onClick={handleShowNotificationsList}
                                >
                                    <Badge badgeContent={8} color="secondary"><NotificationsIcon/></Badge>
                                </IconButton>
                                <IconButton color="inherit" onClick={handleShowTaskList}>
                                    <CheckCircleIcon/>
                                </IconButton>
                                <IconButton color="inherit" onClick={handleShowAppBox}>
                                    <AppsIcon/>
                                </IconButton>
                                <IconButton color="inherit" onClick={handleShowMore}>
                                    <MoreIcon/>
                                </IconButton>
                                <IconButton color="inherit" edge="end">
                                    <ColorLensIcon/>
                                </IconButton>
                                <Typography variant='h6' className={classes.time} noWrap>{this.state.time}</Typography>
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton color="inherit">
                                    <MoreIcon />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
                <Popover
                    keepMounted
                    anchorEl={messagesEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    onClose={handleCloseMessageList}
                    open={showMessageList}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <MessageList/>
                </Popover>
                <Popover
                    keepMounted
                    anchorEl={notificationsEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    onClose={handleCloseNotificationsList}
                    open={showNotificationList}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <NotificationList/>
                </Popover>
                <Popover
                    keepMounted
                    anchorEl={tasksEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    onClose={handleCloseTaskList}
                    open={showTasksList}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <TaskList/>
                </Popover>
                <Popover
                    keepMounted
                    anchorEl={appsEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    onClose={handleCloseAppBox}
                    open={showAppBox}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <AppBox/>
                </Popover>
                <Popover
                    keepMounted
                    anchorEl={moreEl}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    onClose={handleCloseMore}
                    open={showMore}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <More/>
                </Popover>
          </Fragment>
        )
    }

}

const mapState = (state) => ({
    messagesEl: state.getIn(['header', 'messagesEl']),
    notificationsEl: state.getIn(['header', 'notificationsEl']),
    tasksEl: state.getIn(['header', 'tasksEl']),
    appsEl: state.getIn(['header', 'appsEl']),
    moreEl: state.getIn(['header', 'moreEl'])
});

const mapDispatch = (dispatch) => ({
    handleShowMessageList(event) {
        dispatch(actions.getShowMessageAction(event));
    },
    handleCloseMessageList() {
        dispatch(actions.getCloseMessageAction());
    },
    handleShowNotificationsList(event) {
        dispatch(actions.getShowNotificationsAction(event));
    },
    handleCloseNotificationsList() {
        dispatch(actions.getCloseNotificationsAction());
    },
    handleShowTaskList(event) {
        dispatch(actions.getShowTasksAction(event));
    },
    handleCloseTaskList() {
        dispatch(actions.getCloseTasksAction());
    },
    handleShowAppBox(event) {
        dispatch(actions.getShowAppsAction(event));
    },
    handleCloseAppBox() {
        dispatch(actions.getCloseAppsAction());
    },
    handleShowMore(event) {
        dispatch(actions.getShowMoreAction(event));
    },
    handleCloseMore() {
        dispatch(actions.getCloseMoreAction());
    }
});
    
export default connect(mapState, mapDispatch)(withStyles(styles)(Header));