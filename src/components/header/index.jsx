import React, {Component} from 'react';
import { connect } from 'react-redux';

import { HeaderWrapper } from './style';

class Header extends Component { 

    render() {
        return (
            <HeaderWrapper>
                Header
            </HeaderWrapper>
        )
    }

}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Header);