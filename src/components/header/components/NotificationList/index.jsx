import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import {
  ArrowForwardIos as ArrowForwardIosIcon,
  Payment as PaymentIcon,
  PeopleOutlined as PeopleIcon,
  Code as CodeIcon,
  Store as StoreIcon
} from '@material-ui/icons';
import styles from './styles';

const icons = {
  order: {
    icon: <PaymentIcon />,
    color: 'blue'
  },
  user: {
    icon: <PeopleIcon />,
    color: 'red'
  },
  product: {
    icon: <StoreIcon />,
    color: 'green'
  },
  feature: {
    icon: <CodeIcon />,
    color: 'purple'
  }
};

class NotificationList extends Component {


  render() {
    const { className, classes, notifications, onSelect } = this.props;

    const rootClassName = '';

    return (
      <div className={rootClassName}>
          <Fragment>
            <div className={classes.header}>
              <Typography variant="h6">User Notifications</Typography>
              <Typography
                className={classes.subtitle}
                variant="body2"
              >
                4 new notifications
              </Typography>
            </div>
            <div className={classes.content}>
              <List component="div">
                  <Link
                    key='id'
                    to="#"
                  >
                    <ListItem
                      className={classes.listItem}
                      component="div"
                    >
                      <ListItemIcon
                        className={classes.listItemIcon}
                        style={{ color: icons['order'].color }}
                      >
                        {icons['order'].icon}
                      </ListItemIcon>
                      <ListItemText
                        classes={{ secondary: classes.listItemTextSecondary }}
                        primary='Noa Swartz'
                        secondary='{notification.when}'
                      />
                      <ArrowForwardIosIcon className={classes.arrowForward} />
                    </ListItem>
                    <Divider />
                  </Link>
              </List>
              <div className={classes.footer}>
                <Button
                  color="primary"
                  component={Link}
                  size="small"
                  to="#"
                  variant="contained"
                >
                  See all
                </Button>
              </div>
            </div>
          </Fragment>
      </div>
    );
  }
}


export default withStyles(styles)(NotificationList);
