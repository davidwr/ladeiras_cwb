import React, { useState, useLayoutEffect } from 'react'
import './CookieConsent.css'

const CookieConsent = () => {
  const [showModal, setShowModal] = useState(true)

  useLayoutEffect(() => {
    const cookieConsentAccepted = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookieConsentAccepted='))

    setShowModal(!cookieConsentAccepted)
  }, [])

  const createCookieConsent = isAccepted => {
    const CookieDate = new Date()
    CookieDate.setFullYear(CookieDate.getFullYear() + 1)
    document.cookie = `cookieConsentAccepted=${isAccepted}; expires=${CookieDate.toUTCString()}; path=/`
  }

  const handleAccept = () => {
    setShowModal(false)
    createCookieConsent(true)
  }

  const handleClose = () => {
    setShowModal(false)
    createCookieConsent(false)
  }

  if (!showModal) {
    return null
  }

  return (
    <div className="cookie-consent-modal">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <p>
          Este site utiliza cookies para proporcionar uma melhor experiência ao
          navegar.
        </p>
        <p>
          Ao clicar em 'Aceitar', você concorda com os{' '}
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Termos de Uso
          </a>{' '}
          e a{' '}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Política de Privacidade
          </a>
          .
        </p>
        <button className="accept-button" onClick={handleClose}>
          Rejeitar
        </button>
        <button className="accept-button" onClick={handleAccept}>
          Eu aceito o uso de Cookies
        </button>
      </div>
    </div>
  )
}

export default CookieConsent
