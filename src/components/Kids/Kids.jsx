import React from 'react'

import KidsImg from '../../assets/kids.png'

import { KidsCon } from './Styled'

function Kids() {
  return (
    <KidsCon>
        <div>
            <img width="100%" src={KidsImg} alt="" />
        </div>
        <div style={{ width: '70%', display: 'flex', alignItems: 'center', marginLeft: '4rem' }}>
            <div>
                <h3 style={{ fontSize: '3rem' }}>Create profiles for kids.</h3>
                <p style={{ fontSize: '1.8rem', marginTop: '1rem' }}>
                    Send kids on adventures with their favorite <br />
                    characters in a space made just for them— <br />
                    free with your membership.
                </p>
            </div>
        </div>
    </KidsCon>
  )
}

export default Kids