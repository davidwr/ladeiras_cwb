import React from 'react'

import './ShareButton.css'

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
      <span className="icon fa fa-share"></span>
    </button>
  )
}

export default ShareButton
