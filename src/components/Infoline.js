import React from 'react'
import CircularMenu from './CircularMenu'
import guitar from '../images/guitar1.png'
import keyboard from '../images/keyboard.png'
import flute from '../images/flute1.png'
import veena from '../images/veena1.png'
import violin from '../images/violin1.png'
import nadaswaram from '../images/nadaswaram.png'
import drum from '../images/drum1.png'

const Infoline = () => {
  return (
    <div className="Infoline" id="Infoline">
      Infoline
      <div className="page-container">
        <CircularMenu
          pages={[
            ['Keyboard', keyboard],
            ['https://guitargearfinder.com/', guitar],
            ['Veena', veena],
            ['Violin', violin],
            ['Drum', drum],
            ['Nadaswaram', nadaswaram],
            ['Flute', flute],
          ]}
        />
      </div>
    </div>
  )
}

export default Infoline
