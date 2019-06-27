import axios from 'axios';

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

export { 
    getSearchFocusedAction, getSearchUnfocusAction, 
    getShowMessageAction, getCloseMessageAction, 
    getShowNotificationsAction, getCloseNotificationsAction,
    getShowTasksAction, getCloseTasksAction,
    getShowAppsAction, getCloseAppsAction,
    getShowMoreAction, getCloseMoreAction
};