import React from 'react'
import Nav from '../Nav/Nav'

import { HeaderSec, HeaderCon, HeaderInfo } from './Styled'

function Header() {
  return (
    <HeaderSec>
        <Nav />
        <HeaderCon>
          <HeaderInfo>
            <h1 style={{ fontSize: '3rem' }}>Unlimited movies, TV <br /> shows, and more.</h1>
            <h2 style={{ fontWeight: 'normal', marginTop: '1rem' }}>
              Watch anywhere. Cancel anytime.
              <br />
              <span style={{ fontSize: '1.2rem', display: 'inline-block', marginTop: '1.5rem' }}>Ready to watch? Enter your email to create or restart your membership.</span>
            </h2>
            <br />
            <input style={{ padding: '1rem', width: '400px', border: 'none' }} type="text" placeholder='Email Address' />
            <button style={{ padding: '1rem', width: '200px', backgroundColor: '#e50914', border: 'none', cursor: 'pointer', color: '#fff' }} type='submit'>Get Started</button>
          </HeaderInfo>
        </HeaderCon>
    </HeaderSec>
  )
}

export default Header