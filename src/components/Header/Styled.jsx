import styled from 'styled-components'

import HeaderBG from '../../assets/header-bg.jpeg'

export const HeaderCon = styled.section`
    height: 720px;
    background: url(${HeaderBG});
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
    border-bottom: 8px solid #222;
    background-position: center;
    background-size: cover;
`

export const NavCon = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem;

    svg {
        width: 150px;
        fill: red;
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;

    li {
        margin: 0rem 2rem;

        a {
            color: #fff;
            text-decoration: none;
        }
    }
`