import React from 'react'

import './ShareButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const ShareButton = ({ title, text }) => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url: window.location.href
        })
      } else {
        console.log('Web Share API not supported.')
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  return (
    <button className="share-button" onClick={handleShare}>
      Compartilhar
      <FontAwesomeIcon className="icon" icon={faShare} />
    </button>
  )
}

export default ShareButton
