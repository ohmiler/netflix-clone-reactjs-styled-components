import React, { useState } from 'react'

import { QuestionCon, QuestionHeader, QuestionInfo } from './Styled'

function Questions({ title, info }) {

    const [showInfo, setShowInfo] = useState(false)

  return (
    <QuestionCon>
        <div>
            <QuestionHeader>
                <h3>{title}</h3>
                <button style={{ border: 'none', outline: 'none', padding: '1rem', background: 'transparent', fontSize: '3rem', color: '#fff' }} onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? '-' : '+'}
                </button>
            </QuestionHeader>
            {showInfo && <QuestionInfo>{info}</QuestionInfo>}
        </div>
    </QuestionCon>
  )
}

export default Questions