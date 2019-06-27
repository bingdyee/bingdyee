import styled, { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background: url('assets/1.jpg');
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    @font-face {font-family: "iconfont";
        src: url('assets/iconfont/iconfont.eot?t=1561208789510'); /* IE9 */
        src: url('assets/iconfont/iconfont.eot?t=1561208789510#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
        url('assets/iconfont/iconfont.woff?t=1561208789510') format('woff'),
        url('assets/iconfont/iconfont.ttf?t=1561208789510') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('assets/iconfont/iconfont.svg?t=1561208789510#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
