import './Slider.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-regular-svg-icons'

const Tolerance = () => {
  const [slider, setSlider] = useState(true)

  function handleSwitch() {
    setSlider(!slider)
    console.log(slider)
  }

  return ( 
    <div className="tolerance-window">
        Tolerance Window:
      <div>
        <label className="switch">
          <input type='checkbox' defaultChecked onClick={handleSwitch}/>
          <span className="slider"></span>
        </label>
        <div className='toggle-text'>
          Toggle {slider ? 'ON' : 'OFF'}
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} />
          Select Tolerance Level
        </div>
      </div>
    </div>
   );
}
 
export default Tolerance;