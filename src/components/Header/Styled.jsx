import styled from 'styled-components'

import HeaderBG from '../../assets/header-bg.jpeg'

export const HeaderSec = styled.header`
    height: 720px;
    background: url(${HeaderBG});
    background-size: cover;
    background-position: center;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
    padding: 1rem 0;
    border-bottom: 8px solid #222;
`
export const HeaderCon = styled.div`
    margin-top: 3rem;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;
    color: #fff;

`
export const HeaderInfo = styled.div`
    text-align: center;
`