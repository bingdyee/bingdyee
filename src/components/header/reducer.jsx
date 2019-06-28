import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    focused: false,
    messagesEl: null,
    notificationsEl: null,
    tasksEl: null,
    appsEl: null,
    moreEl: null,
    notifications: [],
    messages: [],
    tasks: []
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUSED:
            return state.set('focused', true);
        case constants.SEARCH_UNFOCUS:
            return state.set('focused', false);
        case constants.SHOW_MESSAGE:
            return state.set('messagesEl', action.el);
        case constants.CLOSE_MESSAGE:
            return state.set('messagesEl', null);
        case constants.SHOW_NOTIFICATIONS:
            return state.set('notificationsEl', action.el);
        case constants.CLOSE_NOTIFICATIONS:
            return state.set('notificationsEl', null);
        case constants.SHOW_TASKS:
            return state.set('tasksEl', action.el);
        case constants.CLOSE_TASKS:
            return state.set('tasksEl', null);
        case constants.SHOW_APPS:
            return state.set('appsEl', action.el);
        case constants.CLOSE_APPS:
            return state.set('appsEl', null);
        case constants.SHOW_MORE:
            return state.set('moreEl', action.el);
        case constants.CLOSE_MORE:
            return state.set('moreEl', null);
        case constants.FETCH_NOTIFICATION:
            return state.set('notifications', action.data);
        case constants.FETCH_MESSAGE:
            return state.set('messages', action.data);
        case constants.FETCH_TASK:
            return state.set('tasks', action.data);
        default:
            return state;
    }
}