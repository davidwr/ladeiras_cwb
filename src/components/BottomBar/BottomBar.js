import React from 'react'

import './BottomBar.css'

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div style={{ marginRight: '10px' }}>
        <a href="/#/terms" rel="noopener noreferrer">
          Termos de uso
        </a>
      </div>
      <div>
        <a href="/#/privacy" rel="noopener noreferrer">
          Política de privacidade
        </a>
      </div>
      <div>
        <span style={{ marginRight: '2px' }}>Created by </span>
        <a
          href="https://github.com/davidwr"
          target="_blank"
          rel="noopener noreferrer"
        >
          David W. Rigamonte
        </a>
      </div>
    </div>
  )
}

export default BottomBar
