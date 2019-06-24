import React, {Component} from 'react';
import { connect } from 'react-redux';

import { HeaderWrapper, Logo, Search } from './style';
import * as actions from './actions';

class Header extends Component { 

    render() {
        const { focused, searchFocused, searchUnfocus } = this.props;
        return (
            <HeaderWrapper>
                <Logo>
                    <h1><a href="/">iColab Chaos 1.0</a></h1>
                </Logo>
                <Search onFocus={searchFocused} onBlur={searchUnfocus}>
                    <input type="text" placeholder="Search for people, files, documents..."/>
                    {
                        focused ? <i className='focused iconfont'>&#xe68b;</i> : <i className='unfocus iconfont'>&#xe617;</i>
                    }
                </Search>
            </HeaderWrapper>
        )
    }

}

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

export default connect(mapState, mapDispatch)(Header);