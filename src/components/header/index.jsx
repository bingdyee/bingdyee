import React, {Component} from 'react';
import { connect } from 'react-redux';

import { HeaderWrapper, Logo, Search } from './style';

class Header extends Component { 

    render() {
        return (
            <HeaderWrapper>
                <Logo>
                    <h1><a href="/">iColab Chaos 1.0</a></h1>
                </Logo>
                <Search>
                    <input type="text" placeholder="Search for people, files, documents..."/>
                    <i className='iconfont'>&#xe617;</i>
                </Search>
            </HeaderWrapper>
        )
    }

}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Header);