import { useState, useEffect } from 'react'

function CircularMenuItem({
  page,
  image,
  rotation,
  menuIsOpen,
  transitionDelay,
}) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(menuIsOpen)
  }, [menuIsOpen])

  const animationName = isOpen ? 'rotate-in' : 'rotate-out'
  const animationDirection = isOpen ? 'normal' : 'reverse'

  return (
    <div
      className="menu-item"
      style={{
        transform: `rotate(${rotation}deg) ${
          isOpen ? 'translate(175%)' : 'translate(0)'
        }`,
        animation: `${animationName} 0.5s ${animationDirection} both ${transitionDelay}ms`,
        transition: 'transform 1s',
      }}
    >
      {isOpen && (
        <a href={page} style={{ display: 'block' }}>
          <img
            src={image}
            alt={page}
            style={{ transition: 'transform 0.2s' }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </a>
      )}
    </div>
  )
}

export default CircularMenuItem
