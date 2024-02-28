import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center py-4 bg-gray-800 text-white">
      © {new Date().getFullYear()} amarr info. All rights reserved.
    </footer>
  )
}

export default Footer