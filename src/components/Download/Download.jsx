import React from 'react'

import mobileImg from '../../assets/mobile.jpeg'
import boxshot from '../../assets/boxshot.png'
import downloadIcon from '../../assets/download-icon.gif'

import { DownloadCon } from './Styled'

function Download() {
  return (
    <DownloadCon>
        <div style={{ width: "100%", position: 'relative', }}>
            <img width="100%" src={mobileImg} alt="" />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, 100%)', border: '2px solid hsla(0,0%,100%,.25)', borderRadius: '10px', background: '#000', display: 'flex', padding: '0.5rem', width: '60%', height: '100px', justifyContent: 'space-between' }}>
                <img src={boxshot} alt="" />
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-60px' }}>
                    <p>
                        Stranger Things <br />
                        <span style={{ color: '#0071eb', fontSize: '0.9rem', }}>Downloading...</span>
                    </p>
                </div>
                <img src={downloadIcon} alt="" />
            </div>
        </div>
        <div style={{ width: "100%", display: 'flex', alignItems: 'center' }}>
            <div>
                <h3 style={{ fontSize: '3rem' }}>Download your shows to watch offline.</h3>
                <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
                    Save your favorites easily and always have <br />
                    something to watch.
                </p>
            </div>
        </div>
    </DownloadCon>
  )
}

export default Download