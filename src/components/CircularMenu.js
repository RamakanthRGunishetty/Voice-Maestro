import { useState } from 'react'
import CircularMenuIcon from './CircularMenuIcon'
import CircularMenuItem from './CircularMenuItem'
import CloseCircularMenu from './CloseCircularMenu'

function CircularMenu({ pages }) {
  // state variables
  const [isOpen, setIsOpen] = useState(false)

  // handle set isOpen
  const handleSetIsOpen = () => {
    setIsOpen((prevBool) => !prevBool)
  }

  // render images only when menu is open
  const images = isOpen
    ? pages.map(([page, image], index) => (
        <CircularMenuItem
          key={page}
          page={page}
          image={image}
          rotation={(360 / pages.length) * index}
          menuIsOpen={isOpen}
          transitionDelay={index * 75}
        />
      ))
    : null

  return (
    <div className="circular-menu">
      <div className="menu-button" onClick={handleSetIsOpen}>
        {isOpen ? <CloseCircularMenu /> : <CircularMenuIcon />}
      </div>
      {images}
    </div>
  )
}
export default CircularMenu
