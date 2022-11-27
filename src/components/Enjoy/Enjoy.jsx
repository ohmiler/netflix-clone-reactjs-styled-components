import React from 'react'

import { EnjoyCon } from './Styled'

import TV from '../../assets/tv.png'
// import video_tv from '../../assets/video-tv.m4v'

function Enjoy() {
  return (
    <EnjoyCon>
        <div>
            <h3 style={{ fontSize: '3.5rem', fontWeight: 'normal' }}>Enjoy on your TV.</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'normal', marginTop: '1rem' }}>
                Watch on Smart TVs, Playstation, Xbox, <br />
                Chromecast, Apple TV, Blu-ray players, and <br />
                more.
            </p>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img style={{ zIndex: '2', position: 'relative'}} width="100%" src={TV} alt="" />
            <div >
                <video  style={{ zIndex: '1', position: 'absolute', top: '-10px', left: '84px', width: '74%', height: '100%' }} width="100%" autoPlay playsInline muted loop><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" /></video>
            </div>
        </div>
    </EnjoyCon>
  )
}

export default Enjoy