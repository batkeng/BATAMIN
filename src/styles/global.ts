import { createGlobalStyle } from 'styled-components';
import 'index.css';
import 'reset-css';

export default createGlobalStyle`
body{
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    background-color: white;
    letter-spacing: -0.5px;
    touch-action: pan-y;
    -webkit-font-smoothing: antialiased;
}
h1{
    font-weight: 700;
    font-size: 48px;
    line-height: 65px;
}
h2{
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -0.01em;
}
h3{
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.01em;
}
h4{
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.01em;
}
h5{
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.01em;
}
p{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
}
span{
    display:inline-block;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
}
.b{
    font-weight: bold
}
`;
