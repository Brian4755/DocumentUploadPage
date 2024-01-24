import './Slider.css'
import { useState } from 'react';

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
      </div>
    </div>
   );
}
 
export default Tolerance;