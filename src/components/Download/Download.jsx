import React from 'react'

import mobileImg from '../../assets/mobile.jpeg'
import strangerImg from '../../assets/boxshot.png'
import downloadIcon from '../../assets/download-icon.gif'

import { DownloadCon } from './Styled'

function Download() {
  return (
    <DownloadCon>
        <div style={{ position: 'relative' }}>
            <img style={{ zIndex: '1', width: '100%' }} src={mobileImg} alt="" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: '2', width: '330px', height: '90px', border: '2px solid #333', borderRadius: '10px', padding: "0rem .5rem", backgroundColor: "#000", top: '-120px', left: '50%', transform: 'translate(-50%, 0)' }}>
                <img width="50px" src={strangerImg} alt="" />
                <div style={{ marginLeft: '-50px' }}>
                    <p style={{ fontWeight: 'bold' }}>Stranger Things</p>
                    <p style={{ color: '#0071eb', fontSize: '.75em' }}>Downloading...</p>
                </div>
                <img width="50px" height="50px" src={downloadIcon} alt="" />
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
                <h3 style={{ fontSize: '3rem' }}>
                    Download your shows <br />
                    to watch offline.
                </h3>
                <p style={{ fontSize: '1.8rem', marginTop: '1rem'}}>
                    Save your favorites easily and always have <br />
                    something to watch.
                </p>
            </div>
        </div>
    </DownloadCon>
  )
}

export default Download