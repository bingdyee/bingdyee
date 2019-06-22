import styled from 'styled-components';


const HeaderWrapper = styled.div`
    height: 72px;
    color: #fff;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,.3);
    transition: background-color 1s,box-shadow 1s;
    
`;

const Logo = styled.div`
    padding-left: 2.2rem;
    height: 72px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    @media (min-width: 1200px) {
        min-width: 250px;
    }
    @media (max-width: 500px) {
        display:none!important;
    }
    h1{
        line-height:100%;
        font-size:1.3rem;
        font-weight:400;
        margin:0;
    }
    a {
        color: #fff;
        background-color: transparent;
        text-decoration: none;
    }
`;


const Search = styled.div`
    box-sizing: border-box;
    flex:1;
    display: flex;
    margin-right:2.5rem;
    box-sizing: border-box;
    position:relative;
    align-items: center;
    width:100%;
    @media (min-width:1199px) {
        min-width:600px;
    }
    input {
        color: #fff;
        background-color: rgba(255,255,255,.08);
        color: rgba(255,255,255,.85);
        border: 0;
        border-radius: 2px;
        height: 2.1rem;
        padding-left: 3rem;
        width: 100%;
    }
    .iconfont {
        left: 0;
        position: absolute;
        width:3rem;
        text-align:center;
        cursor:pointer;
    }
`;

export { HeaderWrapper, Logo, Search };