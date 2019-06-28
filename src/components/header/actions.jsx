import axios from 'axios';
import {fromJS} from 'immutable';

import * as constants from './constants';

const getSearchFocusedAction = () => ({
    type: constants.SEARCH_FOCUSED
});

const getSearchUnfocusAction = () => ({
    type: constants.SEARCH_UNFOCUS
});

const getShowMessageAction = (event) => ({
    type: constants.SHOW_MESSAGE,
    el: event.currentTarget
});

const getCloseMessageAction = () => ({
    type: constants.CLOSE_MESSAGE
});

const getShowNotificationsAction = (event) => ({
    type: constants.SHOW_NOTIFICATIONS,
    el: event.currentTarget
});

const getCloseNotificationsAction = () => ({
    type: constants.CLOSE_NOTIFICATIONS
});

const getShowTasksAction = (event) => ({
    type: constants.SHOW_TASKS,
    el: event.currentTarget
});

const getCloseTasksAction = () => ({
    type: constants.CLOSE_TASKS
});

const getShowAppsAction = (event) => ({
    type: constants.SHOW_APPS,
    el: event.currentTarget
});

const getCloseAppsAction = () => ({
    type: constants.CLOSE_APPS
});

const getShowMoreAction = (event) => ({
    type: constants.SHOW_MORE,
    el: event.currentTarget
});

const getCloseMoreAction = () => ({
    type: constants.CLOSE_MORE
});


const fetchNotificationAction = (data) => ({
    type: constants.FETCH_NOTIFICATION,
    data: fromJS(data)
});

const fetchMessageAction = (data) => ({
    type: constants.FETCH_MESSAGE,
    data: fromJS(data)
});

const fetchTaskAction = (data) => ({
    type: constants.FETCH_TASK,
    data: fromJS(data)
});

const fetchNotification = () => {
    return (dispatch) => {
        axios.get('/api/notifications.json').then((res) => {
            const data = res.data;
            dispatch(fetchNotificationAction(data.data));
        }).catch(() => {
            console.log('fetch failed');
        });
    }
};

const fetchMessage = () => {
    return (dispatch) => {
        axios.get('/api/messages.json').then((res) => {
            const data = res.data;
            dispatch(fetchMessageAction(data.data));
        }).catch(() => {
            console.log('fetch failed');
        });
    }
};

const fetchTask = () => {
    return (dispatch) => {
        axios.get('/api/tasks.json').then((res) => {
            const data = res.data;
            dispatch(fetchTaskAction(data.data));
        }).catch(() => {
            console.log('fetch failed');
        });
    }
};


export { 
    getSearchFocusedAction, getSearchUnfocusAction, 
    getShowMessageAction, getCloseMessageAction, 
    getShowNotificationsAction, getCloseNotificationsAction,
    getShowTasksAction, getCloseTasksAction,
    getShowAppsAction, getCloseAppsAction,
    getShowMoreAction, getCloseMoreAction,
    fetchNotification, fetchMessage, fetchTask
};