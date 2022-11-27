import styled from 'styled-components'

export const FooterCon = styled.footer`
    padding: 3rem 25rem;
    background: #000;
    color: #727373;

    a {
        color: #727373;
    }
`

export const FooterList = styled.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    ul  {
        list-style: none;
        font-size: .8rem;

        li {
            margin-top: 1rem;
    
            a {
                text-decoration: none;
    
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`