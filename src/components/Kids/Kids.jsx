import React from 'react'
import styled from 'styled-components'


import kidsImg from '../../assets/kids.png'

import { KidsCon } from './Styled'

function Kids() {
  return (
    <KidsCon>
        <div style={{ width: '100%' }}>
            <img width="100%" src={kidsImg} alt="" />
        </div>
        <div  style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <div>
                <h3 style={{ fontSize: '3rem' }}>Create profiles for kids.</h3>
                <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
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