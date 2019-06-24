import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import { fade } from '@material-ui/core/styles';
import { AppBar,Toolbar, Typography, InputBase, Icon, IconButton, withStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as actions from './actions';


class Header extends Component { 

    render() {
        const { focused, searchFocused, searchUnfocus, classes } = this.props;
        return (
            <div className={classes.grow}>
            <AppBar position="static" className={classes.header}>
                <Toolbar className={classes.toolBar}>
                    <Typography variant='h1' color='inherit' className={classes.logo}>
                        <Link to='/' className={classes.logoA}>IColab Chaos 1.0</Link>
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
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
                    <div className={classes.menu}>
                        <IconButton aria-label="Show 4" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="Show 4" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <Icon>notifications</Icon>
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Icon>check_circle</Icon>
                        </IconButton>
                        <IconButton color="inherit">
                            <Icon>apps</Icon>
                        </IconButton>
                        <IconButton color="inherit">
                            <Icon>more_vert</Icon>
                        </IconButton>
                        <IconButton color="inherit">
                            <Icon>settings_input_svideo</Icon>
                        </IconButton>
                        
                    </div>
                    <Typography variant='h4' className={classes.time}>12:12:18</Typography>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            </div>
        )
    }

}

const styles = theme => ({

    header: {
        color: '#fff',
        display: 'flex',
        // alignItems: 'center',
        height: 72,
        backgroundColor: 'rgba(0,0,0,.3)'
    },
    logo: {
        fontSize: '1.3rem',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    logoA: {
        color: '#fff',
        backgroundColor: 'transparent',
        textDecoration: 'none',
    },
    toolBar: {
        height: 72
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.black, 0.1),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 770,
        },
      },
      menu: {
        marginLeft: 20,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
      },
      time: {
        backgroundColor: fade(theme.palette.common.white, 0.15),
        padding: '3px 5px 3px 5px',
        borderRadius: 3,
        marginLeft: 20,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
      },
      menuButton: {
        display: 'flex',
        marginLeft: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
      }
});

const mapState = (state) => ({
    focused: state.getIn(['header', 'focused'])
});

const mapDispatch = (dispatch) => ({
    searchFocused() {
        dispatch(actions.getSearchFocusedAction());
    },
    searchUnfocus() {
        dispatch(actions.getSearchUnfocusAction());
    }
});

export default connect(mapState, mapDispatch)(withStyles(styles)(Header));