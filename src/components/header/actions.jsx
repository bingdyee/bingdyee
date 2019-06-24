import axios from 'axios';

import * as constants from './constants';

const getSearchFocusedAction = () => ({
    type: constants.SEARCH_FOCUSED
});

const getSearchUnfocusAction = () => ({
    type: constants.SEARCH_UNFOCUS
});

export { getSearchFocusedAction, getSearchUnfocusAction };