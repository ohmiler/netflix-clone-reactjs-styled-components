import styled from 'styled-components'

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 0 3rem;
    // border: 1px solid red;
    align-items: center;
`

export const Netflix = styled.svg`
    width: 150px;
    fill: red;
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;

    li {
        margin: 0 1rem;

        a {
            text-decoration: none;
        }
    }
`

export const LangBtn = styled.a`
    background: transparent;
    border: 1px solid #fff;
    border-radius: 3px;
    color: #fff;
    padding: .5rem 1rem;
`

export const SignInBtn = styled.a`
    background: #e50914;
    padding: .5rem 1rem;
    border-radius: 3px;
    color: #fff;
`
