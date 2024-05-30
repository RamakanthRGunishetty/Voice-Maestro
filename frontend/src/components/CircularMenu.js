import React, { useState } from 'react'
import CircularMenuIcon from './CircularMenuIcon'
import CircularMenuItem from './CircularMenuItem'
import CloseCircularMenu from './CloseCircularMenu'

function CircularMenu({ pages }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSetIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const menuItems = isOpen
    ? pages.map(([page, image], index) => (
        <CircularMenuItem
          key={page} // Ensure each item has a unique key
          page={page}
          image={image}
          rotation={(360 / pages.length) * index}
          menuIsOpen={isOpen}
          transitionDelay={index * 75}
        />
      ))
    : []

  return (
    <div className="circular-menu">
      <div className="menu-button" onClick={handleSetIsOpen}>
        {isOpen ? <CloseCircularMenu /> : <CircularMenuIcon />}
      </div>
      {menuItems}
    </div>
  )
}

export default CircularMenu
