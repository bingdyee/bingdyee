import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    focused: false
})

export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUSED:
            return state.set('focused', true);
        case constants.SEARCH_UNFOCUS:
            return state.set('focused', false);
        default:
            return state;
    }
}